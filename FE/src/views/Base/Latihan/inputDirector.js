import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Form,
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText } from 'reactstrap';
class inputDirector extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], firstName: '', lastName: '' };
    this.firstName = this.firstName.bind(this);
    this.lastName = this.lastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Row>
          <Col md="5" Style="margin:0 auto;">
            <Card>
              <CardHeader>
              <i className="icon icon-note"></i><strong>Form Input Data Director</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post"  onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>First Name</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="first_name" onChange={this.firstName} value={this.state.firstName}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-vcard"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Last Name</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="last_name" onChange={this.lastName} value={this.state.lastName}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-vcard"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="form-actions">
                    <Button type="submit"color="primary">Submit</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <TodoList items={this.state.items}>
                  </TodoList>
        </Row>
    );
  }

  firstName(e) {
    this.setState({ firstName: e.target.value });
  }
  lastName(e) {
    this.setState({ lastName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.firstName.length && !this.state.lastName.length) {
      return;
    }
    const newItem = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      firstName: '',
      lastName: ''
    }));
  }
}

class TodoList extends Component {
  render() {
    return (
      <Col md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-table"></i><strong>Tabel</strong>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th Style="text-align:center; width:20%;">Fisrt Name</th>
                    <th Style="text-align:center; width:20%;">Last Name</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.items.map(item => (
                    <tr>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
    );
  }
}

export default inputDirector;