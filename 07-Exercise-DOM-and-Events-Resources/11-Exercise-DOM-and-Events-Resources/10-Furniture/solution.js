function solve() {
  const table = document.querySelector("table.table tbody"); // get the table

  const [input, output] = Array.from(document.querySelectorAll("textarea")); // get the input and output text areas
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button")); // get the generate and buy buttons

  generateBtn.addEventListener("click", generate); // add event listener to the generate button
  buyBtn.addEventListener("click", buy); // add event listener to the buy button

  const items = []; // create an empty array to store the items

  function generate(e) {
    // generate function
    const data = JSON.parse(input.value); // parse the input value to JSON

    for (let item of data) {
      // iterate through the data
      const checkBox = createElement("input", {
        // create a new input element
        type: "checkbox", // set the type to checkbox
      });

      const row = createElement(
        "tr",
        {}, // create a new table row
        td(
          createElement("img", {
            // create a new image element
            src: item.img, // set the source to the item image
          })
        ),
        td(p(item.name)), // create a new paragraph element with the item name
        td(p(item.price)),
        td(p(item.decFactor)),
        td(checkBox)
      );

      items.push({
        element: row,
        isChecked,
        item,
      });

      table.appendChild(row);

      function isChecked() {
        return checkBox.checked;
      }
    }
  }

  function p(...content) {
    return createElement("p", {}, ...content);
  }

  function td(...content) {
    return createElement("td", {}, ...content);
  }

  function createElement(type, props, ...content) {
    const element = document.createElement(type);

    for (let prop in props) {
      element[prop] = props[prop];
    }
    for (let entry of content) {
      if (typeof entry == "string" || typeof entry == "number") {
        entry = document.createTextNode(entry);
      }
      element.appendChild(entry);
    }

    return element;
  }

  function buy(e) {
    const furniture = items
      .filter((i) => i.isChecked())
      .reduce(
        (acc, { item: c }, i, a) => {
          acc.names.push(c.name);
          acc.total += Number(c.price);
          acc.decFactor += Number(c.decFactor) / a.length;
          return acc;
        },
        {
          names: [],
          total: 0,
          decFactor: 0,
        }
      );

    const result = `Bought furniture: ${furniture.names.join(", ")}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${furniture.decFactor}`;

    output.value = result;
  }
}
