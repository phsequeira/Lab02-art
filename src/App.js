import React from 'react';
import './App.css';
import Header from './Header/Header.js' 
import ImageList from './ImageList/ImageList.js';
import Images from './Data.js';
import Dropdown from './Dropdown.js';
import images from './Data.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
    }
    
    handleKeywordChange = (e) => {
      this.setState({
        keyword: e.target.value
      });
    }

    handleHornsChange = (e) => {
      this.setState({
        horns: Number(e.target.value)
      });
    }
  render() {
    console.log(this.state)
    const filteredImages = Images.filter((image) => {
      if (!this.state.keyword && !this.state.horns) return true;
      
      if (this.state.keyword && !this.state.horns) {
        
        if (image.keyword === this.state.keyword) return true;
      }
      
      // if there is a cost selected but no flavor
      if (this.state.horns && !this.state.keyword) {
        // filter based on matching costs
        if (image.horns === this.state.horns) return true; 
      }

      // if there is both a cost and a flavor selected
      if (this.state.horns && this.state.keyword) {
        if (image.horns === this.state.horns && image.keyword === this.state.keyword) return true;

      return false;
      }
    });
    return (
      <>
      <Header/>
      Filter What you want to see: Species: 
      <Dropdown value={this.state.keyword} handleChange={this.handleKeywordChange} options={['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']}/>
      Horns: 
      <Dropdown value={this.state.horns} handleChange={this.handleHornsChange} options={[1, 2, 3, 100]}/>
      <ImageList filteredImages={filteredImages} />
      </>
    )
  }
}
