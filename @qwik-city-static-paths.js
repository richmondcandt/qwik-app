const staticPaths = new Set(["/qwik-app/","/qwik-app/demo/flower/","/qwik-app/demo/todolist/","/qwik-app/favicon.svg","/qwik-app/fonts/poppins-400.woff2","/qwik-app/fonts/poppins-500.woff2","/qwik-app/fonts/poppins-700.woff2","/qwik-app/manifest.json","/qwik-app/q-manifest.json","/qwik-app/robots.txt","/qwik-app/service-worker.js","/qwik-app/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/qwik-app/build/")) {
    return true;
  }
  if (p.startsWith("/qwik-app/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };