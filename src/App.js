import './App.css';
import TestProps from './Components/TestProps';


function App() {
  const name = 'Amir'
  const age = 23
  const tab = ['Tunisie','Italie','France']
  const obj = {
    nom : "Amir",
    town : "Mannouba",
    codePo : 1133,
    track:{
      s:'Fs'
    }
  }

  const handleYaakoub=()=> {
    return alert('Hello Yaakoub')
  }

  const handleName=(a)=>{
    return alert(`Hello ${a}`)
  }
 const show = false
  return (
    <div>
      <TestProps name={name} age={age} tab={tab} obj={obj} handleYaakoub={handleYaakoub} handleName={handleName} show={show}>
         <h1>Yaakoub</h1>
         <h2>A boy</h2>
         <img src='/1.jpg' alt='Not Found'/>
      </TestProps>
     
    </div>
  );
}

export default App;
