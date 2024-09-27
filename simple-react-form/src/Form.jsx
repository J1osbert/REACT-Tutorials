

function Form(){

    return(
     <div className="form-data" >
        <h1 className="head">Form in React</h1>
          <p >First Name <br />
            <input className="fname" type="text" id="fname" name="fname" size= "50" placeholder="Enter First Name"/>
          </p>
          <p >Last Name <br />
            <input className="lname" type="text" id="lname" name="fname" size= "50" placeholder="Enter Last Name"/>
          </p>
          <p >Enter Email <br />
            <input className="mail" type="text" id="fname" name="fname" size= "50" placeholder="Enter email"/>
          </p>
          <p >Contact <br />
            <input className="number" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength={10} id="fname" name="fname" size= "50" placeholder="Enter Mobile number"/>
          </p>
          <p >Gender <br />
            <input className="gender" type="radio" value="male" name="gender" checked="checked"/>
            Male
            <input type="radio" value="female" name="gender" />
            Female
            <input type="radio" value="other" name="gender" />
            Other
          </p>
          <p >Your best student <br />
            <input className="subject" type="checkbox"  name="subject" value="English" checked="checked"/>
            English
            <input type="checkbox"  name="subject" value="Maths"/>
            Maths
            <input type="checkbox"  name="subject" value="Physics"/>
            Physics
          </p>
          <p >
            Upload Resume<br/>
            <input className="resume" type="file" id="file" name="file" />
          </p>
          <p  >
            Enter URL<br/>
            <input className="url" type="text" id="url" name="web-address" size= "50" placeholder="Enter url"/>
          </p>
          <p >Select your choice</p>
          <select className="choice" >
            <option value="psycology">Psycology</option>
            <option value="physiotherapy">Physiotherapy</option>
            <option value="mathematics">Mathematics</option>
            <option value="computer">Computer Science</option>
          </select>

          <p>About <br />
          <textarea className="about" border="4" cols="50" rows="10" placeholder="About yourself"/>
          </p>
          <p className="submit">
            Submit OR Reset<br />
            <button className="reset">Reset</button>
            <button className="send">Submit</button>
          </p>


     </div>

    );
}

export default Form