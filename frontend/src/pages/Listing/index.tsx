import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useState } from "react";
import { BASE_URL } from "utils/request";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumber, setPageNumeber] = useState(0);

    axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(response =>{
                
                const data = response.data as MoviePage;
                setPageNumeber(data.number);
            });
    
    
    return (
        <>

        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">

                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>                     
                </div>
            </div>



        </>

    );

}

export default Listing;