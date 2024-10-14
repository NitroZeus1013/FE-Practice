import { useCustomDispatch, useGlobalState } from "../../context/form_context";
import { ACTIONS } from "../../store/store";
import Input from "../input";
import StepContainer from "../step_container";

function PersonalInfo() {
  const { personalInfo } = useGlobalState();
  const dispatch = useCustomDispatch();
  const handleChange = (id: string, value: string) => {
    dispatch({
      type: ACTIONS.UPDATE_PERSONAL_INFO,
      payload: { [id]: { value } },
    });
  };
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
          value={personalInfo.name.value}
          onChange={(e) => {
            handleChange("name", e.target.value);
          }}
          error={personalInfo.name.error}
        />
        <Input
          label="Email Address"
          name="email"
          placeholder="e.g.stephenking@lorem.com"
          type="text"
          id="email"
          value={personalInfo.email.value}
          onChange={(e) => handleChange("email", e.target.value)}
          error={personalInfo.email.error}
        />
        <Input
          label="Phone Number"
          name="phone"
          placeholder="e.g.+1 234 567 890"
          type="text"
          id="phone"
          value={personalInfo.phone.value}
          onChange={(e) => handleChange("phone", e.target.value)}
          error={personalInfo.phone.error}
        />
      </StepContainer>
    </>
  );
}

export default PersonalInfo;
