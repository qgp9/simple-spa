function h(tag, attrs, ...children) {
  const element = document.createElement(tag);
  if (attrs instanceof Object && !Array.isArray(attrs)) {
    for (const attr in attrs) {
      element.setAttribute(attr, attrs[attr]);
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
  const page = div({class:"container"},
    div({id:"navbar"}),
    div({class:"card"},
      h1("Count", span({id:"count-view"}, 0)),
      div({class:"btn-box"},
        button({class:"btn btn-primary", id:"btn-increase"}, "Increase"),
        button({class:"btn btn-danger", id:"btn-decrease"}, "Decrease")
      )
    )
  );
  document.getElementById("app").replaceChildren(page);

  const countView = document.getElementById("count-view");
  const btnIncrease = document.getElementById("btn-increase");
  const btnDecrease = document.getElementById("btn-decrease");

  let count = 0;

  btnIncrease.addEventListener("click", () => {
    count++;
    countView.innerText = count;
  });

  btnDecrease.addEventListener("click", () => {
    count--;
    countView.innerText = count;
  });
}

function PageAbout() {
  const page = div({class:"container"},
    div({id:"navbar"}),
    div({class:"card"},
      h1("About"),
      p("Lorem ipsum dolor sit amet consectetur adipisicing ")
    )
  );
  document.getElementById("app").replaceChildren(page);
}

function PageContact() {
  const page = div({class:"container"},
    div({id:"navbar"}),
    div({class:"card"},
      h1("Contact"),
      p("Lorem ipsum dolor sit amet consectetur adipisicing ")
    )
  );
  document.getElementById("app").replaceChildren(page);
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

function router(href) {
  if (href) {
    window.history.pushState(null, null, href);
  }
  const currentPath = href || window.location.pathname;
  routes[currentPath].component();
  handleLinks();
}
router()