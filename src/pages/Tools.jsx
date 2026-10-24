import { NavLink } from "react-router";
const Tools = ()=>{
    return (
        <div className="flex flex-wrap justify-start py-5 px-10 gap-10">
        <NavLink to='/tool1'>
            <div className='p-4 border rounded-sm w-[20rem] h-[12rem]'>tool1</div>
        </NavLink>
        <NavLink>
            <div className='p-4 border rounded-sm w-[20rem] h-[12rem]'>tool1</div>
        </NavLink>
        <NavLink>
            <div className='p-4 border rounded-sm w-[20rem] h-[12rem]'>tool1</div>
        </NavLink>
        <NavLink>
            <div className='p-4 border rounded-sm w-[20rem] h-[12rem]'>tool1</div>
        </NavLink>
        <NavLink>
            <div className='p-4 border rounded-sm w-[20rem] h-[12rem]'>tool1</div>
        </NavLink>
        <NavLink>
            <div className='p-4 border rounded-sm w-[20rem] h-[12rem]'>tool1</div>
        </NavLink>
        </div> 
    )
}

export default Tools;