import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col, 
  FormGroup,
  Input,
  Label,
  Row,
  Form,
} from 'reactstrap';

class inputkaryawan extends Component{
    constructor(props) {
        super(props);
          this.state = { 
            employee:[], religion:[], placement:[], position:[], level:[],
              nik: '', 
              positionId:'', 
              levelId:'', 
              placementId:'', 
              name: '', 
              citIdNumber: '', 
              address:'',
              birthDate:Date, 
              religionId:'', 
              workPeriod:'', 
              marriageStatus:'', 
              beginContract:Date, 
              endContract:Date, 
              gender:'', 
              childCount:''};
    
          this.onReset = this.onReset.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
    }   

    componentWillMount() {
      this.loadDataTable();
    }

    loadDataTable() {

      let handleResponse = function (response) {
        return response.json();
      }
  
      fetch('http://10.10.10.15:9090/religion'
       ).then(handleResponse)
        .then(data => {
          console.log(data);
          this.setState({
              religion: data
          })
        });
      
      fetch('http://10.10.10.15:9090/placement'
        ).then(handleResponse)
         .then(data => {
           console.log(data);
           this.setState({
               placement: data
           })
         });

      fetch('http://10.10.10.15:9090/position'
        ).then(handleResponse)
         .then(data => {
         console.log(data);
         this.setState({
                position: data
            })
          });

      fetch('http://10.10.10.15:9090/level'
        ).then(handleResponse)
         .then(data => {
         console.log(data);
         this.setState({
                level: data
             })
           })
    }

    onChange = (input) => this.setState({
      [input.target.name]: input.target.value
    });

    onReset(){
      this.setState({
        employee:[],
        nik: '',
        name: '',
        religionId: '',
        citIdNumber: '',
        address: '',
        birthDate: Date,
        positionId: '',
        levelId: '',
        placementId: '',
        workPeriod: '',
        marriageStatus: '',
        beginContract: Date,
        endContract: Date,
        gender: '',
        childCount: '',
      });
    }

