import "./Cinput.css";

export const CInput = ({
  className,
  type,
  placeHolder,
  name,
  lastName,
  email,
  disabled,
  value,
  onChangeFunction,
  onBlurFunction,
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeHolder}
      name={name}
      lastName={lastName}
      email={email}
      disabled={disabled}
      value={value}
      onChange={onChangeFunction}
      onBlur={onBlurFunction}
    />
  );
};
