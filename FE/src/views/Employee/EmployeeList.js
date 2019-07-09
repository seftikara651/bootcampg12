import React, { Component } from 'react';
import {
  Table,
  Card,
  CardBody,
  CardHeader,
  Col,
  ButtonGroup,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  Form,
  Input,
  Label,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

class EmployeeList extends Component {
    constructor() {
        super();
        this.state = {
          error : null,
          isLoaded : false,
          employeeData: [],
          religionList: [],
          levelList: [],
          positionList: [],
          placementList: [],
          editCitIdNumber: '',
          editNik: '',
          editName: '',
          editGender: '',
          editBirthDate: '',
          editReligion: '',
          editAddress: '',
          editMarriageStatus: '',
          editChildCount: '',
          editPosition: '',
          editLevel: '',
          editPlacementId: '',
          editBeginContract: '',
          editEndContract: '',
          editWorkPeriod: '',
          modal: false,
        };

        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle = (citIdNumber, nik, name, gender, birthDate, religionName, address, marriageStatus, childCount, positionName, levelName, placementName, beginContract, endContract, workPeriod) => {
        this.setState({
        modal: !this.state.modal,
        editCitIdNumber: citIdNumber,
        editNik: nik,
        editName: name,
        editGender: gender,
        editBirthDate: birthDate,
        editReligion: religionName,
        editAddress: address,
        editMarriageStatus: marriageStatus,
        editChildCount: childCount,
        editPosition: positionName,
        editLevel: levelName,
        editPlacement: placementName,
        editBeginContract: beginContract,
        editEndContract: endContract,
        editWorkPeriod: workPeriod,
        
        });
    }

    onChange = (input) => this.setState({
        [input.target.id]: input.target.value
    })

    componentWillMount() {
        this.loadDataTable();
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

        fetch('http://10.10.10.15:9090/religion/jsonDetail'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                religionList: data
            })
        })

        fetch('http://10.10.10.15:9090/position/jsonDetail'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                positionList: data
            })
        })

        fetch('http://10.10.10.15:9090/level/jsonDetail'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                levelList: data
            })
        })

        fetch('http://10.10.10.15:9090/placement'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                placementList: data
            })
        })

    }

    editEmployee = (employeeNik) => {
        fetch('http://10.10.10.15:9090/employee/update/'+employeeNik, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                citIdNumber: this.state.EditCitIdNumber,
                nik: this.state.editNik,
                name: this.state.editName,
                gender: this.state.editGender,
                birthDate: this.state.editBirthDate,
                religionId: this.state.editReligion,
                address: this.state.editAddress,
                marriageStatus: this.state.editMarriageStatus,
                childCount: this.state.editChildCount,
                positionId: this.state.editPosition,
                levelId: this.state.editLevel,
                placementId: this.state.editPlacement,
                beginContract: this.state.editBeginContract,
                endContract: this.state.editEndContract,
                workPeriod: this.state.editWorkPeriod,
          })
        }).then((response) => {
          window.location.reload();
          alert("Data has been updated");
        });

    }

    deleteEmployee = (employeeNik) => {
        fetch('http://10.10.10.15:9090/employee/delete/'+employeeNik, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
        },
        }).then((response) => {
            alert("Data with NIK " + employeeNik + " has been deleted!");
            window.location.reload();
            response.json();
        })
    }

    render() {
        if(!this.state.employeeData) {
            return null;
        }
        return(
            <div>
                <Col md="12">
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
                                        <th>Action</th>
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
                                                    <Button type="button" name="EmployeeEdit" color="primary" onClick={() => this.toggle(employeeProfile.citIdNumber, employeeProfile.nik, employeeProfile.name, employeeProfile.gender, employeeProfile.birthDate, employeeProfile.religionId, employeeProfile.address, employeeProfile.marriageStatus, employeeProfile.childCount, employeeProfile.positionId, employeeProfile.levelId, employeeProfile.placementId, employeeProfile.beginContract, employeeProfile.endContract, employeeProfile.workPeriod)}>Edit</Button>

                                                    <Button type="button" name="EmployeeDelete" color="primary" onClick={() => this.deleteEmployee(employeeProfile.nik)}>Delete</Button>

                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Modal isOpen={this.state.modal} toggle={() => this.toggle(this.state.editCitIdNumber, this.state.editNik, this.state.editName, this.state.editGender, this.state.editBirthDate, this.state.editReligion, this.state.editAddress, this.state.editMarriageStatus, this.state.editChildCount, this.state.editPosition, this.state.editLevel, this.state.editPlacement, this.state.editBeginContract, this.state.editEndContract, this.state.editWorkPeriod)} className={this.props.className}>
                    <ModalHeader toggle={() => this.toggle(this.state.editCitIdNumber, this.state.editNik, this.state.editName, this.state.editGender, this.state.editBirthDate, this.state.editReligion, this.state.editAddress, this.state.editMarriageStatus, this.state.editChildCount, this.state.editPosition, this.state.editLevel, this.state.editPlacement, this.state.editBeginContract, this.state.editEndContract, this.state.editWorkPeriod)}>Edit Employee Data</ModalHeader>
                    <ModalBody>
                    <Col xs="12" sm="6">
                        <Card>
                        <CardHeader>
                            <strong>Employee</strong>
                            <small> Form</small>
                        </CardHeader>
                        <CardBody>
                            <Form action="" method="post">
                                <FormGroup>
                                    <Label htmlFor="editCitIdNumber">Citizen Number</Label>
                                    <Input type="text" id="editCitIdNumber" placeholder="Enter your citizen number" onChange={this.onChange} value={this.state.editCitIdNumber}/>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="editNik">NIK</Label>
                                    <Input type="text" id="editNik" placeholder="Enter your nik" onChange={this.onChange} value={this.state.editNik}/>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="editName">Name</Label>
                                    <Input type="text" id="editName" placeholder="Enter your name" onChange={this.onChange} value={this.state.editName}/>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="2">
                                        <Label>Gender</Label>
                                    </Col>
                                    <Col md="5">
                                        <FormGroup check inline>
                                            <Input className="form-check-input" type="radio" id="male" name="gender" value="0" onChange={this.onChange}/>
                                            <Label className="form-check-label" check htmlFor="male">Male</Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Input className="form-check-input" type="radio" id="female" name="gender" value="1" onChange={this.onChange} />
                                            <Label className="form-check-label" check htmlFor="female">Female</Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="editBirthDate">BirthDate</Label>
                                    <Input type="date" id="editBirthDate" name="editBirthDate" placeholder="birthDate" onChange={this.onChange} value={this.state.editBirthDate}/>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="editReligion">Religion</Label>
                                    <Input type="select" name="editReligion" id="editReligion" onChange={this.onChange} value={this.state.editReligion}>
                                        <option value="">Select your religion</option>
                                        {this.state.religionList.map(religion => (
                                            <option key={religion.religionId} value={religion.religionId}>{religion.religionName}</option>
                                        ))}
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="editAddress">Address</Label>
                                    <Col xs="0" md="20">
                                        <Input type="textarea" name="editAddress" id="editAddress" rows="9"
                                            placeholder="Enter your address" onChange={this.onChange} value={this.state.editAddress} />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label>Marital Status</Label>
                                    </Col>
                                    <Col md="9">
                                        <FormGroup check inline>
                                            <Input className="form-check-input" type="radio" id="single" name="employeeMarital" value="Single" onChange={this.onChange} />
                                            <Label className="form-check-label" check htmlFor="single">Single</Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Input className="form-check-input" type="radio" id="married" name="employeeMarital" value="Married" onChange={this.onChange} />
                                            <Label className="form-check-label" check htmlFor="married">Married</Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="editChildCount">Child Count</Label>
                                    <Input type="text" name="editChildCount" id="editChildCount" placeholder="How many child do you have" onChange={this.onChange} value={this.state.editChildCount}/>
                                </FormGroup>

                                <FormGroup row className="my-0">
                                    <FormGroup>
                                        <Col xs="0" md="10">
                                            <Label htmlFor="editPosition">Position</Label>
                                        </Col>
                                        <Col xs="12" md="20">
                                            <Input type="select" name="editPosition" id="editPosition" onChange={this.onChange} value={this.state.editPosition}>
                                                
                                            <option value="">Select your position</option>{this.state.positionList.map(position => (
                                                    <option key={position.positionId} value={position.positionId}>{position.positionName}</option>
                                                ))}
                                            </Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col md="11">
                                            <Label htmlFor="editLevel">Position Level</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="select" name="editLevel" id="editLevel" onChange={this.onChange} value={this.state.editLevel}>
                                                
                                            <option value="">Select your position level</option>{this.state.levelList.map(level => (
                                                    <option key={level.levelId} value={level.levelId}>{level.levelName}</option>
                                                ))}
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                </FormGroup>
                                
                                <FormGroup>
                                    <Label htmlFor="editPlacement">Workplace</Label>
                                    <Input type="select" name="editPlacement" id="editPlacement" onChange={this.onChange} value={this.state.editPlacement}>
                                    <option value="">Select your workplace</option>
                                        {this.state.placementList.map(place => (
                                            <option key={place.placementId} value={place.placementId}>{place.placementName}</option>
                                        ))}
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="editBeginContract">Begin Contract</Label>
                                    <Input type="date" id="editBeginContract" name="editBeginContract" placeholder="beginContract" onChange={this.onChange} value={this.state.editBeginContract}/>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="editEndContract">End Contract</Label>
                                    <Input type="date" id="editEndContract" name="editEndContract" placeholder="endContract" onChange={this.onChange} value={this.state.editEndContract}/>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="editWorkPeriod">Work Duration</Label>
                                    <Input type="text" id="editWorkPeriod" placeholder="Enter your work duration" onChange={this.onChange} value={this.state.editWorkPeriod}/>
                                </FormGroup>
                            </Form>
                        </CardBody>
                        </Card>
                    </Col>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editEmployee(this.state.editNik)}>Edit</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle(this.state.editCitIdNumber, this.state.editNik, this.state.editName, this.state.editGender, this.state.editBirthDate, this.state.editReligion, this.state.editAddress, this.state.editMarriageStatus, this.state.editChildCount, this.state.editPosition, this.state.editLevel, this.state.editPlacement, this.state.editBeginContract, this.state.editEndContract, this.state.editWorkPeriod)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

export default EmployeeList;