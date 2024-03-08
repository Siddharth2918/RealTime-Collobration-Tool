import { useState } from "react";
import Canvas from "../components/Canvas";
const RoomPage = ()=>{
    const [tool, setTool] = useState("pencil");
    const [color, setColor] = useState("white");

    return(
        <div className="flex flex-col text-white">
            <h1 className="flex justify-center">WhiteBoard Sharing App</h1>
            <div className="flex flex-col mx-auto">
                <div className="flex space-x-24">
                    <div>
                        <label htmlFor="color" className="mx-2 align-top">Select Color:</label>
                        <input type="color" name="color" id="color" onChange={(e)=>{setColor(e.target.value)}}/>
                    </div>
                    <button>Undo</button>
                    <button>Redo</button>
                    <button>Clear</button>
                </div>
                <div className="flex justify-center">
                    <div className="mx-4">
                        <input type="radio" name="tool" id="pencil" value="pencil" checked={tool === "pencil"} onChange={(e)=>{setTool(e.target.value)}}/>
                        <label htmlFor="pencil">Pencil</label>
                    </div>
                    <div className="mx-4">
                        <input type="radio" name="tool" id="line" value="line" checked={tool === "line"} onChange={(e)=>{setTool(e.target.value)}}/>
                        <label htmlFor="line">Line</label>
                    </div>
                    <div className="mx-4">
                        <input type="radio" name="tool" id="rectangle" value="rectangle" checked={tool === "rectangle"} onChange={(e)=>{setTool(e.target.value)}}/>
                        <label htmlFor="rectangle">Rectangle</label>
                    </div>
                </div>
            </div>
            <div>
                <Canvas />
            </div>
        </div>
    )    
}


export default RoomPage;