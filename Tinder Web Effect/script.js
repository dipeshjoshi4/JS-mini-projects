let users = [
    {
        progilepic: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        displaypic: "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBpbiUyMG5lb24lMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D",
        pendingMsg: 2,
        location: "Delhi,India",
        name: "Harshita",
        age: 23,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-quill-pen-line"></i>`,
                interest: "writing"
            }
        ],
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Liberorecusandae tempore repre iure",
        isFriend: null
    },
    {
        progilepic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        displaypic: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwZ2lybCUyMHNtaWxlfGVufDB8fDB8fHww",
        pendingMsg: 5,
        location: "Ahemdabaad,India",
        name: "Nirali",
        age: 20,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-steam-line"></i>`,
                interest: "games"
            }
        ],
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Liberorecusandae tempore repre iure",
        isFriend: null
    },
    {
        progilepic: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0JTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
        displaypic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwZ2lybCUyMHNtaWxlfGVufDB8fDB8fHww",
        pendingMsg: 4,
        location: "vadodra,India",
        name: "janaki",
        age: 27,
        interests: [
            {
                icon: `<i class="ri-group-line"></i>`,
                interest: "dance"
            },
            {
                icon: `<i class="ri-camera-switch-line"></i>`,
                interest: "photography"
            }
        ],
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Liberorecusandae tempore repre iure",
        isFriend: null
    },
    {
        progilepic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        displaypic: "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0JTIwZ2lybCUyMHNtaWxlfGVufDB8fDB8fHww",
        pendingMsg: 15,
        location: "mumbai,India",
        name: "avniya",
        age: 20,
        interests: [
            {
                icon: `<i class="ri-spotify-line"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-camera-switch-line"></i>`,
                interest: "photography"
            }
        ],
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Liberorecusandae tempore repre iure",
        isFriend: null
    },
]


function select(elem) {
    return document.querySelector(elem);
}

let curr = 0;
let isAnimated = false;


function setData(index) {
    select(".prflimg img").src = users[index].progilepic
    select(".badge h5").textContent = users[index].pendingMsg;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interests.forEach(function (interests) {
        clutter += ` <div class="tag flex items-center rounded-full gap-3 bg-white/30 px-3 py-1">
                            ${interests.icon}
                            <h3 class="text-sm tracking-tight capitalize">${interests.interest}</h3>
                        </div>`
    })
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[index].bio;
}

(function setIntials() {
    select(".maincard img").src = users[curr].displaypic;
    select(".incomingcard img").src = users[curr + 1].displaypic;

    setData(curr);

    curr = 2;
})();


function imageChange() {

    if (!isAnimated) {  //true

        isAnimated = true; //true then doing animattion

        let tl = gsap.timeline({
            onComplete: function () {

                isAnimated = false; //false then doing animattion

                let main = select(".maincard");
                let incoming = select(".incomingcard");

                incoming.classList.remove("z-[2]"); //incomingcard  add and remove
                incoming.classList.add("z-[3]");

                incoming.classList.remove("incomingcard"); //now it become maincard we will fix that

                main.classList.remove("z-[3]"); //maincard  add and remove
                main.classList.add("z-[2]");

                //first we just reomve the main card due to tl but now we present which original attributes
                //gsap chnage which happning in main card which is now incomingcard
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })

                if (curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displaypic;
                curr++;

                main.classList.remove("maincard"); //remove maincard from main
                incoming.classList.add("maincard"); //add maincard into incoming
                main.classList.add("incomingcard");  //add incomingcard into main
            }
        });

        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")
            .from(".incomingcard", {
                scale: .9,
                opacity: 0,
                ease: Circ,
                duration: 1.1
            }, "a")
    }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
    imageChange();
    setData(curr - 1);

    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.2
    })
});

accept.addEventListener("click", function () {
    imageChange();
    setData(curr - 1);

    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.2
    })
});

(function containerCreator() {
    document.querySelectorAll(".element")
        .forEach(function (element) {
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
            div.appendChild(element)
            select(".details").appendChild(div);
        })
})();

