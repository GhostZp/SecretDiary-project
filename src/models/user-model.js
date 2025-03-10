import promisePool from '../utils/database.js';

// selecting all users from database
const selectAllUsers = async () => {
  const [rows] = await promisePool.query(
    'SELECT user_id, username, email, created_at, user_level FROM Users',
  );
  console.log('selectAllUsers result', rows);
  return rows;
};

// selecting user by users id
const selectUserById = async (userId) => {
  try {
    const [rows] = await promisePool.query(
      'SELECT user_id, username, email, created_at, user_level FROM Users WHERE user_id=?',
      [userId],
    );
    console.log(rows);
    // return only first item of the result array
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// inserting a new user into database
const insertUser = async (user) => {
  try {
    const [result] = await promisePool.query(
      'INSERT INTO Users (username, password, email) VALUES (?, ?, ?)',
      [user.username, user.password, user.email],
    );
    console.log('insertUser', result);
    // return only first item of the result array
    return result.insertId;
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// selecting a user from db by users name and password
const selectUserByNameAndPassword = async (username, password) => {
  try {
    const [rows] = await promisePool.query(
      'SELECT user_id, username, email, created_at, user_level FROM Users WHERE username=? AND password=?',
      [username, password],
    );
    console.log(rows);
    // return only first item of the result array
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// selecting a user by users username
const selectUserByUsername = async (username) => {
  try {
    const [rows] = await promisePool.query(
      'SELECT user_id, username, password, email, created_at, user_level FROM Users WHERE username=?',
      [username],
    );
    console.log(rows);
    // return only first item of the result array
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// updating users info
const updateUser = async (id, username, password, email) => {
  try {
    const [result] = await promisePool.query(
      'UPDATE users SET username = ?, password = ?, email = ? WHERE user_id = ?',
      [username, password, email, id] // Ensure all placeholders have values
    );

    console.log("Rows affected:", result.affectedRows);
    return result; // Returning result object
  } catch (error) {
    console.error(error);
    throw new Error('Database error');
  }
};

// deleting a user from db based on users id
const deleteUserById = async (id) => {
  try {
    const [result] = await promisePool.query (
      'DELETE FROM users WHERE user_id = ?',
      [id]
    );

    console.log("Rows affected:", result.affectedRows);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Database error');
  }
};


export {
  selectAllUsers,
  selectUserById,
  insertUser,
  selectUserByNameAndPassword,
  selectUserByUsername,
  updateUser,
  deleteUserById,
};