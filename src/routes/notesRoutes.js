import { Router } from 'express';
import {
	getAllNotes,
	getNoteById,
  createNote,
  deleteNote,
  updateNote
} from '../controllers/notesCotroller.js';

const router = Router();

router.get('/notes', getAllNotes);

router.get('/notes/:notetId', getNoteById);


router.post('/notes', createNote);

router.delete('/notes/:noteId', deleteNote);

router.patch('/notes/:noteId', updateNote);

export default router;
