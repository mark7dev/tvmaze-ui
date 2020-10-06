import React from 'react';
import './styles/Pagination.css';

const Pagination = ({currentPage, setCurrentPage, setLoading}) => {

    const nextPage = () => {
        setLoading(true);
        let next = currentPage + 1;
        setCurrentPage(next);
    }

    const previousPage = () => {
        setLoading(true);
        let previuos = currentPage - 1;
        setCurrentPage(previuos);
    }

    return ( 
        <div className="pagination__container">
            <button 
                className="btnPag"
                onClick={previousPage}
                disabled={currentPage===1}
            >Previous</button>
            <p className="currentPage">Page {currentPage}</p>
            <button
                className="btnPag"
                onClick={nextPage}
                disabled={currentPage===204}
            >Next</button>
        </div>
    );
}
 
export default Pagination;