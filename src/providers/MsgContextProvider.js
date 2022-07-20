
// create msg context provider 

import { useReducer } from "react";
import MsgContext from "../context/MsgContext";
import { initialMsg, msgReducer } from "../reducer/msgReducer";

const MsgContextProvider = ({children})=>{
// use msg reducer

const [msgState, dispatch] = useReducer(msgReducer, initialMsg)

    return(
        <MsgContext.Provider value={{msgState, dispatch}}>
               {children}
        </MsgContext.Provider>
       
        
    )

}


export default MsgContextProvider;