import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [page, setPage]= useState(1)
  const [order, setOrder]=  useState('asc')
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(()=>{
    setSearchParams({page, order})
  },[page, order])
  return (
    <DIV>
      <h3>Sort By Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} onChange={(e)=>setOrder(e.target.value)} />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={(e)=>setOrder(e.target.value)}
        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 data-testid="page-number">Page No. {page}</h3>
      <button data-testid="previous-page" onClick={()=>setPage(page-1)} disabled={page==1} >Previous</button>
      <br />
      <br />
      <button data-testid="next-page"  onClick={()=>setPage(page+1)}>Next</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;

  button {
    border: none;
    width: 100px;
    height: 40px;
    background-color: gray;
  }
`;
