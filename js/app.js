const routes = {
  "/index.html": { name: "Home", component: PageCounter },
  "/about.html": { name: "About", component: PageAbout },
  "/contact.html": { name: "Contact", component: PageContact },
};

function Navbar() {
  return div({ id: "navbar" },
    Object.keys(routes).map((route) => {
      const link = A({ href: route}, routes[route].name);
      return link;
    })
  );
}

function App() {
  return div({ class: "container" },
    Navbar(),
    Routes({routes})
  );
}

render(App, document.getElementById("app"));
