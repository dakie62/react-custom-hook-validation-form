import { useRef } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const nameInput = useRef();
  const firstNameInput = useRef();

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(nameInput.current.value, firstNameInput.current.value);
    alert("Submitting my form");
  };

  return (
    <form className={styles["form-group"]} onSubmit={onSubmitForm}>
      <div className={styles["form-control"]}>
        <label htmlFor="Nom">Nom</label>
        <input id="Nom" ref={nameInput}></input>
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="Prenom">Prenom</label>
        <input id="Prenom" ref={firstNameInput}></input>
      </div>
      <div className={styles["form-action"]}>
        <button>Validate</button>
      </div>
    </form>
  );
};

export default Form;
