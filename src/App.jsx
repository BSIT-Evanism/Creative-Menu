
import { useState } from 'react';
import FloatingMenu from './components/FloatingMenu';
import './index.css';

function App() {
  const [cursor,setCursor] = useState(true)

  return (
    <>
      <FloatingMenu setCursor={setCursor} />
    <div className='flex w-full h-full justify-center items-center'>
    </div>
    </>
  )
}

export default App;
