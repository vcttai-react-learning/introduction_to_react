import React from 'react';
import ImageCard from './ImageCard';
import '../style/ImageList.css'

class ImageList extends React.Component
{
    renderImageList = () => {
        const images = this.props.images.map( (image) => {
            return <ImageCard key={image.id} image={image} />;
        } );

        return images;
    }

    render() {
        return (
            <div className="image-list">
                {this.renderImageList()}
            </div>
        );
    }
}

export default ImageList;