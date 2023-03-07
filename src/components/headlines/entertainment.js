import { useState } from 'react'
import ReactPaginate from "react-paginate";
import {MDBContainer} from 'mdb-react-ui-kit';
import NewsCore from '../utils/newscore';
import useAxios from '../utils/useAxios';

export default function Entertainment() {
    let limit = 20;

    const [page, setPage] = useState(1)
    
    const { data, error, loaded, length } = useAxios(
        "https://newsapi.org/v2/top-headlines?language=en&category=entertainment",
        page,
        limit
    );

    const handlePageClick = async (data) => {

        let currentPage = data.selected + 1;
        setPage(currentPage)
    };
    if (loaded) {
        return error ? (
            <span>Error: {error}</span>
        ) : (
            <>
                {data.length > 0 &&
                    <MDBContainer fluid>

                        <ReactPaginate
                            previousLabel={"< previous"}
                            nextLabel={"next >"}
                            breakLabel={"..."}
                            pageCount={length}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination justify-content-center"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active"}
                        />


                        {data.map((news, index) => (

                            <NewsCore key={index} news={news} />

                        ))}

                    </MDBContainer>
                }
            </>
        );
    }
    return <span>Loading...</span>;

}