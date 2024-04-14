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
