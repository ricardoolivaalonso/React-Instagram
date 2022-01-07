const BioStatsComponent = ({type, stats}) => {
    return(
        <li className='bio__item' >
            <span className='bio__quantity'>{stats}</span> {type}
        </li>
    )
}

export { BioStatsComponent }