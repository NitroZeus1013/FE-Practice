import { Dispatch, useState } from "react";
import PersonalInfo from "../personal_info";
import SelectPlan from "../select_plan";
import "./form.css";
import Footer from "../footer";

const StepIndicator = ({
  isCurrentStep,
  stepNumber,
  setCurrStep,
}: {
  isCurrentStep: boolean;
  stepNumber: number;
  setCurrStep: Dispatch<React.SetStateAction<number>>;
}) => {
  const onClick = () => {
    setCurrStep(stepNumber - 1);
  };
  return (
    <div
      onClick={onClick}
      className={"step-number " + (isCurrentStep ? "current-step" : "")}
    >
      {stepNumber}
    </div>
  );
};
const steps = [PersonalInfo, SelectPlan];
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
          {Array(4)
            .fill(0)
            .map((_, ind) => {
              return (
                <StepIndicator
                  isCurrentStep={currentStep === ind}
                  stepNumber={ind + 1}
                  setCurrStep={setCurrentStep}
                />
              );
            })}
        </div>
        <div className="main-content">
          <Handler />
        </div>
      </div>
      <Footer goBack={goBack} goNext={goToNextStep} />
    </>
  );
}

export default Form;
