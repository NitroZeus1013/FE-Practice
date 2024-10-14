import { getPrice, getSubtitle } from "../../common/utils";
import { useGlobalState } from "../../context/form_context";
import { PaymentFrequency } from "../../global/constants/common";
import Card from "../card";
import StepContainer from "../step_container";
import "./styles.css";

function SummaryRow({
  price,
  title,
  priceStyleClass,
}: {
  title: string;
  price: string;
  priceStyleClass?: string;
}) {
  return (
    <div className="summary-row">
      <Card.SubTitle>{title}</Card.SubTitle>
      <Card.SubTitle
        externalStylesClass={priceStyleClass ?? ""}
      >{`+${price}`}</Card.SubTitle>
    </div>
  );
}
function MainSummaryRow({
  price,
  frequency,
  title,
}: {
  title: string;
  price: string;
  frequency: PaymentFrequency;
}) {
  return (
    <>
      <div className="summary-row-main-container">
        <div className="summary-row-main">
          <Card.SubTitle externalStylesClass="summary-row-main-title">
            {title}(
            {frequency === PaymentFrequency.MONTHLY ? "Monthly" : "Yearly"})
          </Card.SubTitle>
          <button className="summary-row-main-btn">Change</button>
        </div>
        <Card.SubTitle externalStylesClass="summary-row-main-title">
          {price}
        </Card.SubTitle>
      </div>
      <hr />
    </>
  );
}
function FinishingUp() {
  const { plan, addOn } = useGlobalState();
  const getTotal = () => {
    let price = plan.price;
    Object.values(addOn).forEach((ao) => (price += ao.price));
    return price;
  };
  return (
    <StepContainer
      header="Finishing up"
      subHeader="Double-check everything looks OK before confirming."
    >
      <div className="summary-container">
        <MainSummaryRow
          title={plan.name}
          price={getSubtitle(
            getPrice(plan.price, plan.frequency),
            plan.frequency
          )}
          frequency={plan.frequency}
        />
        {Object.keys(addOn).map((key) => {
          const ao = addOn[key];
          return (
            <SummaryRow
              price={getSubtitle(
                getPrice(ao.price, plan.frequency),
                plan.frequency
              )}
              title={ao.title}
            />
          );
        })}
      </div>
      <div style={{ paddingInline: "1rem" }}>
        <SummaryRow
          price={getSubtitle(
            getPrice(getTotal(), plan.frequency),
            plan.frequency
          )}
          title={`Total(per ${
            plan.frequency === PaymentFrequency.MONTHLY ? "month" : "year"
          })`}
          priceStyleClass="summary-row-main-title"
        />
      </div>
    </StepContainer>
  );
}

export default FinishingUp;
