import React, {Component} from 'react';  
import { Input, Button, Label } from 'reactstrap';

/* Import Components */
// import CheckBox from '../components/CheckBox';  
// import Input from '../components/Input';  
// import TextArea from '../components/TextArea';  
// import Select from '../components/Select';
// import Button from '../components/Button';

class formContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        gender: '',
      };
    }
    this.add = this.add.bind(this)
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Label> Name </Label>
        <Input type="text" placeholder="Enter your name" name="name" />
        <Label> Gender </Label>
        <Input type="text" placeholder="Enter your gender" name="gender" />
        <Button />
        <Button />
      </form>
    );
  }
}

export default formContainer;
