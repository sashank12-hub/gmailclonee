import React from 'react'
import './Section.css'
function Section({ Icon, Title, color, selected }) {
    return (
        <div className={`section ${selected && "section_selected"}`}
            style={{ borderBottom: `3px solid ${color}`, color: `${selected && color}` }}
        >


        <Icon/>
        <h4>{Title}</h4>

        </div>
    )
}

export default Section
