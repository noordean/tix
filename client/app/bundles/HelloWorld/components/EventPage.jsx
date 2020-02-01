import React from "react";
import CreateEventModal from "./CreateEventModal";
import Header from "./Header";

export default class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateModalVisible: false,
      name: "",
      description: "",
      address: "",
      contactInfo: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: ""
    };
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

  onChangeCreateEventInputs = event => {
    this.state[event.target.name] = event.target.value;
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
        event: this.eventCreateFormInputs()
      })
    });

    if (!response.ok) {
      toastr.error("An error occured. Please try again");
      return;
    }
    toastr.success("Event created successfully");
    this.closeCreateModal();
  };

  eventCreateFormInputs = () => {
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
    return (
      <div className="event-page">
        <Header openModal={this.openCreateModal} />
        <CreateEventModal
          isVisible={this.state.isCreateModalVisible}
          closeModal={this.closeCreateModal}
          onChangeCreateEventInputs={this.onChangeCreateEventInputs}
          onCreateEvent={this.onCreateEvent}
        />
      </div>
    );
  }
}
