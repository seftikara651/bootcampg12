import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
// import EmployeeSalary from './EmployeeSalary';

class EmployeeUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            religionList: [],
            levelList: [],
            positionList: [],
            placementList: [],
            employeeData: [],
            citIdNumber: '',
            nik: '',
            name: '',
            gender: '',
            birthDate: '',
            religionId: '',
            address: '',
            marriageStatus: '',
            childCount: '',
            positionId: '',
            levelId: '',
            placementId: '',
            beginContract: '',
            endContract: '',
            workPeriod: ''
        };
        this.setCitIdNumber = this.setCitIdNumber.bind(this);
        this.setNik = this.setNik.bind(this);
        this.setName = this.setName.bind(this);
        this.setGender = this.setGender.bind(this);
        this.setBirthDate = this.setBirthDate.bind(this);
        this.setReligionId = this.setReligionId.bind(this);
        this.setAddress = this.setAddress.bind(this);
        this.setMarriageStatus = this.setMarriageStatus.bind(this);
        this.setChildCount = this.setChildCount.bind(this);
        this.setPositionId = this.setPositionId.bind(this);
        this.setLevelId = this.setLevelId.bind(this);
        this.setPlacementId = this.setPlacementId.bind(this);
        this.setBeginContract = this.setBeginContract.bind(this);
        this.setEndContract = this.setEndContract.bind(this);
        this.setWorkPeriod = this.setWorkPeriod.bind(this);

        this.submitEmployee = this.submitEmployee.bind(this);
        this.resetEmployee = this.resetEmployee.bind(this);
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Col xs="12" sm="6">
                    <Card>
                    <CardHeader>
                        <strong>Employee</strong>
                        <small> Form</small>
                    </CardHeader>
                    <CardBody>
                        <Form action="" method="post">
                            <FormGroup>
                                <Label htmlFor="citIdNumber">Citizen Number</Label>
                                <Input type="text" id="citIdNumber" placeholder="Enter your citizen number" onChange={this.setCitIdNumber} value={this.state.citIdNumber}/>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="nik">NIK</Label>
                                <Input type="text" id="nik" placeholder="Enter your nik" onChange={this.setNik} value={this.state.nik}/>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" placeholder="Enter your name" onChange={this.setName} value={this.state.name}/>
                            </FormGroup>

                            <FormGroup row>
                                <Col md="2">
                                    <Label>Gender</Label>
                                </Col>
                                <Col md="5">
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="male" name="gender" value="0" onChange={this.setGender} />
                                        <Label className="form-check-label" check htmlFor="male">Male</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="female" name="gender" value="1" onChange={this.setGender} />
                                        <Label className="form-check-label" check htmlFor="female">Female</Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="date-input">BirthDate</Label>
                                <Input type="date" id="birthDate" name="birthDate" placeholder="birthDate" onChange={this.setBirthDate} value={this.state.birthDate}/>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="religionId">Religion</Label>
                                <Input type="select" name="religionId" id="religionId" onChange={this.setReligionId} value={this.religionId}>
                                    <option value="">Select your religion</option>
                                    {this.state.religionList.map(religion => (
                                        <option key={religion.religionId} value={religion.religionId}>{religion.religionName}</option>
                                    ))}
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="address">Address</Label>
                                <Col xs="0" md="20">
                                    <Input type="textarea" name="address" id="address" rows="9"
                                        placeholder="Enter your address" onChange={this.setAddress} value={this.state.address} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md="3">
                                    <Label>Marital Status</Label>
                                </Col>
                                <Col md="9">
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="single" name="employeeMarital" value="0" onChange={this.setMarriageStatus} />
                                        <Label className="form-check-label" check htmlFor="single">Single</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="married" name="employeeMarital" value="1" onChange={this.setMarriageStatus} />
                                        <Label className="form-check-label" check htmlFor="married">Married</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="radio" id="widow" name="employeeMarital" value="2" onChange={this.setMarriageStatus} />
                                        <Label className="form-check-label" check htmlFor="widow">Widow</Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="childCount">Child Count</Label>
                                <Input type="text" id="childCount" placeholder="How many child do you have" onChange={this.setChildCount} value={this.state.childCount}/>
                            </FormGroup>

                            <FormGroup row className="my-0">
                                <FormGroup>
                                    <Col xs="0" md="10">
                                        <Label htmlFor="positionId">Position</Label>
                                    </Col>
                                    <Col xs="12" md="20">
                                        <Input type="select" name="positionId" id="positionId" onChange={this.setPositionId} value={this.state.positionId}>
                                            <option value="">Select your position</option>
                                            {this.state.positionList.map(position => (
                                                <option key={position.positionId} value={position.positionId}>{position.positionName}</option>
                                            ))}
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md="11">
                                        <Label htmlFor="levelId">Position Level</Label>
                                    </Col>
                                    <Col xs="12" md="12">
                                        <Input type="select" name="levelId" id="levelId" onChange={this.setLevelId} value={this.state.levelId}>
                                            <option value="">Select your position level</option>
                                            {this.state.levelList.map(level => (
                                                <option key={level.levelId} value={level.levelId}>{level.levelName}</option>
                                            ))}
                                        </Input>
                                    </Col>
                                </FormGroup>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="placementId">Workplace</Label>
                                <Input type="select" name="placementId" id="placementId" onChange={this.setPlacementId} value={this.state.placementId}>
                                    <option value="">Select your Workplace</option>
                                    {this.state.placementList.map(place => (
                                        <option key={place.placementId} value={place.placementId}>{place.placementName}</option>
                                    ))}
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="beginContract">Begin Contract</Label>
                                <Input type="date" id="beginContract" name="beginContract" placeholder="beginContract" onChange={this.setBeginContract} value={this.state.beginContract}/>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="endContract">End Contract</Label>
                                <Input type="date" id="endContract" name="endContract" placeholder="endContract" onChange={this.setEndContract} value={this.state.endContract}/>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="workPeriod">Work Duration</Label>
                                <Input type="text" id="workPeriod" placeholder="Enter your work duration" onChange={this.setWorkPeriod} value={this.state.workPeriod}/>
                            </FormGroup>

                            <center>
                            <FormGroup className="form-actions">
                                <Button type="submit"color="primary" onClick={this.submitEmployee}>Submit</Button>
                            </FormGroup>
                            </center>
                        </Form>
                    </CardBody>
                    </Card>
                </Col>
                {/* <EmployeeSalary employeeData={this.state.employeeData}/> */}
            </div>
        )
    }

    setCitIdNumber(newCitIdNumber) {
        this.setState({ citIdNumber: newCitIdNumber.target.value });
    }

    setNik(newNik) {
        this.setState({ nik: newNik.target.value });
    }
    
    setName(newName) {
        this.setState({ name: newName.target.value });
    }

    setGender(newGender) {
        this.setState({ gender: newGender.target.value });
    }

    setBirthDate(newBirthDate) {
        this.setState({ birthDate: newBirthDate.target.value });
    }

    setReligionId = (newReligionId) => {
        // console.log(newReligionId.target.value);
        // var value = this.state.religionList.filter(function(religion) {
        //     return religion.key === newReligionId.target.value
        // })
        // console.log(value[0].value);
        this.setState({ religionId: newReligionId.target.value });
    }

    setAddress(newAddress) {
        this.setState({ address: newAddress.target.value });
    }

    setMarriageStatus(newMarriageStatus) {
        this.setState({ marriageStatus: newMarriageStatus.target.value });
    }

    setChildCount(newChildCount) {
        this.setState({ childCount: newChildCount.target.value });
    }

    setPositionId(newPositionId) {
        this.setState({ positionId: newPositionId.target.value });
    }

    setLevelId(newLevelId) {
        this.setState({ levelId: newLevelId.target.value });
    }

    setPlacementId(newPlacementId) {
        this.setState({ placementId: newPlacementId.target.value });
    }

    setBeginContract(newBeginContract) {
        this.setState({ beginContract: newBeginContract.target.value });
    }

    setEndContract(newEndContract) {
        this.setState({ endContract: newEndContract.target.value });
    }

    setWorkPeriod(newWorkPeriod) {
        this.setState({ workPeriod: newWorkPeriod.target.value });
    }

    resetEmployee() {
        this.setState({
            citIdNumber: '',
            nik: '',
            name: '',
            gender: '',
            birthDate: '',
            religionId: '',
            address: '',
            marriageStatus: '',
            childCount: '',
            positionId: '',
            levelId: '',
            placementId: '',
            beginContract: '',
            endContract: '',
            workPeriod: ''
        });
    }

    componentWillMount() {
        this.getReligionList();
        this.getPlacementList();
        this.getLevelList();
        this.getPositionList();
    }

    getReligionList() {
        let handleResponse = function (response) {
            return response.json();
        }
        fetch('http://10.10.10.233:9090/religion/jsonDetail'
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
        fetch('http://10.10.10.233:9090/position/jsonDetail'
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
        fetch('http://10.10.10.233:9090/level/jsonDetail'
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
        fetch('http://10.10.10.233:9090/placement'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                placementList: data
            })
        })
    }

    submitEmployee(newEmployee) {
        fetch('http://10.10.10.233:9090/employee/insert', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                citIdNumber: this.state.citIdNumber,
                nik: this.state.nik,
                name: this.state.name,
                gender: this.state.gender,
                birthDate: this.state.birthDate,
                religionId: this.state.religionId,
                address: this.state.address,
                marriageStatus: this.state.marriageStatus,
                childCount: this.state.childCount,
                positionId: this.state.positionId,
                levelId: this.state.levelId,
                placementId: this.state.placementId,
                beginContract: this.state.beginContract,
                endContract: this.state.endContract,
                workPeriod: this.state.workPeriod,
          })
        }).then((response) => {
          this.resetEmployee();
          // return response.json();
        })

        newEmployee.preventDefault();
        // if(!this.state.citIdNumber.length &&
        //     !this.state.nik.length && !this.state.name.length &&
        //     !this.state.gender.length &&
        //     !this.state.birthDate.length &&
        //     !this.state.religionId.length &&
        //     !this.state.address.length &&
        //     !this.state.marriageStatus.length &&
        //     !this.state.childCount.length &&
        //     !this.state.positionId.length &&
        //     !this.state.levelId.length &&
        //     !this.state.placementId.length &&
        //     !this.state.beginContract.length &&
        //     !this.state.endContract.length &&
        //     !this.state.workPeriod.length) {
        //     return;
        // }
        const newEmployeeData = {
            citIdNumber: this.state.citIdNumber,
            nik: this.state.nik,
            name: this.state.name,
            gender: this.state.gender,
            birthDate: this.state.birthDate,
            religionId: this.state.religionId,
            address: this.state.address,
            marriageStatus: this.state.marriageStatus,
            childCount: this.state.childCount,
            positionId: this.state.positionId,
            levelId: this.state.levelId,
            placementId: this.state.placementId,
            beginContract: this.state.beginContract,
            endContract: this.state.endContract,
            workPeriod: this.state.workPeriod,
        }
        this.setState(state => ({
            employeeData: state.employeeData.concat(newEmployeeData),
            citIdNumber: '',
            nik: '',
            name: '',
            gender: '',
            birthDate: '',
            religionId: '',
            address: '',
            marriageStatus: '',
            childCount: '',
            positionId: '',
            levelId: '',
            placementId: '',
            beginContract: '',
            endContract: '',
            workPeriod: ''
        }))
    }
}

export default EmployeeUpdate;