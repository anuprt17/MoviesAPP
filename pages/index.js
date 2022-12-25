/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Anupreet Kaur Student ID: 110313210 Date: 13-10-2022
*
*
********************************************************************************/ 

import useSWR from 'swr';
import { useState, useEffect } from "react";
import {Accordion, Pagination} from 'react-bootstrap';
import MovieDetails from "../components/MovieDetails";
import PageHeader from "../components/PageHeader";


export default function Home(props) {

  const [ page, setPage ] = useState(1);    
  const [ pageData, setPageData ] = useState([]);

  const { data, error } = useSWR(`https://cyan-repulsive-elk.cyclic.app/api/movies?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
    setPageData(data);
    }
   }, [data]);

   const previous = ()=> {
    if (page > 1) setPage(prev=> prev - 1)};

   const next = () => setPage(prev => prev + 1);  

  return (
    <>
    <PageHeader  text ="Film Collection : Sorted by Date" />
    <Accordion>
      {pageData.map((item,index) =>{
        return (
          <Accordion.Item eventKey={item._id} key={index}>
        <Accordion.Header> 
          <strong>{item.title}</strong> &nbsp; ({item.year}: Directed By {item.directors.join(', ')})
        </Accordion.Header> 
        <Accordion.Body>
          <MovieDetails movie={item}/>
        </Accordion.Body>
      </Accordion.Item>
        )
      })}
    </Accordion>
    <Pagination>
                <Pagination.Prev onClick={previous}/>
                <Pagination.Item>{page}</Pagination.Item>
                <Pagination.Next onClick={next}/>
    </Pagination>
    </>
  )
}
