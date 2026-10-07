/* Hermes Mission Control runtime adapter.
 * Uses Hermes' native API-server surface. No agent runtime is reimplemented here.
 */
const Runtime = (() => {
  const key = "hermes-mission-control.connection";
  const defaults = { baseUrl: "http://127.0.0.1:8642", apiKey: "" };

  function load() {
    try { return { ...defaults, ...JSON.parse(localStorage.getItem(key) || "{}") }; }
    catch { return { ...defaults }; }
  }

  function save(cfg) {
    localStorage.setItem(key, JSON.stringify({ ...defaults, ...cfg }));
  }

  function url(path) {
    return load().baseUrl.replace(/\/$/, "") + path;
  }

  function headers(extra = {}) {
    const cfg = load();
    return {
      Accept: "application/json",
      ...(cfg.apiKey ? { Authorization: "Bearer " + cfg.apiKey } : {}),
      ...extra
    };
  }

  async function request(path, options = {}) {
    const res = await fetch(url(path), { ...options, headers: headers(options.headers || {}) });
    if (!res.ok) {
      let detail = "";
      try { detail = (await res.json()).detail || ""; } catch {}
      throw new Error("Hermes API " + res.status + " at " + path + (detail ? ": " + detail : ""));
    }
    return res.json();
  }

  async function stream(path, body, onEvent) {
    const res = await fetch(url(path), {
      method: "POST",
      headers: headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      let detail = "";
      try { detail = (await res.json()).detail || ""; } catch {}
      throw new Error("Hermes API " + res.status + " at " + path + (detail ? ": " + detail : ""));
    }
    if (!res.body) throw new Error("Hermes returned no streaming body");

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    const consume = text => {
      buffer += text;
      const frames = buffer.split(/\r?\n\r?\n/);
      buffer = frames.pop() || "";
      for (const frame of frames) {
        if (!frame || frame.trimStart().startsWith(":")) continue;
        let eventName = "";
        const data = [];
        for (const line of frame.split(/\r?\n/)) {
          if (line.startsWith("event:")) eventName = line.slice(6).trim();
          else if (line.startsWith("data:")) data.push(line.slice(5).trimStart());
        }
        if (!data.length) continue;
        const raw = data.join("\n");
        if (raw === "[DONE]") continue;
        try { onEvent(JSON.parse(raw), eventName); } catch {}
      }
    };

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      consume(decoder.decode(value, { stream: true }));
    }
    consume(decoder.decode());
  }

  const status = () => request("/v1/capabilities");
  const sessions = (limit = 20) => request("/api/sessions?limit=" + encodeURIComponent(limit));
  const session = async id => { const r = await request("/api/sessions/" + encodeURIComponent(id)); return r.session || r; };
  const messages = id => request("/api/sessions/" + encodeURIComponent(id) + "/messages");
  const createSession = async title => { const r = await request("/api/sessions", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  }); return r.session || r; };
  const chatStream = (id, input, onEvent) =>
    stream("/api/sessions/" + encodeURIComponent(id) + "/chat/stream", { input }, onEvent);
  const cron = () => request("/api/cron/jobs?profile=all");
  const analytics = (days = 7) => request("/api/analytics/usage?days=" + encodeURIComponent(days));
  const logs = (lines = 100) => request("/api/logs?lines=" + encodeURIComponent(lines));

  return { load, save, request, stream, status, sessions, session, messages, createSession, chatStream, cron, analytics, logs };
})();
