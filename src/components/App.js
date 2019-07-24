import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './MyStyle.css';

class  App extends Component {

    constructor(props) {
		super(props);
		this.state = {
            users: [],
            isOpened: false
        };
		this.headers = [
			{ key: 'id', label: 'ID' },
			{ key: 'name', label: 'Name' },
			{ key: 'username', label: 'Username' },
            { key: 'email', label: 'Email' },
            { key: 'address', label: 'Address' }
        ];
        
        this.validateZipCode = this.validateZipCode.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
                    users:result
				});
			});
    }

    validateZipCode(zipCode){
        console.log("zipcode received-");
        console.log(zipCode);
        const pattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
		let zipArray = zipCode.split("-");
		let firstPart = zipArray[0];
		let secondPart = zipArray[1];
        return pattern.test(firstPart + "-" + secondPart) ?true : false;
      }      
    
    showDetails(item) {
        console.log(item);
        this.setState({isOpened: true});
        this.itemObj = item;
    }

    hideDetails() {
        console.log("click");
        this.setState({isOpened: false});
    }

	render() {                            
		return (
            <div>
			<table cellpadding="5" className="userTable">
				<thead>
					<tr>
					{
						this.headers.map(function(h) {
							return (
								<th className="userHeader" key = {h.key}>{h.label}</th>
							)
						})
					}
					</tr>
				</thead>
				<tbody>
					{
						this.state.users.map((item, key) => {             
						return (
								<tr key = {item.id} className={this.validateZipCode(item.address.zipcode) ? "" :"invalidZip"}>
								  <td  className="userCell">{item.id}</td>
								  <td className="userCell">{item.name}</td>
								  <td className="userCell">{item.username}</td>
								  <td className="userCell">{item.email}</td>
                                  <td className="userCell"><a href="#" className="userAddress" onClick={this.showDetails.bind(this, item)}>Address Details</a></td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
            { this.state.isOpened && <Sidebar data={this.itemObj} hideDetails={this.hideDetails}/>}
            </div>
		)
	}
}

export default App;