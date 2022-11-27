import "./style.css";

const Form = () => (
  <form className="form">
    <input
      type="text"
      className="form__field"
      placeholder="Co jest do zrobienia?"
    />
    <button className="form__button">Dodaj zadanie</button>
  </form>
);

export default Form;