const Input = ({ id, type = 'number', children }) => {
  return (
    <>
      <label for={id}>{children}</label>
      <input id={id} type={type} />
    </>
  );
};

export default Input;
