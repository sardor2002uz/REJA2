console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return `<li class="plan-item">

              <div class="plan-left">

                <div class="plan-number">
                  <%= items.indexOf(item) + 1 %>
                </div>

                <span class="item-text">
                  ${item.reja} 
                </span>

              </div>


              <div class="plan-actions">

                <button
                  data-id="${item._id}"
                  class="edit-me edit-button"
                >
                  O'zgartirish
                </button>

                <button
                  data-id="${item._id}"
                  class="delete-me delete-button"
                >
                  O'chirish
                </button>

              </div>

            </li>`;
}

let createField = document.getElementById("create-field");

document
.getElementById("create-form")
.addEventListener("submit",function (e) {
    e.preventDefault();

    axios
    .post("/create-item", {reja: createField.value})
    .then((response) => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling!");
    });

});
