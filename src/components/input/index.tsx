import { TInputProps } from "./input.types";
import "./styles.css";
function Input({ name, placeholder, label, id, type = "text" }: TInputProps) {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="real-input"
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}

export default Input;
