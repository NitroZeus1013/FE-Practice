import { useState } from "react";
import StepContainer from "../step_container";
import SelectPlanCard from "./select-plan-card";
import { PaymentFrequency } from "../../global/constants/common";
import Toggle from "../toggle";
import "./styles.css";
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

function getSubtitle(price: number, frequency: string) {
  const suffix = frequency === PaymentFrequency.MONTHLY ? "mo" : "yr";
  return `$${price}/${suffix}`;
}

function getPrice(price: number, frequency: string) {
  const computuedPrice =
    frequency === PaymentFrequency.MONTHLY ? price : price * 10;
  return computuedPrice;
}
function SelectPlan() {
  //frequency  : monthly or yearly
  const [frequency, setFrequency] = useState(PaymentFrequency.MONTHLY);
  const handleToggle = () => {
    if (frequency === PaymentFrequency.MONTHLY) {
      setFrequency(PaymentFrequency.YEARLY);
    } else {
      setFrequency(PaymentFrequency.MONTHLY);
    }
  };
  return (
    <>
      <StepContainer
        header="Select your plan"
        subHeader="You have the option of monthly or yearly billing."
      >
        {cardData.map((item, index) => {
          return (
            <SelectPlanCard
              title={item.title}
              subTitle={getSubtitle(getPrice(item.price, frequency), frequency)}
              isSelected={index === 0}
              iconUrl={item.iconUrl}
              subTitle2={
                frequency === PaymentFrequency.YEARLY ? "2 months free" : ""
              }
            />
          );
        })}

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
