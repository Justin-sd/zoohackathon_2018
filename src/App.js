import React, { Component } from 'react';
import animaldata from './animaldata.json'
import Animal from './components/Animal'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      aData: animaldata.animals, //imported data
      animalList: [], //array of animals imported in from API
      animal:{} //selected animal (to pass to sub component)

    }
  }
  componentDidMount(){ //parse stubbed API data into an array of objects
    console.log(this.state.aData);
    
    let ad=this.state.aData
    let newanimals=[]
    ad.forEach((animal)=>{
      newanimals.push({
        name: animal.name,
        scientificName: animal.scientificName,
        status: animal.status,
        img: animal.img,
        threats: animal.threats,
        blurb: animal.blurb
      })
    })
    this.setState({animalList:newanimals})
  }
  chooseanimal(event){ //assign animal from dropdown
    this.setState({animal: JSON.parse(event.target.value)})
    console.log(this.state.animal);  
  }
  render() {
    let list=this.state.animalList
    //map array onto dropdown elements
    let animalselect=list.map((animal)=>
       <option value={JSON.stringify(animal)}>{animal.name} - {animal.scientificName}</option>)

    return (
      <div className="App">
        <select className="chooseanimal" onChange={this.chooseanimal.bind(this)}>
          <option>select animal</option>
          {animalselect}
        </select>
        <Animal animal={this.state.animal} />
      </div>
    );
  }
}

export default App;
