export const setGetVersion = (resp: string) => ({
  type: 'GET_VERSION',
  resp,
});

export const teardownFilters = {
  GET_VERSION: 'GET_VERSION',
};
