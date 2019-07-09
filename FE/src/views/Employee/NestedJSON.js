import React, { Component } from 'react';
import {
  Table,
  Card,
  CardBody,
  CardHeader,
  Col,
} from 'reactstrap';

class NestedJSON extends Component {
    constructor() {
        super();
        this.state = {
          error : null,
          isLoaded : false,
          company: [],
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
                  company: data.InsuranceCompanies["Top Insurance Companies"]
                })
        })
    }

    render() {
        console.log(this.state.company);

        if(!this.state.company) {
            return null;
        }

        return (
            <div>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-table"></i><strong>Top Insurance Companies</strong>
                        </CardHeader>
                        <CardBody>
                            <Table hover bordered striped responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Market Capitalization</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.company.map(topInsurance => (
                                        <tr key={topInsurance.No}>
                                            <td>{topInsurance.No}</td>
                                            <td>{topInsurance.Name}</td>
                                            <td>{topInsurance["Market Capitalization"]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default NestedJSON;