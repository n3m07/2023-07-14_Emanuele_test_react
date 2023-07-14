import { useEffect } from "react";
import moviesArray from "./movieArr";
import { Link } from "react-router-dom";

function Home({selectedMovie, setSelectedMovie}) {
  console.log(moviesArray);


  function moreInfoHandler(el){
  setSelectedMovie({nome: el.nome, url: el.linkImg, descrizione: el.descrizione})
}

  return (
    <div className="pages text-white">
      <section className="w-full h-full flex justify-start items-start flex-wrap overflow-scroll">
          {moviesArray.map((el) => (
            <article key={el.nome} className="w-1/3 h-1/3 flex gap-2 border border-white rounded-xl p-2">
              <span className="w-1/3 h-full">
                <img src={el.linkImg} alt="img not found" className="h-full rounded-xl"/>
              </span>
              <div className="w-2/3 h-full flex flex-col flex-grow gap-2">
                  <span className="font-bold h-1/6">{el.nome}</span>
                  <span className="italic text-sm h-4/6 overflow-scroll">{el.descrizione}</span>
                  <span className="h-1/6 flex justify-end text-yellow-400 hover:cursor-pointer" onClick={()=> moreInfoHandler(el)}>
                    <Link to='/MoreInfo' >More Info...</Link>
                  </span>
              </div>
            </article>
          ))}
      </section>
    </div>
  );
}

export default Home;
