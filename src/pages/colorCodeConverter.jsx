import convert from "color-convert";
import { useState } from "react"

const ColorCodeConverter = ()=>{
    const options = [
        {
            value:"hex",
            title:"Hex"
        },
        {
            value:"rgb",
            title:"RGB"
        },
        {
            value:"rgba",
            title:"RGBA"
        },
        {
            value:"hsl",
            title:"HSL"
        },
        {
            value:"hsla",
            title:"HSLA"
        }
    ]

    const [type1,setType1] = useState("hex");
    const [type2,setType2] = useState("rgb");
    const [input,setInput] = useState("")
    const [response,setResponse] = useState({message:"",status:"",output:""})
    const [color,setColor] = useState("")

    const convertColor = ()=>{
        
        const key = `${type1}-${type2}`
        let colorOutput = ""
        let [r,g,b,a] = [0,0,0,0]
        let [h,s,l] = [0,0,0,0]
        try{
            if (input==""||((type1=='rgba'||type1=='hsla')&&input.split(",").length!=4)){
            throw("please enter valid input")
            }

          switch (key){
            case 'hex-rgb':
                colorOutput = convert.hex.rgb(input);
                break;
            case 'hex-rgba':
                colorOutput = convert.hex.rgb(input)+',1';
                break;
            case 'hex-hsl':
                colorOutput = convert.hex.hsl(input);
                break;
            case 'hex-hsla':
                colorOutput = convert.hex.hsl(input)+',1';
                break;


            case 'rgb-hex':
                [r,g,b] = input.split(",").map(Number)
                colorOutput = convert.rgb.hex(r,g,b);
                break;
            case 'rgb-rgba':
                colorOutput = input+",1";
                break;
            case 'rgb-hsl':
                [r,g,b] = input.split(",").map(Number)
                colorOutput = convert.rgb.hsl(r,g,b);
                break;
            case 'rgb-hsla':
                [r,g,b] = input.split(",").map(Number)
                colorOutput = convert.rgb.hsl(r,g,b)+",1";
                break;
            
            case 'rgba-hex':
                [r,g,b,a] = input.split(",").map(Number)
                colorOutput = convert.rgb.hex(r,g,b)+(Math.round(a*255).toString(16).padStart(2,"0"));
                break;
            case 'rgba-rgb':
                [r,g,b,a] = input.split(",").map(Number)
                colorOutput = `${r},${g},${b}`
                break;
            case 'rgba-hsl':
                [r,g,b,a] = input.split(",").map(Number)
                colorOutput = convert.rgb.hsl(r,g,b);
                break;
            case 'rgba-hsla':
                [r,g,b,a] = input.split(",").map(Number)
                colorOutput = convert.rgb.hsl(r,g,b)+`,${a}`;
                break;


            case 'hsl-hex':
                [h,s,l] = input.split(",").map(Number)
                colorOutput = convert.hsl.hex(h,s,l);
                break;
            case 'hsl-rgba':
                [h,s,l] = input.split(",").map(Number)
                colorOutput = convert.hsl.rgb(h,s,l)+",1";
                break;
            case 'hsl-rgb':
                [h,s,l] = input.split(",").map(Number)
                colorOutput = convert.hsl.rgb(h,s,l);
                break;
            case 'hsl-hsla':
                colorOutput = input+",1";
                break;

            case 'hsla-hex':
                [h,s,l,a] = input.split(",").map(Number)
                colorOutput = convert.hsl.hex(h,s,l)+(Math.round(a*255).toString(16).padStart(2,"0"));
                break;
            case 'hsla-rgba':
                [h,s,l,a] = input.split(",").map(Number)
                colorOutput = convert.hsl.rgb(h,s,l)+`,${a}`;
                break;
            case 'hsla-rgb':
                [h,s,l,a] = input.split(",").map(Number)
                colorOutput = convert.hsl.rgb(h,s,l);
                break;
            case 'hsla-hsl':
                [h,s,l,a] = input.split(",").map(Number)
                colorOutput = `${h},${s},${l}`;
                break;
            default:
                colorOutput = ""
          }
          if (colorOutput == ""){
            throw("something went wrong")
          }
          switch(type2){
            case 'hex':
                colorOutput = `#${colorOutput}`
                break;
            case 'rgb':
                colorOutput = `rgb(${colorOutput})`
                break;
            case 'rgba':
                colorOutput = `rgba(${colorOutput})`
                break;
            case 'hsl':
                colorOutput = `hsl(${colorOutput})`
                break;
            case 'hsla':
                colorOutput = `hsla(${colorOutput})`
                break;
          }
        setColor(colorOutput);
        setResponse({message:"successfully converted",status:"success",output:`${colorOutput}`})
        }catch(err){
            setResponse({message:`${err}`,status:"failed",output:""})
        }
    }


    return (
        <div className="p-4 mt-4 rounded-lg shadow-lg">
            <p>Color Code Converter</p>
            <div className="flex justify-between mt-4">
                <div className="w-[49%] border border-zinc-100 rounded-lg shadow-lg p-4">
                  <select value={type1} onChange={(e)=>{setType1(e.target.value);setInput("");setType2(options.filter((o)=>o.value!=e.target.value)[0].value)}} className="p-2 border border-orange-400 rounded-lg shadow-lg" name="input-1" id="input-1">
                    {options.map((o)=>{
                        return (
                            <option value={o.value}>{o.title}</option>
                        )
                    })}
                  </select>
                  <div className="flex gap-4 justify-start items-center mt-4">
                       <input value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder={
                        type1=='hex'?"Enter Hex code (ex: #ff5733)"
                        :type1=='rgb'?'enter r,g,b values (ex: 155,235,255)'
                        :type1=='rgba'?'enter r,g,b,a values (ex: 255,255,255,0.5)'
                        :type1=='hsl'?'enter h,s,l values (ex: 120,100,50) '
                        :type1=='hsla'?'enter h,s,l,a values (ex: 120,100,50,0.4)'
                        :''} 
                        className="w-[70%] p-2 border shadow-lg rounded-lg" type="input-code" name="" id="input-code" />
                        <button onClick={convertColor} className="bg-orange-400 text-lg font-semibold cursor-pointer rounded-lg shadow-lg p-2 text-white">Convert</button>
                  </div>
                </div>
                <div className="w-[49%] border border-zinc-100 rounded-lg shadow-lg p-4">
                      <select value={type2} onChange={(e)=>{setType2(e.target.value)}} className="border border-orange-400 p-2 rounded-lg shagow-lg" name="input-2" id="input-2">
                    {options.map((o)=>{
                        return (
                            <option disabled = {type1 == o.value} value={o.value}>{o.title}</option>
                        )
                    })}
                  </select>
                  {response.status=="success"&&(<div className="mt-4 flex justify-start items-center gap-4">
                         <p className="text-green-500">{response.message}</p>
                        <p>{response.output}</p>
                        <div style={{background:color}} className={`h-[2.5rem] w-[2rem] border rounded-sm bg-[${color}]`}></div>
                    </div>)}
                    {response.status == "failed"&&(
                        <div className="mt-4 text-red-500">{response.message}</div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default ColorCodeConverter;