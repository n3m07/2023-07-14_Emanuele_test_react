import { useEffect } from "react";
import arrDays from "./daysObj";

function Day({ days, setDays, number, ipt }) {
  /* sets the arr that contains all the days of the month as state variable in a use effect in order to load it after the creation of the days has ben executed */
  useEffect(() => {
    setDays(arrDays);
  }, []);

  /* SETS THE ASTHETIC OF THE CALENDAR */
  return (
    <div className="w-full h-full flex justify-start items-start flex-wrap overflow-scroll">
      {days.map((el) => (
        <div
          key={el.day}
          className="w-1/6 h-1/6 border p-2 flex items-start justify-start gap-2 overflow-y-auto"
        >
          <span className="font-bold w-min h-min">{el.day + "."}</span>
          <span className="w-full h-full text-sm">{el.impegni}</span>
        </div>
      ))}
    </div>
  );
}

export default Day;
