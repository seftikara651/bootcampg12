import React, { Component} from 'react';
import './tabel.scss';
import { Table } from 'reactstrap';
// import Input from '../components/Input';
// import { Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
  
class bikintabel extends Component{
    // constructor(props) {
    //     super(props);
    
    //     this.toggle = this.toggle.bind(this);
    //     this.toggleFade = this.toggleFade.bind(this);
    //     this.state = {
    //       collapse: true,
    //       fadeIn: true,
    //       timeout: 300
    //     };
    //   }

      constructor() {
        super();
        this.state = {
          error : null,
          isLoaded : false,
          dataMahasiswa: []
        };
      }

      render() {
        return (
          <div>
            <Table>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            {
              this.state.dataMahasiswa.map((profile) => {
                return (
                  <div>
                    <tr>
                      <td>{profile.name}</td>
                      <td>{profile.age}</td>
                      <td>{profile.gender}</td>
                      <td>{profile.company}</td>
                      <td>{profile.email}</td>
                      <td>{profile.phone}</td>
                    </tr>
                  </div>
                )
              })
            }
            </Table>
          </div>
        )
      }

      componentWillMount() {
        this.loadDataTable();
      }

      loadDataTable() {

        let handleResponse = function (response) {
          // console.log(r);
          return response.json();
        }
    
        fetch('http://www.json-generator.com/api/json/get/bPQjSrvtNK?indent=2'
         ).then(handleResponse)
          .then(data => {
            console.log(data);
            this.setState({
                dataMahasiswa: data
            })
          })
      }

      // componentDidMount() {
      //   var dataLocal = 'http://www.json-generator.com/api/json/get/bPQjSrvtNK?indent=2';
      //   // var dataLocal = '.Latihan/bikintabel2.json'
      //   fetch(dataLocal)
      //   .then(response => response.json())
      //   .then(
      //     (result) => {
      //       this.setState({
      //         isLoaded : true,
      //         dataMahasiswa : result
      //       });
      //     },
          

      //     (error) => {
      //       this.setState({
      //         isLoaded : true,
      //         error
      //       })
      //       console.log(error);
      //     },
      //   )
      // }
    
     
      
    // render() {
    //   const {error, isLoaded, dataMahasiswa} = this.state;
    //   if(error){
    //     return <div>Error in loading</div>
    //   }
    //   else if(!isLoaded) {
    //     return <div>Loading ...</div>
    //   }
    //   else {
    //     return(
    //       <div>
    //         <form>
    //           <label>
    //             Name : 
    //             <input type="text" name="name" />
    //           </label>
    //           <label>
    //             Age : 
    //             <input type="int" name="age" />
    //           </label>
    //           <label>
    //             Gender : 
    //             <input type="text" name="gender" />
    //           </label>
    //           <label>
    //             Company : 
    //             <input type="text" name="company" />
    //           </label>
    //           <label>
    //             Email : 
    //             <input type="text" name="email" />
    //           </label>
    //           <label>
    //             Phone : 
    //             <input type="text" name="phone" />
    //           </label>
    //           <input type="submit" value="submit" />
    //         </form>
    //         <ol>
    //               <thead>
    //               <tr>
    //                 <th id="tabelBagus">Name</th>
    //                 <th id="tabelBagus">Age</th>
    //                 <th id="tabelBagus">Gender</th>
    //                 <th id="tabelBagus">Company</th>
    //                 <th id="tabelBagus">Email</th>
    //                 <th id="tabelBagus">Phone</th>
    //               </tr>
    //               </thead>
    //           {
    //             dataMahasiswa.map(profile => (
    //               <Table responsive>
    //               <tbody>
    //               <tr>
    //                 <td id="tabelBagus">{profile.name}</td>
    //                 <td id="tabelBagus">{profile.age}</td>
    //                 <td id="tabelBagus">{profile.gender}</td>
    //                 <td id="tabelBagus">{profile.company}</td>
    //                 <td id="tabelBagus">{profile.email}</td>
    //                 <td id="tabelBagus">{profile.phone}</td>
    //               </tr>
    //               </tbody>
    //             </Table>
    //             ))
    //           }
    //         </ol>
    //       </div>
    //     )
    //   }

      // return(
      //   <div className="animated fadeIn">
      //     <Row>
      //       <Col xs="2" sm="10" md="5">
      //         <Card>
      //           <CardHeader>
      //             Deskripsi
      //           </CardHeader>
      //           <CardBody>
      //             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      //             laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
      //             ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      //           </CardBody>
      //         </Card>
      //       </Col>
      //       <Col xs="12" sm="4" md="5">
      //         <Card>
      //           <CardHeader>
      //             Deskripsi
      //           </CardHeader>
      //           <CardBody>
      //             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      //             laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
      //             ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      //           </CardBody>
      //         </Card>
      //       </Col>
      //     </Row>
      // </div>
      // )
    // }
}

export default bikintabel;