const state={view:"overview",connected:false,capabilities:null,sessions:[],cron:[],currentSession:null,messages:[],running:false,sources:[{type:"OFFICIAL",title:"Hermes API server",path:"https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server",status:"verified"},{type:"CREATOR",title:"Komputer Mechanic Mission Control 3.0",path:"../SOURCES/web/komputer-mechanic/hermes-agent-corpus/source.md",status:"reference"}]};
const app=document.querySelector("#app"),title=document.querySelector("#view-title");
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cfg=()=>Runtime.load();
const api=(path,options={})=>Runtime.request(path,options);
function card(h,c="card"){return '<div class="'+c+'">'+h+"</div>"}
function connectCard(){const c=cfg();return '<div class="card"><div class="card-head"><h2>Hermes connection</h2><span class="pill">'+(state.connected?"CONNECTED":"OFFLINE")+'</span></div><div class="command"><input id="base-url" value="'+esc(c.baseUrl)+'" placeholder="http://127.0.0.1:8642"><input id="api-key" type="password" value="'+esc(c.apiKey)+'" placeholder="API key"><button onclick="connectRuntime()">Connect</button></div><div class="notice">Mission Control talks to the Hermes API server. Hermes remains the execution authority.</div></div>'}
function overview(){return '<div class="grid stats">'+card('<div class="stat-label">SESSIONS</div><div class="stat-value">'+state.sessions.length+'</div><div class="muted">Hermes native</div>')+card('<div class="stat-label">CRON</div><div class="stat-value">'+state.cron.length+'</div><div class="muted">Hermes jobs</div>')+card('<div class="stat-label">CHAT</div><div class="stat-value">'+(state.currentSession?"LIVE":"READY")+'</div><div class="muted">native session</div>')+card('<div class="stat-label">API</div><div class="stat-value">'+(state.connected?"LIVE":"OFFLINE")+'</div><div class="muted">capabilities detected</div>')+'</div><div style="margin-top:14px">'+connectCard()+"</div>"+(state.connected?chatView():"")}
function chatView(){const rows=state.messages.map(m=>'<div class="source-row"><div class="source-type">'+esc(m.role||"message").toUpperCase()+'</div><div class="source-title" style="white-space:pre-wrap">'+esc(m.content||m.text||"")+'</div></div>').join("");return '<div class="card" style="margin-top:14px"><div class="card-head"><h2>Hermes conversation</h2><span class="pill">'+(state.currentSession?esc(state.currentSession.id):"NEW")+'</span></div><div class="command"><button onclick="newSession()">New chat</button></div><div style="max-height:420px;overflow:auto">'+(rows||'<div class="notice">Start a conversation. The session and messages are persisted by Hermes.</div>')+'</div><div class="command"><input id="chat-input" placeholder="Message Hermes…" onkeydown="if(event.key===\'Enter\'&&!event.shiftKey){event.preventDefault();sendChat()}"><button id="send-chat" onclick="sendChat()">Send</button></div><div id="chat-status" class="notice">'+(state.running?"Hermes is working…":"")+'</div></div>'}
async function loadSession(id){state.currentSession=await Runtime.session(id);const data=await Runtime.messages(id);state.messages=data.messages||data||[]}
async function newSession(){state.currentSession=await Runtime.createSession("Mission Control Chat");state.messages=[];await render();return state.currentSession}
async function sendChat(){const el=document.querySelector("#chat-input"),input=el?.value.trim();if(!input||state.running)return;el.value="";if(!state.currentSession)await newSession();state.messages.push({role:"user",content:input});state.running=true;await render();try{let assistant="";await Runtime.chatStream(state.currentSession.id,input,(ev,name)=>{const type=ev.type||name;if(type==="assistant.delta")assistant+=ev.text||ev.delta||"";else if(type==="assistant.completed")assistant=ev.text||ev.content||assistant;else if(type==="tool.started"){const s=document.querySelector("#chat-status");if(s)s.textContent="Tool: "+(ev.name||ev.tool||"running")}});await loadSession(state.currentSession.id)}catch(e){state.messages.push({role:"error",content:e.message})}finally{state.running=false;await render()}}
async function refreshRuntime(){const failures=[];try{state.capabilities=await Runtime.status()}catch(e){failures.push('capabilities: '+e.message)}try{const s=await Runtime.sessions(50);state.sessions=s.sessions||s||[]}catch(e){failures.push('sessions: '+e.message)}try{const c=await Runtime.cron();state.cron=c.jobs||c||[]}catch(e){failures.push('cron: '+e.message)}state.connected=failures.length===0;state.runtimeError=failures.join(' | ')}
window.connectRuntime=async()=>{Runtime.save({baseUrl:document.querySelector("#base-url")?.value.trim(),apiKey:document.querySelector("#api-key")?.value.trim()});await render()};
window.newSession=newSession;window.sendChat=sendChat;
function agents(){return card('<div class="card-head"><h2>Fleet control</h2><span class="pill">HERMES NATIVE</span></div><div class="notice">Sessions are read directly from Hermes. Profile/fleet views must use Hermes capabilities rather than demo agent records.</div>')}
async function communications(){
  let board;
  try {
    board=await api("/api/plugins/kanban/board?include_archived=false");
  } catch(e) {
    return card("<div class=\"card-head\"><h2>Agent Communications</h2><span class=\"pill\">UNAVAILABLE</span></div><div class=\"notice\">Native Kanban unavailable: "+esc(e.message)+"</div>");
  }
  const tasks=(board.columns||[]).flatMap(c=>c.tasks||[]);
  const active=tasks.filter(t=>["ready","running","blocked","review","done"].includes(t.status)).slice(0,30);
  const rows=active.map(t=>"<div class=\"source-row\"><div><div class=\"source-type\">"+esc(t.assignee||"UNASSIGNED")+"</div><div class=\"source-title\">"+esc(t.title||t.id)+"</div><div class=\"muted\">"+esc(t.status||"")+" · "+esc(t.id||"")+"</div></div><button onclick=\"openThread('"+esc(t.id||"")+"')\">Open thread</button></div>").join("");
  return "<div class=\"card\"><div class=\"card-head\"><h2>Agent Communications</h2><span class=\"pill\">NATIVE KANBAN</span></div><div class=\"notice\">Durable Hermes task comments are the communication thread. No fake messages are generated.</div>"+rows+(active.length?"":"<div class=\"notice\">No collaborative tasks yet.</div>")+"</div><div id=\"thread\"></div>";
}
window.openThread=async(id)=>{
  const box=document.querySelector("#thread");
  if(!box)return;
  try{
    const t=await api("/api/plugins/kanban/tasks/"+encodeURIComponent(id));
    const task=t.task||t;
    const comments=t.comments||[];
    const rows=comments.map(x=>"<div class=\"source-row\"><div class=\"source-type\">"+esc(x.author||"AGENT")+"</div><div class=\"source-title\" style=\"white-space:pre-wrap\">"+esc(x.body||"")+"</div></div>").join("");
    box.innerHTML="<div class=\"card\" style=\"margin-top:14px\"><div class=\"card-head\"><h2>"+esc(task.title||id)+"</h2><span class=\"pill\">"+esc(task.assignee||"UNASSIGNED")+"</span></div><div style=\"max-height:360px;overflow:auto\">"+rows+(comments.length?"":"<div class=\"notice\">No messages yet.</div>")+"</div><div class=\"command\"><input id=\"thread-msg\" placeholder=\"Send message to this task thread…\" onkeydown=\"if(event.key==='Enter')sendThread('"+esc(id)+"')\"><button onclick=\"sendThread('"+esc(id)+"')\">Send</button></div></div>";
  }catch(e){
    box.innerHTML=card("<div class=\"notice\">"+esc(e.message)+"</div>");
  }
};
window.sendThread=async(id)=>{const el=document.querySelector("#thread-msg"),body=el?.value.trim();if(!body)return;await api("/api/plugins/kanban/tasks/"+encodeURIComponent(id)+"/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({body,author:"mission-control"})});await openThread(id)}
async function missions(){
  let data;
  try{data=await api("/api/plugins/mission-control/missions")}
  catch(e){return card('<div class="card-head"><h2>Missions</h2><span class="pill">UNAVAILABLE</span></div><div class="notice">'+esc(e.message)+'</div>')}
  const ms=data.missions||[];
  const rows=ms.map(m=>'<div class="source-row"><div><div class="source-title">'+esc(m.title)+'</div><div class="muted">'+esc(m.goal)+'</div></div><span class="pill">'+esc(m.status)+'</span></div>').join("");
  return card('<div class="card-head"><h2>Missions</h2><span class="pill">APPROVAL GATE</span></div><div class="notice">Mission state is persistent. A draft cannot execute until explicitly approved.</div>'+rows+(ms.length?'':'<div class="notice">No missions yet.</div>'));
}
function sources(){return card('<div class="card-head"><h2>Sources</h2><span class="pill">PROVENANCE</span></div>'+state.sources.map(s=>'<div class="source-row"><div class="source-type">'+s.type+'</div><div><div class="source-title">'+esc(s.title)+'</div><div class="source-url">'+esc(s.path)+'</div></div><span class="pill">'+s.status+'</span></div>').join(""))}
function workflows(){return card('<div class="card-head"><h2>Mission Control</h2><span class="pill">RUNTIME</span></div><div class="notice">Native Hermes sessions, jobs, Kanban and API capabilities are the runtime substrate.</div>')}
async function render(){await refreshRuntime();const views={overview,agents,communications,missions,sources,workflows};title.textContent=state.view[0].toUpperCase()+state.view.slice(1);const view=views[state.view];app.innerHTML=view?await view():"";document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===state.view))}
document.querySelectorAll(".nav-item").forEach(b=>b.onclick=()=>{state.view=b.dataset.view;void render()});document.querySelector("#refresh").onclick=()=>void render();void render();
