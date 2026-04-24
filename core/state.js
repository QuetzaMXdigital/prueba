export const state = {
  market: {},
  listeners: []
};

export function setState(update) {
  Object.assign(state.market, update);
  state.listeners.forEach(fn => fn(state));
}

export function subscribe(fn) {
  state.listeners.push(fn);
}
