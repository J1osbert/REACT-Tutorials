
/*
function Fruits(){

    const fruits =["apple", "pineapple", "orange", "banana"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return (<ol>{listItems}</ol>);
    
}

export default Fruits 
*/
function Fruits(){

    const fruits =[ {id: 1, name:"apple", calories : 95},
                    {id: 2,name:"pineapple", calories : 80},
                    {id: 3,name:"orange", calories : 70},
                    {id: 4,name:"banana", calories : 165},
                    {id: 5,name:"eggplant", calories : 134},
                    {id: 6,name:"pumpkins", calories : 167},
                    {id: 7,name:"Berries", calories : 89},
                    {id: 8,name:"Melons", calories : 97},
                    {id: 9,name:"Apricots", calories : 34},
                    {id: 10,name:"Avocado", calories : 56}
        ];

        //fruits.sort((a,b)=> a.name.localeCompare(b.name));

        const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

        //const lowCalFruits = fruits.filter(fruit => fruit.calories > 50)

   const listItems = lowCalFruits.map(lowCalFruit => <li key= {lowCalFruit.id}>{lowCalFruit.name}: <b>{lowCalFruit.calories}</b></li>);

    return (<ol>{listItems}</ol>);
    
}

export default Fruits