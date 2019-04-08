import React, { Component } from 'react';
import SimpleAppBar from '../decorator/app-bar';

export class TeamView extends Component {
    constructor(props){
        super(props);
        this.onHomeClick = this.onHomeClick.bind(this);
      }
      onHomeClick(){
        //to be added to redirect to home
        alert("Home clicked")
      }
    render() {
        return (
          <SimpleAppBar mess="Team View"/>
        );
    }
}
