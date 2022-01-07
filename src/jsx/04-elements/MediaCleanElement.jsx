const MediaCleanElement = ({media}) => {
    return(
        <div className="home-posts__media">
            <div className="home-posts__element">
                <img className="home-posts__element-image" src={media} alt="Media" />
            </div>
        </div>
    )
}

export { MediaCleanElement }