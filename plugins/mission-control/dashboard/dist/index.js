(function(){
"use strict";
const SDK=window.__HERMES_PLUGIN_SDK__,R=SDK.React,H=SDK.hooks,C=SDK.components,h=R.createElement;
function App(){
 const [profiles,setProfiles]=H.useState([]),[sessions,setSessions]=H.useState([]),[cron,setCron]=H.useState([]),[missions,setMissions]=H.useState([]),[title,setTitle]=H.useState(""),[goal,setGoal]=H.useState(""),[error,setError]=H.useState("");
 const refresh=H.useCallback(async()=>{try{const [p,s,c,m]=await Promise.all([SDK.api.getProfiles(),SDK.api.getSessions(20,0,{profile:"",order:"recent"}),SDK.api.getCronJobs("all"),SDK.fetchJSON("/api/plugins/mission-control/missions")]);setProfiles(p.profiles||[]);setSessions(s.sessions||[]);setCron(c||[]);setMissions(m.missions||[]);setError("")}catch(e){setError(String(e.message||e))}},[]);
 H.useEffect(()=>{refresh()},[refresh]);
 const create=async()=>{if(!title.trim()||!goal.trim())return;await SDK.fetchJSON("/api/plugins/mission-control/missions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title,goal,plan:[],profile:profiles[0]?.name||null})});setTitle("");setGoal("");await refresh()};
 const act=async(id,a)=>{await SDK.fetchJSON("/api/plugins/mission-control/missions/"+id+"/"+a,{method:"POST"});await refresh()};
 return h("div",{className:"mc-wrap"},
  h("div",{className:"mc-grid"},...[["PROFILES",profiles.length],["RECENT SESSIONS",sessions.length],["CRON JOBS",cron.length],["MISSIONS",missions.length]].map(x=>h("div",{className:"mc-card",key:x[0]},h("div",{className:"mc-muted"},x[0]),h("div",{className:"mc-number"},String(x[1]))))),
  h("div",{className:"mc-card"},h("div",{className:"mc-title"},"New mission"),h("input",{className:"mc-input",value:title,onChange:e=>setTitle(e.target.value),placeholder:"Mission title"}),h("textarea",{className:"mc-input",value:goal,onChange:e=>setGoal(e.target.value),placeholder:"Goal. Creation does not execute it."}),h(C.Button,{onClick:create},"Create draft")),
  h("div",{className:"mc-card"},h("div",{className:"mc-title"},"Mission queue"),missions.length?missions.map(m=>h("div",{className:"mc-row",key:m.id},h("div",null,h("div",{className:"mc-title"},m.title),h("div",{className:"mc-muted"},m.goal),h("div",{className:"mc-status"},m.status)),m.status==="draft"?h("div",{className:"mc-actions"},h(C.Button,{onClick:()=>act(m.id,"approve")},"Approve"),h(C.Button,{onClick:()=>act(m.id,"reject")},"Reject")):null)):h("div",{className:"mc-muted"},"No missions yet.")),
  error?h("div",{className:"mc-error"},error):null
 )}
window.__HERMES_PLUGINS__.register("mission-control",App);
})();