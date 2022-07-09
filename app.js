// VALITADION FUNCTION FOR PAGE INFO.HTML

function validation(e){
    nameinp = document.getElementById('name');
    mailinp = document.getElementById('mail');
    phoneinp = document.getElementById('phone');
    dateinp = document.getElementById('date');
    errbox = document.getElementById('errorbox');
    numbers = /[0-9]/g;
    redberry= '@redberry.ge';
    if(nameinp.value !='' && mailinp.value !='' && phoneinp.value!='' && dateinp.value!=''){
        adddoneicon(1690, 745);
        if(nameisvalid(nameinp,errbox)==true && mailisvalid(mailinp, errbox, redberry )==true && phoneisvalid(phone, errbox, numbers)==true ){
            redirection(e);
            dateinp.classList.remove('err-input');
            closebox();
            console.log("success");
        }
    }else{
        errbox.classList.add('err');
        errbox.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Empty Fields</div><button class='close-btn' onclick='closebox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please fill out all the required fields</div>"
    }
}

// VALIDATE NAME INPUT

function nameisvalid(name, box){
        if(name.value.length<2){
            name.classList.add('err-input');
            box.classList.add('err');
            box.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Invalid Name</div><button class='close-btn' onclick='closebox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Name must be at least two character length!</div>"
            return false
        }else{
            name.classList.remove('err-input');
            adddoneicon(1690, 495);
            closebox();
            return true
        }

}

// VALIDATE MAIL INPUT

function mailisvalid(mail, box, redberry){
        if(!(mail.value.includes(redberry))){
            mail.classList.add('err-input');
            box.classList.add('err');
            box.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Invalid Email</div><button class='close-btn' onclick='closebox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please enter valid email address</div>"
            return false
        }else{
            mail.classList.remove('err-input');
            adddoneicon(1690, 575);
            closebox();
            return true
        }
}

// VALIDATE PHONE INPUT 

function phoneisvalid(phone, box, nums){
        if(!(phone.value.match(nums))){
            phone.classList.add('err-input');
            box.classList.add('err');
            box.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Invalid Phone</div><button class='close-btn' onclick='closebox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please enter numbers only</div>"
            return false
        }else{
            phone.classList.remove('err-input');
            adddoneicon(1690, 655);
            closebox();
            return true
        }
}

// CLOSE ERROR BOX FUNCTION

function closebox(){
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
        errbox.innerHTML="<div style='display:flex; flex-directiom:row; align-content:center; justify-content:space-between;'><div class='err-title'><img src='Img/err-icon.png' style='width:20px;'>Empty Fields</div><button class='close-btn' onclick='closebox()'><img id='close' class='close' src='Img/close-icon.png'></button></div> <div class='err-line'></div><div class='err-text'>Please fill out all the required fields</div>"
    }else{
        closebox();
        redirection(e);
    }

}

// ADDING DONE ICON ON INPUTS

function adddoneicon(left, top){
    div = document.getElementById("done-icon")
    div.innerHTML += "<img src='Img/done-icon.png' style='position: absolute; left:"+left+"px;top:"+top+"px;'>"
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
        console.log(localStorage.getItem(namee))
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
    namee.value =  localStorage.getItem("name");
    mail.value =  localStorage.getItem("mail");
    phone.value =  localStorage.getItem("phone");
    date.value =  localStorage.getItem("date");

}

// RESTORE EXPERIENCE PAGE INPUT VALUES

function restoreExp(){
    var knowledge = document.getElementById('knowledge');
    var favcharacter = document.getElementById('favchar');
    var radios = document.getElementsByName("yesorno"); 
    var val = localStorage.getItem('yesorno');
    for(let i=0;i<radios.length;i++){
        if(radios[i].value == val){
            radios[i].checked = true; 
        }
    }
    knowledge.value =  localStorage.getItem("knowledge");
    favcharacter.value =  localStorage.getItem("favcharacter"); // doesn't work don't know why
}


