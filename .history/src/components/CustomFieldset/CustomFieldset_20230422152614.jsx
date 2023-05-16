const CustomFieldset = ({ fieldsetClass, legendClass, children }) => {
  return (
    <fieldset class={fieldsetClass}>
      <legend class={legendClass}></legend>
      {children}
    </fieldset>
  );
};

export default CustomFieldset;
