// onClick,whichState : 0 or 1 , true or false
import "./styles.css";
function Toggle({
  onClick,
  whichState,
}: {
  onClick: any;
  whichState: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={"toggle " + (whichState ? "toggle-enabled" : "")}
    ></div>
  );
}

export default Toggle;
