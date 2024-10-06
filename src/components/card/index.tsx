import React from "react";
import { CardComponentProps } from "./card.types";
import "./styles.css";

function CardBody({ children, isSelected }: CardComponentProps) {
  return (
    <div className={"card-body " + (isSelected ? " card-body-selected" : "")}>
      {children}
    </div>
  );
}

function CardTitle({ children }: React.PropsWithChildren & {}) {
  return <h3 className="card-title">{children}</h3>;
}

function CardSubTitle({ children }: React.PropsWithChildren & {}) {
  return <h3 className="card-subtitle">{children}</h3>;
}

const Card = {
  Body: CardBody,
  Title: CardTitle,
  SubTitle: CardSubTitle,
};
export default Card;
