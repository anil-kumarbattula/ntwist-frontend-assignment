document.addEventListener("DOMContentLoaded", () => {
  const sortButton = document.getElementById("sortBtn");
  const nameList = document.getElementById("nameList");

  sortButton.addEventListener("click", () => {
    const items = Array.from(nameList.getElementsByTagName("li")); //convert list items to an array
    items.sort((a, b) => a.textContent.localeCompare(b.textContent)); //sorting
    nameList.innerHTML = ""; //clear the list and prepare for sorted items
    for (let i = 0; i < items.length; i++) {
      nameList.appendChild(items[i]);
    }
  });
});