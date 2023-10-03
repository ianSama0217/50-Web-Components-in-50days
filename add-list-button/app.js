const addBtn = document.getElementById("addBtn");
const listArea = document.getElementById("area"); //存放list的容器

//新增list方法
function createList() {
  let list = document.createElement("div");
  list.classList.add("list");

  let p = document.createElement("p");
  p.classList.add("textValue");
  p.innerHTML = "Text";

  let p2 = document.createElement("p");
  p2.classList.add("moneyValue");
  p2.innerHTML = "Money";

  let trashBtn = document.createElement("button");
  trashBtn.classList.add("trashBtn");
  trashBtn.setAttribute("id", "deleteBtn");

  let buttonText = document.createTextNode("Delete"); //創建按鈕文字
  trashBtn.appendChild(buttonText); //將文字加入置按鈕中

  //將子物件加入到父物件裡面
  listArea.appendChild(list);
  list.appendChild(p);
  list.appendChild(p2);
  list.appendChild(trashBtn);

  //刪除list事件監聽
  trashBtn.addEventListener("click", (event) => {
    event.target.parentElement.classList.add("remove");
    let list = event.target.parentElement;
    //動畫結束後再刪除list
    list.addEventListener("transitionend", (event) => {
      event.target.remove();
    });
  });

  return list;
}

//點擊新增按鈕觸發事件監聽
addBtn.addEventListener("click", () => {
  createList();
});
