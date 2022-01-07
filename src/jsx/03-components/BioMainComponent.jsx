const BioMainComponent = ({name, bio, description, portfolio}) => {
    return(
        <div className='bio__main'>
            <h1 className='bio__name'>{name}</h1>
            <span className='bio__ocupation'>{bio}</span>
            <span className='bio__description'>{description}</span>
            <a className='bio__portfolio' href={portfolio} target="_blank" rel="noopener noreferrer">codepen.io</a>
        </div>
    )
}

export { BioMainComponent }