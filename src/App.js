import {useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return {...state, count1: state.count1 + 1, count2: state.count2+1, count3: state.count3+1}
    case 'dec':
      return {...state, count1: state.count1 - 1, count2: state.count2-1, count3: state.count3-1}
    case 'reset':
      return {...state, count1: 0, count2: 0, count3:0}
    default:
      throw new Error('MyError')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count1: 0, count2:0, count3: 0});

  return (
      <div>
        <div>{state.count1}</div>
        <div>{state.count2}</div>
        <div>{state.count3}</div>
        <button onClick={() => dispatch({type: 'inc'})}>INC</button>
        <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
        <button onClick={() => dispatch({type: 'reset'})}>RESET</button>
      </div>
  );
}

export default App;
