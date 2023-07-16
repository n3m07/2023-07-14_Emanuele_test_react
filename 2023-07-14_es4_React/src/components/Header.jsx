function Header({ number, setNumber, ipt, setIpt, days, setDays }) {
  /* handler functions for the input fields */
  function numberHandler(e) {
    setNumber(e.target.value);
  }
  function iptHandler(e) {
    setIpt(e.target.value);
  }
  function addEventHandler() {
    let updateStateDays = days;

    /* in case the ipt field of the day number equals to a day in the of the calendar, the value of the text ipt will be added to the day obj under the key 'impegni' */
    updateStateDays.forEach((el) => {
      if (el.day == number) {
        //console.log('castori')
        el.impegni += `${ipt} `;
      }
    });

    /* THIS SPREAD OPERATOR IS NEEDED IN ORDER TO CAUSE A RE-RENDER */
    setDays([...updateStateDays]);
  }
  /* HTML OF THE HEADER SECTION WHICH INCLUDES THE IPT FIELDS */
  return (
    <header className="h-[60px] w-full flex justify-between items-center text-2xl italic bg-blue-300 p-4 gap-2">
      <div className="w-1/3 flex justify-start items-center">
        <button
          className="text-lg italic font-bold flex items-center justify-center h-full bg-blue-500 px-2 rounded border border-black"
          onClick={addEventHandler}
        >
          Add Event
        </button>
      </div>
      <div className="w-2/3 h-full flex gap-2">
        <input
          type="number"
          className="w-1/4 border border-slate-300 flex justify-center items-center p-2 text-sm"
          min={1}
          max={31}
          onChange={(e) => numberHandler(e)}
          placeholder="Selezionare Giorno"
        />
        <input
          type="text"
          className="w-3/4 border border-slate-300 text-sm p-2"
          placeholder="Inserire Evento"
          onChange={(e) => iptHandler(e)}
        />
      </div>
    </header>
  );
}

export default Header;
