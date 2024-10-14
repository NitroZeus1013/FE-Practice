import { Dispatch, useState } from "react";
import PersonalInfo from "../personal_info";
import SelectPlan from "../select_plan";
import "./form.css";
import Footer from "../footer";
import AddOn from "../pick_add_ons";
import FinishingUp from "../finishing_up";
import { getEmptyFieldNames, isSomeFieldEmpty } from "../../common/utils";
import { useCustomDispatch, useGlobalState } from "../../context/form_context";
import { ACTIONS } from "../../store/store";

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
const steps = [PersonalInfo, SelectPlan, AddOn, FinishingUp];
const stepLabels = ["Your Info", "Select Plan", "Add-On", "Summary"];
function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const Handler = steps[currentStep];
  const { personalInfo } = useGlobalState();
  const dispatch = useCustomDispatch();

  const goToNextStep = () => {
    if (currentStep === steps.length - 1) {
      return;
    }
    if (currentStep === 0) {
      const formEmpty = getEmptyFieldNames(personalInfo);
      if (formEmpty.length) {
        const formError = {};
        formEmpty.forEach((key) => {
          formError[key] = { value: "", error: "This field is required" };
        });
        dispatch({
          type: ACTIONS.UPDATE_PERSONAL_INFO,
          payload: formError,
        });
        return;
      }
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
          <Footer
            goBack={goBack}
            goNext={goToNextStep}
            lastStep={currentStep === steps.length - 1}
            firstStep={currentStep === 0}
          />
        </div>
      </div>
    </>
  );
}

export default Form;
