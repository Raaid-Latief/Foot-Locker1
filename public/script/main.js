let users = [];
let products = [];


const userContainer = document.getElementById("users");
const prodContainer = document.getElementById("products");

fetch('https://foot-locker.herokuapp.com/users')
  .then((res) => res.json())
  .then((data) => {
    users = data;
    console.log(data);
    showUsers(data);
  });

function showUsers(users) {
  //   prodContainer.innerHTML = "";
  users.forEach((user) => {
    userContainer.innerHTML += `
    <div class="col-md-6 d-flex justify-content-center my-4">
        <div id="users" clas="w-100">
            <div class='text-center'>
                <h2 id="userId" class="text-muted">${user.user_id}</h2>
                <h4 id="userFullName">${user.fullname}</h4>
                <p id="userBillingAddress">Billing Address: ${user.email}</p>
                <p id="userDefaultShippingAddress">Shipping Address: ${user.password}</p>
                <p id="userCountry">Country: ${user.userRole}</p>
                <p id="userPhone">Phone: ${user.phoneNumber}</p>
                <p id="userType">User Type: ${user.joinDate}</p>
            </div>
        </div>
    </div>
    `;
  });
}


fetch('https://foot-locker.herokuapp.com/products')
  .then((res) => res.json())
  .then((data) => {
    items = data;
    console.log(data);
    showItems(data);
  });

function showItems(products) {
  //   prodContainer.innerHTML = "";
  products.forEach((product) => {
    prodContainer.innerHTML += `
    <div class="col-md-6 d-flex justify-content-center my-4">
        <div id="Products" clas="w-100">
            <div class='d-flex justify-content-center'>
                <img id="productImage" src="${product.imgURL}" alt=${product.name}/>
            </div>
            <div class='text-center'>
                <h2 id="productName">${product.title}</h2>
                <h4 id="productDescriptions">${product.description}</h4>
                <p id="productPrice">Price: R${product.price}</p>
                <p id="productStock">Stock: ${product.quantity}</p>
                <button>Add to cart<button>
            </div>
        </div>
    </div>
    `;
  });
}

async function Login(e) {
  e.preventDefault();
  const response = await fetch(
    "https://foot-locker.herokuapp.com/users/login",
    {
      method: "POST",
      body: JSON.stringify({
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  alert("Logged in successfully");
  return data;
}