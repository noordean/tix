import React from "react";

export default class EventsList extends React.Component {
  render() {
    const { events } = this.props;
    return (
      <div className="events-list">
        <table className="table">
          <thead className="thead">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.address}</td>
                <td>{event.starts_at}</td>
                <td>{event.ends_at}</td>
                <td>
                  <i className="fa fa-edit"></i> &nbsp;{" "}
                  <i className="fa fa-trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
