const saveUserLocalStorage = (user) => {
  localStorage.setItem('taskListUser', JSON.stringify(user));
};

const readUserLocalStorage = () => JSON.parse(localStorage.getItem('taskListUser'));

module.exports = { saveUserLocalStorage, readUserLocalStorage };
