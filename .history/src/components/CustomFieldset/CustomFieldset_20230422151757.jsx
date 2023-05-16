const CustomFieldset = ({ fieldsetClass, legendClass, children}) => {
  return (
    <fieldset class={fieldsetClass}>
      <legend class={legendClass}>{children}</legend>
    </fieldset>
  );
};

export default CustomFieldset;
