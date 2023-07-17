import { useState } from "react";
import "./App.css";

function App() {

  /* state variable to keep track of the score of mario, luigi and the displayed message*/
  const [marioScore, setMarioScore] = useState("3");
  const [luigiScore, setLuigiScore] = useState("3");
  let r= 'Mario Rossi e Luigi Verdi sono pari'

  
  /* checks the values of mario and luigi and displays the result according to it */
  if(Number(marioScore)> Number(luigiScore)){
      r= 'Mario Rossi è in vantaggio'
    }
    else if(Number(marioScore)<Number(luigiScore)){
      r= 'Luigi Verdi è in vantaggio'
    }
    else if(Number(marioScore)==Number(luigiScore)){
      r= 'Mario Rossi e Luigi Verdi sono pari'
    }
    else{
      console.log('error function displayResult')
    }

    
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-300 ">
      <section className="w-[80%] h-[90vh] flex flex-col justify-center items-center gap-4 p-4 bg-blue-300">

        {/* selector score mario */}
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
            onChange={e=> {setMarioScore(e.target.value)}}
          />
          <input type="range" name="iptMarioR" id="sliderMarioR" min={1} max={10} onChange={(e) => {setMarioScore(e.target.value)}} value={marioScore} />
        </div>

        {/* selector score luigi */}
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
            onChange={e=> {setLuigiScore(e.target.value)}}
          />
          <input type="range" name="iptLuigiV" id="sliderLuigiV" min={1} max={10} onChange={e=> {setLuigiScore(e.target.value)}} value={luigiScore} />
        </div>

        {/* display results */}
        <div className="w-full h-2/6 flex flex-col justify-center items-center bg-white font-extrabold text-xl p-4">
          {r} 
        </div>
      </section>
    </div>
  );
}

export default App;
