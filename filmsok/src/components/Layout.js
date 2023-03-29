
import React from "react";
import MovieCard from "./MovieCard";
import SearchResults from "./SearchResults";


export default function Layout({ film, sokeFunksjon, handleInputChange}){
    return (
        <body>
            <nav>
                <h2>Arbeidskrav 2</h2>
                <SearchResults sokeFunksjon = {sokeFunksjon} handleInputChange = {handleInputChange} />

            </nav>
            
            <main>
                {film.map((info, index) => (
                    <MovieCard Filmtittel = {info.Title} key = {index} img = {info.Poster} year = {info.year} director = {info.Director} awards = {info.Awards} genre = {info.Genre} actors = {info.Actors}/>
                ))}
            </main>
        </body>
    );
}