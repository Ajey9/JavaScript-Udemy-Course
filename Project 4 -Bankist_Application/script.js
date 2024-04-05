const account1 = {
  owner: "Ajay Deepak Gathadi",
  movements: [10000, 15000, 20000, -18590, -5630, 2130, 3456, 3453, -2000],
  movementDates: [
    "2023-12-01T07:59:01.921Z",
    "2023-12-02T07:59:01.921Z",
    "2023-12-03T07:59:01.921Z",
    "2023-12-04T07:59:01.921Z",
    "2023-12-06T07:59:01.921Z",
    "2023-12-08T07:59:01.921Z",
    "2023-12-10T07:59:01.921Z",
    "2023-12-12T07:59:01.921Z",
    "2023-12-15T07:59:01.921Z",
  ],
  interestRate: 1.2,
  pin: 8955,
  locale: "en-IN",
};

const account2 = {
  owner: "Deepak Dattatray Gathadi",
  movements: [
    14000, 12399, -343567, 457892, 89, -987, 8745, -5712, -50000, 12309,
  ],
  movementDates: [
    "2023-12-01T07:59:01.921Z",
    "2023-12-02T07:59:01.921Z",
    "2023-12-03T07:59:01.921Z",
    "2023-12-04T07:59:01.921Z",
    "2023-12-06T07:59:01.921Z",
    "2023-12-08T07:59:01.921Z",
    "2023-12-10T07:59:01.921Z",
    "2023-12-12T07:59:01.921Z",
    "2023-12-15T07:59:01.921Z",
  ],
  interestRate: 1.5,
  pin: 8652,
  locale: "en-IN",
};

const account3 = {
  owner: "Geeta Deepak Gathadi",
  movements: [14567, 3869, -9876, 2000, 20000, -10000, 134523],
  interestRate: 1.6,
  movementDates: [
    "2023-12-01T07:59:01.921Z",
    "2023-12-02T07:59:01.921Z",
    "2023-12-03T07:59:01.921Z",
    "2023-12-04T07:59:01.921Z",
    "2023-12-06T07:59:01.921Z",
    "2023-12-08T07:59:01.921Z",
    "2023-12-10T07:59:01.921Z",
    "2023-12-12T07:59:01.921Z",
    "2023-12-15T07:59:01.921Z",
  ],
  pin: 9892,
  locale: "en-IN",
};

const account4 = {
  owner: "Rutu Manjunath Shastri",
  movements: [22000, 3000, 7000, 1000, 6000, -5000, -2000, -3000, -128],
  movementDates: [
    "2023-12-01T07:59:01.921Z",
    "2023-12-02T07:59:01.921Z",
    "2023-12-03T07:59:01.921Z",
    "2023-12-04T07:59:01.921Z",
    "2023-12-06T07:59:01.921Z",
    "2023-12-08T07:59:01.921Z",
    "2023-12-10T07:59:01.921Z",
    "2023-12-12T07:59:01.921Z",
    "2023-12-15T07:59:01.921Z",
  ],
  interestRate: 1.5,
  pin: 8998,
  locale: "en-IN",
};

const account5 = {
  owner: "Aditya Borhade",
  movements: [1, 2, 3, 4, 5],
  movementDates: [
    "2023-12-01T07:59:01.921Z",
    "2023-12-02T07:59:01.921Z",
    "2023-12-03T07:59:01.921Z",
    "2023-12-04T07:59:01.921Z",
    "2023-12-06T07:59:01.921Z",
  ],
  interestRate: 1,
  pin: 1234,
  locale: "en-IN",
};

const account6 = {
  owner: "Shobikaa Kathiraavan",
  movements: [50, 1000, 20000, 24000, 5000, 3000, -6758, -3000, -989],
  movementDates: [
    "2023-12-01T07:59:01.921Z",
    "2023-12-02T07:59:01.921Z",
    "2023-12-03T07:59:01.921Z",
    "2023-12-04T07:59:01.921Z",
    "2023-12-06T07:59:01.921Z",
    "2023-12-10T07:59:01.921Z",
    "2023-12-12T07:59:01.921Z",
    "2023-12-16T07:59:01.921Z",
    "2023-12-20T07:59:01.921Z",
  ],
  interestRate: 1,
  pin: 7328,
  locale: "en-IN",
};
const accounts = [account1, account2, account3, account4, account5, account6];

const welcomeScreen = document.querySelector(".welcome");

const dateCurrentBalance = document.querySelector(".balance__date");

