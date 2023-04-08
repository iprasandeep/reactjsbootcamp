import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
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
          .then((users)=> 
          this.setState(()=>{
            return { monsters: users};
          })
          );
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
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
