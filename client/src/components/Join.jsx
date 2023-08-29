/* eslint-disable react/prop-types */
const Join = ({ socket, author, setAuthor, room, setRoom ,joined,setJoined}) => {
    const joinChate = () => {
        if (!author || !room) {
            alert('Please enter author or room id')
        }
        socket.emit('join_chat', { room })
        setJoined(!joined)
    }
    return (
        <div
            className='mx-2 md:w-1/4 space-y-2'
        >
            <h1
                className='p-2 text-xl text-center font-bold'
            >
                Room Chat
            </h1>
            <input
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                placeholder='Author name'
                className='w-full p-2 border focus:outline-sky-500 rounded-lg'
            />
            <input
                type="text"
                onChange={(e) => setRoom(e.target.value)}
                placeholder='Room id'
                className='w-full p-2 border focus:outline-sky-500 rounded-lg'
            />
            <button
                onClick={() => joinChate()}
                className='w-full bg-blue-500 text-white px-6 py-2 rounded-lg'
            >
                Send
            </button>
        </div>
    );
};

export default Join;