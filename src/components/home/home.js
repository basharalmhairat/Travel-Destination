import Header from "../header/header";
import Tours from "../tours/tours";
import Footer from "../footer/footer";
import data from "../../data/db.json"; 
import Tour from "../tours/tour/tour";
import { useState } from "react"; 
import { Routes, Route } from 'react-router-dom';
function Home(props) {
    return (

        <>
         <Routes>
         <Route path='/' element={<Header />} />
         <Route path='/tours' element={ <Tours data={data}/>}/>
         {/* <Route path='/Footer' element={ <Footer /> }/>  */}
         
       </Routes>
             
            <Tour data={data} /> 
            <Footer /> 
           
          

        </>

    );
}

export default Home;