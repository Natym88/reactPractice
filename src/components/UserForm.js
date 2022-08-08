import { useState } from "react";
import styles from "./UserForm.module.css";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import Card from "./UI/Card";

const UserForm = (props) => {
  const [contentName, setContentName] = useState("");
  const [contentAge, setContentAge] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [ageIsValid, setAgeIsValid] = useState(true);
  const [error, setError] = useState(false);
  let texto = "";

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      (!(nameIsValid && ageIsValid)) ||
      contentName === "" ||
      contentAge === ""
    ) {
      setError(true);
      if (nameIsValid === false) {
        if (ageIsValid === false) {
          texto =
            "Los campos ingresados no son correctos vuelva a ingresar los datos";
        } else {
          texto = "El campo nombre es inválido, vuelva a completar el campo";
        }
      } else {
        texto = "El campo edad es inválido, cuelva a completar el campo";
      }
      return
    }
    setError(false)
    props.onAddUser({ id: Math.random(), name: contentName, age: contentAge });
    setContentAge("");
    setContentName("");
  };

  const nameChangeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
    setContentName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (
      event.target.value.trim().length === 0 ||
      isNaN(parseInt(event.target.value || event.target.value < 1))
    ) {
      setAgeIsValid(false);
    } else {
      setAgeIsValid(true);
    }
    setContentAge(event.target.value);
  };

  const entendidoHandler = data =>{
    setContentAge('');
    setContentName('');
    setError(data)
    setAgeIsValid(true);
    setNameIsValid(true);
  }

  return (
    <div>
      { error && <Modal text={texto} onEntendido={entendidoHandler} />}
      <Card>
        <form className={styles.userForm} onSubmit={submitHandler}>
          <div className={styles.datos}>
            <label
              className={`${styles.label} ${!nameIsValid && styles.lInvalid}`}
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              value={contentName}
              className={`${styles.input} ${!nameIsValid && styles.iInvalid}`}
              onChange={nameChangeHandler}
            />
          </div>
          <div className={styles.datos}>
            <label
              className={`${styles.label} ${!ageIsValid && styles.lInvalid}`}
            >
              Edad
            </label>
            <input
              type="text"
              className={`${styles.input} ${!ageIsValid && styles.iInvalid}`}
              value={contentAge}
              onChange={ageChangeHandler}
            />
          </div>
          <div className={styles.boton}>
            <Button text={'Aceptar'} />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
