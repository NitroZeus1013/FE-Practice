import "./styles.css";

function Footer({
  goBack,
  goNext,
}: {
  goBack: () => void;
  goNext: () => void;
}) {
  return (
    <div className="footer">
      <button onClick={goBack}>Go Back</button>
      <button onClick={goNext}>Next step</button>
    </div>
  );
}

export default Footer;
