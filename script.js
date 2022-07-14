console.log("songs play");

// variable initilize
let gif=document.getElementById('Gif');
let Songindex=0;
let audioelement= new Audio('/Songs/1.mp3');
let Masterplay=document.getElementById('Masterplay');
let Progressbar=document.getElementById('Progressbar');
let SongItem= Array.from(document.getElementsByClassName('Songitem'));
let Currentsong=document.getElementById('crntsong');
let CT=document.getElementById('CT');
let TT=document.getElementById('TT');
let Songs=[
    {Songname:"Rataan Lambiyan-Jubin Nautiyal" ,filepath:"/Songs/1.mp3", Coverpath:"/imgs/1.jpg"},
    {Songname:"Dil Galti Kar Baitha Hai" ,filepath:"/Songs/2.mp3", Coverpath:"/imgs/2.jpg"},
    {Songname:"Srivalli-Javed Ali" ,filepath:"/Songs/3.mp3", Coverpath:"/imgs/3.jpg"},
    {Songname:"Saami Saami-Sunidhi Chauhan" ,filepath:"/Songs/4.mp3", Coverpath:"/imgs/4.jpg"},
    {Songname:"Ami Je Tomar-Arijeet Singh" ,filepath:"/Songs/5.mp3", Coverpath:"/imgs/5.jpg"},
    {Songname:"Galliyan Returns-Ankit Tiwari" ,filepath:"/Songs/6.mp3", Coverpath:"/imgs/6.jpg"},
    {Songname:"Chalo Theek Hai-Amaal Malik" ,filepath:"/Songs/7.mp3", Coverpath:"/imgs/7.jpg"},
    {Songname:"Dhokha-Arijit Singh" ,filepath:"/Songs/8.mp3", Coverpath:"/imgs/8.jpg"},
    {Songname:"Jab Saiyaan" ,filepath:"/Songs/9.mp3", Coverpath:"/imgs/9.jpg"}
    
]

SongItem.forEach((element,i )=> {
    element.getElementsByTagName("img")[0].src=Songs[i].Coverpath;
    element.getElementsByClassName("Songname")[0].innerText=Songs[i].Songname;
});

// Music play/pause handle
Masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime==0){
        audioelement.play();
        Masterplay.classList.remove('fa-circle-play');
        Masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }   
    else if(audioelement.played||audioelement.currentTime<0){
        audioelement.pause();
        Masterplay.classList.remove('fa-circle-pause');
        Masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})

// event listners
audioelement.addEventListener('timeupdate',()=>{
  let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
  console.log(progress);
  Progressbar.value =progress;

})
Progressbar.addEventListener('change',()=>{
    audioelement.currentTime=Progressbar.value*audioelement.duration/100;
})

const restartsongs=()=>{
    Array.from(document.getElementsByClassName('Songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('Songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        restartsongs();
        Songindex=parseInt(e.target.id);        
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src=`Songs/${Songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        Masterplay.classList.remove('fa-circle-play');
        Masterplay.classList.add('fa-circle-pause');
        Currentsong.innerHTML=Songs[e.target.id-1].Songname;
        gif.style.opacity=1;
        
        
    })
})
document.getElementById("next").addEventListener('click',()=>{
    if(Songindex>9){
        Songindex=1;
    }
    else
    {
        Songindex+=1;
    }
    audioelement.src=`Songs/${Songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    Masterplay.classList.remove('fa-circle-play');
    Masterplay.classList.add('fa-circle-pause');
    Currentsong.innerHTML=Songs[Songindex-1].Songname;
    gif.style.opacity=1;
})
document.getElementById("Previous").addEventListener('click',()=>{
    if(Songindex<1){
        Songindex=9;
    }
    else
    {
        Songindex-=1;
    }
    audioelement.src=`Songs/${Songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    Masterplay.classList.remove('fa-circle-play');
    Masterplay.classList.add('fa-circle-pause');
    Currentsong.innerHTML=Songs[Songindex-1].Songname;
    gif.style.opacity=1;
})
