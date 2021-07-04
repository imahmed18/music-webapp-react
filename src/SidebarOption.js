import { Icon } from '@material-ui/core'
import React from 'react'
import "./SidebarOption.css"

function SidebarOption({title, Icons}) {
    return (
        <div className="sidebarOption">
            {Icons && <Icons className="sidebarOption__icon"></Icons>}
            { Icons? <h4>{title}</h4> : <p>{title}</p> }
        </div>
    )
}

export default SidebarOption
