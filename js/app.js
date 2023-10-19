function PageCounter() {
  const page = `
      <div class="container">
        <div id="navbar">
          <a href="/index.html">Home</a>
          <a href="/about.html">About</a>
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
            <a href="/index.html">Home</a>
            <a href="/about.html">About</a>
          </div>
          <div class="card">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
          </div>
        </div>
      `;
  document.getElementById("app").innerHTML = page;
}

function handleLinks() {
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
  if (currentPath === "/about.html") {
    PageAbout();
  } else {
    PageCounter();
  }
  handleLinks();
}
router()