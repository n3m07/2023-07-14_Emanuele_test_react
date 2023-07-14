import { useEffect} from "react"
import arrDays from "./daysObj"

function Day({days, setDays, number, ipt}) {
    useEffect(()=>{
        setDays(arrDays)
    },[])

    return(
       <div className="w-full h-full flex justify-start items-start flex-wrap overflow-scroll">
            {days.map(el=> (
                <div key={el.day} className="w-1/6 h-1/6 border p-2 flex items-start justify-start gap-2 flex-grow-0 flex-wrap">
                    <span className="font-bold w-full h-1/6">{el.day + '.'}</span>
                    <span className="w-full h-5/6 text-sm">{el.impegni}</span>
                </div>
            ))}
       </div> 
    )

}

export default Day