

console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item, index) {
    return `<li class="plan-item">

              <div class="plan-left">

                <div class="plan-number">
                   ${index +1}
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
        document.getElementById("item-list").insertAdjacentHTML(
            "beforeend",
            itemTemplate(
                response.data,
                document.querySelectorAll(".plan-item").length
            )
        );

        createField.value = "";
        createField.focus();
    })

});

document.addEventListener("click", function (e) {
 console.log(e);
 
 // delete oper
 console.log(e.target);
 if (e.target.classList.contains("delete-me")) {
  if(confirm("Aniq ochirmoqchimisiz?")) {
    axios
    .post("/delete-item", {id: e.target.getAttribute("data-id") })
    .then((response) => {
       console.log(response.data);
    e.target.parentElement.parentElement.remove();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling!");
    });
  } 
 }

 // edit oper
if (e.target.classList.contains("edit-me")) {
  alert("siz edit tugmasini bosdingiz");
 }

});