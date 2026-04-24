function updateTaco() {
  const risk = Math.floor(Math.random() * 100);
  const bar = document.getElementById("taco-bar");
  const text = document.getElementById("taco-status");

  bar.style.width = risk + "%";

  if (risk > 70) {
    bar.className = "h-2 bg-red-500 rounded shadow-[0_0_10px_rgba(239,68,68,0.8)]";
    text.innerText = `ALERTA ALTA (${risk}%)`;
    text.className = "text-red-400 font-bold animate-pulse";
  } 
  else if (risk > 40) {
    bar.className = "h-2 bg-orange-500 rounded shadow-[0_0_10px_rgba(249,115,22,0.7)]";
    text.innerText = `TENSIÓN MEDIA (${risk}%)`;
    text.className = "text-orange-400 font-bold";
  } 
  else {
    bar.className = "h-2 bg-green-500 rounded shadow-[0_0_10px_rgba(34,197,94,0.6)]";
    text.innerText = `ESTABLE (${risk}%)`;
    text.className = "text-green-400 font-bold";
  }
}
