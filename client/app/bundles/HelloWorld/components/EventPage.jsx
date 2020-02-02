import React from "react";
import CreateEventModal from "./CreateEventModal";
import EditEventModal from "./EditEventModal";
import Header from "./Header";
import EventsList from "./EventsList";
import moment from "moment-timezone";

export default class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      fetchingEvents: false,
      isCreateModalVisible: false,
      isEditModalVisible: false,
      name: "",
      description: "",
      address: "",
      contactInfo: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      id: ""
    };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  openCreateModal = event => {
    event.preventDefault();
    this.setState({
      isCreateModalVisible: true
    });
  };

  closeCreateModal = () => {
    this.setState({
      isCreateModalVisible: false
    });
  };

  openEditModal = event => {
    const {
      id,
      name,
      description,
      address,
      contact_info,
      starts_at,
      ends_at
    } = event;
    const dateFormat = "YYYY-MM-DD";
    const timeFormat = "HH:mm";
    this.setState({
      name,
      id,
      description,
      address,
      contactInfo: contact_info,
      startDate: moment(starts_at).format(dateFormat),
      startTime: moment(starts_at).format(timeFormat),
      endDate: moment(ends_at).format(dateFormat),
      endTime: moment(ends_at).format(timeFormat),
      isEditModalVisible: true
    });
  };

  closeEditModal = () => {
    this.setState({
      isEditModalVisible: false
    });
  };

  onChangeCreateEventInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onCreateEvent = async event => {
    event.preventDefault();
    const response = await fetch("/events", {
      credentials: "same-origin",
      method: "POST",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        event: this.eventFormInputs()
      })
    });

    if (!response.ok) {
      toastr.error("An error occured. Please try again");
      return;
    }
    toastr.success("Event created successfully");
    this.fetchEvents();
    this.closeCreateModal();
  };

  fetchEvents = async () => {
    this.setState({ fetchingEvents: true });
    const response = await fetch("/events.json", {
      credentials: "same-origin",
      method: "GET",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      })
    });
    const events = await response.json();
    this.setState({
      events,
      fetchingEvents: false
    });
  };

  onDeleteEvent = eventId => {
    if (confirm("Are you sure you want to delete this event?")) {
      this.deleteEvent(eventId);
    }
  };

  deleteEvent = async eventId => {
    const response = await fetch(`/events/${eventId}`, {
      credentials: "same-origin",
      method: "DELETE",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      })
    });

    if (!response.ok) {
      toastr.error("An error occured. Please try again");
      return;
    }
    this.fetchEvents();
    toastr.success("Event successfully deleted");
  };

  onUpdateEvent = async event => {
    event.preventDefault();
    const response = await fetch(`/events/${this.state.id}`, {
      credentials: "same-origin",
      method: "PUT",
      headers: ReactOnRails.authenticityHeaders({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        event: this.eventFormInputs()
      })
    });

    if (!response.ok) {
      toastr.error("An error occured. Please try again");
      return;
    }
    toastr.success("Event updated successfully");
    this.fetchEvents();
    this.closeEditModal();
  };

  eventFormInputs = () => {
    const {
      name,
      description,
      address,
      contactInfo,
      startDate,
      startTime,
      endDate,
      endTime
    } = this.state;
    return {
      name,
      description,
      address,
      contact_info: contactInfo,
      start_date: startDate,
      start_time: startTime,
      end_date: endDate,
      end_time: endTime
    };
  };

  render() {
    const { current_user } = this.props;
    return (
      <div className="event-page">
        <Header openModal={this.openCreateModal} current_user={current_user} />
        <CreateEventModal
          isVisible={this.state.isCreateModalVisible}
          closeModal={this.closeCreateModal}
          onChangeCreateEventInputs={this.onChangeCreateEventInputs}
          onCreateEvent={this.onCreateEvent}
        />
        <EditEventModal
          isVisible={this.state.isEditModalVisible}
          closeModal={this.closeEditModal}
          onChangeCreateEventInputs={this.onChangeCreateEventInputs}
          onUpdateEvent={this.onUpdateEvent}
          stateValues={this.state}
        />
        <div className="container events-list-container">
          {this.state.fetchingEvents ? (
            <div className="loader"></div>
          ) : this.state.events.length ? (
            <EventsList
              events={this.state.events}
              onDeleteEvent={this.onDeleteEvent}
              openModal={this.openEditModal}
            />
          ) : (
            <h6 className="no-event-text">You currently have no event</h6>
          )}
        </div>
      </div>
    );
  }
}
