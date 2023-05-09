// 1 Розрахувати суму перших N елементів послідовності. N вказує користувач
// (наприклад n=4 , 1+2+3+4)

const summ = (num) => {
  result = 0;
  if (num >= 1) {
    result = num + summ(num - 1);
  }
  return result;
};

// 2.1 Створити об'єкт client який містить наступні властивості: id, ім'я, прізвище, стать, номер кредитної картки, кошти, рівень картки (базова, pro, diamond ...)
// 2.2 Створити об'єкт банку, який має назву, контактні дані.
// 2.3 У банку створити властивість cardLevels, значення якої буде Мапою, в якій ключами будуть назви рівнів карток, а значенням - об'єкти з властивостями знижки, кешбеку та кредитного ліміту
// 2.4 Створити функцію яка буде повертати стрінгу з усіма даними користувача та даними, пов'язаними з його кредитною карткою
// 2.4* Якщо в банку немає рівня кредитної картки користувача (можливо вони його видалили) то використовувати значення знижки, кешбеку та кредитного ліміту як для базової картки

const client = {
  id: 1,
  firstName: "Vasya",
  lastName: "Petrov",
  gender: "male",
  creditCardNumber: "1234567890123456",
  balance: 1000,
  cardLevel: "pro",
};
const bank = {
  name: "MMM - Trust Me",
  contact: "123-456-789",
};

bank.cardLevels = new Map();

bank.cardLevels.set("base", {
  discount: 0,
  cashback: 0,
  creditLimit: 1000,
});

bank.cardLevels.set("pro", {
  discount: 10,
  cashback: 1,
  creditLimit: 5000,
});

bank.cardLevels.set("diamond", {
  discount: 20,
  cashback: 2,
  creditLimit: 10000,
});

function getUserInfo(client, bank) {
  let cardLevelData = bank.cardLevels.get(client.cardLevel);

  if (!cardLevelData) {
    cardLevelData = bank.cardLevels.get("base");
  }

  const userInfo = `
      ID: ${client.id}
      name: ${client.firstName}
      surname: ${client.lastName}
      gender: ${client.gender}
      card Number: ${client.creditCardNumber}
      Currency: ${client.balance}
      card Level: ${client.cardLevel}
      Discount: ${cardLevelData.discount}%
      Cashback: ${cardLevelData.cashback}%
      Credit Limit: ${cardLevelData.creditLimit}
    `;

  return userInfo;
}

// 3.1 Створити масив з числами на 20+ елементів.
// 3.2 Вивести в коносль всі елементи з парними індексами
// 3.3 Вивести в конволь всі неперані числа
// 3.4 Вивести індекси всіх негативних чисел ( якщо таких немає то додати 1 - 2 для перевірки)
// 3.5 Порахувати кількість 0 в масиві чисел

let numbers = [];

function randomArray(num) {
  for (let i = 0; i < num; i++) {
    let randomNum = Math.round(Math.random() * 100);
    numbers.push(randomNum);
  }
}

randomArray(20);


function ArrayMethods(arr) {

  this.pairIndex = function () {
    const filteredArray = arr.filter((elem, index) => index % 2 === 0);
    return filteredArray;
  };

  this.oddNumbers = function () {
    const oddNum = arr.filter((elem) => elem % 2 !== 0);
    return oddNum;
  };

  this.indexOfNegative = function () {
    const result = arr.map((elem, index) => {
      if (elem < 0) {
        console.log(index);
      }
    });
    return result;
  };

  this.zeroCount = function () {
    let counter = 0;
    const result = arr.map((elem) => {
      if (elem === 0) {
        counter++;
      }
    });
    return counter;
  };
}
const arrayAct = new ArrayMethods(numbers);

// 4 Створити класи:
// - Книжка (автор, назва, рік видання, видавництво)
// - Електронна книжка (автор, назва, рік видання, видавництво, формат книжки, електронний номер)

class Book {
  constructor(author, name, yop, publisher) {
    this.author = author;
    this.name = name;
    this.yop = yop;
    this.publisher = publisher;
  }
}

class Ebook extends Book {
  constructor(author, name, yop, publisher, format, enumber) {
    super(author, name, yop, publisher);
    this.format = format;
    this.enumber = enumber;
  }
}

const someBook = new Book("asd", "asd", 2010, "asds");
const someEBook = new Ebook("asdaa", "asdaa", 2019, "asds", "sd", 23215);
// 5
// Написати функцію, яка виводить в консоль числа від  1 до n, где n — це ціле число, яки функція приймає. Функція також має наступні вимоги:
// вивід рядка fizzbuzz замість чисел, кратних 3 та 5.
// вивід рядка  fizz замість чисел, кратних  3;
// вивід рядка  buzz замість чисел, кратних  5;

function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log("fizzbuzz");
        break;
      case i % 3 === 0:
        console.log("fizz");
        break;
      case i % 5 === 0:
        console.log("buzz");
        break;
      default:
        console.log(i);
    }
  }
}

// 6
// Ви отримуєте з сервера наступну структуру:
const serverResponse = {
    data: {
        data: [
            {
                id: 0,
                name: 'John',
                lastName: 'Doe'
            },
            {
                id: 1,
                name: 'Jane',
                lastName: 'Doe'
            },
            {
                id: 2,
                name: 'Admin',
                lastName: 'Tiranovich'
            },
            {
                id: 3,
                name: 'User',
                lastName: 'Undefinovich'
            },
        ]
    }
}

const { data: { data: users } } = serverResponse;

const [, user2, user3] = users;

// За допомогою деструктурізації:
// - створити змінну users на основании массива ,що містить масив користувачів з об'єкту serverResponse
// - створити окремі змінні для 2 та 3 користувача
