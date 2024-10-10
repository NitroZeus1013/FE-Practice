import React from "react";
import { CardComponentProps } from "./card.types";
import "./styles.css";

function CardBody({
  children,
  isSelected,
  externalStylesClass,
  onClick,
}: CardComponentProps) {
  return (
    <div
      onClick={(e) => {
        onClick && onClick();
      }}
      className={`card-body ${
        isSelected ? "card-body-selected" : ""
      }  ${externalStylesClass}`}
    >
      {children}
    </div>
  );
}

function CardTitle({ children }: React.PropsWithChildren & {}) {
  return <h3 className="card-title">{children}</h3>;
}

function CardSubTitle({
  children,
  externalStylesClass,
}: React.PropsWithChildren & { externalStylesClass?: string }) {
  return <h3 className={`card-subtitle ${externalStylesClass}`}>{children}</h3>;
}

const Card = {
  Body: CardBody,
  Title: CardTitle,
  SubTitle: CardSubTitle,
};
export default Card;
