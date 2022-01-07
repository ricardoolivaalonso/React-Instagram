const MediaElement = ({media}) => {
    return(
        <div className="media-element">
            <img className="media-element__image" src={media} alt="Media" />
        </div>
    )
}

export { MediaElement }