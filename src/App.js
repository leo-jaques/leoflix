import { useEffect, useState } from 'react'
import Tmdb from './Tmdb'

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)
    }

    loadAll()
  }, [])


  return (
    <div className='page'>
      Hello World
    </div>
  );
}

export default App;
