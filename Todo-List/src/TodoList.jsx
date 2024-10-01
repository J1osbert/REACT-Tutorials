import picture from './assets/picture.jpg'

function TodoList(){
    

    return(

        <div className="todomatic">
            <img className="card-image" src={picture} alt="Clock"></img>
            <h1 className="head">Todo Matic</h1>
            <h3 className="sub">What needs to be done ?</h3>
            <form action="https//:www.todolist.com">
            <p>
                <input className="text" type="text" name />
                <button className="add" type="submit">Add</button>
            </p>
            <p>
                <button className="button">show all tasks</button>
                <button className="button">show active tasks</button>
                <button className="button">show completed tasks</button>
            </p>
           
            <h2>3 tasks remaining</h2>
            <p>
                <input type="checkbox" value="eat" />
                Eat
                <br />
                <button className="button">Edit Eat</button>
                <button className="button">Delete Eat</button>
            </p>
            <p>
                <input type="checkbox" value="Sleep" />
                Sleep
                <br />
                <button className="button">Edit Sleep</button>
                <button className="button">Delete Sleep</button>
            </p>
            <p>
                <input type="checkbox" value="Repeat" />
                Repeat
                <br />
                <button className="button">Edit Repeat</button>
                <button className="button">Delete Repeat</button>
            </p>




            </form>


        </div>


    );
}

export default TodoList