const users = [
    {
      name: "Ritul Jain",
      pic: "op.jpg",
      bio: "Logical Learner"
    },
    {
      name: "Ritik Parmar",
      pic: "rt.jpg",
      bio: "Humble & Kind Brother"
    },
    {
      name: "Prashant Parmar",
      pic: "pr.jpg",
      bio: "True Friend"
    },
    {
      name: "Kalyan Mewada",
      pic: "kp.jpg",
      bio: "Math Whiz"
    },
    {
      name: "Devansh Shirivastava",
      pic: "dv.jpg",
      bio: "Tech Prodigy"
    },
  ];
  let inp=document.querySelector("#searchInput");
function Showuser(arr){
arr.forEach((ele)=>{
  let h3=document.createElement("h3");
  let p=document.createElement("p");
  h3.textContent=ele.name;
  p.textContent=ele.bio;
  let cardc=document.createElement("div");
  cardc.setAttribute("class","card-content");
  cardc.appendChild(h3);
  cardc.appendChild(p);
  let img=document.createElement("img");
  img.setAttribute("src",ele.pic);
   let card=document.createElement("div");
   card.appendChild(img);
   card.appendChild(cardc);
   let cont=document.querySelector(".card-container");
   card.classList.add("card");
   cont.append(card);
});
};
Showuser(users);
  function areNamesEqual(b,a){
    if(a.toLowerCase()===b.toLowerCase()) return true;
  }
inp.addEventListener("input",(det)=>{
  let newarr=users.filter((ele)=>{
      let dett=det.target.value.toLowerCase();
      let Eleme= ele.name.toLowerCase();
    return Eleme.startsWith(dett);
  });
  document.querySelector(".card-container").innerHTML = "";
  Showuser(newarr);

});
let Icon=document.querySelector(".icons");
let Box=document.querySelector(".searchBox");
let Card=document.querySelector(".card-container")
let form=document.querySelector(".form-container");
let Inp=document.querySelectorAll(".name")
Icon.addEventListener("click",function(){
      Box.style.display='none';
      Card.style.display='none';
      form.style.display='block';
});
 let frm=document.querySelector(".form");
frm.addEventListener("submit",(det)=>{
    det.preventDefault();
     let obj={};
     obj.name=Inp[0].value;
   obj.pic=Inp[1].value;
     obj.bio=Inp[2].value;
     users.push(obj);
     Box.style.display='flex';
     Card.style.display='flex';
     form.style.display='none';
     document.querySelector(".card-container").innerHTML = "";
     Showuser(users);
     frm.reset();
});
let close=document.querySelector(".C");
close.addEventListener("click",()=>{
  Box.style.display='flex';
  Card.style.display='flex';
  form.style.display='none';
});




  