import propTypes from 'prop-types'

function List(props){

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //APHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name));   //REVERSE ALPHABETICAL
   // fruits.sort((a, b) => a.calories - b.calories); //CALORIES //NUMERIC ORDER

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
   // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    //const listItems = fruits.map(fruit => <li key={fruit.id}>
    
    
    //{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

    const category = props.category;
    const itemList = props.items;
    
    //const listItems = fruits.map(fruit =>       <li key={fruit.id}>
                                                //{fruit.name}: &nbsp; 
                                                //<b>{fruit.calories}</b></li>);
    
    const listItems = itemList.map(item =>       <li key={item.id}>
        {item.name}: &nbsp; 
        <b>{item.calories}</b></li>);


    return(<>
    <h3>{category}</h3>
    <ol>{listItems}</ol>
    </>);
}

export default List