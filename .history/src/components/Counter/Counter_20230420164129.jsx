export const Counter = () => {
  const [counter, setCounter] = useState(initialState)
  return <div>{counter}</div>;
}