import React from "react";
import Film from "./Film";

const FilmList= ({films}) => {

    const filmNodes = films.map((film) => {

        return (
            <Film name={film.name} key={film.id} url={film.url} />);

    })
  

    return (
        <>
        {/* <h1>Film List</h1> */}
        {/* <Film/> */}
        {filmNodes}
        </>
    )
}

export default FilmList;