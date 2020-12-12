import { User } from './models/User';

const user = new User({ name: 'name', age: 25 });

user.on('change', () => {
  console.log('Change 1');
});
user.on('change', () => {
  console.log('Change 2');
});
user.on('save', () => {
  console.log('Save');
});

user.trigger('change');

console.log(user);
