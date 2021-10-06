const saveTokenLocalStorage = (token) => {
  if (token)localStorage.setItem('taskListToken', token);
};
const readTokenLocalStorage = () => localStorage.getItem('taskListToken');

const deleteTokenLocalStorage = () => localStorage.removeItem('taskListToken');

module.exports = { saveTokenLocalStorage, readTokenLocalStorage, deleteTokenLocalStorage };
