import React from 'react'
import "./Message.css";


const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className={`messageBox ${classs}`}  >
                {`${user}: ${message}`}
            </div>
        )
    }
    else {


        return (
            <div className={`messageBox ${classs}`}>
                {`You: ${message}`}
            </div>
        )
    }
}

export default Message


// import React from 'react'

// import './Message.css'

// const Message = ({user,message,classs}) => {
//   return (
//     <div className='messageBox left'>
//         {message}
//         {/* {message} */}
//         </div>
    
//   )
// }

// export default Message