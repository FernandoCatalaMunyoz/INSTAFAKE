import "./DInput";
export const DInput = ({
  className,
  type,
  placeHolder,
  name,
  disabled,
  value,
  onChangeFunction,
  onBlurFunction,
}) => {
  const handleInput = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <textarea
      className={"inputDesign"}
      type={type}
      placeholder={placeHolder}
      name={name}
      disabled={disabled}
      value={value}
      onChange={onChangeFunction}
      onBlur={onBlurFunction}
      style={{ height: "auto" }}
    />
  );
};
