
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/home/carlosug/develop/perso/new-website/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/home/carlosug/develop/perso/new-website/src/pages/index.tsx"))
}
