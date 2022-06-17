
import { personType } from "../type";
import {Link, useLocation,useParams}  from "react-router-dom";
import { returnPage_signIn_signUp_MainPage } from "./returnPage";

const Main=({component}:{component:string}):JSX.Element=>{
    
    var person1:personType={
        Name:'Alice',
        Descript:'Welcome to follow me to see more of my life',
        Posts:100,
        Followers:5738,
        Following:20,
        Pic:require('../static/dogbackground4.jpg')
    }
    var person3:personType={
        Posts:1341,
        Name:'chuaky',
        Descript:'nice to meet you hope',
        Followers:85738,
        Following:900,
        Pic:require('../static/dogbackground6.jpg')
    }
    var persons:Array<personType>=[person1,person3]
    return(
        <>
            <div className="main_fix_title">
                <Link to={'/'}>Doggy Book</Link>
                <div>
                    <Link to={'/signIn'} >Sign in</Link>
                    <Link to={'/signUp'} >Sign up</Link>
                </div>
            </div>
            {
                returnPage_signIn_signUp_MainPage(component,persons)
            }
        </>
    )
}
export default Main;