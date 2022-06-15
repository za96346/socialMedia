import PersonalCard from "../component/personalCard";
import { personType,allPersonType,ulStyleType } from "../type";
import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import { searchOnChange } from "../event/onChangeEvent";
import { pressEnterEvent } from "../event/onKeyDownEvent";
import { searchHistory } from "../session";
const PersonalIndex=()=>{
    const [allPerson,setAllPerson]=useState<allPersonType []>([])
    const [ulStyle,setUlStyle]=useState<ulStyleType>({display:'none'})
    const [ulUserStyle,setUlUserStyle]=useState<ulStyleType>({display:'none'})
    const [pressEnter,setPressEnter]=useState<boolean>(false)
    const [searchData,setSearchData]=useState<string>('')
    

    var person_data:personType={Posts:20,Followers:10,Following:10}
    useEffect(()=>{
        var temp=[]
        for(let i=0;i<10;i++){
            temp.push(person_data)
        }
        
        setAllPerson(temp)
    },[])

    useEffect(()=>{
        console.log('pressEnter',pressEnter)
        console.log('searchData',searchData)
        searchOnChange(searchData,pressEnter)
    },[pressEnter,searchData])

    return(
        <>
            <div className="fix_title">
                <input 
                    value={searchData}
                    onKeyDown={(e)=>{setPressEnter(pressEnterEvent(e))}}
                    onChange={(e)=>{
                        setSearchData(e.target.value)
                    }}
                    onFocus={()=>{setUlStyle({display:'block'})}}
                    onBlur={()=>{setUlStyle({display:'none'})}}
                    placeholder={'搜尋用戶'} type='text'
                    />
                <ul style={ulStyle}>
                    {
                        searchHistory.map((item,index)=>{
                            return(
                                <div key={index} onMouseDown={()=>{
                                    setSearchData(item)}}>
                                    <div></div>
                                    <li>{item}</li>
                                </div>
                            )
                        })
                    }

                </ul>
                <div onClick={()=>{setUlUserStyle({display:'block'})}}
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