import * as data from './users.js';
let users = data.default;

function getUserNames(users) {
  return users.map(num => num.name);
}

console.table(getUserNames(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor == color);
};

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.table(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Получить массив только неактивных пользователей(поле isActive).
const getInactiveUsers = users => {
  // твой код
  return users.filter(user => user.isActive === false);
};

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Получить пользоваля(не массив) по email(поле email, он уникальный).
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email == email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).

const getUsersWithAge = (users, min, max) => {
  // твой код
  return users.filter(user => user.age >= min && user.age <= max);
};

console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = users => {
  return users.reduce((acc, item) => {
    acc += item.balance;
    return acc;
  }, 0);
};

console.table(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
  const hasNeededFriend = user => {
    return user.friends.filter(friend => friend === friendName).length > 0
      ? true
      : false;
  };
  // твой код
  return users.filter(user => hasNeededFriend(user)).map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = users => {
  const countFriendsOf = user => {
    return user.friends.length;
  };
  return users
    .sort((a, b) => countFriendsOf(a) - countFriendsOf(b))
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = users => {
  // generate skills
  const generateSkillsFrom = users => {
    let totalSkills = [];
    const updateTotalSkillsWith = skills => {
      skills.forEach(skill => {
        totalSkills.includes(skill) ? null : totalSkills.push(skill);
      });
    };

    users.forEach(user => updateTotalSkillsWith(user.skills));
    return totalSkills.sort();
  };

  return generateSkillsFrom(users);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
