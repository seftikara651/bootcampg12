import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  FormGroup,
  CardBody,
  Label,
  Input,
  CardFooter,
  Button,
} from 'reactstrap';
import Datetime from 'react-datetime';

class FraudReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noRek: '',
      jenisKartu: '',
      tipeChannel: '',
      waktuKejadian: '',
      nominal: '',
      namaPetugas: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onChange = (input) => this.setState({
    [input.target.name]: input.target.value
  });

  onChangeDate = (input) => {
    this.setState({
      waktuKejadian: input.format('MM/DD/YYYY HH:mm:ss'),
    });
  }

  onReset() {
    this.setState({
      noRek: '',
      jenisKartu: '',
      tipeChannel: '',
      waktuKejadian: '',
      nominal: '',
      namaPetugas: '',
    });
  }

  onSubmit() {
    fetch('http://localhost:5000/insert-fraud-data', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        noRek: this.state.noRek,
        jenisKartu: this.state.jenisKartu,
        tipeChannel: this.state.tipeChannel,
        waktuKejadian: this.state.waktuKejadian,
        nominal: this.state.nominal,
        namaPetugas: this.state.namaPetugas,
      })
    }).then((response) => {
      this.onReset();
      // return response.json();
    })
    // .then((data) => {
    //   console.log(data);
    // });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <strong>Fraud Report</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="no-rek">NO REK</Label>
                      <Input type="text" id="no-rek" placeholder="Enter No Rekening" name="noRek" value={this.state.noRek} onChange={this.onChange} required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="jenis-kartu">JENIS KARTU</Label>
                      <Input type="select" name="jenis-kartu" id="jenis-kartu" name="jenisKartu" onChange={this.onChange} value={this.state.jenisKartu}>
                        <option value="">Please Select...</option>
                        <option value="BRITAMA">BRITAMA</option>
                        <option value="SIMPEDES">SIMPEDES</option>
                        <option value="PRIORITAS">PRIORITAS</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="tipe-channel">TIPE CHANNEL</Label>
                      <Input type="select" name="tipe-channel" id="tipe-channel" name="tipeChannel" onChange={this.onChange} value={this.state.tipeChannel}>
                        <option value="">Please Select...</option>
                        <option value="ATM">ATM</option>
                        <option value="INTERNET BANKING">INTERNET BANKING</option>
                        <option value="SMS BANKING">SMS BANKING</option>
                        <option value="EDC">EDC</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label htmlFor="">WAKTU KEJADIAN</Label>
                      <Datetime inputProps={{placeholder: 'Please set datetime'}} onBlur={this.onChangeDate} timeFormat='HH:mm:ss' value={this.state.waktuKejadian} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="nominal">NOMINAL</Label>
                      <Input type="text" id="nominal" placeholder="Enter Nominal" name="nominal" value={this.state.nominal}  onChange={this.onChange} required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="nama-pengguna">NAMA PENGGUNA</Label>
                      <Input type="text" id="nama-pengguna" placeholder="Enter Name" name="namaPetugas" value={this.state.namaPetugas}  onChange={this.onChange} required />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <div className="float-right">
                  <Button type="button" color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                  <Button type="reset" color="danger" onClick={this.onReset}><i className="fa fa-ban"></i> Reset</Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FraudReportForm;
