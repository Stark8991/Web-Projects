const search = document.getElementById("search");
const button = document.querySelector(".search_button");
const food_container = document.querySelector(".food_container");
const hearts = document.querySelector(".fa-heart");
const title = document.querySelector(".title");
const fav_meal_list = document.getElementById("fav_meal_list");

// clearing the search field
search.value = "";

const item_array = [];

// search by name with mouse click
button.addEventListener("click", () => {
  search_by_name();
});

// search by name with enter button

search.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    search_by_name();
  }
});

function search_by_name() {
  var value = search.value;
  if (food_container.childNodes.length != 0) {
    food_container.innerHTML = "";
  }
  foodName(value);
}
async function foodName(name) {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name
  );
  const data = await res.json();

  if (data.meals !== null) {
    var array_length = data.meals;
    creat_meal(array_length);
  } else {
    food_container.innerHTML = "Recpie not found";
  }
}
// Creating a innerHTML

function creat_meal(array_length, random) {
  if (random !== undefined) {
    random = `<span class="random_food_header">${random}</span>`;
  } else {
    random = "";
  }
  array_length.forEach((array) => {
    food_container.innerHTML += `
    <div class="Individual_food_items">
    <div class="food_image">
    ${random}
     <img src="${array.strMealThumb}"/>
    </div>
     <div class="food_context">
            <h3>${array.strMeal}</h3>
            <button class="fav-icon">
            <i class="fas fa-heart"  id="${array.idMeal}" onclick="mywishlist('${array.idMeal}', '${array.strMealThumb}', '${array.strMeal}')"></i>
            </button>
          </div>
    </div>
    `;
  });
}

// Wishlist a food recipe and remove from whishlist

function mywishlist(id, img, name) {
  var item_id_class = document.getElementById(id).classList;

  // const item_id_class = document.getElementById().classList;

  if (item_id_class.length < 3) {
    item_id_class.add("active");
    fav_meal_list.innerHTML += `<li id="${id + 1}">
    <img
              src="${img}"
              alt=""
              class="fav_items"
            />
            <span>${name}</span>
            <button class="close">
              <i class="fa fa-times cross" id="${
                id + 1
              }" onclick="remove()" aria-hidden="true"></i>
            </button>

          </li>`;

          localStorage.setItem(`${id}`,`${name}`);
  } else {
    item_id_class.remove("active");
    localStorage.removeItem(`${id}`);
    document.getElementById(id + 1).remove();
  }
}
function remove() {
  var id = document.querySelector(".cross").id;

  document.getElementById(id).remove();
}

// Random search

async function randomfood() {
  var random_meal_link = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  var meal_data = await random_meal_link.json();

  creat_meal(meal_data.meals, "Random Meal");
}


randomfood();
