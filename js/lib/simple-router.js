import { createSignal, createEffect } from "./simple-signal.js";
import { a } from "./simple-spa.js";

const path = createSignal(window.location.pathname);

function Routes({routes}) {
  const wrapper = document.createElement("div");
  createEffect(() => {
    wrapper.replaceChildren(routes[path()].component());
  }, [path]);

  return wrapper;
}

function route(href) {
  let currentPath = window.location.pathname;
  if (href && href === currentPath) return;
  window.history.pushState(null, null, href);
  path.set(href);
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