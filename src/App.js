import React, { Component } from 'react';
import './style/App.css';

class App extends Component {

  state={
    tour: "X",
    tab: Array(9).fill(""),
    endGame: 0,
    victoire: false,
    gagnant: ''
  }
 
  click = (event)=>{
    if(this.state.victoire === false){
      if(this.state.tab[event.target.dataset.carre] === ""){
      event.target.innerText = this.state.tour;
      this.state.tab[event.target.dataset.carre] = this.state.tour;
      this.setState({
      tour: this.state.tour==="X"?"O":"X",
      endGame: this.state.endGame+1
    })
    this.decideWinner()
    if(this.decideWinner() === "X" || this.decideWinner() === "O"){
      this.setState({
        gagnant: "The winner is " + this.decideWinner() ,
        victoire: true
      })
    }
    else if(this.state.endGame === 8){
      this.setState({
        gagnant: "Deuce"
      })
    }
    console.log(this.state.endGame);
  }
 }
 
     console.log(this.state.tab);
    // console.log(event.target);
  }
 
  decideWinner = ()=>{
    const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    let tab = this.state.tab
    for(var i=0; i<win.length; i++){
      if(tab[win[i][0]] === tab[win[i][1]] && tab[win[i][1]] === tab[win[i][2]]){
        console.log(tab[win[i][0]]);
        return tab[win[i][0]]
      }
    }
  }

  reset = ()=>{
    window.location.reload()
  }

  
  render() {
    return (
      <div className="App">

        <div className="image"></div>

        <div className="container" onClick={this.click}>

        <div className="carre" data-carre = '0'></div>
        <div className="carre" data-carre = '1'></div>
        <div className="carre" data-carre = '2'></div>

        <div className="carre" data-carre = '3'></div>
        <div className="carre" data-carre = '4'></div>
        <div className="carre" data-carre = '5'></div>

        <div className="carre" data-carre = '6'></div>
        <div className="carre" data-carre = '7'></div>
        <div className="carre" data-carre = '8'></div>

      </div>
      <h1 className={this.state.gagnant === '' ? 'paswinnerencore' : 'winner' }>&nbsp; {this.state.gagnant}</h1>
      <button className="start" onClick={this.reset}>START</button>


</div>
    );
  }
}

export default App;
