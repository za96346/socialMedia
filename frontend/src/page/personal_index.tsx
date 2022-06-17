import PersonalCard from "../component/personalCard";
import { personType,ulStyleType, arrStringType } from "../type";
import React, {  useEffect, useState } from "react";
import { searchOnChange } from "../event/onChangeEvent";
import { pressEnterEvent } from "../event/onKeyDownEvent";
import { localSearchHistory } from "../session";
const PersonalIndex=():JSX.Element=>{
    
    const [allPerson,setAllPerson]=useState<Array<personType>>([])
    const [searchHistory,setSearHistory]=useState<arrStringType>([])
    const [ulStyle,setUlStyle]=useState<ulStyleType>({display:'none'})
    const [ulUserStyle,setUlUserStyle]=useState<ulStyleType>({display:'none'})
    const [pressEnter,setPressEnter]=useState<boolean>(false)
    const [searchData,setSearchData]=useState<string>('')
    

    var person_data:personType={Name:'choco',Descript:'hi im choco',Posts:20,Followers:10,Following:10,Pic:require('../static/doggy.jpg')}
    useEffect(()=>{
        var temp=[]
        for(let i=0;i<10;i++){
            temp.push(person_data)
        }
        setSearHistory(localSearchHistory)
        setAllPerson(temp)
    },[])

    useEffect(()=>{
        console.log('pressEnter',pressEnter)
        console.log('searchData',searchData)
        searchOnChange(searchData,pressEnter,setSearHistory)
    },[pressEnter,searchData])

    return(
        <>
            <div className="fix_title">
                <div >Doggy Book</div>
                <div>
                    <input 
                        value={searchData}
                        onKeyDown={(e)=>{
                            var result=pressEnterEvent(e)
                            result===true?setUlStyle({display:'none'}):setUlStyle({display:'block'})
                            setPressEnter(result)}}
                        onChange={(e)=>{
                            setSearchData(e.target.value)
                        }}
                        onFocus={()=>{setUlStyle({display:'block'})}}
                        onBlur={()=>{setUlStyle({display:'none'})}}
                        placeholder={'search user'} type='text'
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
                </div>

                <div onClick={()=>{setUlUserStyle({display:'block'})}}
                    onMouseLeave={()=>{setUlUserStyle({display:'none'})}} className="img">
                    <div style={ulUserStyle}>
                        <div>個人資料</div>
                        <div>second option</div>
                        <div>
                            <button>Setting</button>
                            <button>Log Out</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="personal_article">
                <ul className="personal_left_bar">
                    
                <div><li>News</li></div>
                <div><li>Friends</li></div>
                <div><li>Group</li></div>
                <div><li>Market</li></div>
                <div><li>Watch</li></div>
                </ul>
                <div className="personal_middle">
                    {
                        allPerson.map((item,index)=>{
                            return(
                                <PersonalCard key={index} persons={person_data}/>
                            )
                        })
                    }
                </div>
                <div className="personal_right_bar">

                </div>
            </div>
        </>
    )
}
export default PersonalIndex;