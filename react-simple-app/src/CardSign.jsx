import profilePic from './assets/profilePic.jpg'

function CardSign(){

    return(
        <div className='card'>
        <img className="image" src={profilePic} alt='company image'></img>
        <h2 className='shop'>COFFEE SHOP</h2>
        <p className='text'>Welcome! Please SIGN in to proceed with your ORDER
            <br />
            <input title="Please enter your username" className="username" type="text" placeholder="Username"/><br />
            <input title="Please enter your password" className="password" type="text" placeholder="Password"/><br />
            <input title="Please enter your phone number" className="telephone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  maxLength={10} placeholder="Telephone"/><br />
            
            <a href="https://vivacafe.co.uk/"><button className='sign' onClick="new window">SIGN IN</button></a>
        </p>
        </div>   
    );

}

export default CardSign