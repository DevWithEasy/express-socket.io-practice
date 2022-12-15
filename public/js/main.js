//init database in client connection
const socket = io()

//document selector function
function selector(by){
    return document.querySelector(by);
}
//DOM manipulate
const message = selector('.message')
const name = selector('.name')
const feedback = selector('.feedback')

function sendMessage(){
    if(!message.value && !name.value) return alert('Please enter name and message')
    socket.emit('chat', {name : name.value,message : message.value})
    message.value = ''
}

message.addEventListener('keypress',function typing(){
    socket.emit('typing', name.value)
})

socket.on('chat_transfer',function(data){
    const chat = selector('.chat')
    let li = document.createElement('li')
    li.innerHTML = `<p><strong>${data.name}</strong> : ${data.message}</p>`
    chat.appendChild(li)
    feedback.innerHTML = ''
})

socket.on('typing',function(data){
    feedback.innerHTML = `<p class='text-gray-400'>${data} is typing message ...</p>`
});