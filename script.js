const STORAGE_KEY = "memocards-v1";

const defaultData = {
  folders: [
    {id:"demo", name:"Exemple", cards:[
      {id:"c1", front:"Bienvenue sur MemoCards !", back:"Clique sur une carte pour retourner la carte."},
      {id:"c2", front:"Que peux-tu faire ?", back:"Créer des dossiers, ajouter des cartes et les réviser."}
    ]},
    {id:"anglais", name:"Anglais", cards:[
      {id:"en1", front:"être", back:"to be — was/were — been"},
      {id:"en2", front:"battre", back:"to beat — beat — beaten"},
      {id:"en3", front:"devenir", back:"to become — became — become"},
      {id:"en4", front:"commencer", back:"to begin — began — begun"},
      {id:"en5", front:"mordre", back:"to bite — bit — bitten"},
      {id:"en6", front:"souffler", back:"to blow — blew — blown"},
      {id:"en7", front:"casser", back:"to break — broke — broken"},
      {id:"en8", front:"apporter", back:"to bring — brought — brought"},
      {id:"en9", front:"construire", back:"to build — built — built"},
      {id:"en10", front:"brûler", back:"to burn — burnt — burnt"},
      {id:"en11", front:"acheter", back:"to buy — bought — bought"},
      {id:"en12", front:"pouvoir", back:"can — could — I have been able"},
      {id:"en13", front:"attraper", back:"to catch — caught — caught"},
      {id:"en14", front:"choisir", back:"to choose — chose — chosen"},
      {id:"en15", front:"venir", back:"to come — came — come"},
      {id:"en16", front:"coûter", back:"to cost — cost — cost"},
      {id:"en17", front:"couper", back:"to cut — cut — cut"},
      {id:"en18", front:"faire", back:"to do — did — done"},
      {id:"en19", front:"faire (fabriquer)", back:"to make — made — made"},
      {id:"en20", front:"dessiner", back:"to draw — drew — drawn"},
      {id:"en21", front:"rêver", back:"to dream — dreamt — dreamt"},
      {id:"en22", front:"boire", back:"to drink — drank — drunk"},
      {id:"en23", front:"conduire", back:"to drive — drove — driven"},
      {id:"en24", front:"manger", back:"to eat — ate — eaten"},
      {id:"en25", front:"tomber", back:"to fall — fell — fallen"},
      {id:"en26", front:"se sentir", back:"to feel — felt — felt"},
      {id:"en27", front:"se battre", back:"to fight — fought — fought"},
      {id:"en28", front:"trouver", back:"to find — found — found"},
      {id:"en29", front:"voler (dans l'air)", back:"to fly — flew — flown"},
      {id:"en30", front:"oublier", back:"to forget — forgot — forgotten"},
      {id:"en31", front:"geler", back:"to freeze — froze — frozen"},
      {id:"en32", front:"obtenir", back:"to get — got — got"},
      {id:"en33", front:"donner", back:"to give — gave — given"},
      {id:"en34", front:"aller", back:"to go — went — gone"},
      {id:"en35", front:"grandir", back:"to grow — grew — grown"},
      {id:"en36", front:"avoir", back:"to have — had — had"},
      {id:"en37", front:"entendre", back:"to hear — heard — heard"},
      {id:"en38", front:"tenir", back:"to hold — held — held"},
      {id:"en39", front:"garder", back:"to keep — kept — kept"},
      {id:"en40", front:"connaître", back:"to know — knew — known"},
      {id:"en41", front:"conduire (diriger)", back:"to lead — led — led"},
      {id:"en42", front:"apprendre", back:"to learn — learnt — learnt"},
      {id:"en43", front:"quitter", back:"to leave — left — left"},
      {id:"en44", front:"perdre", back:"to lose — lost — lost"},
      {id:"en45", front:"laisser", back:"to let — let — let"},
      {id:"en46", front:"éclairer", back:"to light — lit — lit"},
      {id:"en47", front:"perdre", back:"to lose — lost — lost"},
      {id:"en48", front:"rencontrer", back:"to meet — met — met"},
      {id:"en49", front:"devoir", back:"I must — I had to — I have had to"},
      {id:"en50", front:"payer", back:"to pay — paid — paid"},
      {id:"en51", front:"mettre", back:"to put — put — put"},
      {id:"en52", front:"lire", back:"to read — read — read"},
      {id:"en53", front:"monter", back:"to ride — rode — ridden"},
      {id:"en54", front:"sonner", back:"to ring — rang — rung"},
      {id:"en55", front:"courir", back:"to run — ran — run"},
      {id:"en56", front:"dire", back:"to say — said — said"},
      {id:"en57", front:"voir", back:"to see — saw — seen"},
      {id:"en58", front:"vendre", back:"to sell — sold — sold"},
      {id:"en59", front:"envoyer", back:"to send — sent — sent"},
      {id:"en60", front:"briller", back:"to shine — shone — shone"},
      {id:"en61", front:"montrer", back:"to show — showed — shown"},
      {id:"en62", front:"chanter", back:"to sing — sang — sung"},
      {id:"en63", front:"couler", back:"to sink — sank — sunk"},
      {id:"en64", front:"s'asseoir", back:"to sit — sat — sat"},
      {id:"en65", front:"dormir", back:"to sleep — slept — slept"},
      {id:"en66", front:"glisser", back:"to slide — slid — slid"},
      {id:"en67", front:"parler", back:"to speak — spoke — spoken"},
      {id:"en68", front:"voler (quelque chose)", back:"to steal — stole — stolen"},
      {id:"en69", front:"frapper", back:"to strike — struck — struck"},
      {id:"en70", front:"nager", back:"to swim — swam — swum"},
      {id:"en71", front:"prendre", back:"to take — took — taken"},
      {id:"en72", front:"raconter", back:"to tell — told — told"},
      {id:"en73", front:"penser", back:"to think — thought — thought"},
      {id:"en74", front:"lancer", back:"to throw — threw — thrown"},
      {id:"en75", front:"comprendre", back:"to understand — understood — understood"},
      {id:"en76", front:"se réveiller", back:"to wake (up) — woke — woken"},
      {id:"en77", front:"porter (vêtements)", back:"to wear — wore — worn"},
      {id:"en78", front:"gagner", back:"to win — won — won"},
      {id:"en79", front:"écrire", back:"to write — wrote — written"},
      {id:"en80", front:"déchirer", back:"to tear — tore — torn"}
    ]}
  ]
};

