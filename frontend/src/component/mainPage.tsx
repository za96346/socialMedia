import PersonalCard from "../component/personalCard";
import { personType } from "../type";
const MainPage=({persons}:{persons:Array<personType>}):JSX.Element=>{
    return(
        <>
            <div className="main_page">
                <div>
                    <PersonalCard persons={persons[0]}/>
                </div>
                <div>
                    <div>
                        <h2>About Doggy Book</h2><br/>
                        <span>This site is specially tailored for dogs ,<br/>
                        Here You can make your dog become a popular Internet celebrity,<br/>
                        you can interact with fans, <br/>
                        or you can browse the above mall to find affordable dog supplies</span>
                        <h4>Welcome to join us</h4>
                    </div>
                </div>
                <div>
                    <PersonalCard persons={persons[1]}/>
                </div>
            </div>
        </>
    )
}
export default MainPage;