import './styles.css'
import {useState} from 'react'

function App() {
  let date = new Date()
  
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  date.setDate(date.getDate()+count)


  function handlePosStep(){
    setStep((s)=>s+1)
  }
  function handleNegStep(){
    setStep((s)=>s-1)
  }
  function handlePosCount(){
    setCount((c)=>c+step)
  }
  function handleNegCount(){
    setCount((c)=>c-step)
  }
  return (
    <div className="App">
      <div>
      <div>
        <button onClick={handleNegStep}>-</button>
        <span> Step: {step}</span>
        <button onClick={handlePosStep}>+</button>
      </div>
      <div>
        <button onClick={handleNegCount}>-</button>
        <span> Count: {count}</span>
        <button onClick={handlePosCount}>+</button>
      </div>
      </div>
      <p><span>{count === 0?"Today is":count>0?`${count} day from today is`:`${Math.abs(count)} days ago was`}</span>
      <span> {date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