let data = loadData();
let currentFolderId = null;
let editingCardId = null;
let studyIndex = 0;
let studyFlipped = false;

const $ = id => document.getElementById(id);

function uid(prefix="id"){ return prefix+"_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,7); }
function saveData(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function loadData(){
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(saved && Array.isArray(saved.folders)){
      // Ajoute le dossier Anglais automatiquement aux anciennes sauvegardes.
      if(!saved.folders.some(f=>f.id==="anglais")){
        const englishFolder=structuredClone(defaultData.folders.find(f=>f.id==="anglais"));
        saved.folders.push(englishFolder);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      }
      return saved;
    }
  } catch(e){}
  return structuredClone(defaultData);
}
function folder(){ return data.folders.find(f=>f.id===currentFolderId); }
function totalCards(){ return data.folders.reduce((n,f)=>n+f.cards.length,0); }
function escapeHTML(str){ return String(str).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])); }

function renderSidebar(){
  $("folderList").innerHTML = data.folders.map(f=>`
    <div class="folder-item ${f.id===currentFolderId?'active':''}" data-folder="${f.id}">
      <span class="folder-icon">📁</span>
      <span class="folder-name">${escapeHTML(f.name)}</span>
      <span class="folder-count">${f.cards.length}</span>
      <button class="folder-more" data-menu="${f.id}" title="Options">⋯</button>
    </div>`).join("");
  document.querySelectorAll("[data-folder]").forEach(el=>{
    el.addEventListener("click",e=>{
      if(e.target.closest("[data-menu]")) return;
      openFolder(el.dataset.folder);
    });
  });
  document.querySelectorAll("[data-menu]").forEach(btn=>{
    btn.addEventListener("click",e=>{
      e.stopPropagation();
      const f = data.folders.find(x=>x.id===btn.dataset.menu);
      if(!f) return;
      const action = prompt(`Options pour « ${f.name} »\nTape R pour renommer ou S pour supprimer.`);
      if(!action) return;
      if(action.toLowerCase()==="r") renameFolder(f.id);
      if(action.toLowerCase()==="s") deleteFolder(f.id);
    });
  });
}

