import React from 'react';
import './App.css';
import Header from './Header/Header.js' 
import ImageList from './ImageList/ImageList.js';
import Images from './Data.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    }
    
    handleKeywordChange = (e) => {
      this.setState({
        keyword: e.target.value
      });
    }
  render() {
    const filteredImages = Images.filter((image) => {
      if (!image.keyword) 
      return true
        return image.keyword === this.state.keyword
      });
    return (
      <>
      <Header/>
      <form className='form'>
        Select which category you want to see 
          <select 
          value={this.state.keyword}
          onChange={this.handleKeywordChange}>
            <option value='narwhal'>Narwhal</option>
            <option value='rhino'>Rhino</option>
            <option value='unicorn'>Unicorn</option>
            <option value='unilego'>Unilego</option>
            <option value='triceratops'>Triceratops</option>
            <option value='markhor'>Markhor</option>
            <option value='mouflon'>Mouflon</option>
            <option value='addax'>Addax</option>
            <option value='chameleon'>Chameleon</option>
            <option value='lizard'>Lizard</option>
            <option value='dragon'>Dragon</option>
          </select>
      </form>
      <ImageList />
      </>
    )
  }
}
