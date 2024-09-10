var  mypath = `M 10 80 Q 500 80 990 80`
var finalpath = ` M 10 80 Q 500 80 990 80`

var string = document.querySelector("#string")
string.addEventListener("mousemove",function(dets){
  mypath =  `M 10 80 Q ${dets.x} ${dets.y} 990 80`
  gsap.to("svg path",{
    attr:{d:mypath}
  })
})
string.addEventListener("mouseleave",function(){
gsap.to("svg path",{
    attr:{d:finalpath},
    ease:"elastic.out(1,0,3)",
    duration:1
  
})
})