function renderHome(){
  currentFolderId=null;
  $("breadcrumb").textContent="Accueil";
  $("content").innerHTML=`
    <div class="hero">
      <div><h1>Bonjour 👋</h1><p>Organise tes cours et révise plus facilement.</p></div>
      <button class="btn primary" id="homeNew">＋ Nouveau dossier</button>
    </div>
    <div class="stats">
      <div class="stat"><div class="num">${data.folders.length}</div><div class="label">Dossiers</div></div>
      <div class="stat"><div class="num">${totalCards()}</div><div class="label">Cartes</div></div>
      <div class="stat"><div class="num">∞</div><div class="label">Révisions possibles</div></div>
    </div>
    <h2 class="section-title">Mes dossiers</h2>
    ${data.folders.length ? `<div class="folder-grid">${data.folders.map(f=>`
      <article class="folder-card" data-open="${f.id}">
        <div class="folder-card-top"><span class="folder-card-icon">📁</span><span>${f.cards.length} carte${f.cards.length>1?'s':''}</span></div>
        <h3>${escapeHTML(f.name)}</h3><p>Ouvrir le dossier →</p>
      </article>`).join("")}</div>` :
      `<div class="empty"><div class="big">📁</div><h3>Aucun dossier</h3><p>Crée ton premier dossier pour commencer.</p></div>`}
  `;
  $("homeNew").onclick=()=>openFolderModal();
  document.querySelectorAll("[data-open]").forEach(el=>el.onclick=()=>openFolder(el.dataset.open));
}

function openFolder(id){
  currentFolderId=id;
  const f=folder();
  if(!f){renderHome();return}
  $("breadcrumb").textContent=f.name;
  renderSidebar();
  renderDeck();
  $("sidebar").classList?.remove("open");
}

function renderDeck(){
  const f=folder();
  $("content").innerHTML=`
    <div class="deck-head">
      <div class="deck-title"><h1>📁 ${escapeHTML(f.name)}</h1><p>${f.cards.length} carte${f.cards.length!==1?'s':''}</p></div>
      <div class="deck-actions">
        <button class="btn secondary" id="renameDeck">✏ Renommer</button>
        <button class="btn primary" id="addCard">＋ Ajouter une carte</button>
        ${f.cards.length?`<button class="btn primary" id="studyBtn">▶ Réviser</button>`:""}
      </div>
    </div>
    ${f.cards.length ? `<div class="card-list">${f.cards.map((c,i)=>`
      <div class="card-row">
        <div class="card-part"><small>Recto</small><p>${escapeHTML(c.front)}</p></div>
        <div class="card-part"><small>Verso</small><p>${escapeHTML(c.back)}</p></div>
        <div class="row-actions">
          <button class="small-btn" data-edit="${c.id}" title="Modifier">✏</button>
          <button class="small-btn" data-delete="${c.id}" title="Supprimer">🗑</button>
        </div>
      </div>`).join("")}</div>` :
      `<div class="empty"><div class="big">🃏</div><h3>Ton dossier est vide</h3><p>Ajoute ta première carte pour commencer à apprendre.</p><br><button class="btn primary" id="emptyAdd">＋ Créer une carte</button></div>`}
  `;
  $("renameDeck").onclick=()=>renameFolder(f.id);
  $("addCard").onclick=()=>openCardModal();
  if($("studyBtn")) $("studyBtn").onclick=startStudy;
  if($("emptyAdd")) $("emptyAdd").onclick=()=>openCardModal();
  document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>openCardModal(b.dataset.edit));
  document.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>deleteCard(b.dataset.delete));
}

function openFolderModal(){
  $("folderName").value="";
  $("modalTitle").textContent="Nouveau dossier";
  $("folderForm").dataset.edit="";
  $("modal").classList.remove("hidden");
  setTimeout(()=>$("folderName").focus(),50);
}
function renameFolder(id){
  const f=data.folders.find(x=>x.id===id); if(!f)return;
  const n=prompt("Nouveau nom du dossier :",f.name);
  if(n && n.trim()){f.name=n.trim();saveData();renderSidebar(); if(currentFolderId)renderDeck(); else renderHome(); toast("Dossier renommé.");}
}
function deleteFolder(id){
  const f=data.folders.find(x=>x.id===id); if(!f)return;
  if(!confirm(`Supprimer « ${f.name} » et toutes ses cartes ?`))return;
  data.folders=data.folders.filter(x=>x.id!==id); saveData(); currentFolderId=null; renderSidebar();renderHome();toast("Dossier supprimé.");
}
$("folderForm").onsubmit=e=>{
  e.preventDefault();
  const name=$("folderName").value.trim(); if(!name)return;
  const edit=$("folderForm").dataset.edit;
  if(edit){ const f=data.folders.find(x=>x.id===edit); if(f)f.name=name; }
  else data.folders.push({id:uid("folder"),name,cards:[]});
  saveData(); closeModal(); renderSidebar(); renderHome(); toast(edit?"Dossier renommé.":"Dossier créé !");
};

