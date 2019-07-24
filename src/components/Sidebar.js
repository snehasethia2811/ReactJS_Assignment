import React, { Component } from 'react';
import './MyStyle.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="openSidebar">
                {console.log(this.props.data)}
                <a  href="" onClick={this.props.hideDetails}><img src="./src/cancel.png" alt="Cancel" className="closeSidebar"/></a>
                <h4>Address Details-</h4>
                <p><span>Street:  </span><span>{this.props.data.address.street}</span></p>
                <p><span>Suite:  </span><span>{this.props.data.address.suite}</span></p>
                <p><span>City:  </span><span>{this.props.data.address.city}</span></p>
                <p><span>Zipcode:  </span><span>{this.props.data.address.zipcode}</span></p>
                <p><span>Latitude:  </span><span>{this.props.data.address.geo.lat}</span></p>
                <p><span>Longitude:  </span><span>{this.props.data.address.geo.lng}</span></p>
            </div>
        )
    }
}

export default Sidebar;