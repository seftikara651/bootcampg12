import React, { Component} from 'react';
import { Table, Card, CardBody, CardHeader, Col, Row,
        ButtonGroup,
        Button,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        FormGroup,
        Input,
        InputGroup,
        InputGroupAddon,
        InputGroupText } from 'reactstrap';

class DataKaryawan extends Component{
  constructor() {
    super();
    this.state = {
      term:'',
      warning: false,
      danger: false,
      error : null,
      isLoaded : false,
      dataKaryawan: [], temp:[], religion:[],placement:[], position:[], level:[],
      setCitIdNumber: '',
      setNik: '',
      setName: '',
      setAddress: '',
      setBirthDate: '',
      setGender:'',
      setReligionId:'',
      setMarriageStatus:'',
      setChildCount:'',
      setPlacementId:'',
      setPositionId:'',
      setLevelId:'',
      setWorkPeriod:'',
      setBeginContract:'',
      setEndContract:''
    };

    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchingFor(term) {
    return function(x){
      return x.nik.toString().toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }
  
  searchHandler(event){
    this.setState({term: event.target.value})
  }
  

  toggleWarning = (citIdNumber, nik, name, address, birthDate, gender, religionId, marriageStatus, childCount, placementId, positionId, levelId, workPeriod, beginContract, endContract) => {
    this.setState({
      warning: !this.state.warning,
      setCitIdNumber: citIdNumber,
      setNik: nik,
      setName: name,
      setAddress: address,
      setBirthDate: birthDate,
      setGender: gender,
      setReligionId: religionId,
      setMarriageStatus: marriageStatus,
      setChildCount: childCount,
      setPlacementId: placementId,
      setPositionId: positionId,
      setLevelId: levelId,
      setWorkPeriod: workPeriod,
      setBeginContract: beginContract,
      setEndContract: endContract
    });
  }

  onChange = (input) => this.setState({
    [input.target.id]: input.target.value
  })

  updateData = (nik) => {
    fetch('http://10.10.10.15:9090/employee/update/'+nik, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        citIdNumber: this.state.setCitIdNumber,
        nik: this.state.setNik,
        name: this.state.setName,
        address: this.state.setAddress,
        birthDate: this.state.setBirthDate,
        gender: this.state.setGender,
        religionId: this.state.setReligionId,
        marriageStatus: this.state.setMarriageStatus,
        childCount: this.state.setChildCount,
        placementId: this.state.setPlacementId,
        positionId: this.state.setPositionId,
        levelId: this.state.setLevelId,
        workPeriod: this.state.setWorkPeriod,
        beginContract: this.state.setBeginContract,
        endContract: this.state.setEndContract
      })
      }).then((response) => {
        window.location.reload();
        alert("Data Berhasil Di Update!");
        
      });
  }

  toggleDanger = (nik) => {
    this.setState({
      danger: !this.state.danger,
      setNik : nik
    });
  }
  
  deleteData = (nik) => {
    fetch('http://10.10.10.15:9090/employee/delete/'+nik, {
      method: 'DELETE',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
    }).then((response) => {
      alert("Data dengan NIK : " + nik + ". Berhasil Di Hapus!");
      window.location.reload();
      //response.json();
    })
  }

  componentWillMount() {
    this.loadData();
  }

  componentDidMount() {
    this.getState();
  }

  loadData() {

    let handleResponse = function (response) {
      // console.log(r);
      return response.json();
    }

    var url = 'http://10.10.10.15:9090/employee';
    this.fetchData('http://10.10.10.15:9090/employee');

    url = 'http://10.10.10.15:9090/religion';

    fetch(url
     ).then(handleResponse)
      .then(data => {
        console.log(data);
        this.setState({
            religion: data
        })
      });
      
      url = 'http://10.10.10.15:9090/placement';
      fetch(url
      ).then(handleResponse)
       .then(data => {
         console.log(data);
         this.setState({
             placement: data
         })
       });

       url = 'http://10.10.10.15:9090/position';
      fetch(url
      ).then(handleResponse)
       .then(data => {
         console.log(data);
         this.setState({
             position: data
         })
       });

       url = 'http://10.10.10.15:9090/level';
      fetch(url
      ).then(handleResponse)
       .then(data => {
         console.log(data);
         this.setState({
             level: data
         })
       });
  }


  fetchData(url) {
    fetch(url
      ).then(response => response.json())
       .then(data => {
         console.log(data);
         this.setState({
           temp:data
        })
       });
  }
  getState() {
    this.setState({
      dataKaryawan:this.state.temp
    })
  }
  
    
  render() {
    {console.log(this.state.dataKaryawan);}
    {console.log(this.state.temp);}
    const {term, dataKaryawan}= this.state;
    return (
      <div className="animated fadeIn">
      <Row>
        <Col xm="12">
          <Card>
            <CardHeader>
              <i className="fa fa-table"></i><strong>Tabel</strong>
            </CardHeader>
            <CardBody>
              <InputGroup Style="width:30%; padding-bottom:20px;">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Cari</InputGroupText>
                </InputGroupAddon>
                <Input type="text" onChange={this.searchHandler} placeholder="Masukan data yang akan di cari..." />
                <InputGroupAddon addonType="append">
                <InputGroupText><i className="fa fa-search"></i></InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <Table hover bordered striped responsive size="sm">
                <thead>
                <tr>
                  <th Style="text-align:center; width:10%;">Nomor KTP</th>
                  <th Style="text-align:center; width:5%;">NIK</th>
                  <th Style="text-align:center; width:10%;">Nama</th>
                  <th Style="text-align:center; width:10%;">Alamat</th>
                  <th Style="text-align:center; width:8%;">Tgl Lahir</th>
                  <th Style="text-align:center; width:5%;">Jenis Kelamin</th>
                  <th Style="text-align:center; width:5%;">Id Agama</th>
                  <th Style="text-align:center; width:5%;">Status Nikah</th>
                  <th Style="text-align:center; width:5%;">Jumlah Anak</th>
                  <th Style="text-align:center; width:5%;">Id Lokasi</th>
                  <th Style="text-align:center; width:5%;">Nama Posisi</th>
                  <th Style="text-align:center; width:5%;">Id Level</th>
                  <th Style="text-align:center; width:5%;">Lama Kerja</th>
                  <th Style="text-align:center; width:8%;">Mulai Kontrak</th>
                  <th Style="text-align:center; width:8%;">Akhir Kontrak</th>
                  <th Style="text-align:center; width:8%;">Aksi</th>
                </tr>
                </thead>
                <tbody>
                  { dataKaryawan.filter(this.searchingFor(term)).map((data) => (
                  <tr>
                    <td>{data.citIdNumber}</td>
                    <td>{data.nik}</td>
                    <td>{data.name}</td>
                    <td>{data.address}</td>
                    <td>{data.birthDate}</td>
                    <td>{data.gender}</td>
                    <td>{data.religionId}</td>
                    <td>{data.marriageStatus}</td>
                    <td>{data.childCount}</td>
                    <td>{data.placementId}</td>
                    <td>{data.positionName}</td>
                    <td>{data.levelId}</td>
                    <td>{data.workPeriod}</td>
                    <td>{data.beginContract}</td>
                    <td>{data.endContract}</td>
                    <td>
                    <ButtonGroup>
                      <Button type="button" Style="width:35px;" color="warning" onClick={() => this.toggleWarning(data.citIdNumber, data.nik, data.name, data.address, data.birthDate, data.gender, data.religionId, data.marriageStatus, data.childCount, data.placementId, data.positionId, data.levelId, data.workPeriod, data.beginContract, data.endContract)}><i className="fa fa-edit"></i></Button>
                      <Button type="button" Style="width:35px;" color="danger" onClick={() => this.toggleDanger(data.nik)}><i className="fa fa-trash"></i></Button>
                    </ButtonGroup>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </Table>
              <Modal isOpen={this.state.warning} toggle={() => this.toggleWarning(this.state.setCitIdNumber, this.state.setNik, this.state.setName, this.state.setAddress, this.state.setBirthDate, this.state.setGender, this.state.setReligionId, this.state.setMarriageStatus, this.state.setChildCount, this.state.setPlacementId, this.state.setPositionId, this.state.setLevelId, this.state.setWorkPeriod, this.state.setBeginContract, this.state.setEndContract)}
                    className={'modal-lg modal-warning '}>
                <ModalHeader toggle={() => this.toggleWarning(this.state.setCitIdNumber, this.state.setNik, this.state.setName, this.state.setAddress, this.state.setBirthDate, this.state.setGender, this.state.setReligionId, this.state.setMarriageStatus, this.state.setChildCount, this.state.setPlacementId, this.state.setPositionId, this.state.setLevelId, this.state.setWorkPeriod, this.state.setBeginContract, this.state.setEndContract)}>
                  Edit Data Karyawan
                </ModalHeader>
                <ModalBody>
                  <FormGroup Style="width:49%; float:left;">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Nomor KTP</InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" id="setCitIdNumber" onChange={this.onChange} value={this.state.setCitIdNumber} placeholder="Masukan Nomor KTP"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-id-card"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup  Style="width:49%; float:right;">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>NIK</InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" id="setNik" onChange={this.onChange} value={this.state.setNik} readonly="readonly"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-vcard"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Nama</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="setName" onChange={this.onChange} value={this.state.setName} placeholder="Masukan Nama Karyawan"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Alamat</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="setAddress" onChange={this.onChange} value={this.state.setAddress} placeholder="Masukan Alamat Karyawan"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-home"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup Style="width:38%; float:left;">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Tanggal Lahir</InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" id="setBirthDate" onChange={this.onChange} value={this.state.setBirthDate}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-calendar"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup Style="width:29%; float:right; margin-left:20px;">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Jenis Kelamin</InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" id="setGender" onChange={this.onChange} value={this.state.setGender}>
                        <option value="">Pilih JK</option>
                        <option value="male">Laki-Laki</option>
                        <option value="female">Perdatauan</option>
                      </Input>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-intersex"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    </FormGroup>
                  <FormGroup Style="width:28%; float:right;">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Agama</InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" id="setReligionId" onChange={this.onChange} value={this.state.setReligionId}>
                        <option value="">Pilih Agama</option>
                        { this.state.religion.map((data) => (
                          <option value={data.religionId}>{data.religionName}</option>
                          )
                        )}
                      </Input>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-users"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Status Nikah</InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" id="setMarriageStatus" onChange={this.onChange} value={this.state.setMarriageStatus}>
                        <option value="">Pilih Status Kekeluargaan</option>
                        <option value="0">Lajang</option>
                        <option value="1">Menikah</option>
                        <option value="2">Janda / Duda</option>
                      </Input>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-heart"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Jumlah Anak</InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" id="setChildCount" onChange={this.onChange} value={this.state.setChildCount} placeholder="Masukan Jumlah Anak"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-child"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Lokasi</InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" id="setPlacementId" onChange={this.onChange} value={this.state.setPlacementId}>
                        <option value="">Pilih Lokasi Pendataatan Kerja</option>
                        { this.state.placement.map((data) => (
                          <option value={data.placementId}>{data.placementName}</option>
                          )
                        )}
                      </Input>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-location-arrow"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup Style="width:49%; float:left;">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Divisi</InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" id="setPositionId" onChange={this.onChange} value={this.state.setPositionId}>
                        <option value="">Pilih Posisi Bagian Kerja</option>
                        { this.state.position.map((data) => (
                          <option value={data.positionId}>{data.positionName}</option>
                          )
                        )}
                      </Input>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-ils"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup Style="width:49%; float:right;">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Level</InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" id="setLevelId" onChange={this.onChange} value={this.state.setLevelId}>
                        <option value="">Pilih Level Posisi Bagian</option>
                        { this.state.level.map((data) => (
                          <option value={data.levelId}>{data.levelName}</option>
                          )
                        )}
                      </Input>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-star"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Lama Bekerja</InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" id="setWorkPeriod" onChange={this.onChange} value={this.state.setWorkPeriod} placeholder="Jumlah (tahun)"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-clock-o"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup Style="width:49%; float:left;">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Mulai Kontrak</InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" id="setBeginContract" onChange={this.onChange} value={this.state.setBeginContract}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-calendar"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup Style="width:49%; float:right;">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText Style="width:120px;">Akhir Kontrak</InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" id="setEndContract" onChange={this.onChange} value={this.state.setEndContract}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-calendar"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={() => this.toggleWarning(this.state.setCitIdNumber, this.state.setNik, this.state.setName, this.state.setAddress, this.state.setBirthDate, this.state.setGender, this.state.setReligionId, this.state.setMarriageStatus, this.state.setChildCount, this.state.setPlacementId, this.state.setPositionId, this.state.setLevelId, this.state.setWorkPeriod, this.state.setBeginContract, this.state.setEndContract)}> Batal </Button>
                  <Button color="warning" onClick={() => this.updateData(this.state.setNik)}> Simpan </Button>
                </ModalFooter>
              </Modal>
              <Modal isOpen={this.state.danger} toggle={() => this.toggleDanger(this.state.setNik)}
                      className={'modal-danger '}>
                <ModalHeader toggle={() => this.toggleDanger(this.state.setNik)}>Hapus Data</ModalHeader>
                <ModalBody>
                  Ingin Menghapus Data Dengan NIK : {this.state.setNik}
                </ModalBody>
                <ModalFooter>
                  <Button type="button" color="secondary" onClick={() => this.toggleDanger(this.state.setNik)}> Batal </Button>
                  <Button type="button" color="danger" onClick={() => this.deleteData(this.state.setNik)}> Hapus </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
    )
  }
}

export default DataKaryawan;