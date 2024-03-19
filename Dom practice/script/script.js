const users = [
  { name: "Mackenzie Chen", money: 666763 },
  { name: "Ernest Gomez", money: 978190 },
  { name: "Kate Chen", money: 427275 },
  { name: "Johan Nielsen", money: 330464 },
  { name: "Hans Nyseth", money: 339038 },
  { name: "Matias Halko", money: 104075 },
  { name: "Dustin Dunne", money: 676167 },
  { name: "Julia Denys", money: 900215 },
  { name: "Alexander Ma", money: 165423 },
];
let usedUsers = [];
let userNum = 1;

function generateRandomUsers() {
  for (let i = 0; i < 3; i++) {
    generateUser();
  }
}

function clearAndGenerateUsers() {
  document.querySelector(
    ".person-container"
  ).innerHTML = `<div class="head-container">
  <h2>Person</h2>
  <h2 class="asd">Wealth</h2>
</div>`;
  for (let i of usedUsers) {
    document.querySelector(".person-container").innerHTML += `
  <div class="person">
  <h2>${i.name}</h2>
  <h2 class="asd">$<span class="money-container${usedUsers.indexOf(i) + 1}">${
      i.money
    }</span>.00</h2>
</div>`;
  }
}

function generateUser() {
  let num = Math.floor(Math.random() * users.length);
  let user = users[num];
  document.querySelector(".person-container").innerHTML += `
       <div class="person">
       <h2>${user.name}</h2>
       <h2 class="asd">$<span class="money-container${userNum}">${user.money}</span>.00</h2>
     </div>`;
  userNum++;
  usedUsers.push(user);
  users.splice(num, 1);
}

function doubleMoney() {
  usedUsers.map((a) => (a.money = a.money * 2));
  for (let i of usedUsers) {
    document.querySelector(
      `.money-container${usedUsers.indexOf(i) + 1}`
    ).textContent = i.money;
  }
}

function showMillionaires() {
  userNum = 1;
  usedUsers = usedUsers.filter((a) => a.money >= 1000000);
  clearAndGenerateUsers();
}

function sortRichest() {
  usedUsers.sort((a, b) => b.money - a.money);
  clearAndGenerateUsers();
}

function entireWealth() {
  const wealth = usedUsers.reduce((a, b) => a + b.money, 0);
  document.querySelector(".person-container").innerHTML += `
       <div class="person wealth">
       <h2 class="wealth-title">Total Wealth</h2>
       <h2 class="asd">$<span class="money-container${userNum}">${wealth}</span>.00</h2>
     </div>`;
}

document.querySelector(".add-user").addEventListener("click", generateUser);
document.querySelector(".double-money").addEventListener("click", doubleMoney);
document
  .querySelector(".only-millionaires")
  .addEventListener("click", showMillionaires);

generateRandomUsers();
document.querySelector(".sort").addEventListener("click", sortRichest);
document.querySelector(".calc").addEventListener("click", entireWealth);
