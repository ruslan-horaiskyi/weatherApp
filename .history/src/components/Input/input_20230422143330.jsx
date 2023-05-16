const Input = ({ id, type = "number", labelText, readOnly = " " }) => {
  return (
    <>
      <label for={id}>{labelText}</label>
      <input id={id} type={type} {readOnly}/>
    </>
  );
};

export default Input;
