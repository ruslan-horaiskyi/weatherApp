const Input = ({ id, type = "number", labelText, readOnly = false }) => {
  return (
      <div className="input_div">
        <label for={id}>{labelText}</label>
        <input id={id} type={type} readOnly={readOnly}/>
      </div>
  );
};

export default Input;
