// * Globals * //

document.getElementById('discoButton').addEventListener('click', function() {
  document.body.classList.toggle('disco');
});

const alert = document.querySelector("body span");
alert.style.display = "none";  

// * Menu * //
const menu = document.querySelectorAll("#copyButtons div");
const menuItems = document.querySelectorAll("#copyButtons div ul li");

menuItems.forEach(item => {
  item.style.display = "none";
});

menu.forEach(item => {
  item.addEventListener("click", showItems);
});

function showItems (event) {
  // Get the clicked <ul> element
  const clickedMenu = event.currentTarget;

  // Get the <li> elements within the clicked <ul>
  const clickedMenuItems = clickedMenu.querySelectorAll("div ul li");

  // Show the <li> elements within the clicked <ul>
  clickedMenuItems.forEach(item => {
    item.classList.toggle("display");
  });
}

// * Copy whole section * //

const copyButton = document.querySelector("#copyButtons div:nth-of-type(1)");

copyButton.addEventListener("click", copySection);

function copySection() {
  // Get the section element
  const section = document.querySelector("section:nth-of-type(1)");

  // Show the alert
  alert.innerHTML = "Sectie gekopieerd!";
  alert.style.display = "block";
  
  // Create a range object to select the section content
  const range = document.createRange();
  range.selectNode(section);

  // Add the range to the clipboard
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");

  // Deselect the range
  selection.removeAllRanges();

  // Remove the alert
  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
}

