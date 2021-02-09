import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import WorkGallery from './components/Gallery';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        {/* <Portfolio resumeData={resumeData} /> */}
        <WorkGallery />
        {/* <Testimonials resumeData={resumeData}/> */}
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
