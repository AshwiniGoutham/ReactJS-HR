import React, { Component } from 'react';
import SimpleAppBar from '../decorator/app-bar';
import SelectDropdown from "./SelectDropdown";
import leftImg from '../images/icon-home-white.svg';
import "../css/style.css";
export class SelectRole extends Component {
  constructor(props) {
    super(props);
    this.onHomeClick = this.onHomeClick.bind(this);
  }
  onHomeClick() {
    //to be added to redirect to home
    alert("Home clicked")
  }
  render() {
    return (
      <div>
        <SimpleAppBar mess="Select Role" image={leftImg} />
        <div className="selectDD">
          <span>Sign in as:</span>
          <SelectDropdown />
        </div>
      </div>
    );
  }
}
