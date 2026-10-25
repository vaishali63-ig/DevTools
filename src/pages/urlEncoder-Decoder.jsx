import { useEffect, useState } from "react";

const UrlEncoderDecoder = ()=>{
    const [mode,setMode]= useState('encoding')
    const [urlInput,setInput] = useState("")
    const [response,setResponse]=useState({message:"",status:"",output:""})

    useEffect(()=>{
          if(response.status!=""){
            window.scrollTo({
                top:document.documentElement.scrollHeight,
                behavior: "smooth"
            })
          }
    },[response])

    const urlEncode = ()=>{
      try{
         const res= encodeURIComponent(urlInput)
         setResponse({message:"input text successfully Url Encoded",status:"success",output:res})
      }catch(err){
         setResponse({message:`${err}`,status:"failed",output:""})
      }
    }
    const urlDecode = ()=>{
        try{
            const res = decodeURIComponent(urlInput)
            setResponse({message:"input text successfully Decoded",status:"success",output:res})
        }catch(err){
            setResponse({message:`${err}`,status:"failed",output:""})
        }
    }

    return(
        <div className="shadow-lg rounded-lg mt-4 p-4 flex flex-col">
            <p className="text-lg font-semibold">URL Encode/Decode</p>
            <div>
            <select value={mode} onChange={(e)=>{setMode(e.target.value);setResponse({message:"",status:"",output:""}); setInput("")}} name="tool-optioons" id="tool-optioons" className="mt-4 border border-orange-400 rounded-lg shadow-lg p-2">
                <option value="encoding">Url Encode</option>
                <option value="decoding">Url Decode</option>
            </select>
            </div>
            <textarea placeholder={mode=="decoding"?"Enter Url encoded text to decode":"Enter text to Url Encode"} value={urlInput} onChange={(e)=>{setInput(e.target.value);setResponse({message:"",status:"",output:""})}} name="url-text" id="url-text" className="border rounded-lg shadow-lg p-2 mt-4 w-full h-[15rem]"></textarea>
            <div className="flex justify-end gap-5 px-5 mt-4 items-center">
                <button onClick={()=>setInput("")} className="p-2 border rounded-lg border-orange-400 cursor-pointer font-semibold">Clear</button>
                <button onClick={()=>mode=="decoding"?urlDecode():urlEncode()} className="p-2 rounded-lg shadow-lg bg-orange-400 cuesor-pointer font-semibold text-white">{mode=="decoding"?"Decode":"Encode"}</button>
            </div>
            <div>
                {response.status=="success"&&(
                <div>
                    <p className="text-green-500">{response.message}</p>
                    <pre className=" whitespace-pre-wrap">
                        response: {response.output}
                    </pre>
                </div>
                )
                }
                {
                    response.status=="failed"&&(
                        <div>
                            <p className="text-red-500">{response.message}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default UrlEncoderDecoder;