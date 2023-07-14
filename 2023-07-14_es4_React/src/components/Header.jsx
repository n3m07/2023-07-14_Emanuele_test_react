function Header({number, setNumber, ipt, setIpt, days, setDays}) {
  let updateStateDays=days

function numberHandler(e){
    setNumber(e.target.value)
}
function iptHandler(e){
    setIpt(e.target.value)
    //console.log(ipt)
}
function addEventHandler(){
    //console.log(updateStateDays)
    updateStateDays.forEach(el=>{
        if(el.day == number){
            console.log('castori')
            el.impegni+= ipt
        }
        
      })
      //console.log('rane')
      setDays(updateStateDays)
      
      
    
    
}

  return (
    <header className="h-[60px] w-full flex justify-between items-center text-2xl italic bg-blue-300 p-4 gap-2">
      <div className="w-1/3 flex justify-start items-center">
        <button className="text-lg italic font-bold flex items-center justify-center h-full bg-blue-500 px-2 rounded border border-black" onClick={(e)=>addEventHandler(e)}>Add Event</button>
      </div>
      <div className="w-2/3 h-full flex gap-2">
        <input type="number" className="w-1/4 border border-slate-300 flex justify-center items-center" min={1} max={31} onChange={e=> numberHandler(e)} />
        <input type="text" className="w-3/4 border border-slate-300 text-sm" onChange={e=> iptHandler(e)}/>
      </div>
    </header>
  );
}

export default Header;
