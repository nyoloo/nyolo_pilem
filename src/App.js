import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Intro from './component/Intro';
import SuperHero from './component/SuperHero';
import Trending from './component/Trending'
import ListFilm from './component/ListFilm';
import "./App.css"


function App() {
  const myBG = {
    height:'100vh' ,
    background: '#171717',
  };
  return (
    <div style={myBG}>
   <BrowserRouter>
   <div className='Intro'>
   <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Intro />} />
          <Route path='Trending' element={<Trending />} />
          <Route path='SuperHero' element={<SuperHero />} />
          <Route path='ListFilm' element={<ListFilm />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
