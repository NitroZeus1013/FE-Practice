import Input from "../input";
import StepContainer from "../step_container";

function PersonalInfo() {
  return (
    <>
      <StepContainer
        header="Personal info"
        subHeader="Please provide your name, email address, and phone number."
      >
        <Input
          label="Name"
          name="name"
          placeholder="e.g.Stephen King"
          type="text"
          id="name"
        />
        <Input
          label="Email Address"
          name="email"
          placeholder="e.g.stephenking@lorem.com"
          type="text"
          id="email"
        />
        <Input
          label="Phone Number"
          name="phone"
          placeholder="e.g.+1 234 567 890"
          type="text"
          id="phone"
        />
      </StepContainer>
    </>
  );
}

export default PersonalInfo;
