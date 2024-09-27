import PropType from 'prop-types'

function UserGreeting(props){


const welcomeMessage = <h2>Welcome {props.userName}</h2>
const loginPrompt = <h2>Please log in to continue {props.userName}</h2>

return(props.isLoggedIn ?  welcomeMessage : loginPrompt);

}

UserGreeting.propType = {
    userName: PropType.string,
    isLoggedIn: PropType.bool,
}

UserGreeting.defaultProps ={
    isLoggedIn: false,
    userName: "Guest"
    
}
export default UserGreeting