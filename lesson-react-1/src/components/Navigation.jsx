import React, { Component } from "react";
import '../styles/style.css';

class Navigation extends Component {
  state = {
    linkHome: "Home",
    linkAbout: "About",
    linkContacts: "Contacts",
    linkFaq: "FAQ",
  };

  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          className="navbar-nav me-auto mb-2 mb-lg-0 logo"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              {this.state.linkHome}
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="about-tab"
              data-bs-toggle="tab"
              data-bs-target="#about-tab-pane"
              type="button"
              role="tab"
              aria-controls="about-tab-pane"
              aria-selected="false"
            >
              {this.state.linkAbout}
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              {this.state.linkContacts}
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="faq-tab"
              data-bs-toggle="tab"
              data-bs-target="#faq-tab-pane"
              type="button"
              role="tab"
              aria-controls="faq-tab-pane"
              aria-selected="false"
            >
              {this.state.linkFaq}
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>  
      </div>
    );
  }
}

export default Navigation;
