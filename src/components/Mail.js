import { IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import React from 'react'
import './Mail.css'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
function Mail() {
    const history=useHistory();
const currentstate = useSelector(state => state.currentstate)
    const {title,description,time,subject,id}=currentstate;
    
    return (
        <div className="mail">
        <div className="tools">
        <div className="mail_left">
        <IconButton onClick={()=>
            history.goBack()
        }>
        <ArrowBack />
        </IconButton>
        <IconButton>
       <MoveToInbox/>
        </IconButton>
        <IconButton>
       <Error/>
        </IconButton>
        <IconButton>
       <Delete/>
        </IconButton>
        <IconButton>
       <Email/>
        </IconButton>
        <IconButton>
       <WatchLater/>
        </IconButton>
        <IconButton>
        <CheckCircle/>
         </IconButton>
         <IconButton>
         <MoreVert/>
          </IconButton>
        
        </div>
       <div className="mail_right">
        <IconButton>
        <UnfoldMore/>
        </IconButton>
        <IconButton>
        <Print/>
         </IconButton>
         <IconButton>
         <ExitToApp/>
          </IconButton>



       </div>
        </div>
        
        <div className="body">
        
        <div className="header">
        <h2>{subject.slice(0,18)}</h2>
        <LabelImportant className="important"/>
        
        <p>{title}</p>
        <p className="time">{time}</p>
        </div>
        <div className="mail_message">
       <p> {description}</p>
        
        </div>
        </div>
        </div>
    )
}

export default Mail
