const { readUsers, writeUsers } = require("../database/userDB");

const getAllUsers = async (minAge) => {
  const users = await readUsers();
  if (minAge) {
    return users.filter((user) => user.age >= Number(minAge));
  }
  return users;
};

const getUserById = async (id) => {
  const users = await readUsers();
  return users.find((user) => user.id === Number(id));
};

const createUser = async (data) => {
  const users = await readUsers();
  const newUser = {
    id: users.length + 1,
    name: data.name,
    email: data.email,
    age: data.age,
    city: data.city,
  };
  users.push(newUser);
  await writeUsers(users);
  return newUser;
};

const updateUser = async (id, data) => {
  const users = await readUsers();
  const index = users.findIndex((user) => user.id === Number(id));
  if (index === -1) return null;
  const updatedUser = { ...users[index], ...data };
  users[index] = updatedUser;
  await writeUsers(users);
  return updatedUser;
};

const deleteUser = async (id) => {
  const users = await readUsers();
  const index = users.findIndex((user) => user.id === Number(id));
  if (index === -1) return false;
  users.splice(index, 1);
  await writeUsers(users);
  return true;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
