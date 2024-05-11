// redux
// import React from 'react'
// import { Provider, useDispatch, useSelector } from 'react-redux'
// import { createStore } from 'redux'

// // Actions
// const increment = () => ({
//   type: 'INCREMENT',
// })

// // Reducer
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     default:
//       return state
//   }
// }

// // Store
// const store = createStore(counterReducer)

// // React Component
// const Counter = () => {
//   const count = useSelector((state) => state)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <h1>ReduxCount: {count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//     </div>
//   )
// }

// // App Component
// const App = () => (
//   <Provider store={store}>
//     <Counter />
//   </Provider>
// )

// export default App

//recoil
// import React from 'react'
// import { RecoilRoot, atom, useRecoilState } from 'recoil'

// // 상태 정의
// const counterState = atom({
//   key: 'counterState', // 고유한 key
//   default: 0, // 초기 값
// })

// // Counter 컴포넌트
// const Counter = () => {
//   const [count, setCount] = useRecoilState(counterState) //useRecoilState를 사용하여 counterState의 값을 읽는다.

//   return (
//     <div>
//       <h1>RecoilCount: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>{' '}
//       {/* setCount 함수를 사용하여 값을 업데이트합니다.  */}
//     </div>
//   )
// }

// // App 컴포넌트
// const App = () => (
//   <RecoilRoot>
//     <Counter />
//   </RecoilRoot>
// )

// export default App

// Jotai 예제1
// import { Provider, atom, useAtom } from 'jotai'
// import React from 'react'

// // 카운터 상태를 위한 atom
// const counterAtom = atom(0)

// // Counter 컴포넌트
// const Counter = () => {
//   const [count, setCount] = useAtom(counterAtom)

//   return (
//     <div>
//       <h1>JotaiCount: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// // App 컴포넌트
// const App = () => (
//   <Provider>
//     <Counter />
//   </Provider>
// )

// export default App

// jotai 예제2
// import { Provider, atom, useAtomValue, useSetAtom } from 'jotai'
// import React from 'react'

// // 카운터 상태를 위한 atom
// const counterAtom = atom(0)

// // Counter 컴포넌트
// const Counter = () => {
//   const count = useAtomValue(counterAtom) // 카운터 값을 읽는데 사용
//   const increment = useSetAtom(counterAtom) // 카운터 값을 설정하는데 사용

//   return (
//     <div>
//       <h1>조타이Count: {count}</h1>
//       <button onClick={() => increment((c) => c + 1)}>Increment</button>
//     </div>
//   )
// }

// // App 컴포넌트
// const App = () => (
//   <Provider>
//     <Counter />
//   </Provider>
// )

// export default App

// zustand
import React from 'react'
import create from 'zustand'

// 상태를 생성 및 관리하는 스토어
// Zustand 스토어를 생성합니다.
// create 함수는 설정 객체를 받아 상태 관리 로직을 초기화함.
// 객체 내부에서 상태와 상태를 변경하는 함수(Increment)를 정의한다.
// set 함수를 사용하여 상태를 비동기적으로 업데이트할 수 있다.
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))

// Counter 컴포넌트
const Counter = () => {
  const { count, increment } = useStore() // 상태와 함수를 추출

  return (
    <div>
      <h1>ZustandCount: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

// App 컴포넌트
const App = () => (
  <div>
    <Counter />
  </div>
)

export default App
