import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


const SecondaryNav = ({title}) => {
const navigate = useNavigate();

    return (
        <nav className="secondaryNav">
            <ul className="navItems">
                <li className="navItem" onClick={()=>navigate('/')}>
                    <ArrowBackIcon sx={{marginRight:"10px"}}/>
                    {`  ${title}`}
                </li>

            </ul>
            
        </nav>
    )
}

SecondaryNav.defaultProps = {
    title : "Title"
}

export default SecondaryNav
