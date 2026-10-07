/* Hermes Mission Control runtime adapter.
 * Uses Hermes' native dashboard/API surfaces. No agent runtime is reimplemented here.
 */
const Runtime = (() => {
  const key = "hermes-mission-control.connection";
  const defaults = { baseUrl: "http://127.0.0.1:8642", apiKey: "" };

  function load() {
    try { return { ...defaults, ...JSON.parse(localStorage.getItem(key) || "{}") }; }
    catch { return { ...defaults }; }
  }

  async function request(path, options = {}) {
    const cfg = load();
    const headers = { Accept: "application/json", ...(options.headers || {}) };
    if (cfg.apiKey) headers.Authorization = "Bearer " + cfg.apiKey;
    const res = await fetch(cfg.baseUrl.replace(/\/$/, "") + path, { ...options, headers });
    if (!res.ok) throw new Error("Hermes API " + res.status + " at " + path);
    return res.json();
  }

  async function status() {
    return request("/v1/capabilities");
  }

  async function sessions(limit = 20) {
    return request("/api/sessions?limit=" + encodeURIComponent(limit));
  }

  async function session(id) {
    return request("/api/sessions/" + encodeURIComponent(id));
  }

  async function messages(id) {
    return request("/api/sessions/" + encodeURIComponent(id) + "/messages");
  }

  async function chat(id, input) {
    return request("/api/sessions/" + encodeURIComponent(id) + "/chat/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input })
    });
  }

  async function cron() {
    return request("/api/cron/jobs");
  }

  async function analytics(days = 7) {
    return request("/api/analytics/usage?days=" + days);
  }

  async function logs(lines = 100) {
    return request("/api/logs?lines=" + lines);
  }

  return { load, save(cfg) { localStorage.setItem(key, JSON.stringify({ ...defaults, ...cfg })); },
    status, sessions, session, messages, chat, cron, analytics, logs };
})();
