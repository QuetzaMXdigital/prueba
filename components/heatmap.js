export function renderHeatmap(container) {
  container.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const val = Math.random();

    const box = document.createElement("div");
    box.className = "p-2 mb-2 text-xs rounded " +
      (val > 0.7 ? "bg-red-600" :
       val > 0.4 ? "bg-orange-500" :
                   "bg-yellow-500");

    box.innerText = "Sector " + (i + 1);

    container.appendChild(box);
  }
}
