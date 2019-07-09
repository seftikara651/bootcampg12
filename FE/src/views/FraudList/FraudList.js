import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
} from 'reactstrap';

class FraudList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fraudData: [],
    }
  }

  componentWillMount() {
    this.loadFraudData();
  }

  loadFraudData() {
    fetch('http://localhost:5000/get-data-fraud', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: null
    }).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        fraudData: data,
      });
    });
  }

  render() {
    return(
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">No</th>
                      <th className="text-center">Norek</th>
                      <th className="text-center">Jenis Kartu</th>
                      <th className="text-center">Tipe Channel</th>
                      <th className="text-center">Waktu Kejadian</th>
                      <th className="text-center">Nominal</th>
                      <th className="text-center">Nama Petugas</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.state.fraudData.map((row, index) => {
                      return (
                        <tr key={row.id}>
                          <td>{index + 1}</td>
                          <td>{row.norek}</td>
                          <td>{row.jenis_kartu}</td>
                          <td>{row.tipe_channel}</td>
                          <td>{row.waktu_kejadian}</td>
                          <td>{row.nominal}</td>
                          <td>{row.nama_petugas}</td>
                        </tr>
                      )
                    }) }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

}

export default FraudList;
