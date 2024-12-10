let startindex=document.getElementById("startindex")
let deletecount=document.getElementById("deletecount")
let itemadd=document.getElementById("itemadd")
let updateArray=document.getElementById("updateArray")
let arr = [1, 7, 3, 1, 0, 20, 77];

function spliceButton() {
    if(startindex.value == '' || deletecount.value==='' || itemadd.value==='') {
        alert("enter the value")
        
    }else {
        let startValue=parseInt(startindex.value)
        let deletecountValue=parseInt(deletecount.value)
        let itemaddValue=itemadd.value
        arr.splice(startValue,deletecountValue,itemaddValue)
        updateArray.textContent=arr
        startindex.value=''
        deletecount.value=''
        itemadd.value=''
        

    }
    

    
}
