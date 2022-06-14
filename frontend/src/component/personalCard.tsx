import { personType } from "../type";
const PersonalCard=({persons}:{persons:personType})=>{
    return(
        <div className="personal_index">
            
            <div>
                {           /*image */                             }
                    <div>
                        <img alt="user" src={require("../static/doggy.jpg")}></img>
                    </div>

                    
                {           /*text start */                             }
                    <div>
                        <div>
                            <h2>
                                choco<br/>
                                
                            </h2>
                        </div>
                        <div>
                            <h3>{persons.Posts}<br/><span>Posts</span></h3>
                            <h3>{persons.Followers}<br/><span>Followers</span></h3>
                            <h3>{persons.Following}<br/><span>Following</span></h3>
                        </div>
                        <div>
                            <button>Following</button>
                            <button>Message</button>
                        </div>
                    </div>

            </div>
        </div>
    )
}
export default PersonalCard;