import React, {Component} from 'react'
import './Animal.css'
import {ProgressBar} from 'react-bootstrap'

class Animal extends Component {
    render(){
        let animal=this.props.animal
        function conservation (status){
            switch(status){
                case "LC":
                    return <ProgressBar now ={20} bsStyle="info" label="least Concern" />; 
                case "NT":
                    return <ProgressBar now ={40} bsStyle="success" label="Not Threatened" />
                case "VU":
                    return <ProgressBar now ={60} bsStyle="warning" label="Vulnerable" /> 
                case "EN":
                    return <ProgressBar now ={80} bsStyle="danger" label="Endangered" />
                case "CR":
                    return <ProgressBar now ={95} bsStyle="danger" label="Critically Endangnered" />
                case "EW":
                    return <ProgressBar now ={99} bsStyle="danger" label="Extinct in the Wild" />
                case "EX":
                    return <ProgressBar now ={100} bsStyle="danger" label="Extinct" />
                default:
                    return 
            }
        } 
        return(
            <div className="AnimalContainer">
                <h2 className="name">{animal.name}</h2>
                <h4 className="scientificname">{animal.scientificName}</h4>
                <span className="imageHolder">
                    <img src={animal.img} className="image" alt=""></img>
                </span>
                {conservation(animal.status)}
                <p className="threats">{animal.threats}</p>
                <p className="blurb">{animal.blurb}</p>
            </div>
        )
    }
}
export default Animal