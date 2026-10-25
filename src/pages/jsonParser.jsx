import { useState } from "react";

const JsonParser = ()=>{
    const [jsonInput, setInput] = useState("")
    const [parseResponse,setResponse] = useState({message:"",status:"",output:""})
    const parseJson = ()=>{
        try{
            let resjson = JSON.parse(jsonInput);
            resjson = JSON.parse(resjson,null,2);
            setResponse({message:"json string parsed successfully",status:"success","output":`${JSON.stringify(resjson,null,2)}`})
        }catch(err){
            setResponse({message:`${err}`,status:"failed",output:""})
        }
    }
    return (
        <div className="roubded-lg p-4 shadow-lg mt-4">
            <p className="text-lg font-semibold">Json Parser</p>
            <textarea value={jsonInput} onChange={(e)=>{setInput(e.target.value)}} name="text-paarser" id="text-parser" placeholder="Enter JSON-encoded string here" className="p-2 border border rounded-lg shadow-lg w-full mt-4 h-[22rem]"></textarea>
            <div className="flex justify-end gap-5 px-5">
                <button onClick={()=>{setInput("")}} className="p-2 font-semibold border border-orange-400 rounded-lg cursor-pointer">Clear</button>
                <button onClick={ parseJson} className="p-2 font-semibold text-white bg-orange-400 rounded-lg cursor-pointer">Parse</button>
            </div>
            <div className="mt-4">
                   {parseResponse.status=="success"&&(
                    <div>
                        <p className="text-green-500">{parseResponse.message}</p>
                        <pre className="whitespace-pre-wrap">{parseResponse.output}</pre>
                    </div>
                   )}
                   {parseResponse.status=="failed"&&(
                    <div>
                        <p className="text-red-500">{parseResponse.message}</p>
                        <pre className="whitespace-pre-wrap">{parseResponse.output}</pre>
                    </div>
                   )}
            </div>
        </div>
    )
}

export default JsonParser;