import { useEffect } from "react";
import moviesArray from "./movieArr";
import { Link } from "react-router-dom";

/* 'Home' returns a list of all the movies in the js 'movieArr'*/
function Home({ selectedMovie, setSelectedMovie }) {
  console.log(moviesArray);

  /* moreInfoHandler handles the click on the 'more info' link present in each element */
  function moreInfoHandler(el) {
    setSelectedMovie({
      nome: el.nome,
      url: el.linkImg,
      descrizione: el.descrizione,
    });
  }

  return (
    <div className="pages text-white">
      {/* container that includes the entire list of the existing movies in the variable moviesArray */}
      <section className="w-full h-full flex justify-start items-start flex-wrap overflow-scroll">
        {moviesArray.map((el) => (
          /* each artile corresponds to the structure of a displayed movie */
          <article
            key={el.nome}
            className="w-1/3 h-1/3 flex gap-2 border border-white rounded-xl p-2"
          >
            {/* displayed img of the movie */}
            <span className="w-1/3 h-full">
              <img
                src={el.linkImg}
                alt="img not found"
                className="h-full rounded-xl"
              />
            </span>
            {/* description, title and moreInfo btn */}
            <div className="w-2/3 h-full flex flex-col flex-grow gap-2">
              <span className="font-bold h-1/6">{el.nome}</span>
              <span className="italic text-sm h-4/6 overflow-scroll">
                {el.descrizione}
              </span>
              <span
                className="h-1/6 flex justify-end text-yellow-400 hover:cursor-pointer"
                onClick={() => moreInfoHandler(el)}
              >
                <Link to="/MoreInfo">More Info...</Link>
              </span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Home;
