import Card from "./UI/Card"
import styles from './UserItem.model.css'

const UserItem = props => {
    const deleteHandler = () =>{
        props.onDelete(props.id)
    }

    return <li onClick={deleteHandler}>
      <Card> {props.children} </Card>
    </li>
}

export default UserItem;