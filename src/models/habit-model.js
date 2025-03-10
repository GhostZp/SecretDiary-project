import promisePool from '../utils/database.js';

// inserting a habit entry into database
const insertHabit = async (entry) => {
  try {
    const [result] = await promisePool.query(
      'INSERT INTO HabitTracker (user_id, entry_date, drank_water, exercised, did_hobby, spent_money, bad_habit, drank_alcohol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        entry.user_id,
        entry.entry_date,
        entry.drank_water,
        entry.exercised,
        entry.did_hobby,
        entry.spent_money,
        entry.bad_habit,
        entry.drank_alcohol,
      ],
    );
    console.log('insertHabit', result);
    // return only first item of the result array
    return result.insertId;
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// selecting a habit entry by users id
const selectHabitByUserId = async (userId) => {
  try {
    const [rows] = await promisePool.query(
      'SELECT * FROM HabitTracker WHERE user_id=?',
      [userId],
    );
    console.log(rows);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// selecting a habit entry by it's entry id
const selectHabitByEntryId = async (entryId) => {
  try {
    const [rows] = await promisePool.query(
      'SELECT * FROM HabitTracker WHERE entry_id=?',
      [entryId],
    );
    console.log(rows);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// updating a habit entry by it's entry id
const updateHabitByEntryId = async (id, drank_water, exercised, did_hobby, spent_money, bad_habit, drank_alcohol) => {
  try {
    const [result] = await promisePool.query(
      'UPDATE HabitTracker SET drank_water = ?, exercised = ?, did_hobby = ?, spent_money = ?, bad_habit = ?, drank_alcohol = ? WHERE entry_id = ?',
      [drank_water, exercised, did_hobby, spent_money, bad_habit, drank_alcohol, id],
    );
    console.log('Rows affected:', result.affectedRows);
    return result; // Returning result object
  } catch (error) {
    console.error(error);
    throw new Error('Database error');
  }
};

// deleting a habit entry by it's entry id
const deleteHabitByEntryId = async (id) => {
  try {
    const [result] = await promisePool.query(
      'DELETE FROM HabitTracker WHERE entry_id = ?',
      [id],
    );

    console.log('Rows affected:', result.affectedRows);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Database error');
  }
};

export {
  insertHabit,
  selectHabitByUserId,
  selectHabitByEntryId,
  updateHabitByEntryId,
  deleteHabitByEntryId
};
