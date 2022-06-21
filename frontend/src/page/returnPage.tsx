import SignIn from "../component/signIn"
import SignUp from "../component/signUp"
import MainPage from "../component/mainPage"
import { personType } from "../type"
//please name 'returnPage'first and than pick the page
export function returnPage_signIn_signUp_MainPage(component:string,persons:Array<personType>){
    if(component==='main'){
        return <MainPage persons={persons} />
    }
    else if(component==='signUp'){
        return  <SignUp/>
    }
    else if(component==='signIn'){
        return  <SignIn />
    }
}