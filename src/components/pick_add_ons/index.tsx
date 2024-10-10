import { useState } from "react";
import StepContainer from "../step_container";
import PickAddOnCard from "./pick_add_on_card";

const addOnData = [
  { title: "Online ervice", subTitle: "Access to multiplayer games" },
  { title: "Large torage", subTitle: "Extra 1TB cloud save" },
  { title: "Customizable profile", subTitle: "Custom theme on your profile" },
];

// keep local state for which index/id is selected
function AddOn() {
  const [selected, setSelected] = useState<Record<string, any>>({});
  const handleOnClick = (id?: number) => {
    if (id !== null && id !== undefined) {
      const modSelected = { ...selected };
      modSelected[id] = !modSelected[id];
      setSelected(modSelected);
    }
  };
  return (
    <>
      <StepContainer
        header="Personal info"
        subHeader="Please provide your name, email address, and phone number."
      >
        {addOnData.map((item, index) => {
          return (
            <PickAddOnCard
              id={index}
              title={item.title}
              subTitle={item.subTitle}
              isSelected={selected[index]}
              onClick={handleOnClick}
            />
          );
        })}
      </StepContainer>
    </>
  );
}

export default AddOn;
