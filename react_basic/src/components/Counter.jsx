import { useState } from 'react';

export default function Counter({ onTotal }) {
  /**
   * useState :: 
   * 컴포넌트별 저장소, 리엑트 hook
   * 상태값과 setter 함수를 반환한다. 
   */
  const [counter, setCounter] = useState(0);

  console.log('Counter')

  const handleCounter = () => {
    setCounter(counter + 1);
    if (onTotal)  onTotal();
  }

  return <button onClick={handleCounter}>Counter: {counter}</button>;
}
