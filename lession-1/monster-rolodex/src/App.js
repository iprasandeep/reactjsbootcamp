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
  render(){
    // console.log('2');
    const filteredMonsters = this.state.monsters.filter((monster)=>{

      return monster.name.toLocaleLowerCase().includes(this.state.searchField);          
    })
    return (
      <div className='App'>

      <input className='search-box' 
      type="search" placeholder='search monster' 
      onChange={(event)=>{
        console.log({startingArray: this.state.monsters});
        console.log(event.target.value);
        // [{name: 'Leane}, {name: 'Vihua}]
        const searchField = event.target.value.toLocaleLowerCase();
        //"AAAaaA" => "aaaaaa"        
        this.setState(()=>{
          return { searchField };
        },
        console.log({startingArray: this.state.monsters})
        )
      }}/>
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
