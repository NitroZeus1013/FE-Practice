import { TInputProps } from "./input.types";
import "./styles.css";

function Input({
  name,
  placeholder,
  label,
  id,
  value,
  onChange,
  type = "text",
}: TInputProps) {
  return (
    <div className="input-container">
      <div className="label-container">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        {/* <span className="error-message">This field is required</span> */}
      </div>
      <input
        className="real-input"
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
