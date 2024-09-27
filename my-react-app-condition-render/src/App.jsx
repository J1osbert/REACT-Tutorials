//conditional rendering = allows you to control what gets rendered
                         // in your application based on certain conditions

import UserGreeting from "../UserGreeting.jsx";



function App(){

  return(
<>
<UserGreeting isLoggedIn={false} userName= "BroCode"/>
<UserGreeting />
<UserGreeting />
</>

  );
}

export default App
