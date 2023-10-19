import { reRender, a } from "./simple-spa.js";

function Routes({routes}) {
  const currentPath = window.location.pathname;
  return routes[currentPath].component()
}

function route(href) {
  let currentPath = window.location.pathname;
  if (href && href === currentPath) return;
  window.history.pushState(null, null, href);
  reRender();
}

const A = (attrs, ...children) => {
  attrs.onClick = (e) => {
    e.preventDefault();
    route(attrs.href);
  };
  return a(attrs, ...children);
}

export {
  Routes,
  route,
  A,
}