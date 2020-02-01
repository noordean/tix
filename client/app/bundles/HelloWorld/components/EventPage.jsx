import React from "react";
import CreateEventModal from "./CreateEventModal";
import Header from "./Header";

export default class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCreateModalVisible: false };
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

  render() {
    return (
      <div className="event-page">
        <Header openModal={this.openCreateModal} />
        <CreateEventModal
          isVisible={this.state.isCreateModalVisible}
          closeModal={this.closeCreateModal}
        />
      </div>
    );
  }
}
