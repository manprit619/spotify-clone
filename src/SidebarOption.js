import React from 'react'
import "./SidebarOption.css"

function SidebarOption({ title, Icon }) {
    //pass 2 props i.e Icon component
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
            
            
        </div>
    )
}

export default SidebarOption
