import React, { Component } from 'react';
import Section from '../Section/section';
import Searchbar from '../Searchbar/searchbar.jsx';
import Gallery from '../Gallery/gallery.jsx';


export default class App extends Component {
  state = {
    searchQuery: '',
  };

 
  handleSubmit = dataForm => {
    this.setState({ searchQuery: dataForm.trim() });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <Section>
          <Gallery searchQuery={this.state.searchQuery}></Gallery>
        </Section>
      </>
    );
  }
}

