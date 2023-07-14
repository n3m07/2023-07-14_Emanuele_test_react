import { useState } from "react";
import "./App.css";

function App() {
  const [marioScore, setMarioScore] = useState("3");
  const [luigiScore, setLuigiScore] = useState("3");
  const [result, setResult]= useState('Mario Rossi e Luigi Verdi sono pari')

  function displayResult(){
    /* console.log('castori') */
    if(Number(marioScore)> Number(luigiScore)){
      return(setResult('Mario Rossi è in vantaggio'))
    }
    else if(Number(marioScore)<Number(luigiScore)){
      return(setResult('Luigi Verdi è in vantaggio'))
    }
    else if(Number(marioScore)==Number(luigiScore)){
      return(setResult('Mario Rossi e Luigi Verdi sono pari'))
    }
    else{
      console.log('error function displayResult')
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-300 ">
      <section className="w-[80%] h-[90vh] flex flex-col justify-center items-center gap-4 p-4 bg-blue-300">
        <div className="w-full h-2/6 flex flex-col justify-start items-center gap-4">
          <label className="font-bold italic">Score (1-10): Mario Rossi</label>
          <input
            type="number"
            name="iptMarioR"
            id="iptMarioR"
            min={1}
            max={10}
            className="p-2 font-bold flex justify-center items-center"
            value={marioScore}
            onChange={e=> {setMarioScore(e.target.value), displayResult()}}
          />
          <input type="range" name="iptMarioR" id="sliderMarioR" min={1} max={10} onChange={(e) => {setMarioScore(e.target.value), displayResult()}} value={marioScore} />
        </div>
        <div className="w-full h-2/6 flex flex-col justify-start items-center gap-4">
        <label className="font-bold italic">Score (1-10): Luigi Verdi</label>
          <input
            type="number"
            name="iptLuigiV"
            id="iptLuigiV"
            min={1}
            max={10}
            className="p-2 font-bold flex justify-center items-center"
            value={luigiScore}
            onChange={e=> {setLuigiScore(e.target.value), displayResult()}}
          />
          <input type="range" name="iptLuigiV" id="sliderLuigiV" min={1} max={10} onChange={e=> {setLuigiScore(e.target.value), displayResult()}} value={luigiScore} />
        </div>
        <div className="w-full h-2/6 flex flex-col justify-center items-center bg-white font-extrabold text-xl p-4">
          {result} 
        </div>
      </section>
    </div>
  );
}

export default App;
