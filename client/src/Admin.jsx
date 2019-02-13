import React, { Component } from 'react';
import axios from 'axios';
import './styling/admin.css'


class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }

    this.getList = this.getList.bind(this)
    this.displayList = this.displayList.bind(this)
  }

  getList() {
    axios.get("/api/rsvp")
      .then((res) => {
        this.setState({ list: res.data})
      })
  }

  displayList(list) {
    return (list.map((guest) => {
      return(
        <tr key={ guest.id }>
          <td>{ guest.id }</td>
          <td>{ guest.name }</td>
          <td>{ guest.rsvp === 1 ? "Yes" : "No" }</td>
          <td>{ guest.email }</td>
          <td>{ guest.plus_one }</td>
          <td>{ guest.song_requests }</td>
          <td>{ guest.comments }</td>
        </tr>
        )
    })
  )}

  componentDidMount() {
    this.getList();
  }

  render() {
    const { list } = this.state;

    return (
      <div className="admin">
        <h1>RSVP List</h1>
        <p> Total Number of Entries: { list.length } </p>
        <table>
          <tbody>
           <tr>
            <th style={{width: '3%'}}>#</th>
            <th style={{width: '8%'}}>Name</th>
            <th style={{width: '3%'}}>RSVP</th>
            <th>Email</th>
            <th style={{width: '3%'}}># of Attendees</th>
            <th>Guest Full Names</th>
            <th>Mailing Address</th>
          </tr>
          { this.displayList(list) }
          </tbody>
        </table>
      </div>
    );
  }
}


export default Admin;