function openCardModal(id=null){
  editingCardId=id;
  const f=folder(); if(!f)return;
  $("cardModalTitle").textContent=id?"Modifier la carte":"Nouvelle carte";
  if(id){
    const c=f.cards.find(x=>x.id===id); $("cardFront").value=c.front; $("cardBack").value=c.back;
  } else {$("cardFront").value="";$("cardBack").value="";}
  $("cardModal").classList.remove("hidden");setTimeout(()=>$("cardFront").focus(),50);
}
$("cardForm").onsubmit=e=>{
  e.preventDefault(); const f=folder(); if(!f)return;
  const front=$("cardFront").value.trim(), back=$("cardBack").value.trim(); if(!front||!back)return;
  if(editingCardId){const c=f.cards.find(x=>x.id===editingCardId);c.front=front;c.back=back;}
  else f.cards.push({id:uid("card"),front,back});
  saveData();closeCardModal();renderSidebar();renderDeck();toast(editingCardId?"Carte modifiée.":"Carte ajoutée !");
};
function deleteCard(id){
  const f=folder();if(!f)return;
  if(confirm("Supprimer cette carte ?")){f.cards=f.cards.filter(c=>c.id!==id);saveData();renderSidebar();renderDeck();toast("Carte supprimée.");}
}

function closeModal(){$("modal").classList.add("hidden")}
function closeCardModal(){$("cardModal").classList.add("hidden");editingCardId=null}
$("closeModal").onclick=closeModal;$("cancelModal").onclick=closeModal;
$("closeCardModal").onclick=closeCardModal;$("cancelCardModal").onclick=closeCardModal;
$("modal").addEventListener("click",e=>{if(e.target===$("modal"))closeModal()});
$("cardModal").addEventListener("click",e=>{if(e.target===$("cardModal"))closeCardModal()});

function startStudy(){
  const f=folder();if(!f||!f.cards.length)return;
  studyIndex=0;studyFlipped=false;renderStudy();
}
function renderStudy(){
  const f=folder(), c=f.cards[studyIndex]; if(!c)return;
  const pct=((studyIndex+1)/f.cards.length)*100;
  $("content").innerHTML=`
    <div class="study">
      <div class="study-head"><div><b>Révision</b><div style="color:var(--muted);font-size:13px">${studyIndex+1} / ${f.cards.length}</div></div><button class="btn secondary" id="quitStudy">Quitter</button></div>
      <div class="study-progress"><div style="width:${pct}%"></div></div>
      <div class="flashcard" id="flashcard">
        <div class="flash-inner">
          <div class="flash-front"><div class="flash-label">Question</div><div class="flash-text">${escapeHTML(c.front)}</div><div style="color:var(--muted);margin-top:25px;font-size:13px">Clique pour retourner</div></div>
          <div class="flash-back"><div class="flash-label">Réponse</div><div class="flash-text">${escapeHTML(c.back)}</div></div>
        </div>
      </div>
      <div class="study-controls">
        <button class="btn secondary" id="prevCard">← Précédente</button>
        <button class="btn primary" id="nextCard">Suivante →</button>
      </div>
    </div>`;
  $("flashcard").onclick=()=>{$("flashcard").classList.toggle("flipped");studyFlipped=!studyFlipped};
  $("prevCard").onclick=()=>{studyIndex=(studyIndex-1+f.cards.length)%f.cards.length;studyFlipped=false;renderStudy()};
  $("nextCard").onclick=()=>{studyIndex++;if(studyIndex>=f.cards.length){studyIndex=0;toast("Tour terminé ! 🎉")}studyFlipped=false;renderStudy()};
  $("quitStudy").onclick=()=>renderDeck();
}

$("newFolderBtn").onclick=openFolderModal;
$("exportBtn").onclick=()=>{
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="memocards-sauvegarde.json";a.click();URL.revokeObjectURL(a.href);
  toast("Sauvegarde exportée !");
};
$("importInput").onchange=e=>{
  const file=e.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{const imported=JSON.parse(reader.result);if(!Array.isArray(imported.folders))throw 0;
      data=imported;saveData();currentFolderId=null;renderSidebar();renderHome();toast("Données importées !");
    }catch{alert("Ce fichier n'est pas une sauvegarde MemoCards valide.");}
  };reader.readAsText(file);e.target.value="";
};
$("resetBtn").onclick=()=>{
  if(confirm("Tout supprimer ? Cette action efface tous tes dossiers et cartes de ce navigateur.")){
    data={folders:[]};saveData();currentFolderId=null;renderSidebar();renderHome();toast("Données réinitialisées.");
  }
};
$("themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("memocards-theme",document.body.classList.contains("dark")?"dark":"light")};
if(localStorage.getItem("memocards-theme")==="dark")document.body.classList.add("dark");
$("mobileMenu").onclick=()=>document.querySelector(".sidebar").classList.toggle("open");

function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),2200)}

renderSidebar();renderHome();
