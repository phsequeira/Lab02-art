import React from 'react';
import images from '../Data';
import './ImageList.css';


export default class ImageList extends React.Component {          
            
    render() {
    const filtered = this.props.filteredImages
    return (
        <>      
            <ul>
            {
                filtered.map(image => 
                <li key={image.title} className='animal'>
                    <img src={image.url} />
                    <p>Name: {image.title}</p>
                    <p>{image.description}</p>
                    <p>{image.keyword}</p>
                    <p>Horns: {image.horns}</p>
                </li>
                )
            }
            </ul>
        
        </>
    )
    }
}