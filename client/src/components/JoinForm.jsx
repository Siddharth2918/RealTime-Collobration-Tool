const CreateRoom = ()=>{
    return (
        <div className="border-2 w-[200px] my-5 mx-auto text-white">
            <div>
                <h1>Join Room</h1>
            </div>
            <div>
                <div>
                    <label htmlFor="userName">Enter Your Name</label>
                    <br />
                    <input type="text" name="userName" id="userName" placeholder="Enter your name"/>
                </div>
                <div>
                    <label htmlFor="roomID">Enter Room ID</label>
                    <br />
                    <input type="text" name="roomID" id="roomID" placeholder="Enter room Id"/>
                </div>
                <button className="" onClick={()=>{}}>Join Room</button>
            </div>
        </div>
    )
}


export default CreateRoom;

