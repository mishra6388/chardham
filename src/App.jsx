import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Badrinath from './components/Badrinath';
import Kedarnath from './components/kedarnath';
import Gangotri from './components/Gangotri';
import Yamunotri from './components/Yamunotri';
import Aboutchardham from './components/Aboutchardham';
import OpeningDates from './components/OpeningDates';
import Kedarnathdate from './components/Kedarnathdate';
import Badrinathdate from './components/Badrinathdate';
import Gangotridate from './components/Gangotridate';
import Yamunotridate from './components/Yamunotridate';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm ';
import BookingForm from './components/BookingForm';


function App() {
  
  return (
    <>
      <Navbar />
      <HeroSection />

      <div className="container mx-auto px-6 py-10">
        {/* Centered Heading */}
        <div className="flex justify-center items-center my-5">
          <h1 className="text-4xl font-bold text-blue-600">Destinations To Visit</h1>
        </div>

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Badrinath />
          <Kedarnath />
          <Gangotri />
          <Yamunotri />
        </div>
      </div>

      <Aboutchardham />

      <div className="flex justify-center py-10 text-center">
        <h2 className="font-bold text-blue text-4xl ">Opening & Closing Dates Of Chardham Yatra</h2>
      </div>

      {/* Removed image of opening date and component */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10">
        <Kedarnathdate />
        <Badrinathdate />
        <Gangotridate />
        <Yamunotridate />
      </div>
      <Footer/>
      <PopupForm/>
      
    </>
  );
}

export default App;