    handleSubmit(){
      fetch('http://10.10.10.15:9090/employee/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nik: this.state.nik,
          name: this.state.name,
          religionId: this.state.religionId,
          citIdNumber: this.state.citIdNumber,
          address: this.state.address,
          birthDate: this.state.birthDate,
          positionId: this.state.positionId,
          levelId: this.state.levelId,
          placementId: this.state.placementId,
          workPeriod: this.state.workPeriod,
          marriageStatus: this.state.marriageStatus,
          beginContract: this.state.beginContract,
          endContract: this.state.endContract,
          gender: this.state.gender,
          childCount: this.state.childCount,
          
        })
        
    }).then((response) => {
        this.onReset();
      })

    }
    onSubmit(){
      console.log(this.state);
      this.handleSubmit();
    }


    render(){
      return(
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" sm="6" Style="margin:0 auto">
              <Card>
                <CardHeader>
                  <strong>FORM INPUT KARYAWAN</strong>
                </CardHeader>
                <CardBody>
                  <Form action="">
                  <FormGroup>
                    <Label htmlFor="nik">NIK</Label>
                      <Input 
                        type="text" 
                        id="nik" 
                        name="nik"
                        onChange={this.onChange}
                        value={this.state.nik}
                        placeholder="NIK" 
                      required/>
                  </FormGroup>
                  <FormGroup row >
                    <Col md="1">
                      <Label htmlFor="positionId">Posisi</Label>
                    </Col>
                    <Col xs="9" md="5">
                      <Input 
                          type="select" 
                          id="positionId"
                          name="positionId" 
                          onChange={this.onChange}
                          value={this.state.positionId}>
                          <option value="">Posisi</option>  
                          { this.state.position.map((data) => (
                            <option value={data.positionId}>{data.positionName}</option>
                          )
                          )}
                      </Input>
                    </Col>
                    <Col md="1">
                      <Label htmlFor="levelId">Level</Label>
                    </Col>
                    <Col xs="9" md="5">
                      <Input 
                          type="select" 
                          id="levelId" 
                          name="levelId"
                          onChange={this.onChange}
                          value={this.state.levelId}>
                          <option value="">Level</option>
                          { this.state.level.map((data) => (
                            <option value={data.levelId}>{data.levelName}</option>
                          )
                          )}
                      </Input>
                    </Col>
                  
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="religionId">Agama</Label>
                        <Input 
                            type="select" 
                            id="religionId"
                            name="religionId" 
                            onChange={this.onChange}
                            value={this.state.religionId}>
                            <option value="">Agama</option>
                            { this.state.religion.map((data) => (
                              <option value={data.religionId}>{data.religionName}</option>
                            )
                            )}
                        </Input>
                  </FormGroup>
                    <Label htmlFor="placementId">Lokasi</Label>
                        <Input 
                            type="select" 
                            id="placementId"
                            name="placementId" 
                            onChange={this.onChange}
                            value={this.state.placementId} >
                            <option value="">Lokasi Kerja</option>
                            { this.state.placement.map((data) => (
                              <option value={data.placementId}>{data.placementName}</option>
                            )
                            )}
                        </Input>
                  <FormGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name">Nama</Label>
                      <Input 
                        type="text" 
                        id="name"
                        name="name" 
                        onChange={this.onChange}
                        value={this.state.name}
                        placeholder="Masukkan Nama" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="citIdNumber">No. KTP</Label>
                      <Input 
                        type="text" 
                        id="citIdNumber"
                        name="citIdNumber" 
                        onChange={this.onChange}
                        value={this.state.citIdNumber}
                        placeholder="Masukkan No. KTP" 
                        required/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="address">Alamat</Label>
                      <Input 
                        type="textarea" 
                        id="address" 
                        name="address"
                        onChange={this.onChange}
                        value={this.state.address}
                        placeholder="Masukkan Alamat" />
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="birthDate">Tanggal Lahir</Label>
                    </Col>
                    <Col xs="9" md="4">
                      <Input 
                        type="date" 
                        id="birthDate"
                        name="birthDate" 
                        onChange={this.onChange}
                        value={this.state.birthDate} 
                        placeholder="date" />
                    </Col>
                    <Col md="2">
                    <Label htmlFor="workPeriod">Masa Kerja</Label>
                    </Col>
                    <Col xs="9" md="4">
                      <Input 
                        type="text" 
                        id="workPeriod" 
                        name="workPeriod"
                        onChange={this.onChange}
                        value={this.state.workPeriod}
                        placeholder="Lama Masa Kerja" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="marriageStatus">Status Nikah</Label>
                        <Input 
                            type="select" 
                            id="marriageStatus"
                            name="marriageStatus" 
                            onChange={this.onChange}
                            value={this.state.marriageStatus}>
                            <option value="">Status Menikah</option>
                            <option value="0">Menikah</option>
                            <option value="1">Lajang</option>
                        </Input>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="beginContract">Kontrak Awal</Label>
                    </Col>
                    <Col xs="9" md="4">
                      <Input 
                        type="date" 
                        id="beginContract" 
                        name="beginContract"
                        onChange={this.onChange}
                        value={this.state.beginContract}
                        placeholder="date" />
                    </Col>
                    <Col md="2">
                      <Label htmlFor="endContract">Kontrak Akhir</Label>
                    </Col>
                    <Col xs="9" md="4">
                      <Input 
                        type="date" 
                        id="endContract" 
                        name="endContract"
                        onChange={this.onChange}
                        value={this.state.endContract} 
                        placeholder="date" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="gender">Jenis Kelamin</Label>
                      <Input 
                        type="select" 
                        id="gender" 
                        name="gender"
                        onChange={this.onChange}
                        value={this.state.gender} >
                        <option value="">Jenis Kelamin</option>
                        <option value="male">Pria</option>
                        <option value="female">Wanita</option> 
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="childCount">Jumlah Anak</Label>
                      <Input 
                        type="text" 
                        id="childCount"
                        name="childCount" 
                        onChange={this.onChange}
                        value={this.state.childCount}
                        placeholder="Jumlah Anak" />
                  </FormGroup>
                    <Button color="primary" onClick={this.onSubmit} type="submit">Submit</Button>{''}
                    <Button color="danger" onClick={this.onReset} type="button">Reset</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* </form> */}
        </div>   
      );
    }
  }

export default inputkaryawan;