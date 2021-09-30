const saveTokenLocalStorage = (token) => {
  localStorage.setItem('taskListToken', token);
};

const readTokenLocalStorage = () => localStorage.getItem('taskListToken');

module.exports = { saveTokenLocalStorage, readTokenLocalStorage };
