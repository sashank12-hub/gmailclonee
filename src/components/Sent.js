import { Checkbox ,IconButton} from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, Keyboard, KeyboardHide, LocalOffer, People, Settings } from '@material-ui/icons'
import RedoIcon from '@material-ui/icons/Redo'
import MoveVertIcon from '@material-ui/icons/MoreVert'
import {useSelector} from 'react-redux'
import './EmailList.css'
import Emailrow from'./Emailrow'
import Section from './Section'
import React,{useEffect,useState} from 'react';
import {db} from '../firebase/firebase'
function Sent() {
const [emaillist, setemaillist] = useState([])
const [result, setresult] = useState([])
const Person = useSelector(state => state.Person)
useEffect(() => {
  db.collection('emails').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    
    setemaillist(snapshot.docs.map(doc=>({
      id:doc.id,
      data:doc.data()
    }))
      )
      

  })
  
}, [])

useEffect(() => {
 setresult(emaillist.filter(({id,data:{subject,timestamp,message,to,from}})=>from==Person.email)
 )
  console.log(result)
}, [emaillist])
    return (
        <div className="emaillist">
          <div className="emaillist_settings">
          <div className="emaillist_settings_left">
          <Checkbox/>
          <IconButton>
           <ArrowDropDown/>
           </IconButton>
           <IconButton>
           <MoveVertIcon/>
           </IconButton>
           <IconButton>
           <RedoIcon/>
           </IconButton>
           </div>
           <div className="emaillist_settings_right">
           <IconButton>
           <ChevronLeft/>
           </IconButton>
           <IconButton>
           <ChevronRight/>
           </IconButton>
           <IconButton>
          <KeyboardHide/>
           </IconButton>
           <IconButton>
         <Settings/>
           </IconButton>
          </div>
          </div>
          <div className ="emaillist_section">
          <Section Icon={Inbox} Title="Primary" color="red" selected/>
          <Section Icon={People} Title="Social" color="lightblue"/>
          <Section Icon={LocalOffer} Title="Promotions" color="green" />
          </div>
          <div className="emaillist_list">
          
          {result?.map(({id,data:{subject,timestamp,message,to}})=>(
            <Emailrow  id={id} Key={id} subject={subject} title={to} description={message}
            time={new Date(timestamp?.seconds*1000).toUTCString()}
            />


          ))}
         
         
          </div>
          </div>
        
    )
}

export default Sent
