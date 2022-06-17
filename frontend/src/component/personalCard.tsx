import { personType } from "../type";
const PersonalCard=({persons}:{persons:personType}):JSX.Element=>{
    
    return(      
            <div className="personal_card">
                <div>
                {           /*image */                             }
                    <div>
                        <img alt="user" src={persons.Pic}></img>
                    </div>

                    
                {           /*text start */                             }
                    <div>
                        <div>
                            <h2>
                                {persons.Name}<br/>
                                <span>{persons.Descript}</span>
                            </h2>
                            
                        </div>
                        <div>
                            <h3>{persons.Posts}<br/><span>Posts</span></h3>
                            <h3>{persons.Followers}<br/><span>Followers</span></h3>
                            <h3>{persons.Following}<br/><span>Following</span></h3>
                        </div>
                        <div style={{height:'40px'}}>
                            <button>Following</button>
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default PersonalCard;