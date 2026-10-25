import { useEffect, useState } from "react"

const JwtDecoder = ()=>{

    const [jwtToken,setToken]=useState("")
    const [decodedResponse,setResponse] = useState({message:"",status:"",output: []})

    const decodeToken = ()=>{
        try{
            const parts = jwtToken.split(".")

            if(parts.length !=3){
                throw("invalide jwt format")
            }
            let decodedParts = []
            for (let i=0;i<3;i++){
            if (i!=2){
                const base64val = parts[i].replace(/-/g,"+").replace(/_/,"/")
               const paded = base64val + "=".repeat((4-base64val.length % 4)%4)
               const bytes = Uint8Array.from(
                atob(paded),
                (c)=>c.charCodeAt(0)
               )
               const decodedData = JSON.stringify(JSON.parse(new TextDecoder().decode(bytes)),null,2)
               decodedParts = [...decodedParts,decodedData]
            }else{
                decodedParts = [...decodedParts,parts[i]]
            }
               
            }

            setResponse({message:"jwt decoded successfully",status:"success",output:decodedParts})

        }catch(err){
           setResponse({message:`${err}`,status:"failed",output:[]})
        }
    }

     useEffect(()=>{
            if(decodedResponse.status!=""){
                window.scrollTo({
                top:document.documentElement.scrollHeight,
                behavior: "smooth"
            })
            }
        },[decodedResponse])

    return (
        <div className="mt-4 p-4 shadow-lg rounded-lg">
            <p className="font-semibold text-lg">Jwt Decoder</p>

            <textarea value={jwtToken} onChange={(e)=>{setToken(e.target.value); setResponse({message:"",status:"",output: []})}} placeholder="Enter jwt token" name="jwt-decoder" id="jwt-decoder" className="w-full h-[22rem] p-2 mt-2 border rounded-lg shadow-lg"></textarea>
            <div className="flex justify-end gap-5 px-5">
                <button onClick={()=>{setToken("")}} className="border border-orange-400 rounded-lg font-semibold cursor-pointer p-2">Clear</button>
                <button onClick={decodeToken} className="font-semibold bg-orange-400 rounded-lg text-white cursor-pointer p-2">Decode</button>
            </div>
            <div>
                {decodedResponse.status=="success"&&(
                    <div>
                        <p className="text-green-500">{decodedResponse.message}</p> 
                        <pre>Headers: {decodedResponse.output[0]}</pre>
                        <pre>Payload: {decodedResponse.output[1]}</pre>
                        <pre>Signature: {decodedResponse.output[2]}</pre>
                    </div>
                )}
                {decodedResponse.status=="failed"&&(
                        <div>
                            <p className="text-red-500">{decodedResponse.message}</p>
                        </div>
                )}
            </div>
        </div>
    )
}

export default JwtDecoder