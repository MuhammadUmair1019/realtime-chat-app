// dom queries
const list = document.querySelector(".list");
const newFormChat = document.querySelector(".new-chat");
const newFormName = document.querySelector(".new-name");
const updateAlert = document.querySelector(".update-name");
const room  = document.querySelector(".chat-room");


// add new chat  
newFormChat.addEventListener("submit", e => {
    e.preventDefault();

    const message = newFormChat.message.value;    
    // save new chat 
    chatroom.addChat(message).then(() => newFormChat.reset())
       .catch(err => console.log(err.message))

});


// update username
newFormName.addEventListener("submit", e => {
    e.preventDefault();

    const name = newFormName.name.value;
    chatroom.updateName(name);
    newFormName.reset()
    updateAlert.innerHTML = `update success to ${name}`;
    setTimeout(()=> updateAlert.innerHTML = "", 2000)

});

// update chatroom
room.addEventListener("click", e =>{
    if(e.target.tagName === "BUTTON"){
        console.log("you clicked me");
        // update chatroom 
        chatroom.updateRoom(e.target.getAttribute("id"))
        
        // clear previous chat data
        chatUI.clear();

        // get chat data for this room
        chatroom.getChat(data => chatUI.render(data))
    }
})


// render local storage data

const localName = localStorage.username ? localStorage.username : "anonymous"

// class instences 
const chatroom = new Chatroom(localName, "general");
const chatUI = new ChatUI(list);


// get chat data
chatroom.getChat(data => chatUI.render(data))