const labelcurrentBalance = document.querySelector(".balance__value");
const labelSummaryIn = document.querySelector(".summary__value--in");
const labelSummaryOut = document.querySelector(".summary__value--out");
const labelSummaryInterest = document.querySelector(
  ".summary__value--interest"
);

const containerMovements = document.querySelector(".movements");
const containerMovementsWithdrawal = document.querySelector(
  ".movements__type--withdrawal"
);
const containerApp = document.querySelector(".app");

const inputuserName = document.querySelector(".login__input--user");
const inputuserPin = document.querySelector(".login__input--pin");
const loginButton = document.querySelector(".login__button");

const inputTransferAmount = document.querySelector(".form__input--amount");
const buttonTransfer = document.querySelector(".form__button--transfer");
const transferTo = document.querySelector(".form__input--to");

const buttonLoanRequest = document.querySelector(".form__button--loan");
const inputloanAmount = document.querySelector(".form__input--loan-amount");

const closeAccount = document.querySelector(".operation--close");
const buttoncloseAccount = document.querySelector(".form__button--close");
const closeAccountInputuserName = document.querySelector(".form__input--user");
const closeAccountInputuserPIN = document.querySelector(".form__input--pin");

const sortingMovements = document.querySelector(".button--sort");

const logoutTimer = document.querySelector(".timer");

let summaryIn;
let currentAccount;
let timer;

function currencyFormatter(value, locale) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function displayMovements(account, sort = false) {
  console.log(account.movements);
  const transactions = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  containerMovements.innerHTML = "";
  transactions.forEach(function (movementElement, index) {
    const typeOfMovement = movementElement > 0 ? "deposit" : "withdrawal";

    const dates = new Date(account.movementDates[index]);
    const displayDates = calenderDates(dates);

    const formattedMovement = currencyFormatter(
      movementElement,
      account.locale
    );

    const htmlMovements = `
        <div class="movements__row">
          <div class="movements__type movements__type--${typeOfMovement}">${
      index + 1
    }: ${typeOfMovement}</div>
    <div class="movements__date">${displayDates}</div>
          <div class="movements__value">
           ${formattedMovement}
          </div>
        </div>
        `;
    // ${movementElement.toFixed(2)} Rupees
    containerMovements.insertAdjacentHTML("afterbegin", htmlMovements);
  });
}

function currentBalance(account) {
  account.balance = account.movements.reduce(
    (accumulator, currentMovement) => accumulator + currentMovement,
    0
  );
  labelcurrentBalance.textContent = `${currencyFormatter(
    account.balance,
    account.locale
  )}`;
  // `${account.balance.toFixed(2)} Rupees`;

  // const currentDate = new Date();
  // const day = currentDate.getDate();
  // const month = currentDate.getMonth() + 1; //Months are 0 index based
  // const year = currentDate.getFullYear();
  // const hours = currentDate.getHours();
  // const minutes = currentDate.getMinutes();
  // const seconds = currentDate.getSeconds();

  // dateCurrentBalance.textContent = `On ${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`;

  const now = new Date();
  dateCurrentBalance.textContent = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(now);
}

const createUserName = function (accountUser) {
  accountUser.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserName(accounts);

function displaySummary(userAccount) {
  summaryIn = userAccount.movements
    .filter((movement) => movement > 0)
    .reduce((accumulator, currentMovement) => accumulator + currentMovement, 0);
  labelSummaryIn.textContent = `${currencyFormatter(
    summaryIn,
    userAccount.locale
  )} `;

  const summaryOut = userAccount.movements
    .filter((movement) => movement < 0)
    .reduce(
      (accumulator, currentMovement) =>
        Math.abs(accumulator) + Math.abs(currentMovement),
      0
    );
  labelSummaryOut.textContent = `${currencyFormatter(
    summaryOut,
    userAccount.locale
  )} `;

  const interest = userAccount.movements
    .filter((movement) => movement > 0)
    .map((eachMovement) => (eachMovement * userAccount.interestRate) / 100)
    .reduce((accumulator, interest) => accumulator + interest, 0);
  labelSummaryInterest.textContent = `${currencyFormatter(
    interest,
    userAccount.locale
  )} `;
}

function updateUI(account) {
  displayMovements(account);
  currentBalance(account);
  displaySummary(account);
}

function calenderDates(date) {
  console.log(date);
  const calculateDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calculateDaysPassed(new Date(), date);
  console.log(daysPassed);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  console.log(day, month, year);
  if (daysPassed === 0) {
    return `Today`;
  }
  // return `${day}-${month}-${year}`;
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
}

function timeInterval() {
  let time = 300;
  timer = setInterval(function () {
    const minutes = String(Math.floor(time / 60)).padStart(2, 0);
    const seconds = String(time % 60).padStart(2, 0);

    logoutTimer.textContent = `${minutes}:${seconds}`;

    if (time === 0) {
      clearInterval(timer);
      welcomeScreen.textContent = "Log in to get Started";
      containerApp.style.opacity = 0;
    }

    time--;
  }, 1000);

  return timer;
}

/* -----Login----- */
loginButton.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (user) => user.userName === inputuserName.value
  );
  if (currentAccount?.pin === +inputuserPin.value) {
    welcomeScreen.textContent = `Welcome ${currentAccount.owner.split(" ")[0]}`;
  }

  containerApp.style.opacity = 100;

  inputuserName.value = inputuserPin.value = "";
  inputuserPin.blur();

  /* --- LogOut Timer --- */
  if (timer) clearInterval(timer);
  timeInterval();

  updateUI(currentAccount);
});

