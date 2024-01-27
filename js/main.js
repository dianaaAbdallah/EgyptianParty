
// &&&&&&&&&&&&&&variables&&&&&&&&&&&&&&&
let btnSubmit=document.querySelector(".btn_submit");
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!functions
$(".openIcon").click(function(){

    $(".open").css("left","0")
})
$(".close").click(function(){
    $(".open").css("left","-270px") 
})

$("#singers_section h3").click(function () {
    $(this).next().slideToggle()
    $("#singers_section div").not($(this).next()).slideUp(500);
})

window.onload = function() {
   
    countToTime("15 November 2023 10:00:00");
  }

  function countToTime(countTo) {
  
        let newDate = new Date(countTo);
    newDate = (newDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    time = (newDate- now);
        
   let days = Math.trunc( time / (24*60*60));
   let hours = Math.trunc((time - (days * (24*60*60))) / 3600);
   let mins = Math.trunc((time - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.trunc((time - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countToTime(countTo); }, 1000);
  }
  $("textarea").keyup(function()
  {
let myLength=$(this).val().length;
$("#charsNum").text(
    100-myLength<=0?"your avalabile character finished":100-myLength
    )

  })
