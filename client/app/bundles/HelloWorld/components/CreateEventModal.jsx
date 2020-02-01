import React from "react";
import Modal from "react-bootstrap4-modal";

export default class CreateEventModal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { name: this.props.name };
  // }

  render() {
    const { isVisible, closeModal } = this.props;

    return (
      <Modal visible={isVisible} onClickBackdrop={closeModal}>
        <div className="modal-header">
          <h5 className="modal-title">New Event</h5>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="2"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="contactInfo">Contact Information</label>
              <textarea
                className="form-control"
                id="contactInfo"
                rows="2"
                placeholder="Contact Bunmi: 08177777777 or Kola: 08188888888"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="address"
                placeholder="1234 Main St, Lekki Lagos."
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="startDate"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="startTime">Start Time</label>
                <input
                  type="time"
                  className="form-control form-control-sm"
                  id="startTime"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="endDate"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="endTime">End Time</label>
                <input
                  type="time"
                  className="form-control form-control-sm"
                  id="endTime"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-dark btn-sm"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-sm modal-submit-btn"
            onClick={this.onFirePhasers}
          >
            Submit
          </button>
        </div>
      </Modal>
    );
  }
}
