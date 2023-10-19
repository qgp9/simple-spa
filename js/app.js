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
  })
  return element
}

const div = (...args) => h("div", ...args);
const h1 = (...args) => h("h1", ...args);
const p = (...args) => h("p", ...args);
const a = (...args) => h("a", ...args);
const button = (...args) => h("button", ...args);
const span = (...args) => h("span", ...args);

function PageCounter() {
  let count = 0;
  const countView = span({id:"count-view"}, 0);
  const increase = () => {count++; countView.innerText = count};
  const decrease = () => {count--; countView.innerText = count};

  return div({class:"container"},
    div({id:"navbar"}),
    div({class:"card"},
      h1("Count ", countView),
      div({class:"btn-box"},
        button({class:"btn btn-primary", onClick: increase}, "Increase"),
        button({class:"btn btn-danger", onClick: decrease}, "Decrease")
      )
    )
  );
}

function PageAbout() {
  return div({class:"container"},
    div({id:"navbar"}),
    div({class:"card"},
      h1("About"),
      p("Lorem ipsum dolor sit amet consectetur adipisicing ")
    )
  );
}

function PageContact() {
  return div({class:"container"},
    div({id:"navbar"}),
    div({class:"card"},
      h1("Contact"),
      p("Lorem ipsum dolor sit amet consectetur adipisicing ")
    )
  );
}

const routes = {
  "/index.html": {name: "Home", component: PageCounter},
  "/about.html": {name: "About", component: PageAbout},
  "/contact.html": {name: "Contact", component: PageContact},
}

function handleLinks() {
  const navbar = document.getElementById("navbar");
  for (const route in routes) {
    const link = document.createElement("a");
    link.innerText = routes[route].name;
    link.setAttribute("href", route);
    navbar.appendChild(link);
  }
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      router(href);
    });
  });
}

function App(href) {
  return routes[href].component();
}

function router(href) {
  if (href) {
    window.history.pushState(null, null, href);
  }
  const currentPath = href || window.location.pathname;
  document.getElementById("app").replaceChildren(App(currentPath));
  handleLinks();
}
router()