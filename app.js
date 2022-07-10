// VALITADION FUNCTION FOR PAGE INFO.HTML

function validation(e){
    nameinp = document.getElementById('name');
    mailinp = document.getElementById('mail');
    phoneinp = document.getElementById('phone');
    dateinp = document.getElementById('date');
    errbox = document.getElementById('errorbox');
    numbers = /[0-9]/g;
    redberry= '@redberry.ge';
    nameisvalid(nameinp,errbox);
    mailisvalid(mailinp, errbox, redberry );
    phoneisvalid(phone, errbox, numbers);
    dateisvalid(date, errbox);
    if(nameisvalid(nameinp,errbox)==true && mailisvalid(mailinp, errbox, redberry )==true && phoneisvalid(phone, errbox, numbers)==true && dateisvalid(date, errbox)==true ){
        addDoneIcon();
        redirection(e);
        console.log("success");
    }
    
}

// VALIDATE NAME INPUT

function nameisvalid(name, box){
    if(name.value==''){
        name.classList.add('err-input');
        box.classList.add('err');
        box.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Empty Fields</div><button class='close-btn' onclick='closeBox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please fill out all the required fields</div>"
        return false
    }else{
        if(name.value.length<2){
            name.classList.add('err-input');
            box.classList.add('err');
            box.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Invalid Name</div><button class='close-btn' onclick='closeBox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Name must be at least two character length!</div>"
            return false
        }else{
            name.classList.remove('err-input');
            closeBox();
            return true
        }
    }

}

// VALIDATE MAIL INPUT

function mailisvalid(mail, box, redberry){
    if(mail.value ==''){
        mail.classList.add('err-input');
        box.classList.add('err');
        box.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Empty Fields</div><button class='close-btn' onclick='closeBox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please fill out all the required fields</div>"

        return false
    }else{
        if(!(mail.value.includes(redberry))){
            mail.classList.add('err-input');
            box.classList.add('err');
            box.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Invalid Email</div><button class='close-btn' onclick='closeBox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please enter valid email address</div>"
            return false
        }else{
            mail.classList.remove('err-input');
            closeBox();
            return true
        }
    }
}

// VALIDATE PHONE INPUT 

function phoneisvalid(phone, box, nums){
    if(phone.value ==''){
        phone.classList.add('err-input');
        box.classList.add('err');
        box.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Empty Fields</div><button class='close-btn' onclick='closeBox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please fill out all the required fields</div>"
        return false
    }else{
        if(!(phone.value.match(nums))){
            phone.classList.add('err-input');
            box.classList.add('err');
            box.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Invalid Phone</div><button class='close-btn' onclick='closeBox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please enter numbers only</div>"
            return false
        }else{
            phone.classList.remove('err-input');
            closeBox();
            return true
        }
    }
}

// VALIDATE DATE

function dateisvalid(date, box){
    if(date.value ==''){
        date.classList.add('err-input');
        box.classList.add('err');
        box.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Empty Fields</div><button class='close-btn' onclick='closeBox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please fill out all the required fields</div>"
        return false
    }else{
        date.classList.remove('err-input');
        closeBox();
        return true
    }

}

// CLOSE ERROR BOX FUNCTION

function closeBox(){
    errbox = document.getElementById('errorbox');
    errbox.classList.remove('err');
    errbox.innerHTML="";
}

// REDIRECTION ACCORDING TO BUTTON IDS

function redirection(e){
    id = e.id;
    if (id == 1){
        location.replace("info.html");
    }else if (id== 2){
        location.replace("getstarted.html");
    }else if(id ==3){
        location.replace("experience.html");
    }else if(id ==4){
        location.replace("info.html");
    }else if(id ==5){
        location.replace("completed.html");
    }else{
        console.log("something went wrong!");
    }
}

// VALIDATION FUNCTION FOR EXPERIENCE.HTML PAGE

