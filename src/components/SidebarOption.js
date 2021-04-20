import React from 'react'
import './SidebarOption.css'
import {useHistory, UseHistory} from 'react-router-dom'
function SidebarOption({Icon,Title,number,selected}) {
    const history=useHistory()
    return (
        <div
        onClick={()=>{
          Title=="Sent"?history.push('/gmailclonee/sent') : history.push("/gmailclonee/")

        }}
        className={`sidebaroption ${selected && "sidebaroption--active"}`}>
        <Icon className="MuiSvgIcon-root"/>
        <h3>{Title}</h3>
        <p>{number}</p>
            
        </div>
    )
}

export default SidebarOption
