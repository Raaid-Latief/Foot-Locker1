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
    <div class="col-md-12 d-flex justify-content-center my-4">
        <div id="users">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User</th>
            <th scope="col">Email</th>
            <th scope="col">Pass</th>
            <th scope="col">Role</th>
            <th scope="col">Number</th>
            <th scope="col">Join Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${user.user_id}</th>
            <td>${user.fullname}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.userRole}</td>
            <td>${user.phoneNumber}</td>
            <td> ${user.joinDate}</td>
          </tr>
        
      </table>
        </div>
    </div>
    `;
  });
}


