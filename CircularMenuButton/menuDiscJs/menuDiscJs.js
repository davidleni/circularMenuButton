function disableselect(e){
    return false
    }
    function reEnable(){
    return true
    }
    document.onselectstart=new Function ("return false")
    if (window.sidebar){
    document.onmousedown=disableselect
    document.onclick=reEnable
    }

    function homePage() {
        document.getElementById('menuDiscMainButtonText').innerHTML = "Home";
    }
    function projectsPage() {
        document.getElementById('menuDiscMainButtonText').innerHTML = "Projects";
    }
    function appsPage() {
        document.getElementById('menuDiscMainButtonText').innerHTML = "Apps";
    }
    function coursesPage() {
        document.getElementById('menuDiscMainButtonText').innerHTML = "Courses";
    }
    function menuButton() {
        document.getElementById('menuDiscMainButtonText').innerHTML = "Menu";
    }

function hideAndShow() {
    var x = document.getElementById('menuDiscButton1');
    var y = document.getElementById('menuDiscButton2');
    var z = document.getElementById('menuDiscButton3');
    var q = document.getElementById('menuDiscButton4');
    var r = document.getElementById('menuDiscButton5');
    var u = document.getElementById('menuDiscButton6');
    var d = document.getElementById('menuDiscButton7');
    var f = document.getElementById('menuDiscButton8');
    
    if(x.style.display == "block" && y.style.display == "block" && z.style.display == "block" && u.style.display == "block" && d.style.display == "block" && f.style.display == "block") {
        document.getElementById('menuDiscButton1').style.display = "none";
        document.getElementById('menuDiscButton2').style.display = "none";
        document.getElementById('menuDiscButton3').style.display = "none";
        document.getElementById('menuDiscButton4').style.display = "none";
        document.getElementById('menuDiscButton5').style.display = "none";
        document.getElementById('menuDiscButton6').style.display = "none";
        document.getElementById('menuDiscButton7').style.display = "none";
        document.getElementById('menuDiscButton8').style.display = "none";
        document.getElementById('menuDiscMainButton').style.top = "65px";
        document.getElementById('menuDiscMainButton').style.left = "65px";
        document.getElementById('menuDiscMainButton').style.backgroundColor = "darkslategray";
        document.getElementById('menuDiscMainButton').style.cursor = "pointer";
    } else {
        document.getElementById('menuDiscButton1').style.display = "block";
        document.getElementById('menuDiscButton2').style.display = "block";
        document.getElementById('menuDiscButton3').style.display = "block";
        document.getElementById('menuDiscButton4').style.display = "block";
        document.getElementById('menuDiscButton5').style.display = "block";
        document.getElementById('menuDiscButton6').style.display = "block";
        document.getElementById('menuDiscButton7').style.display = "block";
        document.getElementById('menuDiscButton8').style.display = "block";
        document.getElementById('menuDiscMainButton').style.backgroundColor = "brown";
        document.getElementById('menuDiscMainButton').style.cursor = "pointer";
        document.getElementById('menuDiscContainer').style.width = "195px";
        document.getElementById('menuDiscContainer').style.height = "195px";
        document.getElementById('menuDiscMainButton').style.top = "0px";
        document.getElementById('menuDiscMainButton').style.left = "0px";
    }
}