const Input = ({ id, type = "number", labelText }) => {
  return (
      <div className="input_div">
        <label for={id}>{labelText}</label>
        <input id={id} type={type}/>
      </div>
  );
};

export default Input;
