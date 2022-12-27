// import gsap from "gsap";


const onStart = () =>{
  console.log('started')
}
const onUpdate = () =>{
  console.log('updating')
}
const onFinished = () =>{
  console.log('finished')
}

const timeline = gsap.timeline({
  paused:true,
  onStart:onStart,
  onUpdate:onUpdate,
  onComplete:onFinished
});



// gsap.from('ul li:last-child',{
//   duration: 1,
//   x:40,
//   ease: "power2.out",
//   stagger: 0.1,
//   repeat:-1,
//   yoyo: true
// });

timeline
      .fromTo(
        'body',{
          backgroundColor:'#fff'
        },{
          backgroundColor:'#76c897',duration:1,ease:'power2.in'
        })

      .from(
        'p,h1',{
          duration:2,y:-30,opacity:0,stagger:0.1
        })

      .from(
        'img,h2',{
          duration:1,opacity:0,ease:'power4.in'
        })

      .from(
        'ul li',{
          duration:1,opacity:0,y:-10,stagger:0.2
        })
// gsap.fromTo('header',{x:-40},{x:40,repeat:2,duration:1,ease:'power2.inOut',yoyo:true})

const btnPlay = document.querySelector("#btnPlay");
const btnPause = document.querySelector("#btnPause");
const btnResume = document.querySelector("#btnResume");
const btnReverse = document.querySelector("#btnReverse");
const btnSpeedUp = document.querySelector("#btnSpeedUp");
const btnSlowDown = document.querySelector("#btnSlowDown");
const btnSeek = document.querySelector("#btnSeek");
const btnProgress = document.querySelector("#btnProgress");
const btnRestart = document.querySelector("#btnRestart");

        btnPlay.addEventListener('click',()=>{
          timeline.play();
        })
        btnPause.addEventListener('click',()=>{
          timeline.pause();
        })
        btnResume.addEventListener('click',()=>{
          timeline.resume();
        })
        btnReverse.addEventListener('click',()=>{
          timeline.reverse();
        })
        btnSpeedUp.addEventListener('click',()=>{
          timeline.timeScale(2);
        })
        btnSlowDown.addEventListener('click',()=>{
          timeline.timeScale(0.5);
        })
        btnSeek.addEventListener('click',()=>{
          timeline.seek(1.5);
        })
        btnProgress.addEventListener('click',()=>{
          timeline.progress(0.5);
        })
        btnRestart.addEventListener('click',()=>{
          timeline.restart();
        })