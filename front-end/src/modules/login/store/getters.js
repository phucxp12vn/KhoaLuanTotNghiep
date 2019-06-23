

export const me = state => state.user;
export const isAuthenticated = state => !!state.token;
export const token = state => state.token;
export const instances = state => {
  if (!state.user.instances) return [];
  let idx = 1;
  return state.user.instances.map(i => ({ ...i, id: idx++ }));
};

export const hasLoadedOnce = state => state.hasLoadedOnce;
export const message = state => state.message;
