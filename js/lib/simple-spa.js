function h(tag, attrs, ...children) {
  const element = document.createElement(tag);
  if (attrs instanceof Object && !Array.isArray(attrs)) {
    for (const attr in attrs) {
      if (attr.startsWith("on")) {
        element.addEventListener(attr.slice(2).toLowerCase(), attrs[attr]);
      } else {
        element.setAttribute(attr, attrs[attr]);
      }
    }
  } else {
    children.unshift(attrs);
  }
  children = children.flat();
  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
    } else {
      element.appendChild(document.createTextNode(child));
    }
  });
  return element;
}

const div = (...args) => h("div", ...args);
const h1 = (...args) => h("h1", ...args);
const p = (...args) => h("p", ...args);
const a = (...args) => h("a", ...args);
const button = (...args) => h("button", ...args);
const span = (...args) => h("span", ...args);

let _renderArgs = {};

function reRender() {
  _renderArgs.container.replaceChildren(_renderArgs.component());
}

function render(component, container) {
  _renderArgs = {component, container};
  reRender();
}

export {
  render,
  reRender,
  div,
  h1,
  p,
  a,
  button,
  span,
}