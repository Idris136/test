import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import getAllUsers from './redux/slices/users/userThunks';
import UserList from './components/ui/userList/UserList';
import Notify from './components/ui/notify/Notify';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getAllUsers());
  }, [dispatch]);

  const users = useAppSelector((state) => state.user.users);

  return (
    <><div className="container">
    <UserList users={users} />
  </div>
  <Notify /></>
  );
}

export default App;

