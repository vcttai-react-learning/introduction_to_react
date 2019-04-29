import React from 'react';

class ImageList extends React.Component
{
    renderImageList = () => {
        const images = this.props.images.map( ({ id, description, urls }) => {
            return <img key={id} src={urls.regular} alt={description} />;
        } );

        return images;
    }

    render() {
        return (
            <div>
                {this.renderImageList()}
            </div>
        );
    }
}

export default ImageList;