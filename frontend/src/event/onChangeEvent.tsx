import { searchHistory } from "../session"
import { setLocalSearchHistory } from "../session"
export function searchOnChange(value:string,pressEnter:boolean):string{
    if(pressEnter===false){
        //如果沒有按 enter就離開
        return ''
    }
    //如果有按enter 就把當前的input value 加入到searchHistory
    var result=[...searchHistory,value]
    //after set value into the searchHistory ,need to storage back to LocalStorage
    //call setLocalSearchHistory
    setLocalSearchHistory(result)
    alert('')
    return ''
}