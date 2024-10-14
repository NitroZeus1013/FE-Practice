import "./styles.css";

function Footer({
  lastStep,
  goBack,
  goNext,
  firstStep,
}: {
  firstStep: boolean;
  lastStep: boolean;
  goBack: () => void;
  goNext: () => void;
}) {
  return (
    <div className="footer">
      {!firstStep ? <button onClick={goBack}>Go Back</button> : <span></span>}
      <button onClick={goNext}>{lastStep ? "Confirm" : " Next step"}</button>
    </div>
  );
}

export default Footer;
