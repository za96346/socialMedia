


export function searchOnChange(e:React.ChangeEvent<HTMLInputElement>,pressEnter:boolean):string{
    var value=e.target.value

    if(pressEnter===false){
        return ''
    }
    var  searchHistory:Array<string>=JSON.parse(localStorage.getItem('searchHistory')||'')
    searchHistory=[...searchHistory,value]
    localStorage.setItem('searchHistory','')
    
    return ''
}