import React, { Component } from "react";
import socketio from "socket.io-client";
const socket = socketio("http://192.168.99.100:3000/api/");

class Home extends Component {
  componentDidMount() {
    socket.addEventListener("hello", (data) => {
      this.setState({ data: data });
    });
  }
  state = { loading: false, data: {} };
  render() {
    console.log(this.state.data);
    return (
      <section>
        <div className="row">
          <div className="container">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
