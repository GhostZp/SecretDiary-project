import {
  insertHabit,
  selectHabitByUserId,
  selectHabitByEntryId,
  updateHabitByEntryId,
  deleteHabitByEntryId,
} from '../models/habit-model.js';

// posting a habit entry
const postHabit = async (req, res) => {
  try {
    const newHabit = {
      ...req.body,
      user_id: req.user.user_id,
    };
    await insertHabit(newHabit);
    res.status(201).json({message: 'Habits added.'});
  } catch (error) {
    console.error('Error adding habits:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

// fetching habit entries
const getHabits = async (req, res) => {
  try {
    const habits = await selectHabitByUserId(req.user.user_id);
    res.json(habits);
  } catch (error) {
    console.error('Error fetching habits:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

// get an entry based on it's entry_id
const getHabitById = async (req, res) => {
  try {
    const entryId = parseInt(req.params.id, 10);
    const entry = await selectHabitByEntryId(entryId);

    if (!entry) {
      return res.status(404).json({message: 'Habits not found'});
    }

    res.json(entry);
  } catch (error) {
    console.error('Error fetching habits:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

// editing/updating entry information
const editHabits = async (req, res) => {
  console.log('editHabits request body', req.body);

  const {
    drank_water,
    exercised,
    did_hobby,
    spent_money,
    bad_habit,
    drank_alcohol
  } = req.body;
  const entryId = parseInt(req.params.id, 10);

  try {
    //check if entry exists
    const existingHabits = await selectHabitByEntryId(entryId);
    if (!existingHabits) {
      return res.status(404).json({message: 'Habits not found'});
    }

    //update entry
    await updateHabitByEntryId(entryId, {
      drank_water,
      exercised,
      did_hobby,
      spent_money,
      bad_habit,
      drank_alcohol
    });

    res.json({message: 'Habits updated successfully.'});
  } catch (error) {
    console.error('Error updating habits:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

// deleting a habit entry
const deleteHabits = async (req, res) => {
  console.log('deleteHabit', req.params.id);
  const entryId = parseInt(req.params.id, 10);

  try {
    const result = await deleteHabitByEntryId(entryId);
    if (result && result.affectedRows > 0) {
      res.json({message: 'Habits deleted.'});
    } else {
      res.status(404).json({message: 'Habits not found'});
    }
  } catch (error) {
    console.error('Error deleting habits:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

export {postHabit, getHabits, getHabitById, editHabits, deleteHabits};
