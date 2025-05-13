document.addEventListener("DOMContentLoaded", () => {
  const sortButton = document.getElementById("sortBtn");
  const nameList = document.getElementById("nameList");

  sortButton.addEventListener("click", () => {
    //Convert the list items to an array
    const items = Array.from(nameList.getElementsByTagName("li"));
    //sort the items alphabetically
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    //Clear the existing list
    nameList.innerHTML = "";
    //Append the sorted items back to the list
    items.forEach(item => nameList.appendChild(item));
  });
});