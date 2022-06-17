import {BrowserRouter,Route,Routes,Link, useParams} from "react-router-dom";  
import PersonalIndex from "./personal_index";
import { personType, ulStyleType } from "../type";
import { useState } from "react";
import Main from "./main";
const Index=()=>{
    
    return(
    <div className="body">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main component={'main'}/>}/>
            <Route path="/signIn"  element={<Main component={'signIn'} />}/>
            <Route path="/signUp"  element={<Main component={'signUp'} />}/>
            <Route path="/:user"  element={<PersonalIndex />}/>

        </Routes>
    </BrowserRouter>
    </div>
    )
}
export default Index;