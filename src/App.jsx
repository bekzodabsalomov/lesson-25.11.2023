import { useGlobalContext } from './hooks/useGlobalContext';
import { useRef, useState } from 'react';

function App() {
  const { counter, dispatch } = useGlobalContext();
  const inputNumber = useRef();
  const [inputBorderColor, setInputBorderColor] = useState(''); // Added state for input border color

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_NUMBER', payload: +inputNumber.current.value });
    inputNumber.current.value = '';
  };

  const handleInputChange = () => {
    setInputBorderColor('#7FC5DC'); 
  };

  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-gray-200'>
      <h1 className="text-8xl mb-8">{counter}</h1>

      <div className='flex gap-4 mb-4'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      </div>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input
          type="number"
          className={`text-sm px-3 py-3 border border-solid border-gray-300 focus:border ${inputBorderColor}`}
          ref={inputNumber}
          placeholder='Enter number'
          onChange={handleInputChange}
        />
        <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}

export default App;