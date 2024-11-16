import './app-info.css'

const AppInfo = ({ allMoviesCaunt, favoriteCount }) => {
  return <div className='app-info'>
    <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCaunt}</p>
    <p className='fs-5 text-uppercase'>Sevimli kinolar soni: {favoriteCount}</p>
  </div>
}

export default AppInfo
