let myUrls = [];
let inputEl = document.querySelector("#input-el");
let inputBtn = document.querySelector("#input-btn");
let ulEl = document.getElementById("ul-el");
let deleteBtn = document.getElementById("delete-btn");
let tabBtn = document.getElementById("tab-btn");

// storing urls in local varaible
const urlsFromLocalStorage = JSON.parse(localStorage.getItem("myUrls"));

if (urlsFromLocalStorage) {
  myUrls = urlsFromLocalStorage;
  render(myUrls);
}

// save current tab
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myUrls.push(tabs[0].url);
    localStorage.setItem("myUrls", JSON.stringify(myUrls));
    render(myUrls);
  });
});

function render(urls) {
  let listItems = "";
  // loop to render the list items
  for (let i = 0; i < urls.length; i++) {
    listItems += `<li><a href=${urls[i]} target='_blank'>${urls[i]}</a></li>`;
  }

  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myUrls = [];
  render(myUrls);
});

inputBtn.addEventListener("click", () => {
  if (inputEl.value === "") return;
  if (!myUrls.includes(inputEl.value)) myUrls.push(inputEl.value);
  inputEl.value = null;
  // set items in local storage
  localStorage.setItem("myUrls", JSON.stringify(myUrls));

  render(myUrls);
});
