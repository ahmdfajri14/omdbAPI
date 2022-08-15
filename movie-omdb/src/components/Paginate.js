import React from "react";
import Pagination from '@mui/material/Pagination';



const Paginate = ({ totalResults, page, handleChange, render }) => {
    return (
        <div style={{margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center', color:"white"}}>
            <h2 style={{color: 'black'}}>{`Showing ${page} of ${totalResults} results`}</h2>
            <Pagination count={totalResults} page={page} onChange={handleChange} renderItem={render} color="secondary" variant="outlined"/>
        </div>
    );
};

export default Paginate;