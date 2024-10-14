import Card from "../card";
import "./styles.css";

function PickAddOnCard({
  id,
  title,
  subTitle,
  subTitle2,
  isSelected,
  price,
  onClick,
}: {
  id: number;
  title: string;
  subTitle: string;
  subTitle2?: string;
  isSelected: boolean;
  price: string;
  onClick: (id?: number) => void;
}) {
  return (
    <>
      <Card.Body
        isSelected={isSelected}
        externalStylesClass={"add-on-card-body"}
        onClick={() => onClick(id)}
      >
        <div>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onClick(id)}
          />
        </div>
        <div className="content-container">
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.SubTitle>{subTitle}</Card.SubTitle>
            {subTitle2 && <Card.SubTitle>{subTitle2}</Card.SubTitle>}
          </div>
          <Card.SubTitle externalStylesClass={"add-on-price"}>
            {price}
          </Card.SubTitle>
        </div>
      </Card.Body>
    </>
  );
}

export default PickAddOnCard;
