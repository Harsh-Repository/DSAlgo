//Q2. Check if the user creds match with the stored data. Return a " Login Successful" of "Incorrect details" accordingly.
//Input : username -> jane123, password -> jane321

let users = [
  {
    id: 1,
    name: "John",
    username: "john123",
    password: "john123",
  },
  {
    id: 2,
    name: "Jane",
    username: "jane123",
    password: "jane123",
  },
  {
    id: 3,
    name: "jenny",
    username: "jenny123",
    password: "jenny123",
  },
];

let inputUserName = "jane123";
let inputUserPassword = "jane123";
let result = "";
for (let index = 0; index < users.length; index++) {
  if (
    users[index].username === inputUserName &&
    users[index].password === inputUserPassword
  ) {
    result = users[index].username + " login successful";
    break;
  } else {
    result = "Login failed!";
  }
}

console.log(result);
