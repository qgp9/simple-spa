import { div, h1, p } from "/js/lib/simple-spa.js";

export default function PageContact() {
  return div({ class: "card" },
    h1("Contact"),
    p("Lorem ipsum dolor sit amet consectetur adipisicing ")
  );
}