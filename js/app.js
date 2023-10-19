function PageCounter() {
  const page = `
      <div class="container">
        <div id="navbar">
        </div>
        <div class="card">
          <h1>Count <span id="count-view">0</span></h1>
          <div class="btn-box">
            <button class="btn btn-primary" id="btn-increase">Increase</button>
            <button class="btn btn-danger" id="btn-decrease">Decrease</button>
          </div>
        </div>
      </div>
    `;
  document.getElementById("app").innerHTML = page;
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
  const page = `
        <div class="container">
          <div id="navbar">
          </div>
          <div class="card">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
          </div>
        </div>
      `;
  document.getElementById("app").innerHTML = page;
}

function PageContact() {
  const page = document.createElement("div");
  page.classList.add("container");
  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");
  page.appendChild(navbar);
  const card = document.createElement("div");
  card.classList.add("card");
  page.appendChild(card);
  const h1 = document.createElement("h1");
  h1.innerText = "Contact";
  card.appendChild(h1);
  const p = document.createElement("p");
  p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing ";
  card.appendChild(p);
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