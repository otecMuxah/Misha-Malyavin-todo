import { Greeting } from '../greeting/Greeting';
import { UserList } from '../UserList/UserList';

const userList = [{ name: 'Misha', age: '22' }, { name: 'Sasha', surname: 'Rysenko' }];

export const Content = () =>
  (
    <div className="content">
      <Greeting name="Misha" />
      <UserList list={userList} />
    </div>
  );
