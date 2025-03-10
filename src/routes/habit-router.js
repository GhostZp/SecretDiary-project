import express from 'express';
import { postHabit, getHabits } from '../controllers/habit-controller.js';
import {authenticateToken} from '../middlewares/authentication.js';
import {body} from 'express-validator';
import {validationErrorHandler} from '../middlewares/error-handler.js';

const habitRouter = express.Router();

// post to /api/habits
habitRouter
  .route('/')
  .post(
    authenticateToken,
    body('entry_date').notEmpty().isISO8601(),
    body('drank_water').isBoolean(),
    body('exercised').isBoolean(),
    body('did_hobby').isBoolean(),
    body('spent_money').isBoolean(),
    body('bad_habit').isBoolean(),
    body('drank_alcohol').isBoolean(),
    validationErrorHandler,
    postHabit,
  )
  .get(authenticateToken, getHabits);

export default habitRouter;