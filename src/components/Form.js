import { useState } from "react";
import styles from "./Form.module.css";

const validateInput = (str) => str.trim().length === 0;

const Form = () => {
  const [nameInputState, setNameInput] = useState("");
  const [firstNameInputState, setFirstNameInput] = useState("");

  const [isNameTouched, setNameTouched] = useState(false);
  const [isFirstNameTouched, setFirstNameTouched] = useState(false);

  // deriving state
  const isErrorName = validateInput(nameInputState) && isNameTouched;
  const isErrorFirstName =
    validateInput(firstNameInputState) && isFirstNameTouched;

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

  const onBlurNameHandler = (event) => {
    setNameTouched(true);
  };

  const onBlurFirstNameHandler = (event) => {
    setFirstNameTouched(true);
  };
  
  return (
    <form className={styles["form-group"]} onSubmit={onSubmitForm}>
      <div
        className={
          isErrorName
            ? `${styles["form-control"]} ${styles["invalid"]}`
            : styles["form-control"]
        }
      >
        <label htmlFor="Nom">Nom</label>
        <input
          id="Nom"
          type="text"
          onChange={onChangeNameInputHandler}
          onBlur={onBlurNameHandler}
        ></input>
      </div>

      <div
        className={
          isErrorFirstName
            ? `${styles["form-control"]} ${styles["invalid"]}`
            : styles["form-control"]
        }
      >
        <label htmlFor="Prenom">Prenom</label>
        <input
          id="Prenom"
          type="text"
          onChange={onChangeFirstNameInputHandler}
          onBlur={onBlurFirstNameHandler}
        ></input>
      </div>

      <div type="submit" className={styles["form-action"]}>
        <button>Validate</button>
      </div>
    </form>
  );
};

export default Form;
