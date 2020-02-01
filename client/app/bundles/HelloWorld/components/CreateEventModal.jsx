import React from "react";
import Modal from "react-bootstrap4-modal";

export default class CreateEventModal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { name: this.props.name };
  // }

  render() {
    const {
      isVisible,
      closeModal,
      onChangeCreateEventInputs,
      onCreateEvent
    } = this.props;

    return (
      <Modal visible={isVisible} onClickBackdrop={closeModal}>
        <div className="modal-header">
          <h5 className="modal-title">New Event</h5>
        </div>
        <div className="modal-body">
          <form onSubmit={event => onCreateEvent(event)}>
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="required-field">*</span>
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="name"
                name="name"
                onChange={event => onChangeCreateEventInputs(event)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="2"
                name="description"
                onChange={event => onChangeCreateEventInputs(event)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="contactInfo">Contact Information</label>
              <textarea
                className="form-control"
                id="contactInfo"
                rows="2"
                placeholder="Contact Bunmi: 08177777777 or Kola: 08188888888"
                name="contactInfo"
                onChange={event => onChangeCreateEventInputs(event)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="address">
                Address <span className="required-field">*</span>
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="address"
                placeholder="1234 Main St, Lekki Lagos."
                name="address"
                onChange={event => onChangeCreateEventInputs(event)}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="startDate">
                  Start Date <span className="required-field">*</span>
                </label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="startDate"
                  name="startDate"
                  onChange={event => onChangeCreateEventInputs(event)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="startTime">
                  Start Time <span className="required-field">*</span>
                </label>
                <input
                  type="time"
                  className="form-control form-control-sm"
                  id="startTime"
                  name="startTime"
                  onChange={event => onChangeCreateEventInputs(event)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="endDate">
                  End Date <span className="required-field">*</span>
                </label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="endDate"
                  name="endDate"
                  onChange={event => onChangeCreateEventInputs(event)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="endTime">
                  End Time <span className="required-field">*</span>
                </label>
                <input
                  type="time"
                  className="form-control form-control-sm"
                  id="endTime"
                  name="endTime"
                  onChange={event => onChangeCreateEventInputs(event)}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={closeModal}
              >
                Close
              </button>
              <button type="submit" className="btn btn-sm modal-submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}
