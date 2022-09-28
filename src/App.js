import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Intro from './component/Intro';
import SuperHero from './component/SuperHero';
import Trending from './component/Trending'

function App() {
  return (
    <div className='myBG'>

    
   <BrowserRouter>
   <div className='Intro'>
   <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Intro />} />
          <Route path='Trending' element={<Trending />} />
          <Route path='SuperHero' element={<SuperHero />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
