import { state, subscribe } from "./core/state.js";
import { connectWS } from "./core/ws.js";
import { renderWatchlist } from "./components/watchlist.js";
import { updateTaco } from "./components/taco.js";
import { renderHeatmap } from "./components/heatmap.js";

const watchlistEl = document.getElementById("watchlist");
const heatmapEl = document.getElementById("heatmap");

subscribe(() => {
  renderWatchlist(watchlistEl, state.market);
});

connectWS();

setInterval(updateTaco, 3000);
setInterval(() => renderHeatmap(heatmapEl), 5000);
