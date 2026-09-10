const data = {
  "Class 9": [
    ["Science","Matter in Our Surroundings"],["Science","The Fundamental Unit of Life"],
    ["Maths","Number Systems"],["Maths","Triangles"],["Social Science","India – Size and Location"]
  ],
  "Class 10": [
    ["Science","Chemical Reactions and Equations"],["Science","Life Processes"],
    ["Maths","Real Numbers"],["Maths","Triangles"],["Social Science","Agriculture"],
    ["English","First Flight – Poems"],["Hindi","क्षितिज – Chapter Notes"]
  ]
};
let currentClass="Class 10";
function showClass(name){
  currentClass=name;
  document.getElementById("notes").classList.remove("hidden");
  document.getElementById("classTitle").textContent=name+" Notes";
  document.getElementById("search").value="";
  renderNotes();
  document.getElementById("notes").scrollIntoView({behavior:"smooth"});
}
function renderNotes(){
  const q=document.getElementById("search").value.toLowerCase();
  const list=(data[currentClass]||[]).filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(q));
  const box=document.getElementById("noteList");
  box.innerHTML=list.length?list.map(x=>`<article class="note"><h3>📄 ${x[1]}</h3><p>${x[0]} • ${currentClass}</p><a href="#" onclick="demoAlert(event)">View / Download PDF →</a></article>`).join("")
  : `<div class="note"><h3>Coming soon</h3><p>Is class ke notes abhi upload nahi kiye gaye.</p></div>`;
}
function demoAlert(e){e.preventDefault();alert("Yahan apni PDF ka link add karna hai. Example: Google Drive PDF link.");}
showClass("Class 10");
