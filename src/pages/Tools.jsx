import { NavLink } from "react-router";
import Card from "../components/Card";
import {ToolCards} from "../common/CommonData"
const Tools = ()=>{
    return (
        <div className="flex flex-wrap justify-start py-5 px-10 gap-10">
        {
              ToolCards.map(card=>{
                return   (
                <NavLink to={`/${card.id}`}>
                    <Card card={card}/>
                 </NavLink>
        )
              })
        }
        </div> 
    )
}

export default Tools;