import './App.css';
import { useState } from 'react'
import UserForm from './components/UserForm';
import ItemList from './components/ItemList';

function App() {

  const [userList, setUserList] = useState([])
  const addNewUserHandler = data => {
    setUserList( prevList => {
      return [ data, ...prevList]
    })
  }

  const deleteUserHandler = userId =>{
    setUserList( prevList =>{
      const updatedUserList = prevList.filter(users => users.id !== userId);
      return updatedUserList;
    })
  }

  return (
    <div>
      <UserForm onAddUser = { addNewUserHandler } />
      <ItemList list = { userList } onDeleteUser = {deleteUserHandler} />
    </div>
  );
}

export default App;
