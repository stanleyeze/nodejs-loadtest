import React, { Component } from "react";
import socketio from "socket.io-client";
const axios = require("axios");
//const socket = socketio("http://192.168.99.100:3000/api/");

class Home extends Component {
  state = { loading: false, data: {}, url: "", number: 10 };

  myChangeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { url, number } = this.state;
    this.setState({ loading: true });
    const body = {
      url: url,
      number: number,
    };
    await axios
      .post("http://192.168.99.100:3000/api/", body)
      .then((response) => {
        // handle success
        this.setState({ data: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    this.setState({ loading: false });
  };

  render() {
    return (
      <React.Fragment>
        <section>
          {this.state.loading ? (
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          ) : (
            ""
          )}
          <div className="row">
            <div className="container">
              <center>
                <h3> Enter URL and number of iteration(s)</h3>
              </center>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <form
                className="col s12"
                action="submit"
                onSubmit={this.handleSubmit}
              >
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      placeholder="Placeholder"
                      id="first_name"
                      type="text"
                      className="validate"
                      name="url"
                      placeholder="url eg => http://google.com"
                      onChange={this.myChangeHandler}
                    />
                  </div>
                  <div className="input-field col s2">
                    <input
                      id="last_name"
                      type="text"
                      className="validate"
                      placeholder="10"
                      name="number"
                      onChange={this.myChangeHandler}
                    />
                  </div>
                  {!this.state.url || !this.state.number ? (
                    <div className="input-field col s4">
                      <button
                        className="waves-effect waves-light btn"
                        type="submit"
                        disabled
                      >
                        <i className="material-icons right">cloud</i>button
                      </button>
                    </div>
                  ) : (
                    <div className="input-field col s4">
                      <button
                        className="waves-effect waves-light btn"
                        type="submit"
                      >
                        <i className="material-icons right">SEARCH</i>GO
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="container">
              {this.state.loading ? (
                <div className="preloader-wrapper small active">
                  <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="table">
                  <table>
                    <thead>
                      <tr>
                        <th>Total Requests</th>
                        <th>Total Errors</th>
                        <th>Total Seconds</th>
                        <th>Max Latency (Ms)</th>
                        <th>Mean Latency (Ms)</th>
                        <th>Min Latency (Ms)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.state.data.totalRequests}</td>
                        <td>{this.state.data.totalErrors} </td>
                        <td>{this.state.data.totalTimeSeconds} </td>
                        <td>{this.state.data.maxLatencyMs}</td>
                        <td>{this.state.data.meanLatencyMs} </td>
                        <td>{this.state.data.minLatencyMs} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
