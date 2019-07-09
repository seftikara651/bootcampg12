import React, { Component} from 'react';
import FormOutput from './formOutput';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            movieTitle: '',
            movieLength: '',
            movieGenre: ''
        };
        this.setMovieTitle = this.setMovieTitle.bind(this);
        this.setMovieLength = this.setMovieLength.bind(this);
        this.setMovieGenre = this.setMovieGenre.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>Input Movie</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Movie title</label>
                    <input id="movieTitle" onChange={this.setMovieTitle} value={this.state.movieTitle} />

                    {/* <FormGroup>
                      <Label htmlFor="movieTitle">Movie Title</Label>
                      <Input type="text" id="name" placeholder="Enter your name" required />
                    </FormGroup> */}

                    <label>Movie length</label>
                    <input id="movieLength" onChange={this.setMovieLength} value={this.state.movieLength} />

                    <label>Movie Genre</label>
                    <input id="movieGenre" onChange={this.setMovieGenre} value={this.state.movieGenre} />

                    <button type="submit">Submit</button>
                </form>
                <FormOutput movies={this.state.movies} />
            </div>
        )
    }

    setMovieTitle(newMovieTitle) {
        this.setState({movieTitle: newMovieTitle.target.value});
    }

    setMovieLength(newMovieLength) {
        this.setState({movieLength: newMovieLength.target.value});
    }

    setMovieGenre(newMovieGenre) {
        this.setState({movieGenre: newMovieGenre.target.value});
    }

    handleSubmit(newSubmit) {
        newSubmit.preventDefault();
        if (!this.state.movieTitle.length && !this.state.movieLength.length && !this.state.movieGenre.length) {
            return;
        }
        const newMovies = {
            movieTitle: this.state.movieTitle,
            movieLength: this.state.movieLength,
            movieGenre: this.state.movieGenre,
            id: Date.now()
        };
        this.setState(state => ({
            movies: state.movies.concat(newMovies),
            movieTitle: '',
            movieLength: '',
            movieGenre: ''
        }));
    }

}



export default FormInput;


/* <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Company</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="company">Company</Label>
                  <Input type="text" id="company" placeholder="Enter your company name" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="vat">VAT</Label>
                  <Input type="text" id="vat" placeholder="DE1234567890" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="street">Street</Label>
                  <Input type="text" id="street" placeholder="Enter street name" />
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="city">City</Label>
                      <Input type="text" id="city" placeholder="Enter your city" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input type="text" id="postal-code" placeholder="Postal Code" />
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="country">Country</Label>
                  <Input type="text" id="country" placeholder="Country name" />
                </FormGroup>
              </CardBody>
            </Card>
          </Col> */