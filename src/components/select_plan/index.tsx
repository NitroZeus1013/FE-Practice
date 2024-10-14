import { useState } from "react";
import StepContainer from "../step_container";
import SelectPlanCard from "./select-plan-card";
import { PaymentFrequency } from "../../global/constants/common";
import Toggle from "../toggle";
import "./styles.css";
import { useCustomDispatch, useGlobalState } from "../../context/form_context";
import { ACTIONS } from "../../store/store";
import { getPrice, getSubtitle } from "../../common/utils";
const cardData = [
  {
    title: "Arcade",
    price: 9,
    iconUrl: "/src/assets/images/icon-arcade.svg",
  },
  {
    title: "Advanced",
    price: 12,
    iconUrl: "/src/assets/images/icon-advanced.svg",
  },
  {
    title: "Pro",
    price: 15,
    iconUrl: "/src/assets/images/icon-pro.svg",
  },
];

function SelectPlan() {
  const dispatch = useCustomDispatch();
  const { plan } = useGlobalState();
  const { frequency, id: selected } = plan;
  const handleToggle = () => {
    if (frequency === PaymentFrequency.MONTHLY) {
      dispatch({
        type: ACTIONS.ADD_PLAN,
        payload: { frequency: PaymentFrequency.YEARLY },
      });
    } else {
      dispatch({
        type: ACTIONS.ADD_PLAN,
        payload: { frequency: PaymentFrequency.MONTHLY },
      });
    }
  };
  const handleSelect = (id: number) => {
    dispatch({
      type: ACTIONS.ADD_PLAN,
      payload: {
        frequency,
        id,
        name: cardData[id].title,
        price: cardData[id].price,
      },
    });
  };
  return (
    <>
      <StepContainer
        header="Select your plan"
        subHeader="You have the option of monthly or yearly billing."
      >
        <div className="plans-container">
          {cardData.map((item, index) => {
            return (
              <SelectPlanCard
                id={index}
                title={item.title}
                subTitle={getSubtitle(
                  getPrice(item.price, frequency),
                  frequency
                )}
                isSelected={index === selected}
                iconUrl={item.iconUrl}
                subTitle2={
                  frequency === PaymentFrequency.YEARLY ? "2 months free" : ""
                }
                onClick={handleSelect}
              />
            );
          })}
        </div>
        <div className="freq-toggle">
          <span>Monthly</span>
          <Toggle
            onClick={handleToggle}
            whichState={frequency !== PaymentFrequency.MONTHLY}
          />
          <span>Yearly</span>
        </div>
      </StepContainer>
    </>
  );
}

export default SelectPlan;
