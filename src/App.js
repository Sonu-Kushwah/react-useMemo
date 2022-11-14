import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [count,setCount]=useState(1);
  const [item,setItem]=useState(10);
  
  const multiCountItem=useMemo(function multicoutn(){
    console.log("multicount");
    return count*2;
  },[count])
  return (
    <>
     <h3>Use Memo Hooks</h3>
     <h4>Count:{count}</h4>
     <h4>Item:{item}</h4>
     <h4>{multiCountItem}</h4>
     <button onClick={()=>setCount(count+1)}>count</button>
     <button onClick={()=>setItem(item*2)}>item</button>
    </>
  );
}

export default App;
