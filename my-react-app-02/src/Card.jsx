import profilePic from './assets/profilePic.jpg'
function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile-pic"></img>
            <h2 title="This is the name of the developer" className='text'>Ohene</h2>
            <p>I am a Software Engineer and Write Poetry
                <button className="sign">Sign up for newsletters</button>
                <button className='follow'>Follow me on my platforms</button>
                <button className='donate'>Donate</button>
            </p>
        </div>

    );
}

export default Card