import { model } from 'mongoose';
import { Schema } from 'mongoose';

const noteSchema = new Schema(
  {
   title: {
      type: String,
      required: true,
      trim: true, // прибирає пробіли на початку та в кінці
    },
    content: {
      type: String,
      default: '',
      required: false,
      trim: true,
    },
    gender: {
      tag: String,
      required: false,
      enum: [ 'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',],
    },

  },
  {
    timestamps: true,
  },
);
export const Note = model('note', noteSchema);
