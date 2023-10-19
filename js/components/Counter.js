import { createSignal } from "../lib/simple-signal.js";
import { div, h1, span, button } from "/js/lib/simple-spa.js";
export default function Counter() {
  const count = createSignal(0);
  const increase = () => {
    count.set(count() + 1);
  };
  const decrease = () => {
    count.set(count() - 1);
  };

  return div({ class: "card" },
    h1("Count ", count.dom()),
    div(
      { class: "btn-box" },
      button({ class: "btn btn-primary", onClick: increase }, "Increase"),
      button({ class: "btn btn-danger", onClick: decrease }, "Decrease")
    )
  );
}