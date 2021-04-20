import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import {openpopup} from '../redux/action'
import React,{useState} from 'react'
import './Compose.css'
import {useDispatch,useSelector} from 'react-redux'
import {useForm} from "react-hook-form"
import {db} from '../firebase/firebase'
import firebase from 'firebase'
function Compose() {
    const Person = useSelector(state => state.Person)
const {register,handleSubmit,watch,formState: { errors }}=useForm()
const onSubmit=(data,errors)=>{
    console.log(data)
   
    db.collection('emails').add({
        from:Person.email,
        to:data.to,
        subject:data.subject,
        message:data.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    dispatch(openpopup())

}
//const openmessage = useSelector(state => state.openmessage)
//    const [open, setopen] = useState(openmessage)
    const dispatch = useDispatch()
    return (
        <div className="compose">
           <div className="compose_header">
           
           <h3>New Message</h3>
           <Close className="compose_close" onClick={

            ()=>{
                dispatch(openpopup())
            }
               
            
           } /></div> 
        <form onSubmit={handleSubmit(onSubmit)}>
<input {...register("to",{required:true})} name="to" type="email" placeholder="To"/>
{errors?.to && <p className="compose_errors">To IS REQUIRED</p>}
 
<input {...register("subject",{required:true})} name="subject" type="text"  placeholder="subject"/>
{errors?.subject && <p className="compose_errors">subject IS REQUIRED</p>}

<input {...register("message",{required:true})} name="message" type="text" className="compose_message"  placeholder="Message..."/>
{errors?.message && <p className="compose_errors">message IS REQUIRED</p>}
        <div className="compose_options">
        <Button type="submit"
        className="compose_button">Send</Button>
        </div>
        
        </form>


        </div>
    )
}

export default Compose
//{errors.to && <p className="compose_errors">To IS REQUIRED</p>}
//{errors.message && <p className="compose_errors">To IS REQUIRED </p>}
//{errors.subject && <p className="compose_errors">To IS REQUIRED</p>}