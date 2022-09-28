import SuperHero from './SuperHero';
import Trending from './Trending'
function ListFilm() {
    return (
      <div>
       
        <div className="trending">
          <Trending />
        </div>
  
        <div className="superhero">
          <SuperHero />
        </div>
      </div>
    )
    }
    export default ListFilm