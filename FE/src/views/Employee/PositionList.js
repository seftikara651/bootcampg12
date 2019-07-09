import React, { Component } from 'react';
import {
  Table,
  Card,
  CardBody,
  CardHeader,
  Col,
} from 'reactstrap';

class PositionList extends Component {
    constructor() {
        super();
        this.state = {
          error : null,
          isLoaded : false,
          employeeData: []
        };
    }

    componentWillMount() {
        this.loadDataTable();
    }

    loadDataTable() {

        let handleResponse = function (response) {
            return response.json();
        }
    
        fetch('https://gist.githubusercontent.com/cbmgit/852c2702d4342e7811c95f8ffc2f017f/raw/InsuranceCompanies.json'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                employeeData: data
            })
        })
    }

    render() {
        return(
            <div>
                {/* <Col md="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-table"></i><strong>Employee List</strong>
                        </CardHeader>
                        <CardBody>
                            <Table hover bordered striped responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>Citizen ID</th>
                                        <th>Employee ID</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Birthdate</th>
                                        <th>Religion</th>
                                        <th>Address</th>
                                        <th>Marital Status</th>
                                        <th>Child Count</th>
                                        <th>Position</th>
                                        <th>Position Type</th>
                                        <th>Workplace</th>
                                        <th>Begin Contract</th>
                                        <th>End Contract</th>
                                        <th>Work Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.employeeData.map(employeeProfile => (
                                        <tr key={employeeProfile.nik}>
                                            <td>{employeeProfile.citIdNumber}</td>
                                            <td>{employeeProfile.nik}</td>
                                            <td>{employeeProfile.name}</td>
                                            <td>{employeeProfile.gender}</td>
                                            <td>{employeeProfile.birthDate}</td>
                                            <td>{employeeProfile.religionId}</td>
                                            <td>{employeeProfile.address}</td>
                                            <td>{employeeProfile.marriageStatus}</td>
                                            <td>{employeeProfile.childCount}</td>
                                            <td>{employeeProfile.positionId}</td>
                                            <td>{employeeProfile.levelId}</td>
                                            <td>{employeeProfile.placementId}</td>
                                            <td>{employeeProfile.beginContract}</td>
                                            <td>{employeeProfile.endContract}</td>
                                            <td>{employeeProfile.workPeriod}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col> */}
            </div>
        )
    }
}

export default PositionList;