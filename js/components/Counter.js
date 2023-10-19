function Counter() {
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