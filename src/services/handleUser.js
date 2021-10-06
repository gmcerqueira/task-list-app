const saveUserLocalStorage = (user) => {
  const proprieties = (Object.values(user));
  const valid = proprieties.includes('');

  if (!valid) localStorage.setItem('taskListUser', JSON.stringify(user));
};

const readUserLocalStorage = () => JSON.parse(localStorage.getItem('taskListUser'));
const deleteUserLocalStorage = () => localStorage.removeItem('taskListUser');

module.exports = { saveUserLocalStorage, readUserLocalStorage, deleteUserLocalStorage };
