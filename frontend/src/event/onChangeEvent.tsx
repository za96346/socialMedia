
import { localSearchHistory } from "../session"
import { setLocalSearchHistory } from "../session"
import { arrStringType } from "../type"
export  function searchOnChange(value:string,pressEnter:boolean,setSearHistory:React.Dispatch<React.SetStateAction<arrStringType>>):boolean{
    if(pressEnter===false){
        //如果沒有按 enter就離開
        return false
    }
    //如果有按enter 就把當前的input value 加入到searchHistory
    var result=[...localSearchHistory,value]
    //after set value into the searchHistory ,need to storage back to LocalStorage
    //call setLocalSearchHistory
    setLocalSearchHistory(result)//function in session.tsx
    setSearHistory(result)
    return true
}