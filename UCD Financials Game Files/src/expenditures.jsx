import React, { useRef, useEffect, useState } from 'react';

class Expenditure extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      MedCenter: 0,
      Teaching: 0,
      Research: 0,
      Aid: 0,
      Operations: 0,
      Admin: 0,
      NonEdSer: 0,
      PubServ: 0,
      Dep: 0, 
      Revenues: [{ name: "Medical Center", value: 0, color: '#f0bf00' }, { name: "Teaching and Teaching Support", value: 0, color: '#f6e50e' }, { name: "Research", value: 0, color: '#fff688' }, { name: "Student Services and Financial Aid", value: 0, color: '#5f63ec' }, { name: "Operations and Maintenance (Buildings, etc)", value: 0, color: '#718ff' }, { name: "Administration", value: 0, color: '#0f7ab4' }, { name: "Non-Educational Services", value: 0, color: 'pink' }, { name: "Public Service", value: 0 ,color: 'blue' }, { name: "Depreciation, Interest, etc.", value: 0, color: 'white' }]

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
      case "Teaching":
        this.setState((state) => {return {Teaching: value}}, this.editRev());
        stateVar = this.state.Teaching;
        break;
      case "Research":
        this.setState({ Research: value }, this.editRev());
        stateVar = this.state.Research;
        break;
      case "Aid":
        this.setState({ Aid: value }, this.editRev());
        stateVar = this.state.Aid;
        break
      case "Operations":
        this.setState({ Operations: value }, this.editRev());
        stateVar = this.state.Operations;
        break;
      case "Admin":
        this.setState({ Admin: value }, this.editRev());
        stateVar = this.state.Admin;
        break;
      case "NonEdSer":
        this.setState({ NonEdSer: value }, this.editRev());
        stateVar = this.state.NonEdSer;
        break;
      case "PubServ":
        this.setState({ PubServ: value }, this.editRev());
        stateVar = this.state.PubServ;
        break;
        case "Dep":
        this.setState({ Dep: value }, this.editRev());
        stateVar = this.state.Dep;
        break;
    }


    
    console.log("value is", value);
    console.log("id is", id);
    console.log(id, "changed to", stateVar);
    //this.editRev();
  }

  editRev(){
    let rev = [];
    let cats = ["MedCenter", "Teaching", "Research", "Aid", "Operations", "Admin", "NonEdSer", "PubServ", "Dep"];
    let color = ['#f0bf00', '#f6e50e', '#fff688', '#5f63ec', '#71a8ff','#0f7ab4','pink', 'blue','white'];
    let states = [this.state.MedCenter, this.state.Teaching, this.state.Research, this.state.Aid, this.state.Operations, this.state.Admin, this.state.NonEdSer, this.state.PubServ, this.state.Dep]

    for (let i = 0; i < 9; i++) {
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
        <input type="text" id="Teaching" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 1)}} />
        <input type="text" id="Research" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 2)}} />
        <input type="text" id="Aid" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 3)}} />
        <input type="text" id="Operations" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 4)}} />
        <input type="text" id="Admin" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 5)}} />
        <input type="text" id="NonEdSer" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 6)}} />
        <input type="text" id="PubServ" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 7)}} />
        <input type="text" id="Dep" placeholder="0%" onChange={event => {this.props.onInputChange(event.target.value, event.currentTarget.id, 8)}} />
      </form>

    );
  }



}


export default Expenditure;
