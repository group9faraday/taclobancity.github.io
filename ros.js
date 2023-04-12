
function togglePopup(){
      document.getElementById("popup-1").classList.toggle("active");
    };
function showMe(selectedOption) {

    if(selectedOption.value=="2") {
        document.getElementById('myDIV').style.display = 'block';
    } else {
        document.getElementById('myDIV').style.display = 'none';
    }
    if(selectedOption.value=="2") {
        document.getElementById('myDIV2').style.display = 'block';
    } else {
        document.getElementById('myDIV2').style.display = 'none';
    }
    if(selectedOption.value=="3") {
        document.getElementById('myDIVA').style.display = 'block';
    } else {
        document.getElementById('myDIVA').style.display = 'none';
    }
    if(selectedOption.value=="4") {
        document.getElementById('myDIVD').style.display = 'block';
    } else {
        document.getElementById('myDIVD').style.display = 'none';
    }
    if(selectedOption.value=="4") {
        document.getElementById('myDIV3').style.display = 'block';
    } else {
        document.getElementById('myDIV3').style.display = 'none';
    }
    if(selectedOption.value=="5") {
        document.getElementById('myDIV4').style.display = 'block';
    } else {
        document.getElementById('myDIV4').style.display = 'none';
    }
}