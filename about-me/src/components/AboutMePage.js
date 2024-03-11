
import React from 'react';
import IvanInDC from '../images/IvanInDC.JPG';
import coverPage from '../images/cover-page.png';
import welcome from '../images/welcome.png'
import aboutme from '../images/aboutme.png';


export default function AboutMePage() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="relative">
          <img
            alt="Banner"
            className="w-full h-auto"
            height="520"
            src={aboutme}
            style={{
              aspectRatio: "1440/500",
              objectFit: "cover",
            }}
            width="1440"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-4xl font-bold mb-4">Meet Your Presidential Candidate Ivan</h1>
            {/* <p className="text-white text-lg">Discover my journey and aspirations</p> */}
          </div>


          <div class="about-me-container">
            <div class="text-container">
              <h1>Meet Ivan</h1>
              <p>Your text goes here...</p>
            </div>
            <div class="image-container">
              <img src={IvanInDC} alt="Ivan in DC" class="small-image" />
            </div>
          </div>


          <div class="about-me-container">
            <div class="image-container">
              <img src={coverPage} alt="Ivan in DC" class="small-image" />
            </div>
            <div class="text-container">
              <h1>Meet Ivan</h1>
              <p>Your text goes here...</p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}




