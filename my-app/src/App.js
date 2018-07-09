import React,{Component} from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import squares from "./squares.json";
import './App.css';

class App extends Component{
  state={
    squares,
    score:0,
    topScore:0,
    clicked:[],
  };

  reset=()=>{
    this.setState({
      score:0,
      clicked:[]
    });
  }

  handleClick=id=>{
    if (this.state.clicked.indexOf(id) === -1){
      console.log(this.state.clicked)
      this.setState({ 
        squares:squares.sort(function(a, b){return 0.5 - Math.random()}),
        score:this.state.score + 1,
        topScore:Math.max(this.state.topScore,this.state.score + 1),
        message:"Correct Guess",
        clicked:this.state.clicked.concat(id) 
      });
    }else{
      this.setState({ 
        squares:squares.sort(function(a, b){return 0.5 - Math.random()}),
        message:"Wrong guess, try again"
      });
      return this.reset();
    }
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore}>
          {this.state.message}
        </Navbar>
        <Jumbotron />        
          {this.state.squares.map(characters=>(
          <Card
            handleClick={this.handleClick}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
          />
          ))}
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;