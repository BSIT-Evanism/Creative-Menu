
import { useState } from 'react';
import Cursor from './components/Cursor';
import FloatingMenu from './components/FloatingMenu';


function App() {
  const [cursor,setCursor] = useState(true)

  return (
    <div className='overflow-hidden'>
      <Cursor state={cursor} />
      <FloatingMenu setCursor={setCursor} />
    </div>
  )
}

export default App;
