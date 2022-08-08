import Card from "./Card"
import styles from './Modal.module.css'
import Button from './Button'

const Modal = props => {
    const modalHandler = () => {
        props.onEntendido(false);
    }

    return (
    <div className={styles.backdrop} onClick={modalHandler}>
    <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>Ocurrió un error</h2>
        </header>
        <div className={styles.content}>
        <p>{ props.text }</p>
        </div>
        <Button className={styles.action} onClick = { modalHandler } text={'Entendido'} />
    </Card>
    </div>
)}

export default Modal;