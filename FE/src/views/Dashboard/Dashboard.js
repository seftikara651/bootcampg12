import React, { Component, lazy } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(100 / 5),
          max: 100,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

const pie = {
  labels: [
  ],
  datasets: [
    {
      data: [],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
};

const pieFraud = {
  labels: [
  ],
  datasets: [
    {
      data: [],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FFAE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FFAE56',
      ],
    }],
};

const line = {
  labels: [],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [],
    },
  ],
};

const lineFraud = {
  labels: [],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [],
    },
  ],
};


class Dashboard extends Component {


  constructor(props) {
    super(props);

    this.interval = null;
    this.toggle = this.toggle.bind(this);
    this.onPieBtnClick = this.onPieBtnClick.bind(this);
    this.onPieFraudBtnClick = this.onPieFraudBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      pieSelected: 1,
      pieFraudSelected: 1,
      lineChart: line,
      pieChart: pie,
      lineChartFraud: lineFraud,
      pieChartFraud: pieFraud,
      currentDate: this.currentDate(),
      lastTwentyData: {
          data: [],
          totalItems: 0,
      },
    };
  }

  resToJson(response) {
    return response.json();
  }

  currentDate() {
    let tempDate = new Date();
    let date = tempDate.getDate() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear();
    return date;
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onPieBtnClick(pieSelected) {
    this.setState({
      pieSelected: pieSelected,
    });
    this.loadPieChartData(pieSelected);
  }

  onPieFraudBtnClick(pieFraudSelected) {
    this.setState({
      pieFraudSelected: pieFraudSelected,
    });
    this.loadFraudPieChartData(pieFraudSelected);
  }

  componentWillMount() {
    this.loadLineChartData();
    this.loadFraudLineChartData();
    this.loadPieChartData(1);
    this.loadFraudPieChartData(1);
    this.loadLastTwentyData();
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.loadLineChartData();
      this.loadLastTwentyData();
    }, 30000);
  }
  /*
    Make sure to clear interval before unmounting the component.
    Because if "setInterval" function called and during that time interval react component get unmounted after
    end of the interval it will create an error
  */
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  loadLineChartData() {
    let x = Object.assign({}, line);

    fetch('http://localhost:5000/get-last-one-hour', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: null
    }).then(this.resToJson).then((data) => {
      x['labels'] = data['labels'];
      x['datasets'][0]['data'] = data['data'];

      this.setState({
        lineChart: x,
      });
    });
  }

  loadFraudLineChartData() {
    let x = Object.assign({}, lineFraud);

    fetch('http://localhost:5000/get-data-fraud-line-chart', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: null
    }).then((response) => {
      return response.json();
    }).then((data) => {
      x['labels'] = data['labels'];
      x['datasets'][0]['data'] = data['data'];

      this.setState({
        lineChartFraud: x,
      });
    });
  }

  loadPieChartData(type) {
    let x = Object.assign({}, pie);

    fetch('http://localhost:5000/get-pie-chart/' + type, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: null
    }).then((response) => {
      return response.json();
    }).then((data) => {
      x['labels'] = data['labels'];
      x['datasets'][0]['data'] = data['data'];

      this.setState({
        pieChart: x,
      });
    });
  }

  loadFraudPieChartData(type) {
    let x = Object.assign({}, pieFraud);

    fetch('http://localhost:5000/get-data-fraud-pie-chart/' + type, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: null
    }).then((response) => {
      return response.json();
    }).then((data) => {
      x['labels'] = data['labels'];
      x['datasets'][0]['data'] = data['data'];

      this.setState({
        pieChartFraud: x,
      });
    });
  }

  loadLastTwentyData() {
    fetch('http://localhost:5000/get-last-twenty-trx', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: null
    }).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        lastTwentyData: data,
      });
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Transaction </CardTitle>
                    <div className="small text-muted">{this.state.currentDate}</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onPieBtnClick(1)} active={this.state.pieSelected === 1}>Jenis Kartu</Button>
                        <Button color="outline-secondary" onClick={() => this.onPieBtnClick(2)} active={this.state.pieSelected === 2}>Frekuensi Status</Button>
                        <Button color="outline-secondary" onClick={() => this.onPieBtnClick(3)} active={this.state.pieSelected === 3}>Amount Status</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm="6">
                    <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                      <Line data={this.state.lineChart} options={mainChartOpts} height={300} />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="chart-wrapper">
                      <Pie data={this.state.pieChart} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Fraud </CardTitle>
                    <div className="small text-muted">{this.state.currentDate}</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onPieFraudBtnClick(1)} active={this.state.pieFraudSelected === 1}>Jenis Kartu x Frekunsi</Button>
                        <Button color="outline-secondary" onClick={() => this.onPieFraudBtnClick(2)} active={this.state.pieFraudSelected === 2}>Tipe Channel x Amount</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                      <Line data={this.state.lineChartFraud} options={mainChartOpts} height={300} />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="chart-wrapper">
                      <Pie data={this.state.pieChartFraud} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                Last 20 Transactions
              </CardHeader>
              <CardBody>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Norek</th>
                    <th className="text-center">Jenis Kartu</th>
                    <th className="text-center">Tipe Channel</th>
                    <th className="text-center">Jenis Transaksi</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Amount</th>
                    <th className="text-center">Timestamp</th>
                  </tr>
                  </thead>
                  <tbody>
                    { this.state.lastTwentyData.data.map((row, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{row.norek}</td>
                          <td>{row.jenis_kartu}</td>
                          <td>{row.tipe_channel}</td>
                          <td>{row.jenis_trx}</td>
                          <td>{row.status}</td>
                          <td>{row.trx_amount}</td>
                          <td>{row.timestamp}</td>
                        </tr>
                      )
                    }) }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
