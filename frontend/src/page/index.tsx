import {BrowserRouter,Route,Routes,Link, useParams} from "react-router-dom";  
import PersonalIndex from "./personal_index";
import { personType, ulStyleType } from "../type";
import { useState } from "react";
const Index=()=>{
    localStorage.setItem('searchHistory',JSON.stringify([]))
    return(
    <div className="body">
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<PersonalIndex />}/>

        </Routes>
    </BrowserRouter>
    </div>
    )
}
export default Index;