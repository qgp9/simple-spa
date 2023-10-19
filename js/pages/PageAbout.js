import { div, h1, p } from "/js/lib/simple-spa.js";

export default function PageAbout() {
  return div({ class: "card" },
    h1("About"),
    p("Lorem ipsum dolor sit amet consectetur adipisicing ")
  );
}