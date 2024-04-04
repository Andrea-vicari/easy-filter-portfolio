import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './Components/Common/header';
import Footer from './Components/Common/footer';
import HomepageBootstrap from './pages/HomepageBootstrap';
import BootstrapModalPage from './pages/BootstrapModalPage';
import BootstrapModalPageAPI from './pages/BootstrapModalPageAPI';
import BootstrapModalPageImageHover from './pages/BootstrapModalPageImageHover';
import SinglePost from './pages/SinglePost';
import ScrollToTop from './ScrollToTop';


function App() {


  return (
    <React.Fragment>
      <Header />
      <ScrollToTop>
        <Routes>
            <Route path="/" element={<HomepageBootstrap />} />
            <Route path="/singlePost" element={<SinglePost />} />
            <Route path="/bootstrapmodalpage" element={<BootstrapModalPage />} />
            <Route path="/bootstrapmodalpageapi" element={<BootstrapModalPageAPI />} />
            <Route path="/bootstrapmodalpageimagehover" element={<BootstrapModalPageImageHover />} />
        </Routes>
        </ScrollToTop>
      <Footer />
    </React.Fragment>

  )
}

export default App