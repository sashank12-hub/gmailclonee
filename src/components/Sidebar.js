import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import PersonIcon from '@material-ui/icons/Person'
import PhoneIcon from '@material-ui/icons/Phone'
import DuoIcon from '@material-ui/icons/Duo'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import SidebarOption from './SidebarOption'
import {openpopup} from '../redux/action'
import{useDispatch} from 'react-redux'
import './sidebar.css'
import {useHistory} from 'react-router-dom'
function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            <Button className="composee" onClick={()=>{
                dispatch(openpopup())
            }}
                startIcon={<AddIcon fontSize="large" />}>
                compose  </Button>
                <SidebarOption Icon={StarIcon} Title="Starred" number={54}/>
            <SidebarOption  Icon={InboxIcon} Title="Inbox" number={54} selected
            
            />
            <SidebarOption Icon={AccessTimeIcon} Title="Snoozed" number={54}/>
            <SidebarOption Icon={LabelImportantIcon} Title="Important" number={54}/>
            <SidebarOption Icon={NearMeIcon} Title="Sent" number={54}/>
            <SidebarOption Icon={NoteIcon} Title="Drafts" number={54}/>
            <SidebarOption Icon={ExpandMoreIcon} Title="More" number={54}/>
           <div className="sidebar_footer">
           <div className="footericons">
           <IconButton>
           <PersonIcon/>
           </IconButton>
           <IconButton>
           <DuoIcon/>
           </IconButton>
           <IconButton>
           <PhoneIcon/>
           </IconButton>
           </div>
           </div>

        </div>
    )
}

export default Sidebar
