import React from 'react';
import UserItem from '../userItem/UserItem';
import { type UserType } from '../../../types/user';
import './userList.css'

type Props = {
  users: UserType[];
};

export default function UserList({ users }: Props): JSX.Element {
  return (
    <div className="container">
      <h1 className="center">Список пользователей</h1>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
