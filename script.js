let users = [
    {
        profilePic:"./images/seven.webp",
        disPic:"./images/first.webp",
        notSeen: 3,
        location:"USA, California",
        name:"Victoria",
        age:"20",
        interest:[
            {
                title:"Music",
                icons:`<i class="text-md ri-music-2-line"></i>`,
            },
            {
                title:"Sports",
                icons:` <i class="text-md ri-basketball-fill"></i>`,
            },

        ],
        bioText:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, impedit? Eius quo et expedita commodi quas cumque?",
        isConnect:null,
    },
    {
        profilePic:"./images/six.webp",
        disPic:"./images/second.webp",
        notSeen: 5,
        location:"Uk, London",
        name:"Varonica",
        age:"24",
        interest:[
            {
                title:"Reader",
                icons:`<i class="ri-book-3-fill"></i>`,
            },
            {
                title:"Running",
                icons:`<i class="ri-run-fill"></i>`,
            }
        ],
        bioText:" Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        isConnect:null,
    },
    {
        profilePic:"./images/five.webp",
        disPic:"./images/third.webp",
        notSeen: 8,
        location:"USA, New York",
        name:"Kevin",
        age:"22",
        interest:[
            {
                title:"Coder",
                icons:`<i class="ri-code-s-slash-fill"></i>`,
            },
            {
                title:"Reader",
                icons:`<i class="ri-book-3-fill"></i>`,
            },
            {
                title:"Travelling",
                icons:`<i class="ri-riding-fill"></i>`,
            }
        ],
        bioText:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi nemo non voluptatibus quam blanditiis culpa repellendus.",
        isConnect:null,
    },
    {
        profilePic:"./images/third.webp",
        disPic:"./images/four.webp",
        notSeen: 5,
        location:"USA, America",
        name:"Maheen",
        age:"21",
        interest:[
            {
                title:"Designer",
                icons:`<i class="ri-t-shirt-2-fill"></i>`,
            },
            {
                title:"Travelling",
                icons:`<i class="ri-riding-fill"></i>`,
            }
        ],
        bioText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi nemo non voluptatibus quam blanditiis culpa repellendus.",
        isConnect:null,
    }
]


function select(elem){
   return document.querySelector(elem)
}

let currUser = 0;
let isAnimating = false;
let denyBtn = select(".deny")
let accept = select(".accept")

function addData(index){
    let cultter = "";

    select(".nv-img img").src = users[index].profilePic
    select(".chatbox span").textContent = users[index].notSeen
    select(".location p").textContent = users[index].location
    select(".namebox h2").textContent = users[index].name
    select(".namebox h3").textContent = users[index].age
    select(".biotext p").textContent = users[index].bioText
    
    users[index].interest.forEach((content,key)=>{
        cultter += `<div data-key=${key} class="tag bg-white/25 px-3 py-1 rounded-full flex items-center gap-1.5 ">
        ${content.icons}
        <span class="text-sm">${content.title}</span>
    </div>`
    })

    select(".tags").innerHTML = cultter
}

(function(){
    select(".maincard img").src = users[currUser].disPic
    select(".incomingcard img").src = users[currUser+1]?.disPic
    addData(currUser)
    currUser = 2;
})()

function changeImage(){
if(!isAnimating){
    isAnimating = true;
    let chtl = gsap.timeline(
        {
           onComplete: function(){
            isAnimating = false;
               let maincard = select(".maincard")
               let incomingcard = select(".incomingcard")
       
               incomingcard.classList.remove('z-[2]')
               incomingcard.classList.add('z-[3]')
               incomingcard.classList.remove('incomingcard')
       
               maincard.classList.remove('z-[3]')
               maincard.classList.add('z-[2]')
       
               gsap.set(maincard,{scale:1,opacity:1})
       
               if(currUser === users.length) currUser = 0;
               select(".maincard img").src = users[currUser].disPic
               currUser++;
       
               maincard.classList.remove('maincard')
               incomingcard.classList.add('maincard')
               maincard.classList.add('incomingcard')
       
       
           },
        }
       )
       
       chtl.to('.maincard',{  
       scale:1.2,
       opacity:0,
       ease:Circ,
       duration:0.9
       },'a')
       .from('.incomingcard',{  
       scale:0.8,
       opacity:0,
       ease:Circ,
       duration:0.9
       },'a')
       
}

}


(function(){
    document.querySelectorAll('.element').forEach((element)=>{
        let container = document.createElement('div')
        container.classList.add(`${element.classList[1]}-container`,"overflow-hidden")
        container.appendChild(element)
        select('.details').appendChild(container)
    })

})()




denyBtn.addEventListener("click",function(){
    changeImage()
    addData(currUser-1)
    gsap.from('.element',{
        y:150,
        ease:Power4.easeInOut,
        stagger:0.09,
        duration:1.5,
    })
})
accept.addEventListener("click",function(){
    changeImage()
    addData(currUser-1)
    gsap.from('.element',{
        y:150,
        ease:Power4.easeInOut,
        stagger:0.09,
        duration:1.5,
    })
})
