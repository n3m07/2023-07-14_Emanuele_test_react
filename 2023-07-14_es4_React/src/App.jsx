import { useState } from "react";
import "./App.css";
import Day from "./components/Day";
import Header from "./components/Header";

function App() {
  /* set the state variables of the days and the input fields. */
  const [days, setDays] = useState([]);
  const [ipt, setIpt] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="w-screen h-screen bg-slate-300">
      {/* input section for adding an event to the calendar */}
      <Header
        setIpt={setIpt}
        setNumber={setNumber}
        number={number}
        ipt={ipt}
        days={days}
        setDays={setDays}
      />

      {/* this section corresponds to the total days in the arr 'days' */}
      <div className="w-full h-[calc(100vh-60px)] border-[3px] border-black flex justify-start items-start p-4 gap-2 flex-wrap">
        <Day
          days={days}
          setDays={setDays}
          setipt={setIpt}
          setNumber={setNumber}
          number={number}
          ipt={ipt}
        />
      </div>
    </div>
  );
}

export default App;
