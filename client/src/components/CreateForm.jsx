const CreateForm = ()=>{
    return (
        <div className="border-2 w-[200px] my-5 mx-auto text-white">
            <div>
                <h1>Create Room</h1>
            </div>
            <div>
                <div>
                    <label htmlFor="userName">Enter Your Name</label>
                    <br />
                    <input type="text" name="userName" id="userName" placeholder="Enter your name"/>
                </div>
                <div>
                    <label htmlFor="roomID">Room ID</label>
                    <br />
                    <div className="flex flex-row">
                        <input type="text" name="roomID" id="roomID" placeholder="Room ID"/>
                        <button>Copy</button>
                    </div>
                </div>
                <button className="" onClick={()=>{}}>Create Room</button>
            </div>
        </div>
    )
}


export default CreateForm;

