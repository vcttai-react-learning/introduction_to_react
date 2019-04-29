import React from 'react';

const GRID_AUTO_ROWS = 10;

class ImageCard extends React.Component
{
    constructor(props) {
        super(props);

        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const image_height = this.imageRef.current.clientHeight;
        const image_spans = Math.ceil(image_height / GRID_AUTO_ROWS);

        this.setState( { spans: image_spans } );
    }

    render() {
        const {description, urls} = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    alt={description} 
                    src={urls.regular} 
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;