var nameSite = document.getElementById("site");
var ourUrl = document.getElementById("url");
var dialog = document.getElementById("dialog")


var allSites = [];
if(localStorage.getItem("thisSite") !=null){
    allSites = JSON.parse(localStorage.getItem("thisSite"))

    dispalySite()
}
function addSite(){
    var mySites= {
        site:nameSite.value,
        url:ourUrl.value
    }
    if(mySites.site != "" && mySites.url != ""){
        allSites.push(mySites);

        localStorage.setItem("thisSite",JSON.stringify(allSites))
        console.log(allSites);
        dispalySite();
        clear();


    }else{
        dialog.classList.remove("d-none")
        
    }

   

}

function dispalySite(){
    var cartona = ``
    for(var i=0 ; i< allSites.length ; i++){
        cartona +=` <tr>
                    <th>${i+1}</th>
                    <th>${allSites[i].site}</th>
                    <th> <button class="btn btn-success"><i class="fa-solid fa-eye me-2">
                    <a href="${allSites[i].url}" target="_blank">Visit</a></i></button></th>
                    <th><button  onclick="Delete(${i})" class="btn btn-danger"><i class="fa-solid fa-trash me-2"></i> Delete</button></th>          
                    </tr>
`
    }
    document.getElementById("item").innerHTML = cartona
}

function clear(){
    
    nameSite.value = null;
    ourUrl.value = null;

}

function Delete(index){
 
    allSites.splice(index,1) 
dispalySite()
localStorage.setItem("thisSite",JSON.stringify(allSites))

}


var enterBtn = document.getElementById("enter")
var regex = {
    site:{
        reg:/^.{3}/,
        isValid: false
    } ,
    url:{
        reg:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/ ,
        isValid: false
    }
}


function validation(element){
    dialog.classList.add("d-none")

 
 if(regex[element.id].reg.test(element.value)){
element.classList.add('is-valid');
element.classList.remove('is-invalid')
regex[element.id].isValid = true

 }else{
    element.classList.remove('is-valid');
    element.classList.add('is-invalid')
    regex[element.id].isValid = false

    
 }
 toggelAddBtn()

}
function toggelAddBtn(){
    if(regex.site.isValid && regex.url.isValid){
        enterBtn.classList.remove("disabled")
    }else{
        enterBtn.classList.add("disabled")
    }
}





