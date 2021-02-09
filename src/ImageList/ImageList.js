import React from 'react';
import './ImageList.css';


export default class ImageList extends React.Component {          
            
              render() {
        
                return (
                  <>
                  
                    <ul>
                            {
                                filteredImages.map(image => 
                                <li
                                key={image.title}
                                className='animal'>
                                <p>{image.url}</p>
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