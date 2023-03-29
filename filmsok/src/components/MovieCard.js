
import React from 'react';
import placeholder from './300x300.png';  //https://placeholderimage.dev/

export default function MovieCard({ Filmtittel, year, director, awards, genre, actors, img}) {
    return (
        <article>
            <h2>{Filmtittel}</h2>
            <p>År: {year}</p>
            <p>Regissør: {director}</p>
            <p>Priser: {awards}</p>
            <p>Sjanger: {genre}</p>
            <p>skuespiller: {actors}</p>
            <img src={img !== "N/A" ? img : placeholder} alt={`poster for ${Filmtittel}`}/>

        </article>
    );
}