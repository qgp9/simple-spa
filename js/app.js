import { div } from "/js/lib/simple-spa.js";
import { Routes, A } from "/js/lib/simple-router.js";

import PageCounter from "./pages/PageCounter.js";
import PageAbout from "./pages/PageAbout.js";
import PageContact from "./pages/PageContact.js";

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

export default App;
