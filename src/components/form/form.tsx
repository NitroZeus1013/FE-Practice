import PersonalInfo from "../personal_info";
import "./form.css";
function Form() {
  return (
    <div className="form-container">
      <div className="sidebar"></div>
      <div className="main-content">
        <PersonalInfo />
      </div>
    </div>
  );
}

export default Form;
