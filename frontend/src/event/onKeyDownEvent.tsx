export function pressEnterEvent(e:React.KeyboardEvent):boolean{
    var value=(e.key)
    var result=false
    if(value==='Enter'||value==='enter'){
        result=true
    }
    return result
}