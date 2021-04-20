import React,{useEffect} from 'react'
import{Route,Switch,Link,BrowserRouter} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Mail from './components/Mail'
import EmailList from './components/EmailList'
import Sent from './components/Sent'
import './App.css'
import Login from './components/Login'
import{Redirect} from 'react-router-dom'
import{useSelector,useDispatch} from 'react-redux'
import Compose from './components/Compose'
function App() {
  const Person = useSelector(state => state.Person)
  const openmessage = useSelector(state => state.openmessage)
  useEffect(() => {
  
    
  }, [])
  return (
    
    <BrowserRouter>

    {!Person?<Login/>:(<div className="app">
    <Header/>
    <div className="app_body">
    <Sidebar/>
    <Switch>
   
  <Route exact path="/gmailclonee/mail" component={Mail} />
  <Route exact path="/gmailclonee" component={EmailList}/>
  <Route exact path="/gmailclonee/sent" component={Sent}/>
  <Route render={()=><h1>Page not found</h1>} />
  
    </Switch>
    {openmessage && <Compose/> }

    </div>
   
  
  </div>)}
    
    </BrowserRouter>

    
  )
}

export default App
