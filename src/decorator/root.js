import React, { Component } from 'react';
import SimpleBottomNavigation from './navigation';

export class Root extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
               <SimpleBottomNavigation/>
            </div>
        );
    }
}
