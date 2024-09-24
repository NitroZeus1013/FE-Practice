import { TStepContainerProps } from "./step_container.types";
import "./styles.css";

function StepContainer({ header, subHeader, children }: TStepContainerProps) {
  return (
    <div className="step-container-main">
      <h1>{header}</h1>
      <h6>{subHeader}</h6>
      {children}
    </div>
  );
}

export default StepContainer;
