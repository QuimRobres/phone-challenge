import React, { Component } from "react";
import PhoneService from "../../services/phones.service";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import './Phones.css';

export default class Phones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
    };
    this.phoneService = new PhoneService();
  }

  refreshState() {
      this.phoneService.get()
      .then(response => {
          this.setState({ phones: response.data })
      })
  }

  componentDidMount(){
      this.refreshState();
  }

  displayPhones() {
    const { phones } = this.state;
    console.log("hola")
    return phones.map((phone) => {
      return <PhoneCard refreshState={() => this.refreshState()} {...phone} key={phone.id} />;
    });
  }

  render() {
    return (
    <div className="phones-list">
        { this.displayPhones() }
    </div>
        )
  }
}
