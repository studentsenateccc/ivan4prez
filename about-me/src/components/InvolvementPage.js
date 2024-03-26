import React from 'react';
import IvanInDC from '../images/IvanInDC.JPG';
import coverPage from '../images/cover-page.png';
import aboutme from '../images/aboutme.png';
import dvrPic from '../images/dvrPic.JPG';
import asdvcPic from '../images/asdvcPic.jpg';
import iccPic from '../images/iccPic.JPG';
import stPic from '../images/studentTrusteePic.jpg';
import vpPic from '../images/vpPic.JPG';
import viceChairPic from '../images/viceChairPic.jpg';
import involvementPage from '../images/InvolvementCropped.png';
import YouTubeVideo from './YoutubeVideo';


export default function InvolvementPage() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="relative">
          <img
            alt="Banner"
            className="w-full h-auto"
            height="520"
            src={involvementPage}
            style={{
              objectFit: "cover",
              width: "100%", // Set the width to 100%
              height: "auto", // Set the height to auto for proportional scaling
              maxWidth: "100%" // Set the max-width for responsiveness
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
              <p>The Student Senate for California Community Colleges (SSCCC) was a task force established in 1988 by the Board of Governors of the California Community Colleges. SSCCC was initially known as the "Council of Student Body Governments" and later as the "Student Senate". The SSCCC was recognized by the California Governor as the official student-run organization charged with representing over 2 million California Community College students across the state.</p>
              <p>As Vice President, I focus on any Diversity, Equity, Inclusion, Accessibility, and Anti-Racism (DEIAA) initiatives across the state. I work closely with our system partners such as the Chancellor’s office, Academic Senate, Faculty Association, and League of Trustees and Chancellors to pursue DEIA initiatives for all our students. Moreover, I oversee all internal and external policies at the state and regional levels within the SSCCC. I take part as a panelist, guest speaker, and workshop presenter at different conferences, and events across the nation.</p>
            </div>
            <div class="image-container">
              <img src={vpPic} alt="Ivan in DC" class="small-image" />
            </div>
          </div>


          <div class="about-me-container">
            <div class="image-container">
              <img src={stPic} alt="Ivan in DC" class="small-image" />
            </div>
            <div class="text-container">
              <h1>Contra Costa Community College District (4CD) Student Trustee</h1>
              <p>Headquartered in Martinez, California, the District includes Contra Costa College, Diablo Valley College, Los Medanos College, San Ramon Campus, and Brentwood Center. Founded in 1948, the Contra Costa Community College District is one of California's largest multi-college districts serving over 55,000 students. </p>
              <p>As the 4CD Student Trustee, I serve as the outspoken student for the district on any student matter, representing over 55,000 students across the district. I sit alongside 5 other elected trustees creating policies that impact students, reviewing student code of conduct cases, representing students from 4CD at conferences, and performing legislative visits to state and congressional representatives.</p>
            </div>
          </div>


          <div class="about-me-container">
            <div class="text-container">
              <h1>Region III Vice Chair</h1>
              <p>During the 2022-2023 academic year, I had the privilege of being elected as Region III Vice Chair, a role that enabled me to advocate for the voices of students across the college, district, and region. Serving as the Vice Chair of Region III, I took on the responsibility of overseeing the San Francisco/Bay Area, which encompassed thirteen community colleges and their diverse student populations.</p>
              <p>In this capacity, I worked tirelessly to address the needs and concerns of students within the region. Whether it was collaborating with college administrations, engaging with student organizations, or representing student interests in district-level discussions, I was committed to ensuring that every student's voice was heard and valued.</p>
              <p>My tenure as Region III Vice Chair allowed me to gain invaluable experience in student advocacy and leadership. It provided me with a deeper understanding of the challenges and opportunities facing students in the San Francisco/Bay Area and equipped me with the skills necessary to effectively advocate for positive change on their behalf.</p>
            </div>
            <div class="image-container">
              <img src={viceChairPic} alt="Ivan in DC" class="small-image" />
            </div>
          </div>


          <div class="about-me-container">
            <div class="image-container">
              <img src={asdvcPic} alt="Ivan in DC" class="small-image" />
            </div>
            <div class="text-container">
              <h1>Associated Students of Diablo Valley College (ASDVC) President</h1>
              <p>Associated Students of Diablo Valley College (ASDVC) is the student government at Diablo Valley College (DVC). ASDVC is responsible for advocating and representing over 20,000 students' perspectives on the college and district committees, councils, and task forces. Additionally, ASDVC advocates federally on behalf of our student’s needs.</p>
              <p>As President for the 2022-2023 term, I represented over twenty thousand students across our two campuses. Since last year, I have helped allocate 75 million dollars to different programs; for instance, the STEM program, Internships, and the extension of library hours. Moreover, I have advocated for our students at the regional, state, and national levels and spearheaded a team of 12 executive members and 70 senators.</p>
            </div>
          </div>


          <div class="about-me-container">
            <div class="text-container">
              <h1>Diablo Valley College Inter-Club Council (ICC) President</h1>
              <p>The Inter-Club Council (ICC) is recognized and funded by Diablo Valley College (DVC)'s student government, Associated Students of Diablo Valley College (ASDVC). It consists of elected representatives from all campus clubs. Weekly ICC meetings provide a forum for clubs to discuss upcoming events, collaborate on student issues, and request funding for their respective clubs.</p>
              <p>I served as the ICC President, chairing weekly executive and general meetings for 75 clubs’ representatives. Additionally, I oversaw and planned conferences, field trips, and major events that took place at our campus community and beyond. Some activities that I oversaw were Club Day, ICC Retreat, and ICC End of Year Banquet. </p>
            </div>
            <div class="image-container">
              <img src={iccPic} alt="Ivan in DC" class="small-image" />
            </div>
          </div>


          <div class="about-me-container">
            <div class="image-container">
              <img src={dvrPic} alt="Ivan in DC" class="small-image" />
            </div>
            <div class="text-container">
              <h1>Diablo Valley Rotaract (DVR) President</h1>
              {/* <p>Since a young age, community service has held a significant place in my life, sparking a passion for helping others. Over the past two years, I've had the honor of serving as President of Diablo Valley Rotaract (DVR), a nonprofit dedicated to community service. In this role, my team and I took on various projects in our community, collaborating with local city councils to perform cleaning on parks, assemble toiletry kits for homeless people, and participate in fundraising events to support various causes. Among our projects, the "Period Project" stands out as one of the most impactful and meaningful projects I’ve led. Addressing the critical issue of menstrual hygiene product accessibility for homeless women in our county, we raised over $10,000. With these funds, we assembled essential hygiene kits and distributed those to over 15 homeless shelters across the Bay Area. Homeless people are often judged for how they look or the choices they make. It's important to remember that behind these judgments are real people who have faced tough times and just want a second chance. For me, public service is more than just personal gain or praise. It's about taking the chance to make a positive difference in people's lives. Our society needs caring individuals who are ready to make changes in our neighborhoods, schools, workplaces, and homes. We need people who are dedicated to making things better for everyone, and that's what drives me to keep making a difference where it counts the most.</p> */}
              <p>Diablo Valley Rotaract (DVR) is a non-profit 501c (4) organization that exchanges ideas with leaders in the community, develops leadership and professional skills, and has fun through service by bringing young leaders together to develop solutions to challenges in our domestic and international communities. Rotaract is a sub-branch of Rotary International tailored towards young adults. DVR is part of the 5160 Rotary District in Northern California and currently is the largest and most active Rotaract club in the West Region.</p>
              <p>I served as President for a two-year term, in which, I doubled the club membership compared to its first year. I have also established connections with local and international Rotary and Rotaract clubs across the nation fostering our vision and values of equity and inclusion. Additionally, DVR participated in over 80 community service projects during my terms as President. Nowadays, DVR is successfully being run by an amazing leadership elected last year.</p>
            </div>
          </div>


          <h1>SSCCC Chapters</h1>
          <h2>Learn more about the SSCCC Chapters 3 and 4 completed this year under Ivan's leadership</h2>
          <div class="about-me-container">
            <div class="image-container">
              <h3>SSCCC Chapter 3:</h3>
              <h3>American Indian/Alaska Native (Native American) & Indigenous Students</h3>
              <YouTubeVideo videoUrl="https://www.youtube.com/embed/3IcwuQf5NTc?si=MxAAEieJONA6luoh"/>
            </div>
            <div class="image-container">
              <h3>SSCCC Chapter 4:</h3>
              <h3>Undocumented Students</h3>
              <YouTubeVideo videoUrl="https://www.youtube.com/embed/LgToJriQRZo?si=YicYZTGvaOcJac9n"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}