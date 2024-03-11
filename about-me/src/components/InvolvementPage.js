import React from 'react';
import IvanInDC from '../images/IvanInDC.JPG';
import coverPage from '../images/cover-page.png';
import aboutme from '../images/aboutme.png';


export default function InvolvementPage() {
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
            <h1 className="text-white text-4xl font-bold mb-4">Ivan Hernandez's Involvement</h1>
          </div>


          <div class="about-me-container">
            <div class="text-container">
              <h1>Student Senate for California Community College (SSCCC) Vice President</h1>
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
              <h1>Contra Costa Community College District (4CD) Student Trustee</h1>
              <p>Your text goes here...</p>
            </div>
          </div>


          <div class="about-me-container">
            <div class="text-container">
              <h1>Region III Vice Chair</h1>
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
              <h1>Associated Students of Diablo Valley College (ASDVC) President</h1>
              <p>Your text goes here...</p>
            </div>
          </div>


          <div class="about-me-container">
            <div class="text-container">
              <h1>Diablo Valley College Inter-Club Council (ICC) President</h1>
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
              <h1>Diablo Valley Rotaract (DVR) President</h1>
              <p>Your text goes here...</p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}