function PageCounter() {
  let count = 0;
  const countView = span({ id: "count-view" }, 0);
  const increase = () => {
    count++;
    countView.innerText = count;
  };
  const decrease = () => {
    count--;
    countView.innerText = count;
  };

  return div({ class: "card" },
    h1("Count ", countView),
    div(
      { class: "btn-box" },
      button({ class: "btn btn-primary", onClick: increase }, "Increase"),
      button({ class: "btn btn-danger", onClick: decrease }, "Decrease")
    )
  );
}

function PageAbout() {
  return div({ class: "card" },
    h1("About"),
    p("Lorem ipsum dolor sit amet consectetur adipisicing ")
  );
}

function PageContact() {
  return div({ class: "card" },
    h1("Contact"),
    p("Lorem ipsum dolor sit amet consectetur adipisicing ")
  );
}

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
