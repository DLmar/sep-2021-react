import {useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return {...state, count1: state.count1 + 1}
    case 'dec':
      return {...state, count1: state.count1 - 1}
    case 'reset':
      return {...state, count1: 0}
    default:
      throw new Error('MyError')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count1: 0});

  return (
      <div>
        <div>{state.count1}</div>
        <button onClick={() => dispatch({type: 'inc'})}>INC</button>
        <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
        <button onClick={() => dispatch({type: 'reset'})}>RESET</button>
      </div>
  );
}

export default App;
