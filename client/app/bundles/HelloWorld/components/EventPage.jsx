import React from "react";

export default class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  render() {
    return (
      <div className="event-page">
        <nav className="navbar bg-light navbar-expand-sm">
          <a className="navbar-brand tix-name" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRnWuCnSb_AlzPuoGZYqeL2twp4skb572wM_zxcpt_nYq-8fma"
              width="30"
              height="30"
              alt="logo"
            />
            ix
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-list-2"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-list-2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Event
                </a>
              </li>
            </ul>
            <span
              className="navbar-text welcome-text"
              style={{ color: "black" }}
            >
              Welcome Nurudeen
            </span>
            <ul className="navbar-nav">
              <li className="navbar-item">
                <a className="nav-link" href="#">
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
