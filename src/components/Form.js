import { useState } from "react";
import styles from "./Form.module.css";

const validateInput = (str) => str.trim().length === 0;

const Form = () => {
  const [nameInputState, setNameInput] = useState("");
  const [firstNameInputState, setFirstNameInput] = useState("");

  // deriving state
  const isErrorName = validateInput(nameInputState);
  const isErrorFirstName = validateInput(firstNameInputState);
  console.log(isErrorName);
  console.log(isErrorFirstName);

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (isErrorName || isErrorFirstName) {
      alert("Formulaire invalide");
    }
    console.log("Mon formulaire est valide");
    console.log("Sending", nameInputState, firstNameInputState);
  };

  const onChangeNameInputHandler = (event) => {
    setNameInput(event.target.value);
  };

  const onChangeFirstNameInputHandler = (event) => {
    setFirstNameInput(event.target.value);
  };

  return (
    <form className={styles["form-group"]} onSubmit={onSubmitForm}>
      <div className={styles["form-control"]}>
        <label htmlFor="Nom">Nom</label>
        <input id="Nom" onChange={onChangeNameInputHandler}></input>
      </div>

      <div className={styles["form-control"]}>
        <label htmlFor="Prenom">Prenom</label>
        <input id="Prenom" onChange={onChangeFirstNameInputHandler}></input>
      </div>

      <div className={styles["form-action"]}>
        <button>Validate</button>
      </div>
    </form>
  );
};

export default Form;
