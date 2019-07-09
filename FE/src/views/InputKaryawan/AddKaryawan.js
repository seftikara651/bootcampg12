import React, { Component } from 'react';
import {Col, Card, Form,  CardHeader, CardBody, CardFooter, FormGroup, Label, Input, Button} from 'reactstrap';

class Karyawan extends Component{
  constructor(props){
    super(props);
    this.state = { items: [], placement:[], religion:[], position:[], level:[],
    nik:'',
    positionId:'',
    levelId:'',
    religionId:'',
    placementId:'',
    name:'',
    citIdNumber:'',
    address:'',
    birthDate:'',
    workPeriod:'',
    marriageStatus:'',
    beginContract:'',
    endContract:'',
    gender:'',
    childCount:'',
   };
   this.onSubmit = this.onSubmit.bind(this);
   this.onReset = this.onReset.bind(this);
}
onChange = (input) => this.setState({
  [input.target.name]: input.target.value
});

onReset() {
  this.setState({
    nik:'',
    positionId:'',
    levelId:'',
    religionId:'',
    placementId:'',
    name:'',
    citIdNumber:'',
    address:'',
    birthDate:'',
    workPeriod:'',
    marriageStatus:'',
    beginContract:'',
    endContract:'',
    gender:'',
    childCount:'',
  });
}

onSubmit() {
  fetch('http://10.10.10.15:9090/employee/insert', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nik:this.state.nik,
      positionId:this.state.positionId,
      levelId:this.state.levelId,
      religionId:this.state.religionId,
      placementId:this.state.placementId,
      name:this.state.name,
      citIdNumber:this.state.citIdNumber,
      address:this.state.address,
      birthDate:this.state.birthDate,
      workPeriod:this.state.workPeriod,
      marriageStatus:this.state.marriageStatus,
      beginContract:this.state.beginContract,
      endContract:this.state.endContract,
      gender:this.state.gender,
      childCount:this.state.childCount,
    })
  }).then((response) => {
    // return response.json();
  })
  // .then((data) => {
  //   console.log(data);
  // });
}
    render(){
        return(
            <div>
                <Col xs="15" lg="12">
                <Card>
                <Form action="">
              <CardHeader>
                <strong>Add Data Karyawan</strong>
              </CardHeader>
              <CardBody>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-Input">Nomor Induk Karawan</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="nik" name="nik" placeholder="" autoComplete="Input" value={this.state.nik} onChange={this.onChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-Input">Nama</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="" autoComplete="Input" value={this.state.name} onChange={this.onChange} required/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-Input">Nomor KTP</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="citIdNumber" name="citIdNumber" placeholder="" autoComplete="Input" value={this.state.citIdNumber} onChange={this.onChange} required/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="address">Alamat</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="address" id="address" rows="5" placeholder="" value={this.state.address} onChange={this.onChange} required/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="Birthday"> Tanggal Lahir </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="birthDate" name="birthDate" placeholder="date" value={this.state.birthDate} onChange={this.onChange} required/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="gender">Jenis Kelamin</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="gender" id="gender" autoComplete="name" value={this.state.gender} onChange={this.onChange} required>
                      <option value="">Pilih Jenis Kelamin</option>
                        <option value="Male">Laki-Laki</option>
                        <option value="Female">Perempuan</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="Religion">Agama</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="religionId" id="religionId" autoComplete="name" value={this.state.religionId} onChange={this.onChange} required>
                      <option value="">Pilih Agama</option>
                        {this.state.religion.map((data)=>(
                          <option value={data.religionId}>{data.religionName}</option>
                        ))}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="marriageStatus">Status Menikah</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="marriageStatus" id="marriageStatus" autoComplete="name" value={this.state.marriageStatus} onChange={this.onChange} required>
                      <option value="">Pilih Status Menikah</option>
                        <option value="0">Lajang</option>
                        <option value="1">Menikah</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-Input">Jumlah Anak</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="childCount" name="childCount" placeholder="" autoComplete="Input" value={this.state.childCount} onChange={this.onChange} required/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-Input">Jabatan</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="positionId" id="positionId" autoComplete="name" value={this.state.positionId} onChange={this.onChange} required>
                      <option value="">Pilih Jabatan</option>
                      { this.state.position.map((data) => (
                          <option value={data.positionId}>{data.positionName}</option>
                    ))}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="Level">Tingkatan</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="levelId" id="levelId" autoComplete="name" value={this.state.levelId} onChange={this.onChange} required>
                      <option value="">Pilih Tingkatan</option>
                      { this.state.level.map((data) => (
                          <option value={data.levelId}>{data.levelName}</option>
                    ))}
                      </Input>
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="Placement">Lokasi Kerja</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="placementId" id="placementId" autoComplete="name" value={this.state.placementId} onChange={this.onChange} required>
                      <option value="">Pilih Lokasi Kerja</option>
                      { this.state.placement.map((place) => (
                          <option value={place.placementId}>{place.placementName}</option>
                    ))}
                      </Input>
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-Input">Lama Bekerja</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="workPeriod" name="workPeriod" placeholder="" autoComplete="Input" value={this.state.workPeriod} onChange={this.onChange} required />
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="beginContract"> Awal Kontrak </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="beginContract" name="beginContract"  value={this.state.beginContract} onChange={this.onChange} required/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="endContract"> Akhir Kontrak </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="endContract" name="endContract" placeholder="date" value={this.state.endContract} onChange={this.onChange} required/>
                    </Col>
                  </FormGroup>
                  
                  </CardBody>
                  <CardFooter>
                <div className="float-right">
                  <Button type="submit" color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                  <Button type="reset" color="danger" onClick={this.onReset}><i className="fa fa-ban"></i> Reset</Button>
                </div>
              </CardFooter>
              </Form>
            </Card>
            </Col>
            {/* End Form */}
            </div>
        )
    }

componentWillMount() {
  this.loadDataTable();
}

loadDataTable() {

  let handleResponse = function (response) {
    return response.json();
  }

  fetch('http://10.10.10.15:9090/placement'
   ).then(handleResponse)
    .then(data => {
      console.log(data);
      this.setState({
          placement: data
      })
    })

    fetch('http://10.10.10.15:9090/religion'
    ).then(handleResponse)
     .then(data => {
       console.log(data);
       this.setState({
           religion: data
       })
     })
     fetch('http://10.10.10.15:9090/position'
    ).then(handleResponse)
     .then(data => {
       console.log(data);
       this.setState({
           position: data
       })
     })
     fetch('http://10.10.10.15:9090/level'
    ).then(handleResponse)
     .then(data => {
       console.log(data);
       this.setState({
           level: data
       })
     })
}
}
export default Karyawan;