import { useEffect, useState } from 'react'

function App() {
  const [count, setCounter] = useState(0)

  function handleButtonClick() {
    setCounter((prev) => prev + 1)
  }

  useEffect(() => {
    console.log('effect 확인!', count)

    function addMouseEvent() {
      console.log('event 감지 effect 실행', count)
    }

    window.addEventListener('click', addMouseEvent)

    // return () => {
    //   //이래서 클린업 함수가 필요하구나
    //   console.log('클린업 함수 실행', count)
    //   window.removeEventListener('click', addMouseEvent)
    // }
  }, [count])

  return (
    <div style={{ height: '500px' }}>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>button</button>
    </div>
  )
}

export default App
