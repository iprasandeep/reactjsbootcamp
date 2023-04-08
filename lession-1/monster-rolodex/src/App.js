import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
      
    };
    // console.log('1');
  }
  componentDidMount()
  {
    // console.log('3')
    fetch('https://jsonplaceholder.typicode.com/users')

        .then((response)=> response.json())
          .then((users)=> this.setState(()=>{
            return { monsters: users}
          },
          ()=>{console.log(this.state)}
          ))
  }
onSearchChange = (event) =>{
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(()=>{
    return { searchField };
  });
}
  render(){


const {monsters, searchField} = this.state;
const { onSearchChange} = this;    // console.log('2');
    const filteredMonsters = monsters.filter((monster)=>{

      return monster.name.toLocaleLowerCase().includes(searchField);          
    })
    return (
      <div className='App'>

      <input className='search-box' 
      type="search" placeholder='search monster' 
      onChange={onSearchChange}
      />
        {
          filteredMonsters.map((monster)=>{
            return(
            <div key={monster.id}>
             <h1>{monster.name}</h1>
             </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;
