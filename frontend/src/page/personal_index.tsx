import PersonalCard from "../component/personalCard";
import { personType,allPersonType,ulStyleTyle } from "../type";
import { useEffect, useState } from "react";
import { searchOnChange } from "../event/onChangeEvent";
const PersonalIndex=()=>{
    const [allPerson,setAllPerson]=useState<allPersonType []>([])
    const [ulStyle,setUlStyle]=useState<ulStyleTyle>({display:'none'})
    const [ulUserStyle,setUlUserStyle]=useState<ulStyleTyle>({display:'none'})
    const [pressEnter,setPressEnter]=useState<boolean>(false)
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
                <input 

                    onChange={(e)=>{
                        var result=false
                        if(e.keyCode==='Enter'||e.key==='enter'){
                            result=true
                        }
                        setPressEnter(result)
                        searchOnChange(e,pressEnter)}}
                    onFocus={()=>{setUlStyle({display:'block'})}} 
                    onBlur={()=>{setUlStyle({display:'none'})}} 
                    placeholder={'搜尋用戶'} type='text'
                    />
                <div onMouseEnter={()=>{setUlUserStyle({display:'block'})}} 
                    onMouseLeave={()=>{setUlUserStyle({display:'none'})}} className="img">
                    <div style={ulUserStyle}>
                        <div>個人資料</div>
                        <div>second option</div>
                        <div>
                            <button>登錄</button>
                            <button>註冊</button>
                        </div>
                    </div>

                </div>
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