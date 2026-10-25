import { useState } from "react";

const UuidGenerator = ()=>{
     const [uuid,setUuid] = useState("")
     const [coppied,setCoppied] = useState(false)
    const generateUUID = ()=>{
        const res = crypto.randomUUID()
        setUuid(res);
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(uuid);
        setCoppied(true)
    }
    return (
        <div className="p-4 mt-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">UUID Generator</p>
            <div>
                 <button onClick={()=>{generateUUID();setCoppied(false)}} className="cursor-pointer bg-orange-400 rounded-lg text-white font-semibold p-2 mt-4 ">{uuid==""?"Generate UUID":"Generate New UUID"}</button>
            </div>
            {uuid&&(<div className="mt-4 flex gap-4 items-center">
                <pre>{uuid}</pre>
                 <button onClick={copyText} className="cursor-pointer p-2 border border-orange-400 rounded-lg">{coppied?"coppied":"copy"}</button>
                 <button onClick={()=>{setUuid(uuid.replace(/-/g,"")); setCoppied(false)}} className="bg-orange-400 rounded-lg shadow-lg text-white font-semibold p-2 cursor-pointer">Remove Hyphens</button>
            </div>)}
        </div>
    )
}
export default UuidGenerator