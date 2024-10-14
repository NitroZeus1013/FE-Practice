import StepContainer from "../step_container";
import PickAddOnCard from "./pick_add_on_card";
import { useCustomDispatch, useGlobalState } from "../../context/form_context";
import { getPrice, getSubtitle } from "../../common/utils";
import { ACTIONS } from "../../store/store";

const addOnData = [
  { title: "Online ervice", subTitle: "Access to multiplayer games", price: 1 },
  { title: "Large torage", subTitle: "Extra 1TB cloud save", price: 2 },
  {
    title: "Customizable profile",
    subTitle: "Custom theme on your profile",
    price: 2,
  },
];

function AddOn() {
  const { addOn, plan } = useGlobalState();
  console.log("addon ", addOn);
  const dispatch = useCustomDispatch();
  const { frequency } = plan;
  const handleOnClick = (id?: number) => {
    if (id !== null && id !== undefined) {
      const modSelected = { ...addOn };
      const alreadySelected = !!modSelected[id];
      if (alreadySelected) {
        delete modSelected[id];
      } else {
        modSelected[id] = {
          id,
          title: addOnData[id].title,
          price: addOnData[id].price,
        };
      }

      dispatch({ type: ACTIONS.ADD_ON, payload: modSelected });
    }
  };
  return (
    <>
      <StepContainer
        header="Personal info"
        subHeader="Please provide your name, email address, and phone number."
      >
        {addOnData.map((item, index) => (
          <PickAddOnCard
            id={index}
            title={item.title}
            subTitle={item.subTitle}
            isSelected={index in addOn}
            onClick={handleOnClick}
            price={getSubtitle(getPrice(item.price, frequency), frequency)}
          />
        ))}
      </StepContainer>
    </>
  );
}

export default AddOn;
