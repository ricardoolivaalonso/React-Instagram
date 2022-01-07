const BioAvatarElement = ({avatar}) => {
    return(
        <div className='bio__avatar'>
            <img className="bio__avatar-photo" src={avatar} alt="Avatar" />
        </div>
    )
}

export { BioAvatarElement }