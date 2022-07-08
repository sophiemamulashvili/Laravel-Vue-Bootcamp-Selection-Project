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

function closebox(){
    errbox = document.getElementById('errorbox');
    errbox.classList.remove('err');
    errbox.innerHTML="";
}

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

function adddoneicon(left, top){
    div = document.getElementById("done-icon")
    div.innerHTML += "<img src='Img/done-icon.png' style='position: absolute; left:"+left+"px;top:"+top+"px;'>"
}