import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Table} from 'reactstrap';
class FormOutput extends Component {
    render() {
        return (
            // <div>
            //     {this.props.movies.map(movie => (<p key={movie.id}>{movie.movieTitle}</p>))}
            // </div>
            <div>

            <Col md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-table"></i><strong>Movie List</strong>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Movie Title</th>
                    <th>Movie Length</th>
                    <th>Movie Genre</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.movies.map(movie => (
                    <tr>
                      <td>{movie.movieTitle}</td>
                      <td>{movie.movieLength}</td>
                      <td>{movie.movieGenre}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
            </div>
        );
    }
}

export default FormOutput;
