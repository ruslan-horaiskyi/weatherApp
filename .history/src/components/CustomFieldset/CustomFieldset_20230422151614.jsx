const CustomFieldset = () => {
  return (
    <fieldset class={fieldset}>
      <legend class="water_legend">Додаткові послуги</legend>
      <label for="gas_delivery" class="additional_services">
        <span class="label_span">Доставка газу:</span>
        <input
          type="number"
          id="gas_delivery"
          class="input"
          placeholder="Вартість послуги"
          min="0"
          value="0"
        />
        грн.
      </label>
    </fieldset>
  );
};

export default CustomFieldset;
