import React, {Component} from 'react';
import './App.css';
import { Cardlist } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.components';

class App extends Component{

  constructor(){
    super()

    this.state = {    
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  render(){

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
      <h1>MONSTER ROLODEX</h1>
      <SearchBox 
      placeholder='search monster' 
      handleChange={ e => this.setState({searchField:e.target.value}) } />
        <Cardlist monster={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
