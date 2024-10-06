import { useState } from "react";
import PersonalInfo from "../personal_info";
import SelectPlan from "../select_plan";
import "./form.css";

const steps = [PersonalInfo, SelectPlan];
function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const Handler = steps[currentStep];
  return (
    <div className="form-container">
      <div className="sidebar"></div>
      <div className="main-content">
        <Handler />
      </div>
    </div>
  );
}

export default Form;
