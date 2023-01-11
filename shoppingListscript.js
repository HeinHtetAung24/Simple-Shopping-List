const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];

let productNumber = 1;
const myFunction = (event) => {
    const inputValue = event.target.value;
    const parentDivContainer = document.createElement("div");
    parentDivContainer.classList.add("parentDivContainer");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click", () => {
        const classExit = parentDiv.classList.contains("purchased");
        if (classExit === true) {
            parentDiv.classList.remove("purchased")
        } else {
            parentDiv.classList.add("purchased");
        }
    })
    //<i class="fa-solid fa-trash-can"></i>
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash-can");
    trashIcon.addEventListener("click", () => {
        parentDivContainer.remove();
    })
    const spanTag = document.createElement("span");
    spanTag.id = productNumber;
    const product = productNumber.toString() + ". " + inputValue;
    spanTag.append(product);
    parentDiv.append(spanTag);
    parentDivContainer.append(parentDiv, trashIcon);
    shoppingListTag.append(parentDivContainer);
    inputTag.value = "" ;
    productNumber += 1;
}   

inputTag.addEventListener("change", myFunction);