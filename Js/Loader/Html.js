/**
* This function allows you to go to an specific frame of the animation
* Remember the frames are a percentage number, so it goes from 0 to 100
**/
function html(frame){
  reset(); // Just reset
  
  //For some reason Javascript needs a time to remove animate class. I tried to use as callback from reset but it just didnt work. 
  setTimeout(function(){
    //Get components
    var chart = document.getElementById("radioChartContent"), pVal = document.getElementById("percentValue");
    var chart_C = document.getElementById("radioChartContent_C"), pVal = document.getElementById("percentValue_C");
    var chart_CC = document.getElementById("radioChartContent_CC"), pVal = document.getElementById("percentValue_CC");
    var chart_Py = document.getElementById("radioChartContent_Py"), pVal = document.getElementById("percentValue_Py");
    var chart_Ps = document.getElementById("radioChartContent_Ps"), pVal = document.getElementById("percentValue_Ps");
    var chart_Vb = document.getElementById("radioChartContent_Vb"), pVal = document.getElementById(percentValue_Vb);
    var chart_Html = document.getElementById("radioChartContent_Html"), pVal = document.getElementById(percentValue_Html);
    var chart_Css = document.getElementById("radioChartContent_Css"), pVal = document.getElementById(percentValue_Css);
    var chart_Js = document.getElementById("radioChartContent_Js"), pVal = document.getElementById(percentValue_Js);
    var chart_Asp = document.getElementById("radioChartContent_Asp"), pVal = document.getElementById(percentValue_Asp);
    var chart_Boo = document.getElementById("radioChartContent_Boo"), pVal = document.getElementById(percentValue_Boo);
    var chart_My = document.getElementById("radioChartContent_My"), pVal = document.getElementById(percentValue_My);
    var chart_Sql = document.getElementById("radioChartContent_Sql"), pVal = document.getElementById(percentValue_Sql);
    var chart_Jv = document.getElementById("radioChartContent_Jv"), pVal = document.getElementById(percentValue_Jv);
    var chart_Tfs = document.getElementById("radioChartContent_Tfs"), pVal = document.getElementById(percentValue_Tfs);
    var chart_Git = document.getElementById("radioChartContent_Git"), pVal = document.getElementById(percentValue_Git);
    var chart_Son = document.getElementById("radioChartContent_Son"), pVal = document.getElementById(percentValue_Son);
    var chart_Wp = document.getElementById("radioChartContent_Wp"), pVal = document.getElementById(percentValue_Wp);
    var chart_Seo = document.getElementById("radioChartContent_Seo"), pVal = document.getElementById(percentValue_Seo);
    var chart_Ux = document.getElementById("radioChartContent_Ux"), pVal = document.getElementById(percentValue_Ux);
    var chart_Sc = document.getElementById("radioChartContent_Sc"), pVal = document.getElementById(percentValue_Sc);
    var chart_Il = document.getElementById("radioChartContent_Il"), pVal = document.getElementById(percentValue_Il);

    //Add animate
    chart.classList.add("animate");
    chart_C.classList.add("animate");
    chart_CC.classList.add("animate");
    chart_Py.classList.add("animate");
    chart_Ps.classList.add("animate");
    chart_Vb.classList.add("animate");
    chart_Html.classList.add("animate");
    chart_Css.classList.add("animate");
    chart_Js.classList.add("animate");
    chart_Asp.classList.add("animate");
    chart_Boo.classList.add("animate");
    chart_My.classList.add("animate");
    chart_Sql.classList.add("animate");
    chart_Jv.classList.add("animate");
    chart_Tfs.classList.add("animate");
    chart_Git.classList.add("animate");
    chart_Son.classList.add("animate");
    chart_Wp.classList.add("animate");
    chart_Seo.classList.add("animate");
    chart_Ux.classList.add("animate");
    chart_Sc.classList.add("animate");
    chart_Il.classList.add("animate");


    var currentPercent = 0; //Initial percentage

    //Get percentage one by one
    var currTimeout = setInterval(function(){
      //Check is reach the limit
      if(currentPercent == frame || currentPercent > 100){
          
          //Clear interval
          clearInterval(currTimeout);
          //Pause animation
          chart.style.animationPlayState = "paused";
          chart.style.webkitAnimationPlayState = "paused"; //if webkit

          chart_C.style.animationPlayState = "paused";
          chart_C.style.webkitAnimationPlayState = "paused"; //if webkit

          chart_CC.style.animationPlayState = "paused";
          chart_CC.style.webkitAnimationPlayState = "paused"; //if webkit

          chart_Py.style.animationPlayState = "paused";
          chart_Py.style.webkitAnimationPlayState = "paused"; //if webkit

          chart_Ps.style.animationPlayState = "paused";
          chart_Ps.style.webkitAnimationPlayState = "paused"; //if webkit

          chart_Vb.style.animationPlayState = "paused";
          chart_Html.style.animationPlayState = "paused";
          chart_Css.style.animationPlayState = "paused";
          chart_Js.style.animationPlayState = "paused";
          chart_Asp.style.animationPlayState = "paused";
          chart_Boo.style.animationPlayState = "paused";
          chart_My.style.animationPlayState = "paused";
          chart_Sql.style.animationPlayState = "paused";
          chart_Jv.style.animationPlayState = "paused";
          chart_Tfs.style.animationPlayState = "paused";
          chart_Git.style.animationPlayState = "paused";
          chart_Son.style.animationPlayState = "paused";
          chart_Wp.style.animationPlayState = "paused";
          chart_Seo.style.animationPlayState = "paused";
          chart_Ux.style.animationPlayState = "paused";
          chart_Sc.style.animationPlayState = "paused";
          chart_Il.style.animationPlayState = "paused";


          chart_Vbchart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Htmlchart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Csschart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Jschart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Aspchart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Boochart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Mychart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Sqlchart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Jvchart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Tfschart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Gitchart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Sonchart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Wpchart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Seochart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Uxchart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Scchart_Ps.style.webkitAnimationPlayState = "paused"; 
          chart_Ilchart_Ps.style.webkitAnimationPlayState = "paused"; 


          
          return false;
        }else{
          //Sum percentage
          currentPercent++;
          //show new percentage
          pVal.innerHTML = currentPercent+"%";
        }
    }, 10); //We are using 10 cause it reference by a 1 second (1000 miliseconds) animation. If you're using 4 seconds, change to 40 as  example
  },100);










}



//Reset to initial position
function reset(){
  var chart = document.getElementById("radioChartContent"), pVal = document.getElementById("percentValue");
  
  chart.classList.remove("animate");
  //pVal.innerHTML = "5%";
  chart.style.animationPlayState = "initial";
  chart.style.webkitAnimationPlayState = "initial"; //if webkit
}
