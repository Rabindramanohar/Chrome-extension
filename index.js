let myUrls = [];
let inputEl = document.querySelector("#input-el");
let inputBtn = document.querySelector("#input-btn");
let ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
  if (inputEl.value === "") return;
  if (!myUrls.includes(inputEl.value)) myUrls.push(inputEl.value);
  inputEl.value = null;
  renderUrls();
});

function renderUrls() {
  let listItems = "";
  // loop to render the list items
  for (let i = 0; i < myUrls.length; i++) {
    listItems += `<li><a href=${myUrls[i]} target='_blank'>${myUrls[i]}</a></li>`;
  }

  ulEl.innerHTML = listItems;
}
