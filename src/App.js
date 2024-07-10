import './styles.css'
import {useState} from 'react'

function App() {
  let date = new Date()
  
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)


  date.setDate(date.getDate()+count)

  function handlePosCount(){
    setCount((c)=>c+step)
  }
  function handleNegCount(){
    setCount((c)=>c-step)
  }
  function handleReset(){
    setCount(0)
    setStep(1)
  }

  return (
    <div className="App">
      <div>
      <input type='range' min='0' max='10' value={step} onChange={e=> setStep(Number(e.target.value))}/>
      <div>
        <span> Step: {step}</span>      
      </div>
      <div>
      <button onClick={handleNegCount}>-</button>
        <input type='text' value ={count} onChange={e=>setCount(Number(e.target.value))}></input>      
        <button onClick={handlePosCount}>+</button>
      </div>
      </div>
      <p><span>{count === 0?"Today is":count>0?`${count} day from today is`:`${Math.abs(count)} days ago was`}</span>
      <span> {date.toDateString()}</span>
      </p>
      {(count!== 0 || step!== 1)?<button onClick={handleReset}>Reset</button>: null }
      
    </div>
  );
}

export default App;
