import React, { Component } from "react";

export class ImageWLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      display: "none",
      backdrop: false,
    };
  }

  handleImageLoaded = () => {
    if (this.props.noBackdrop) {
      this.setState({ loading: false, display: "inline" });
    } else {
      this.setState({ loading: false, display: "inline", backdrop: true });
    }
  };

  render() {
    return (
      <div className={this.state.backdrop ? "project_square_background" : ""}>
        <img
          alt=""
          style={{ display: this.state.display }}
          src={this.props.src}
          className={this.props.className}
          onLoad={this.handleImageLoaded}
        />
        {this.state.loading ? (
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1" />
            <div className="sk-cube sk-cube2" />
            <div className="sk-cube sk-cube3" />
            <div className="sk-cube sk-cube4" />
            <div className="sk-cube sk-cube5" />
            <div className="sk-cube sk-cube6" />
            <div className="sk-cube sk-cube7" />
            <div className="sk-cube sk-cube8" />
            <div className="sk-cube sk-cube9" />
          </div>
        ) : null}
      </div>
    );
  }
}
