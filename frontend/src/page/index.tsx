import {BrowserRouter,Route,Routes,Link, useParams} from "react-router-dom";  
import PersonalIndex from "./personal_index";
import { personType } from "../type";
const Index=()=>{
    
    return(
    <div className="body">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PersonalIndex />}/>

        </Routes>
    </BrowserRouter>
    </div>
    )
}
export default Index;