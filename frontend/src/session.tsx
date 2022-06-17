import { arrStringType } from "./type"

export var  localSearchHistory:arrStringType=JSON.parse(localStorage.getItem('searchHistory')||'[]')
export function setLocalSearchHistory(props:arrStringType){
    //set searchHistory to localStorage
    localStorage.setItem('searchHistory',JSON.stringify(props))
}