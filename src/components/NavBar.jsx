
import {NavLink} from 'react-router'

const NavBar = ()=>{
    return (
        <div className='p-2 flex justify-start items-center gap-2 shadow-sm rounded-sm'>
           <NavLink to='/'>
           <img className='w-[3.5rem] h-[3rem]' src="https://img.magnific.com/premium-vector/gear-logo-letter-d-initial-d-gear-letter-logo-design-template-d-gear-engineer-logo_754537-7031.jpg" alt="" />
           </NavLink>
            <NavLink className='font-semibold' to='/'>Tools</NavLink>
        </div>
    )
}

export default NavBar;