import UserItem from "./UserItem";
import './ItemList.module.css'

const ItemList = props => {

    return (
        <ul>
          {props.list.map(user => (
            <UserItem
              key={user.id}
              id={user.id}
              onDelete={props.onDeleteUser}
            >
              Nombre: {user.name}, edad: {user.age}
            </UserItem>
          ))}
        </ul>
      );
    }

    export default ItemList;