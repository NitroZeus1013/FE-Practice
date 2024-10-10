import { Dispatch, useState } from "react";
import PersonalInfo from "../personal_info";
import SelectPlan from "../select_plan";
import "./form.css";
import Footer from "../footer";
import AddOn from "../pick_add_ons";

const StepIndicator = ({
  isCurrentStep,
  stepNumber,
  setCurrStep,
  label,
}: {
  isCurrentStep: boolean;
  stepNumber: number;
  setCurrStep: Dispatch<React.SetStateAction<number>>;
  label?: string;
}) => {
  const onClick = () => {
    setCurrStep(stepNumber - 1);
  };
  return (
    <div className="step-number-container">
      <div
        onClick={onClick}
        className={"step-number " + (isCurrentStep ? "current-step" : "")}
      >
        {stepNumber}
      </div>
      {label && (
        <div className="step-label-container">
          <span>{`Step ${stepNumber}`}</span>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
};
const steps = [PersonalInfo, SelectPlan, AddOn];
const stepLabels = ["Your Info", "Select Plan", "Add-On", "Summary"];
function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const Handler = steps[currentStep];

  const goToNextStep = () => {
    if (currentStep === steps.length - 1) {
      return;
    }
    setCurrentStep((curr) => curr + 1);
  };
  const goBack = () => {
    if (currentStep === 0) {
      return;
    }
    setCurrentStep((curr) => curr - 1);
  };
  return (
    <>
      <div className="form-container">
        <div className="sidebar">
          {stepLabels.map((label, ind) => {
            return (
              <StepIndicator
                isCurrentStep={currentStep === ind}
                stepNumber={ind + 1}
                setCurrStep={setCurrentStep}
                label={label}
              />
            );
          })}
        </div>
        <div className="main-content">
          <Handler />
          <Footer goBack={goBack} goNext={goToNextStep} />
        </div>
      </div>
    </>
  );
}

export default Form;
