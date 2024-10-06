import Card from "../card";
import StepContainer from "../step_container";

function SelectPlan() {
  return (
    <>
      <StepContainer
        header="Select your plan"
        subHeader="You have the option of monthly or yearly billing."
      >
        <Card />
      </StepContainer>
    </>
  );
}

export default SelectPlan;
