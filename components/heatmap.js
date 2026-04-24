function renderHeatmap() {
  const container = document.getElementById("heatmap");
  container.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const val = Math.random();

    const box = document.createElement("div");

    box.className = `
      p-3 mb-2 text-xs rounded-lg 
      font-bold tracking-wide
      border border-slate-900
      ${val > 0.7 ? "bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.6)]" :
        val > 0.4 ? "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)]" :
                    "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"}
    `;

    box.innerText = "Sector " + (i + 1);

    // 🎯 Animación hover
    box.style.transition = "all 0.25s ease";
    box.onmouseenter = () => box.style.transform = "scale(1.05)";
    box.onmouseleave = () => box.style.transform = "scale(1)";

    container.appendChild(box);
  }
}
