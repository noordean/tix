import React from "react";
import moment from "moment-timezone";
import Switch from "react-switch";

export default class EventsList extends React.Component {
  render() {
    const { events, onDeleteEvent, openModal, handleStatusChange } = this.props;
    return (
      <div className="events-list">
        <table className="table">
          <thead className="thead">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Actions</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.address}</td>
                <td>
                  {moment(event.starts_at)
                    .tz("Africa/Lagos")
                    .format("MMMM Do YYYY, h:mm:ss A")}
                </td>
                <td>
                  {moment(event.ends_at)
                    .tz("Africa/Lagos")
                    .format("MMMM Do YYYY, h:mm:ss A")}
                </td>
                <td>
                  <i
                    className="fa fa-edit"
                    onClick={() => openModal(event)}
                  ></i>{" "}
                  &nbsp;{" "}
                  <i
                    className="fa fa-trash"
                    onClick={() => onDeleteEvent(event.id)}
                  ></i>
                </td>
                <td>
                  <Switch
                    onChange={() => handleStatusChange(event)}
                    checked={event.status === "active"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