/* ---Transfer Amount --- */
buttonTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const transferAmount = +inputTransferAmount.value;
  const transferToUser = accounts.find(
    (account) => account.userName === transferTo.value
  );

  if (
    transferAmount > 0 &&
    currentAccount.balance >= transferAmount &&
    transferToUser &&
    transferToUser.userName !== currentAccount.userName
  ) {
    console.log("Transferred");
    currentAccount.movements.push(-transferAmount);
    transferToUser.movements.push(transferAmount);

    if (timer) clearInterval(timer);
    timeInterval();

    currentAccount.movementDates.push(new Date());
    transferToUser.movementDates.push(new Date());
  } else if (!transferToUser) {
    containerApp.innerHTML = "";

    const htmlAppMessage = `This account doesn't exist`;

    containerApp.insertAdjacentText("afterbegin", htmlAppMessage);
  }

  inputTransferAmount.value = transferTo.value = "";
  updateUI(currentAccount);
});

/* --- Requesting a loan amount --- */
buttonLoanRequest.addEventListener("click", function (e) {
  e.preventDefault();

  const bankBalance = currentAccount.balance;

  /* --Having a condition to give a loan amount till 50% of bank balance or
       If the amount entered by user is <=50% of bankBalance then credit that amount to account -- */
  const bankBalance_50 = bankBalance * 0.5;

  const loanAmountRequested = Math.floor(inputloanAmount.value);

  if (loanAmountRequested <= bankBalance_50) {
    setTimeout(function () {
      currentAccount.movements.push(loanAmountRequested);
      currentAccount.movementDates.push(new Date());
      updateUI(currentAccount);

      clearInterval(timer);
      timeInterval();
    }, 5000);
  } else {
    document.querySelector(".app").textContent =
      "Loan Amount requested should be less than or equal to 50% of Bank Balance";
  }
  inputloanAmount.value = "";
});

//Close Account
buttoncloseAccount.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(currentAccount);
  if (
    currentAccount.userName === closeAccountInputuserName.value &&
    currentAccount.pin === +closeAccountInputuserPIN.value
  ) {
    setTimeout(function () {
      const index = accounts.findIndex(
        (account) => account.userName === currentAccount.userName
      );
      accounts.splice(index, 1);
      containerApp.style.opacity = 0;
    }, 5000);
  }
  closeAccountInputuserName.value = closeAccountInputuserPIN.value = "";
  console.log(accounts);
});

//Sorting the Movements
let sorted = false;
sortingMovements.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/* --- Calculating the sum total of all the Deposits and Withdrawals from all or one account --- */

/*
const { deposit, withdrawal } = accounts
  .flatMap((account) => account.movements)
  .reduce(
    (total, currentMovement) => {
      /* ---Approach 1--- */
/*

      currentMovement > 0
        ? (total.deposit += currentMovement)
        : (total.withdrawal += currentMovement);

        */

/* ---Approach 2--- 
        More Cleaner Code
      */
/*
      total[currentMovement > 0 ? "deposit" : "withdrawal"] += currentMovement;
      return total;
    },
    { deposit: 0, withdrawal: 0 }
  );
console.log(`Total Amount Deposited in all of the Accounts is : ${deposit} Rupees,
And Total Amount Withdrew from all of the accounts is : ${Math.abs(
  withdrawal
)} Rupees`);
*/
