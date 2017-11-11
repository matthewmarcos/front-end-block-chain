import React, { Component } from 'react';

class CitizenInfoCard extends Component {
    render () {
        return (
            <div className="card col-sm-4">
                <div className="card-body">
                    Almer Taculog Mendoza
                    <form action="/api/Citizen" method="PUT">
                        <input className="btn btn-primary" type="submit" value="TODO: EDIT BUTTON ICON"/>
                    </form>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>FIRST NAME</td>
                                <td>Almer</td>
                            </tr>
                            <tr>
                                <td>MIDDLE NAME</td>
                                <td>Taculog</td>
                            </tr>
                            <tr>
                                <td>LAST NAME</td>
                                <td>Mendoza</td>
                            </tr>
                            <tr>
                                <td>FIELD 1 (e.g. height)</td>
                                <td>6 footer</td>
                            </tr>
                            <tr>
                                <td>FIELD 3 (e.g. weight)</td>
                                <td>Small</td>
                            </tr>
                            <tr>
                                <td>FIELD 2 (e.g. age)</td>
                                <td>21</td>
                            </tr>
                            <tr>
                                <td>FIELD 4 (e.g. appearance)</td>
                                <td>Cool</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CitizenInfoCard