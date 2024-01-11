export default defineNuxtRouteMiddleware((to, from) => {
  const signs = ["up", "in", "out"];
  const sign = to.query.sign as (typeof signs)[0];
  if (!to.query.sign || !signs.includes(sign)) {
    return abortNavigation();
  }
});
