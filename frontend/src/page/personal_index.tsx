import PersonalCard from "../component/personalCard";
import { personType,allPersonType,ulStyleTyle } from "../type";
import { useEffect, useState } from "react";
const PersonalIndex=()=>{
    const [allPerson,setAllPerson]=useState<allPersonType []>([])
    const [ulStyle,setUlStyle]=useState<ulStyleTyle>({display:'none'})
    var person_data:personType={Posts:20,Followers:10,Following:10}
    useEffect(()=>{
        var temp=[]
        for(let i=0;i<10;i++){
            temp.push(person_data)
        }
        
        setAllPerson(temp)
    },[])
    return(
        <>
            <div className="fix_title">
                <input onFocus={()=>{setUlStyle({display:'block'})}} onBlur={()=>{setUlStyle({display:'none'})}} type='text'/>
                <ul style={ulStyle}>
                    <li>first option</li>
                    <li>second option</li>
                </ul>
            </div>
            {
                allPerson.map((item,index)=>{
                    return(
                        <PersonalCard key={index} persons={person_data}/>
                    )
                })
            }

        </>
    )
}
export default PersonalIndex;