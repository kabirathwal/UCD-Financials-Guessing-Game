import React, { useRef, useEffect, useState } from 'react';

class EntryBox extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      MedCenter: 0,
      StudentFees: 0,
      StateofCalifornia: 0,
      Tuition: 0,
      GrantsContracts: 0,
      PellGrants: 0,
      NonEdSer: 0,
      GiftsEndowInterest: 0,
      Revenues: [{ name: "Medical Center", value: 0, color: '#f0bf00' }, { name: "Student Fees", value: 0, color: '#f6e50e' }, { name: "State of California", value: 0, color: '#fff688' }, { name: "Tuition", value: 0, color: '#5f63ec' }, { name: "Research Grants and Contracts", value: 0, color: '#71a8ff' }, { name: "Pell Grants", value: 0, color: 'pink' }, { name: "Non-educational Services", value: 0, color: '#0f7ab4' }, { name: "Gifts, Endowments, Interest, Etc.", value: 0, color: 'white' }]
    };



    this.handleInputKeystroke = this.handleInputKeystroke.bind(this);

    this.editRev = this.editRev.bind(this);
    
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.userID !== prevProps.userID) {
  //     console.log("Something Changed");
  //     this.forceUpdate();
  //   }
  // }


  handleInputKeystroke(value, id) {
    var stateVar = null;

    switch (id) {
      case "MedCenter":
        this.setState((state) => {return {MedCenter: value}}, this.editRev());
        stateVar = this.state.MedCenter;
        break;
      case "StudentFees":
        this.setState((state) => {return {StudentFees: value}}, this.editRev());
        stateVar = this.state.StudentFees;
        break;
      case "StateofCalifornia":
        this.setState({ StateofCalifornia: value }, this.editRev());
        stateVar = this.state.StateofCalifornia;
        break;
      case "Tuition":
        this.setState({ Tuition: value }, this.editRev());
        stateVar = this.state.Tuition;
        break
      case "GrantsContracts":
        this.setState({ GrantsContracts: value }, this.editRev());
        stateVar = this.state.GrantsContracts;
        break;
      case "PellGrants":
        this.setState({ PellGrants: value }, this.editRev());
        stateVar = this.state.PellGrants;
        break;
      case "NonEdSer":
        this.setState({ NonEdSer: value }, this.editRev());
        stateVar = this.state.NonEdSer;
        break;
      case "GiftsEndowInterest":
        this.setState({ GiftsEndowInterest: value }, this.editRev());
        stateVar = this.state.GiftsEndowInterest;
        break;
    }


    
    console.log("value is", value);
    console.log("id is", id);
    console.log(id, "changed to", stateVar);
    //this.editRev();
  }

  editRev(){
    let rev = [];
    let cats = ["MedCenter", "StudentFees", "StateofCalifornia", "Tuition", "GrantsContracts", "PellGrants", "NonEdSer", "GiftsEndowInterest"];
    let color = ['#f0bf00', '#f6e50e', '#fff688', '#5f63ec', '#71a8ff', 'pink', '#0f7ab4', 'white'];
    let states = [this.state.MedCenter, this.state.StudentFees, this.state.StateofCalifornia, this.state.Tuition, this.state.GrantsContracts, this.state.PellGrants, this.state.NonEdSer, this.state.GiftsEndowInterest]

    for (let i = 0; i < 8; i++) {
      rev.push({ name: cats[i], value: parseInt(states[i]), color: color[i] });
    }

    this.setState({ Revenues: rev });
    console.log("revenues...");
    console.log(this.state.Revenues);

  }




  render() {
    return (
      <form className="inputsRev">
        <input type="text" id="MedCenter" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 0)}} />
        <input type="text" id="StudentFees" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 1)}} />
        <input type="text" id="StateofCalifornia" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 2)}} />
        <input type="text" id="Tuition" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 3)}} />
        <input type="text" id="GrantsContracts" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 4)}} />
        <input type="text" id="PellGrants" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 5)}} />
        <input type="text" id="NonEdSer" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 6)}} />
        <input type="text" id="GiftsEndowInterest" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 7)}} />
      </form>

    );
  }



}


export default EntryBox;