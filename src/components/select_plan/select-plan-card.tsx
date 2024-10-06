import Card from "../card";

function SelectPlanCard({
  title,
  subTitle,
  subTitle2,
  isSelected,
  iconUrl,
  altText,
}: {
  title: string;
  subTitle: string;
  subTitle2?: string;
  isSelected: boolean;
  iconUrl: string;
  altText?: string;
}) {
  return (
    <>
      <Card.Body isSelected={isSelected}>
        <div>
          <img src={iconUrl} alt={altText} />
        </div>
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.SubTitle>{subTitle}</Card.SubTitle>
          {subTitle2 && <Card.SubTitle>{subTitle2}</Card.SubTitle>}
        </div>
      </Card.Body>
    </>
  );
}

export default SelectPlanCard;
