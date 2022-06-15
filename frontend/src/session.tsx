import { arrStringType } from "./type"
export var  searchHistory:arrStringType=JSON.parse(localStorage.getItem('searchHistory')||'')
export function setLocalSearchHistory(props:arrStringType){
    //set searchHistory to localStorage
    localStorage.setItem('searchHistory',JSON.stringify(props))
}