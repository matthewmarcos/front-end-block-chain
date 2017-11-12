import React, { Component } from 'react';
import _ from 'lodash';

class CitizenInfoCard extends Component {

    render () {
        return (
            <div className="citizen-card card col-sm-3">
                <div className="card-header">
                    <h3>{this.props.firstName} {this.props.middleName} {this.props.lastName}</h3>
                </div>    
                <div className="card-body">
                    {/*<form action="/api/Citizen" method="PUT">
                        <input className="btn btn-primary" type="submit" value="TODO: EDIT BUTTON ICON"/>
                    </form>*/}
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.props.firstName}</td>
                            </tr>
                            <tr>
                                <td>Middle Name</td>
                                <td>{this.props.middleName}</td>
                            </tr>
                            <tr>
                                <td> Last Name</td>
                                <td>{this.props.lastName}</td>
                            </tr>
                            {
                                _.map(JSON.parse(this.props.info), (val, key) => {
                                    return(<tr key={key}>
                                        <td>
                                            {key}
                                        </td>
                                        <td>
                                            {val}</td>
                                        </tr>);
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CitizenInfoCard
