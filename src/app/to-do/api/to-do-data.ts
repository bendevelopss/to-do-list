import {Todo} from '../to-do';

export const TODO_ITEMS: Todo[] = [
 {
   id: 1,
   name: 'Meet a friend',
   notes: 'Meet Supervisor',
   due: new Date(new Date().setDate(new Date().getDate() + 4)),
   done: false
 }, {
   id: 2,
   name: 'Go to KFC',
   notes: 'Eat lunch',
   due: new Date(new Date().setDate(new Date().getDate() + 5)),
   done: false
 }, {
   id: 3,
   name: 'Code',
   notes: 'code code code',
   due: new Date(new Date().setDate(new Date().getDate() - 1)),
   done: true
 }
];