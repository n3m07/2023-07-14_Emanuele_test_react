import { useEffect} from "react"
import arrDays from "./daysObj"

function Day({days, setDays, number, ipt}) {
    useEffect(()=>{
        setDays(arrDays)
    },[])

    return(
       <div className="w-full h-full flex justify-start items-start flex-wrap overflow-scroll">
            {days.map(el=> (
                <div key={el.day} className="w-1/6 h-1/6 border p-2 flex items-start justify-start gap-2 overflow-y-auto">
                    <span className="font-bold w-min h-min">{el.day + '.'}</span>
                    <span className="w-full h-full text-sm">{el.impegni}</span>
                </div>
            ))}
       </div> 
    )

}

export default Day