import { useState } from "react"

const JsonValidator = ()=>{
    const [jsonStr,setJson] = useState("")
    const [validateResponse,setReaponse] = useState({"status":"","message":""})
    const validateJson = ()=>{
       try{
          JSON.parse(jsonStr);
          setReaponse({message:"Json Validated Successfully",status:"success"})
       }catch(err){
         setReaponse({message:`${err}`,status:"failed"})
       }
    }
    return(
        <div className="rounded-lg shadow-lg p-4 mt-4 ">
            <p className="text-lg font-semibold mb-4">json validator</p>
            <textarea onChange={(e)=>{setJson(e.target.value); setReaponse({"status":"","message":""})}} value={jsonStr} placeholder="Enter json here" name="Json Validator" id="json-validator" className="rounded-lg w-full h-[22rem] border p-2 mb-2"></textarea>
            <div className="px-5 flex justify-end gap-5">
                <button className="p-2 rounded-lg border border-orange-400 shadow-sm font-semibold cursor-pointer" onClick={()=>{setJson("")}}>Clear</button>
                <button className="p-2 rounded-lg bg-orange-400 text-white font-semibold  cursor-pointer" onClick={validateJson}>Validate</button>
            </div>
            <div>
                {validateResponse.status == "success"&&(
                    <div className="text-green-500">{validateResponse.message}</div>
                )}
                {validateResponse.status == "failed"&&(
                    <div className="text-red-500">{validateResponse.message}</div>
                )}
            </div>
        </div>
    )
}

export default JsonValidator