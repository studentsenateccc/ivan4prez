import React from 'react';
import IvanInDC from '../images/IvanInDC.JPG';
import coverPage from '../images/cover-page.png';
import welcome from '../images/welcome.png'
import aboutme from '../images/aboutme.png';
import ivanElection from '../images/ivanElection.JPG';
import ivanLife from '../images/ivanLife.JPG';

import '../styles.css';



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

            <h1 className="text-white text-4xl font-bold mb-4">Meet your presidential Candidate</h1>
            <div className='margins'>
              <p className="text-white text-lg">Ivan Hernandez serves as Vice President for the 2023-2024 academic term. As a student, Ivan is pursuing a degree in Computer Science with an interest in Software Engineering, Product Management, and Consulting. Ivan likes to spend time outdoors, running, hiking, and swimming. He also loves to meet new people and hang out with his friends as much as possible. Ivan enjoys watching movies and series, listening to music, and singing karaoke.</p>
              <p>If elected as President, Ivan hopes to lead the organization towards a very successful year full of learning, growth, and personal development. Some of his goals are to collaborate with system partners and counterpart organizations such as UCSA, CSSA, and other organizations. Last but not least, Ivan wants to give back to the community that has given him so much.</p>
            </div>
          </div>


          <div class="about-me-container">
            <div class="text-container">
              <h1>My Story</h1>

              <p>Hey everyone, My name is Ivan Hernandez! I'm originally from Houston, Texas, however, I spent most of my life in Hidalgo, Mexico. At age 14, I faced a big challenge when I was diagnosed with Leukemia. With this health issue in mind, my family made the tough decision to send me off to California to pursue treatment, although that meant, I left behind my parents, siblings, and other loved members.</p>
              <p>Adapting to a new country wasn't easy. I struggled with English and felt out of place in this new culture. But with support from loved ones, I found my place at Diablo Valley College (DVC) as a dual-enrolled student, where after graduating high school, I enrolled full-time. When I enrolled at DVC, I joined their Student Government, where I got elected as the Inter-Club Council Chair, supporting over 60 student clubs during the pandemic.</p>
              <p>The next year, I got elected to serve as the Student Body President at Diablo Valley College, as well as, Region III Vice Chair, representing 14 community colleges across the region. These experiences led me to get involved in the SSCCC, where I now proudly serve as Vice President. Moreover, I got elected as the Contra Costa Community College Student Trustee.</p>
              <p>Beyond advocacy, I've been involved with Diablo Valley Rotaract, a non-profit community service organization devoted to support our community by working on community service projects locally and globally. Today, I have marked six years being cancer-free, I'm grateful for the journey and excited for what lies ahead!</p>
            </div>
            <div class="image-container">
              <img src={ivanLife} alt="Ivan in DC" class="small-image" />
            </div>
          </div>


          <div class="about-me-container">
            <div class="image-container">
              <img src={ivanElection} alt="Ivan in DC" class="small-image" />
            </div>
            <div class="text-container">
              <h1>Professional Experience</h1>
              <p>Being involved both in and outside of school has played a pivotal role in shaping my personal and professional growth. Through extracurricular activities, internships, and volunteer experiences, I have been able to develop essential skills, gain valuable knowledge, and cultivate meaningful relationships.</p>
              <p>Participating in extracurricular activities such as clubs, organizations, and sports teams has allowed me to expand my leadership abilities, teamwork skills, and time management techniques. These experiences have taught me how to effectively collaborate with others, solve problems creatively, and adapt to diverse situations.</p>
              <p>Additionally, internships and volunteer opportunities have provided me with real-world experience and exposure to different industries and professions. These experiences have not only helped me discover my interests and passions but have also equipped me with practical skills and knowledge that are applicable in various professional settings.</p>
              <p>Moreover, being actively involved both inside and outside of school has enabled me to expand my network, meet new people, and build connections with professionals in my field of interest. These connections have opened doors to new opportunities, mentorship, and career guidance, ultimately contributing to my overall growth and development.</p>
              <p>In summary, being involved in extracurricular activities, internships, and volunteer work has been instrumental in shaping the person I am today. These experiences have provided me with valuable skills, knowledge, and connections that have prepared me for success in my future endeavors.</p>
            </div>
          </div>

          <div class="about-me-container">
            <div class="text-container">
              <h1>Moving Forward</h1>
              <p>In the SSCCC, we are eagerly looking forward to several key aspects that are integral to our growth and success. First and foremost, we are committed to fostering professional growth among our members. We aim to provide opportunities for skill development, learning, and career advancement to ensure that each individual within our organization can reach their fullest potential.</p>
              <p>In addition to professional growth, representation is another area of focus for us. We are dedicated to promoting diversity, equity, and inclusion within our organization, ensuring that all voices are heard and valued. By embracing diverse perspectives and experiences, we believe we can better serve our community and achieve our shared goals.</p>
              <p>Finally, we are excited about increasing engagement both within our organization and with external stakeholders. We understand the importance of active participation and collaboration in driving meaningful change. Through enhanced communication, collaboration, and involvement, we aim to build stronger connections and partnerships that will propel us forward toward our vision and mission.</p>
              <p>Overall, we are looking forward to a future filled with opportunities for professional growth, diverse representation, and meaningful engagement. Together, we are confident that we can make a positive impact and achieve our collective aspirations.</p>
            </div>
            <div class="image-container">
              <img src={IvanInDC} alt="Ivan in DC" class="small-image" />
            </div>
          </div>


        </div>
      </div>
    </>
  )
}




