import { setState } from "./state.js";

export function connectWS() {
  const socket = new WebSocket(
    "wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/solusdt@ticker"
  );

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data).data;

    setState({
      [data.s]: {
        symbol: data.s,
        price: parseFloat(data.c),
        change: parseFloat(data.P)
      }
    });
  };

  socket.onclose = () => {
    setTimeout(connectWS, 2000);
  };
}
