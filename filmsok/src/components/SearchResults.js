import React from "react";


export default function SearchResults({sokeFunksjon, handleInputChange , }) {
    const handleSearch = (event) => {
        event.preventDefault();
        const sokeInput = event.target?.elements?.search?.value;  //https://stackoverflow.com/questions/71039088/what-is-onchange-e-setnamee-target-value-in-react-mean
        if (sokeInput) {
          sokeFunksjon(sokeInput);
        }
      };
      

    return (
        <form onSubmit = {handleSearch}>
            <input name="search" placeholder="sok etter film" type="text" onChange={handleInputChange}/>
            <button onClick={handleSearch} type="submit">Søk filmer</button>

            

        </form>
    );

}