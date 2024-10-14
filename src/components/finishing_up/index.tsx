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
  price: number;
  priceStyleClass?: string;
}) {
  return (
    <div className="summary-row">
      <Card.SubTitle>{title}</Card.SubTitle>
      <Card.SubTitle
        externalStylesClass={priceStyleClass ?? ""}
      >{`+$${price}`}</Card.SubTitle>
    </div>
  );
}
function MainSummaryRow({
  price,
  frequency,
  title,
}: {
  title: string;
  price: number;
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
          {`$${price}`}
        </Card.SubTitle>
      </div>
      <hr />
    </>
  );
}
function FinishingUp() {
  return (
    <StepContainer
      header="Finishing up"
      subHeader="Double-check everything looks OK before confirming."
    >
      <div className="summary-container">
        <MainSummaryRow
          title={"Arcade"}
          price={10}
          frequency={PaymentFrequency.MONTHLY}
        />
        <SummaryRow price={1} title="Online service" />
        <SummaryRow price={3} title="Larger storage" />
      </div>
      <div style={{ paddingInline: "1rem" }}>
        <SummaryRow
          price={12}
          title="Total(per month)"
          priceStyleClass="summary-row-main-title"
        />
      </div>
    </StepContainer>
  );
}

export default FinishingUp;
