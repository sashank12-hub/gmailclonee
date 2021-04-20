import { IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import './Emailrow.css'
import {useDispatch} from 'react-redux'
import {selected} from '../redux/action'
import {useHistory} from 'react-router-dom'
function Emailrow({
 title,subject,description,time,id   
}) {

    const dispatch = useDispatch()
    const history =useHistory()
    return (
        <div className="emailrow"
         onClick={
            ()=>{dispatch(selected({id,time,subject,title,description}))
                history.push({
                    pathname:'/gmailclonee/mail',
                    data:{
                        title:title,
                        subject:subject,
                        description:description,
                        time:time,
                        id:id
                    }
                })

                
            }
        }
        >
            <div className="emailrow_options" onClick={(e)=>e.preventDefault()}>
            <Checkbox/>
            <IconButton>
            <StarBorderOutlined/>
            </IconButton>
            <IconButton>
            <LabelImportantOutlined/>
            </IconButton>
            </div>
            
            <h3 className="email_title">
            {title}
            </h3>
           <div className="emailrow_message">
            <h4>{subject.slice(0,10)}</h4>
            <span className="emailrow_description">
            {description.slice(0,10)}
            </span>
            
            </div>
            <p className="emailrow_time">{time}</p>
           


        </div>
    )
}

export default Emailrow
