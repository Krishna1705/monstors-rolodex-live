import React,{Component} from 'react';

import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
  
class App extends Component{
          constructor(){
            super();
            this.state={
              monsters:[],
              searchField:''
            }
          }

          componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(data=> 
                        this.setState({monsters:data})

                  )
          
          }


render(){
  const monsters=this.state.monsters;
  const searchField=this.state.searchField;
//or u can write above two lines with help of destructuring as follows🧮 
//const {monsters,searchField}=this.state;
  const filteredMonsters=monsters.filter(monster=>
                                          monster.name.toLowerCase().includes(searchField.toLowerCase()));
            return(
             
              <div className="App">
              <h1>MONSTERS ROLODEX</h1>
                 <SearchBox placeholder="search monsters" 
                            handleChange={(e)=>this.setState( { searchField:e.target.value } )}
                 />      
                 <Cardlist monsters={filteredMonsters}></Cardlist> 
              </div>
            )
         }
        }
export default App;
