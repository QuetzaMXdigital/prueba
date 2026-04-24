export function renderWatchlist(container, market) {
  container.innerHTML = "";

  Object.values(market).forEach(asset => {
    const el = document.createElement("div");

    el.className = "flex justify-between p-2 border-b border-slate-800 text-sm";

    el.innerHTML = `
      <span>${asset.symbol}</span>
      <span>$${asset.price.toFixed(2)}</span>
      <span class="${asset.change >= 0 ? 'text-green-500' : 'text-red-500'}">
        ${asset.change.toFixed(2)}%
      </span>
    `;

    container.appendChild(el);
  });
}
