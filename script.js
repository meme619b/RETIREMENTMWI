// script.js

let mockUserData = {
  totalBalance: 85000,
  estimatedRetirementBalance: 275000,
  accounts: [
    { name: "401(k)", balance: 50000 },
    { name: "Roth IRA", balance: 25000 },
    { name: "HSA", balance: 10000 }
  ],
  growthData: [10000, 20000, 30000, 45000, 60000, 70000, 85000]
};

const loginScreen = document.getElementById("login-screen");
const dashboardScreen = document.getElementById("dashboard-screen");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");

const login = async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    loginError.textContent = error.message;
  }
};

const logout = () => {
  firebase.auth().signOut();
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    showDashboard(user);
  } else {
    showLogin();
  }
});

const showLogin = () => {
  dashboardScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
};

const showDashboard = (user) => {
  loginScreen.classList.add("hidden");
  dashboardScreen.classList.remove("hidden");

  document.getElementById("user-email").textContent = user.email;
  document.getElementById("total-balance").textContent = mockUserData.totalBalance.toLocaleString();
  document.getElementById("estimated-balance").textContent = mockUserData.estimatedRetirementBalance.toLocaleString();

  const accountsList = document.getElementById("accounts-list");
  accountsList.innerHTML = "";
  mockUserData.accounts.forEach((account) => {
    const li = document.createElement("li");
    li.textContent = `${account.name}: $${account.balance.toLocaleString()}`;
    accountsList.appendChild(li);
  });

  renderChart(mockUserData.growthData);
};

const renderChart = (data) => {
  const ctx = document.getElementById("balanceChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Yr 1", "Yr 2", "Yr 3", "Yr 4", "Yr 5", "Yr 6", "Yr 7"],
      datasets: [{
        label: "Balance Over Time",
        data: data,
        borderWidth: 2,
        borderColor: "#005aa7",
        backgroundColor: "rgba(0,90,167,0.1)",
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top"
        }
      }
    }
  });
};
