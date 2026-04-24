export function updateTaco() {
  const risk = Math.floor(Math.random() * 100);

  const bar = document.getElementById("taco-bar");
  const text = document.getElementById("taco-status");

  bar.style.width = risk + "%";

  if (risk > 70) {
    bar.className = "h-2 bg-red-500 rounded";
    text.innerText = "ALERTA ALTA";
    text.className = "text-red-500";
  } else {
    bar.className = "h-2 bg-yellow-500 rounded";
    text.innerText = "ESTABLE";
    text.className = "text-yellow-400";
  }
}
