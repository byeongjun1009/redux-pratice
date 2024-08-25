import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  // state에 있는 모든 state를 전달
  const count = useSelector(state => state.count)
  let id = useSelector(state => state.id)
  let password = useSelector(state => state.password)
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } })
  }
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } })
  }

  const login = () => {
    // payload는 매개변수처럼 쓸 수 있는 건데
    // 내가 필요한 걸 전달해주는 역할을 한다
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } })
  }

  return (
    <div>
      {/* <h1>{id}, { password }</h1> */}
      <h1>{count}</h1>
      <div>
        <button className='increase-btn' onClick={increase}>증가!</button>
        <button className='decrease-btn' onClick={decrease}>감소!</button>
      </div>
      {/* <button onClick={ login }>로그인</button>
      <Box /> */}

    </div>
  );
}

export default App;
