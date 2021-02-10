import React from 'react';
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
                    <p>{image.title}</p>
                    <p>{image.description}</p>
                    <p>{image.keyword}</p>
                </li>
                )
            }
            </ul>
        
        </>
    )
    }
}