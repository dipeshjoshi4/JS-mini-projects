var users = [
    {
        progilepic: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        displaypic: "https://plus.unsplash.com/premium_photo-1664369473447-64172945caa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBnaXJsJTIwc21pbGV8ZW58MHx8MHx8fDA%3D",
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

var curr = 0;

(function setIntials() {
    select(".maincard img").src = users[curr].displaypic;
    select(".incomingcard img").src = users[curr + 1].displaypic;
    select(".prflimg img").src = users[curr].progilepic
    select(".badge h5").textContent = users[curr].pendingMsg;
    select(".location h3").textContent = users[curr].location;
    select(".name h1:nth-child(1)").textContent = users[curr].name;
    select(".name h1:nth-child(2)").textContent = users[curr].age;

    var clutter = "";
    users[curr].interests.forEach(function (interests) {
        clutter += ` <div class="tag flex items-center rounded-full gap-3 bg-white/30 px-3 py-1">
                            ${interests.icon}
                            <h3 class="text-sm tracking-tight capitalize">${interests.interest}</h3>
                        </div>`
    })
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[curr].bio;

    curr = 2;
})();