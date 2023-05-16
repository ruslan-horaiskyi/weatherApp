const CustomFieldset = ({ fieldsetClass, legendClass, legendText, children }) => {
  return (
    <fieldset class={fieldsetClass}>
      <legend class={legendClass}>{legendText}</legend>
      {children}
    </fieldset>
  );
};

export default CustomFieldset;
