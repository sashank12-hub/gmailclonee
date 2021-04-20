import {createStore} from 'redux';
import Mail from "./Mail"
import { composeWithDevTools } from "redux-devtools-extension";


export const store = createStore(Mail,composeWithDevTools( ));
    



 