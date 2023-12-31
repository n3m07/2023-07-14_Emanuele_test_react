function MoreInfo({ selectedMovie, setSelectedMovie }) {
  /* shows detailed info of the selected movie / state variable 'selectedMovie' */
  return (
    <div className="pages">
      <article className="w-full h-full flex flex-col items-center justify-start gap-4">
        {/* movie title */}
        <div className="w-full h-1/6 text-3xl font-bold flex justify-center items-center">
          {selectedMovie.nome}
        </div>
        {/* container for img and description of the selected movie */}
        <div className="w-full h-5/6 text-lg italic flex justify-center items-center gap-4">
          <div className="w-1/2 h-full flex items-center justify-center">
            <img src={selectedMovie.url} alt="image movie" className="h-full" />
          </div>
          <div className="w-1/2 h-full flex items-start justify-center overflow-auto">
            {selectedMovie.descrizione}
          </div>
        </div>
      </article>
    </div>
  );
}

export default MoreInfo;
