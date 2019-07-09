import React, { Component } from 'react';
import {
  Table,
  Card,
  CardBody,
  CardHeader,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ButtonGroup,
  Label,
  FormGroup,
  Input,
  InputGroup
} from 'reactstrap';
import { throwStatement } from '@babel/types';

class KaryawanList extends Component {
    constructor() {
        super();
        this.state = {
          error : null,
          isLoaded : false,
          modal: false,
          employeeData: [],
          religionList:[],
          levelList:[],
          positionList:[],
          placementList:[],
          nikUpdate: '',
          nameUpdate: '',
          positionUpdate: '',
          levelUpdate: '',
          religionUpdate: '',
          placementUpdate: '',
          citIDUpdate: '',
          addressUpdate: '',
          birthUpdate: '',
          workPeriodUpdate: '',
          marriageStatusUpdate: '',
          beginContractUpdate: '',
          endContractUpdate: '',
          childUpdate: '',
          genderUpdate: '',
          filterNik: ''
        };
        this.updateRecord = this.updateRecord.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle(nik, name, citId, address, birth, workPeriod, marriage, beginContract, endContract, child, gender,
            position, level, religion, placement
        ) {
        this.setState({
            modal: !this.state.modal,
            nikUpdate: nik,
            nameUpdate: name,
            positionUpdate: position,
            levelUpdate: level,
            religionUpdate: religion,
            placementUpdate: placement,
            citIDUpdate: citId,
            addressUpdate: address,
            birthUpdate: birth,
            workPeriodUpdate: workPeriod,
            marriageStatusUpdate: marriage,
            beginContractUpdate: beginContract,
            endContractUpdate: endContract,
            childUpdate: child,
            genderUpdate: gender
        });
    }
    
    filterByNik(event) {
        this.setState({ filterNik: event.target.value.substr(0, 20) });
    }

    componentDidMount() {
        this.setState({
          filtered: this.props.items
        });
    }
      
    componentWillReceiveProps(nextProps) {
        this.setState({
          filtered: nextProps.items
        });
    }

    onChange = (input) => this.setState({
        [input.target.name]: input.target.value
    })
    
    componentWillMount() {
        this.loadDataTable();
        this.getLevelList();
        this.getPlacementList();
        this.getPositionList();
        this.getReligionList();
    }

    getReligionList() {

        let handleResponse = function (response) {
            return response.json();
        }
    
        fetch('http://10.10.10.15:9090/religion/jsonDetail'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                religionList: data
            })
        })
    }

    getPositionList() {

        let handleResponse = function (response) {
            return response.json();
        }
    
        fetch('http://10.10.10.15:9090/position'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                positionList: data
            })
        })
    }

    getLevelList() {

        let handleResponse = function (response) {
            return response.json();
        }
    
        fetch('http://10.10.10.15:9090/level'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                levelList: data
            })
        })
    }

    getPlacementList() {

        let handleResponse = function (response) {
            return response.json();
        }
    
        fetch('http://10.10.10.15:9090/placement'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                placementList: data
            })
        })
    }

    loadDataTable() {

        let handleResponse = function (response) {
            return response.json();
        }
    
        fetch('http://10.10.10.15:9090/employee'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                employeeData: data
            })
        })
    }

    deleteRecord = (nik) => {
        fetch('http://10.10.10.15:9090/employee/delete/'+nik, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            window.location.reload();
            alert("Data berhasil di delete");
        })
    }

    filterRecord = (nik) => {
        fetch('http://10.10.10.15:9090/employee'+nik, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
    }

    updateRecord = (nik) => {
        fetch('http://10.10.10.15:9090/employee/update/'+nik, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nik: this.state.nikUpdate,
                positionId: this.state.positionUpdate,
                levelId: this.state.levelUpdate,
                religionId: this.state.religionUpdate,
                placementId: this.state.placementUpdate,
                name: this.state.nameUpdate,
                citIdNumber: this.state.citIDUpdate,
                address: this.state.addressUpdate,
                birthDate: this.state.birthUpdate,
                workPeriod: this.state.workPeriodUpdate,
                marriageStatus: this.state.marriageStatusUpdate,
                beginContract: this.state.beginContractUpdate,
                endContract: this.state.endContractUpdate,
                gender: this.state.genderUpdate,
                childCount: this.state.childUpdate
            })
        }).then((response) => {
            window.location.reload();
            alert("Data berhasil di update");
        })
    }

    render() {
        console.log(this.state.employeeData);
        if (!this.state.employeeData) {
          return null;
        }

        let filteredEmployee = this.state.employeeData.filter(employee => {
          return (
            employee.nik
              .toString()
              .toLowerCase()
              .indexOf(this.state.filterNik.toLowerCase()) !== -1 ||
            employee.name
              .toLowerCase()
              .indexOf(this.state.filterNik.toLowerCase()) !== -1
          );
        });

        return(
            <div>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-table"></i><strong>Employee List</strong>
                        </CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Col md="3" md="3"> 
                                <InputGroup>
                                    <Input 
                                        type="text" 
                                        placeholder="Filter by NIK..."
                                        value={this.state.filterNik}
                                        onChange={this.filterByNik.bind(this)} 
                                    />
                                </InputGroup>
                                </Col>
                            </FormGroup>       
                            <Table hover bordered striped responsive size="sm">
                                <Col>    
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
                                            <th>Level Type</th>
                                            <th>Workplace</th>
                                            <th>Begin Contract</th>
                                            <th>End Contract</th>
                                            <th>Work Duration</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {this.state.employeeData.map(employeeProfile => ( */}
                                        {filteredEmployee.map(employeeProfile => (    
                                            <tr>
                                                <td>{employeeProfile.citIdNumber}</td>
                                                <td>{employeeProfile.nik}</td>
                                                <td>{employeeProfile.name}</td>
                                                <td>{employeeProfile.gender}</td>
                                                <td>{employeeProfile.birthDate}</td>
                                                <td>{employeeProfile.religionName}</td>
                                                <td>{employeeProfile.address}</td>
                                                <td>{employeeProfile.marriageStatus}</td>
                                                <td>{employeeProfile.childCount}</td>
                                                <td>{employeeProfile.positionName}</td>
                                                <td>{employeeProfile.levelName}</td>
                                                <td>{employeeProfile.placementName}</td>
                                                <td>{employeeProfile.beginContract}</td>
                                                <td>{employeeProfile.endContract}</td>
                                                <td>{employeeProfile.workPeriod}</td>
                                                <td>
                                                    <ButtonGroup>
                                                        <Button class="btn" type="update" size="sm" color="success" onClick={
                                                            () => this.toggle(employeeProfile.nik, employeeProfile.name, employeeProfile.citIdNumber,
                                                                                employeeProfile.address, employeeProfile.birthDate, employeeProfile.workPeriod,
                                                                                employeeProfile.marriageStatus, employeeProfile.beginContract, employeeProfile.endContract,
                                                                                employeeProfile.childCount, employeeProfile.gender, employeeProfile.positionId, employeeProfile.levelId,
                                                                                employeeProfile.religionId, employeeProfile.placementId
                                                                            )  
                                                        }> <i class="fa fa-pencil"></i></Button>;
                                                        <Button type="delete" size="sm" color="danger" onClick={() => this.deleteRecord(employeeProfile.nik)}>
                                                            <i class="fa fa-trash"></i>
                                                        </Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Col>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Modal isOpen={this.state.modal} toggle={
                                () => this.toggle(this.state.nikUpdate, this.state.nameUpdate, this.state.citIDUpdate,
                                        this.state.addressUpdate, this.state.birthUpdate, this.state.workPeriodUpdate,
                                        this.state.marriageStatusUpdate, this.state.beginContractUpdate, this.state.endContractUpdate,
                                        this.state.genderUpdate, this.state.positionUpdate, this.state.levelUpdate, this.state.religionUpdate,
                                        this.state.placementUpdate
                                    )
                            } className={this.props.className}>
                                
                    <ModalHeader>Edit Karyawan</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>NIK</Label>
                                <Input 
                                    type="text"
                                    name="nik"
                                    value={this.state.nikUpdate}
                                    disabled
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label>Position</Label>
                            <Input 
                                type="select" 
                                name="positionUpdate"
                                onChange={this.onChange}
                                value={this.state.positionUpdate}>
                                    <option value="">Select Your Position</option>
                                    {this.state.positionList.map(position=> (
                                        <option value={position.positionId}>{position.positionName}</option>
                                    ))}
                            </Input>       
                        </FormGroup>
                        <FormGroup>
                            <Label>Level</Label>
                            <Input 
                                type="select"
                                name="levelUpdate"
                                onChange={this.onChange}
                                value={this.state.levelUpdate}>
                                    <option value="">Select Your Level</option>
                                    {this.state.levelList.map(level => (
                                        <option value={level.levelId}>{level.levelName}</option>
                                    ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Religion</Label>
                            <Input 
                                type="select" 
                                name="religionUpdate"
                                onChange={this.onChange}
                                value={this.state.religionUpdate}>
                                    <option value="">Select Your Religion</option>
                                    {this.state.religionList.map(religion => (
                                        <option value={religion.religionId}>{religion.religionName}</option> 
                                    ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Work Placement</Label>
                            <Input 
                                type="select" 
                                name="placementUpdate"
                                onChange={this.onChange}
                                value={this.state.placementUpdate}>
                                    <option value="">Select Your Work Place</option>
                                    {this.state.placementList.map(placement=> (
                                        <option value={placement.placementId}>{placement.placementName}</option>
                                    ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input 
                                type="text" 
                                name="nameUpdate"
                                placeholder="Enter Your Name" 
                                onChange={this.onChange}
                                value={this.state.nameUpdate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Citizen ID</Label>
                            <Input 
                                type="text" 
                                name="citIDUpdate"
                                placeholder="Enter Your Citizen ID" 
                                onChange={this.onChange}
                                value={this.state.citIDUpdate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Address</Label>
                            <Input 
                                type="textarea" 
                                name="addressUpdate"
                                placeholder="Enter Your Address" 
                                onChange={this.onChange}
                                value={this.state.addressUpdate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Birth Date</Label>
                            <Input 
                                type="date" 
                                name="birthUpdate"
                                placeholder="date" 
                                onChange={this.onChange}
                                value={this.state.birthUpdate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Work Period</Label>
                            <Input 
                                type="text" 
                                name="workPeriodUpdate"
                                placeholder="In years , ex : 2" 
                                onChange={this.onChange}
                                value={this.state.workPeriodUpdate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Marriage Status</Label>
                            <Input 
                                type="select" 
                                name="marriageStatusUpdate"
                                onChange={this.onChange}
                                value={this.state.marriageStatusUpdate}>
                                    <option value="">Select Your Status</option>
                                    <option value="1">Single</option>
                                    <option value="2">Married</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Begin Contract</Label>
                            <Input 
                                type="date"  
                                name="beginContractUpdate"
                                placeholder="date" 
                                onChange={this.onChange}
                                value={this.state.beginContractUpdate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>End Contract</Label>
                            <Input 
                                type="date" 
                                name="endContractUpdate"
                                placeholder="date" 
                                onChange={this.onChange}
                                value={this.state.endContractUpdate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Gender</Label>
                            <Input 
                                type="select" 
                                name="genderUpdate"
                                onChange={this.onChange}
                                value={this.state.genderUpdate}>
                                    <option value="">Select Your Gender</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Many Child</Label>
                            <Input 
                                type="text" 
                                name="childUpdate"
                                placeholder="How Many Ur Child" 
                                onChange={this.onChange}
                                value={this.state.childUpdate}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.updateRecord(this.state.nikUpdate)}>Update</Button>
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default KaryawanList;