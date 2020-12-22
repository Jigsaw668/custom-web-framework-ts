import { Collection } from './models/Collection';
import { User, UserProps} from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';

const user = User.buildUser({ name: 'NAME', age: 20 });

const userElement = document.querySelector('#user');

if (userElement) {
  const userEdit = new UserEdit(userElement, user);

  userEdit.render();
} else {
  throw new Error('user element not found');
}


const userListElement = document.querySelector('#user-list');

const users = new Collection('http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  if (userListElement) {
    new UserList(userListElement, users).render();
  } else {
    throw new Error('user list element not found');
  }
});

users.fetch();