function validation2(e){
    errbox = document.getElementById('errorbox');
    know = document.getElementById("knowledge");
    favchar = document.getElementById("favchar");
    yes =  document.getElementById("yes");
    no = document.getElementById("no");
    if(know.value =="" || favchar.value =="" || (yes =="" && no =="")){
        errbox.classList.add('err');
        errbox.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Empty Fields</div><button class='close-btn' onclick='closeBox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please fill out all the required fields</div>"
        if(know.value ==""){
            know.classList.add("err-input");
        }
        if(favchar.value==""){
            favchar.classList.add("err-input");
        }
        
    }else{
        closeBox();
        redirection(e);
    }

}


// ADDING DONE ICON ON INPUTS

function addDoneIcon(){
    div = document.getElementById("done-icon")
    div.innerHTML += "<img src='Img/done-icon.png' style='position: absolute; left:1690px;top:495px;'>"
    "<img src='Img/done-icon.png' style='position: absolute; left:1690px;top:575px;'>"
    "<img src='Img/done-icon.png' style='position: absolute; left:1690px;top:655px;'>"
    "<img src='Img/done-icon.png' style='position: absolute; left:1690px;top:735px;'>"
}
 
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

// GET CHARACTERS FROM API


var client = new HttpClient();
client.get('https://chess-tournament-api.devtest.ge/api/grandmasters', function(response){
   favchar = document.getElementById('favchar');
   obj = JSON.parse(response)
    for(let i=0; i<obj.length; i++){
        favchar.innerHTML+="<option value='"+obj[i].name+"' id = '"+obj[i].id+"'><img src='https://chess-tournament-api.devtest.ge/'"+obj[i].image+"' style='width=30px;'>"+obj[i].name+"</option>"
    }
});


//SAVE INPUT VALUES

function saveValue(e){
    if (typeof(Storage) !== "undefined") {
        var namee = e.getAttribute("name");
        var val = e.value; 
        localStorage.setItem(namee, val);
    }else{
        console.log('sorry');
    }
}

//GET INFO PAGE INPUT VALUES

function restoreInfo(){
    var namee = document.getElementById('name');
    var mail = document.getElementById('mail');
    var phone = document.getElementById('phone');
    var date = document.getElementById('date');
    namee.value =  localStorage.name;
    mail.value =  localStorage.mail;
    phone.value =  localStorage.phone;
    date.value =  localStorage.date;

}

// RESTORE EXPERIENCE PAGE INPUT VALUES

function restoreExp(){
    var knowledge = document.getElementById('knowledge');
    var favcharacter = document.getElementById('favchar');
    var radios = document.getElementsByName("yesorno"); 
    var val = localStorage.yesorno;
    for(let i=0;i<radios.length;i++){
        if(radios[i].value == val){
            radios[i].checked = true; 
        }
    }
    knowledge.value =  localStorage.knowledge;
    favcharacter.value = localStorage.favcharacter; // doesn't work don't know why
}

// POST DATA ON API

function postData(){
  
      
    namee =  localStorage.name;
    mail =  localStorage.mail;
    phone =  localStorage.phone;
    date =  localStorage.date;
    know = localStorage.knowledge;
    favchar = document.getElementById("favchar");
    favchar = favchar.options[favchar.selectedIndex];
    char_id =favchar.id;

   
    if(localStorage.getItem('yesorno') == 'yes'){
        participated = true;
    }else{
        participated = false;
    }
    if(know =="intermediate"){
        know =  "normal"
    }
    console.log(namee, mail, phone, date, know, char_id, participated);
    try {

    fetch("https://chess-tournament-api.devtest.ge/api/register", {
        method:'POST',
        body:JSON.stringify(
            {
            "name":namee.toString(),
            "email":mail.toString(),
            "phone":phone.toString(),
            "date_of_birth":date.toString(),
            "experience_level":know.toString(),
            "already_participated":participated,
            "character_id":char_id
        }
    ),
        headers: {
            "content-type": "application/json: charset=UTF-8"
        }
    })
    .then(response=> response.json())
    .then(json=>console.log(json));
    localStorage.clear();
    console.log('success')
}catch(err){
    console.log(err);
}

}
