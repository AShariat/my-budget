import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Style1 = {
  'display': 'block',
  'width': '663px',
  'height': '279px'
};
const Style2 = {
  'position': 'absolute',
  'width': '200%',
  'height': '200%',
  'left': 0,
  'top': 0
};
const Style3 = {
  'position': 'absolute',
  'left': 0,
  'top': 0,
  'right': 0,
  'bottom': 0,
  'overflow': 'hidden',
  'pointer-events': 'none',
  'visibility': 'hidden',
  'z-index': -1
};
const Style4 = {
  'position': 'absolute',
  'width': '1000000px',
  'height': '1000000px',
  'left': 0,
  'top': 0
};
const Style5 = {
  'position': 'absolute',
  'inset': '0px',
  'overflow': 'hidden',
  'pointer-events': 'none',
  'visibility': 'hidden',
  'z-index': -1
};

const PotentialDashboardForUsers = function (props) {
  window.scrollTo(0, 0);

  return (
    <div class="container-fluid">
      <div class="row">

        <main role="main" class="col-md-12 ml-sm-auto col-lg-12 pt-3 px-4"><div class="chartjs-size-monitor" style={Style5}><div class="chartjs-size-monitor-expand" style={Style3}><div style={Style4}></div></div><div class="chartjs-size-monitor-shrink" style={Style3}><div style={Style2}></div></div></div>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
              <div class="dropdown mr-2">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
                <div class="btn btn-sm btn-outline-secondary bg-secondary text-light mr-3 rounded">Current User Amount</div>
                <button class="btn btn-sm btn-outline-secondary" onClick={() => { props.changeFunction('UserInputModal') }}>Add more?</button>
              </div>
            </div>
          </div>

          {/* pie graph here */}
          <div class="my-4" id="myChart" width="663" height="279" style={Style1}>
            <PieChart
              data={[
                { title: 'One', value: 30, color: '#E38627' },
                { title: 'Two', value: 50, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
              ]}
            />
          </div>

          <h2>Previous Spending Habits</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PotentialDashboardForUsers;

/* line */