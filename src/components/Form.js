import useInput from "../hooks/use-input";
import styles from "./Form.module.css";

const Form = () => {
  const {
    value: nameInputState,
    isError: isErrorName,
    onChangeInputHandler: onChangeNameInputHandler,
    onBlurInputHandler: onBlurNameHandler,
  } = useInput();

  const {
    value: firstNameInputState,
    isError: isErrorFirstName,
    onChangeInputHandler: onChangeFirstNameInputHandler,
    onBlurInputHandler: onBlurFirstNameHandler,
  } = useInput();

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (isErrorName || isErrorFirstName) {
      alert("Formulaire invalide");
    }
    alert(
      "Félicitations, vous avez effectué un custom hook pour validation de formulaire"
    );
    console.log("Sending", nameInputState, firstNameInputState);
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
        {isErrorName && (
          <p className={styles["error-text"]}>Le nom est requis</p>
        )}
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
        {isErrorFirstName && (
          <p className={styles["error-text"]}>Le prenom est requis</p>
        )}
      </div>

      <div type="submit" className={styles["form-action"]}>
        <button>Validate</button>
      </div>
    </form>
  );
};

export default Form;
