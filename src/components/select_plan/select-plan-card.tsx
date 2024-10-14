import Card from "../card";

function SelectPlanCard({
  title,
  id,
  subTitle,
  subTitle2,
  isSelected,
  iconUrl,
  altText,
  onClick,
}: {
  id: number;
  title: string;
  subTitle: string;
  subTitle2?: string;
  isSelected: boolean;
  iconUrl: string;
  altText?: string;
  onClick: (id: number) => void;
}) {
  return (
    <>
      <Card.Body isSelected={isSelected} onClick={() => onClick(id)}>
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
