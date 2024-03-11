import IvanInDC from '../images/IvanInDC.JPG';
import coverPage from '../images/cover-page.png';
import ivanVP from '../images/ivanVP.jpg';
import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
        return ( 
                <div className="App">
                        <header className="App-header" >
                                <div>
                                        <a href="https://www.instagram.com/ivan_hdz512">
                                        <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ivan512az">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                </div>
                        </header>
                        {/* <body className="app-body">
                                {<img src={IvanInDC} className="home-image" alt="Home-image" />}
                        </body> */}


<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-4xl font-bold mb-4">Meet Ivan</h1>
            <p className="text-white text-lg">Meet Ivan, a passionate student leader dedicated to making a difference on and off campus. As the current SSCCC Vice President, and 4CD Student Trustee, Ivan has demonstrated commitment to serving his fellow students and effectively advocating for their needs. With a strong track record of leadership and a deep understanding of the challenges facing community college students, Ivan is excited to bring his energy and vision to the role of SSCCC President.</p>
            {/* <p className="text-white text-lg">Ivan, a Computer Science student at UC Santa Barbara in the College of Engineering Honors Program, is passionate about Software Development and Project/Product Management. With diverse experiences and internships, he has honed strong leadership skills across multiple disciplines. Ivan thrives on tackling challenges, demonstrating self-drive, and applying his expertise to achieve successful outcomes in various fields, contributing to impactful projects.</p> */}
          </div>

        {/* </div> */}

 <div class="about-me-container">
            <div class="image-container">
              <img src={ivanVP} alt="Ivan in DC" class="small-image" />
            </div>
            <div class="text-container">
              <h1>Message from Ivan</h1>
              {/* <p>Helping others has always been part of Ivan's identity. For the past two years, he has served as President at Diablo Valley Rotaract, a non-profit 501c (4) organization that brings young leaders together to develop solutions to the most pressing challenges facing domestic and international communities. Branched from Rotary International and founded during the global pandemic, he was one of the founding members who stood up to create change. In 2020, Honduran families faced starvation due to Covid-19. Ivan oversaw and led the completion of a fundraiser using social media as the main form of communication. He reached out to over 70 other clubs and non-profits, raising $5,000 to aid 50 families in Honduras for three consecutive months with essential goods. This experience was life-changing, allowing him to provide basic resources to families in need. In 2021, he initiated "The Period Project," focusing on Menstrual Product Accessibility for Low-Income Women. Alongside a team of five, Ivan fundraised $4,000 to purchase women's hygiene products and packed 400 bags for homeless women in Oakland, CA. These projects taught him the importance of accessibility and the impact of collective action in making a difference. Ivan is proud to have advocated for what is right since joining Rotaract.</p> */}
              <p>Dear SSCCC Fam,</p>
              <p>It is with great pleasure and anticipation that I extend a warm welcome to each and every one of you. As a presidential candidate, I am humbled by the opportunity to address such a distinguished gathering of individuals who share a common vision for our community's future.</p>
              <p>Your presence here today signifies your commitment to shaping positive change and driving progress in our society. Together, we stand at the threshold of a new era, filled with boundless opportunities and challenges that require bold and innovative solutions.</p>
              <p>I am deeply honored to have the opportunity to share my vision, values, and plans for our collective journey ahead. But more importantly, I am eager to listen, learn, and collaborate with each of you to build a brighter, more inclusive future for all.</p>
              <p>As we embark on this journey together, let us unite our strengths, passions, and aspirations to create a community that thrives on diversity, equity, and compassion. Your engagement, support, and feedback are invaluable to me, and I am committed to being a leader who listens, serves, and acts with integrity.</p>
              <p>Once again, welcome, and thank you for joining me on this inspiring journey towards a better tomorrow.</p>
              <p>With warm regards,</p>
              <p>Ivan Hernandez, Presidential Candidate </p>
            </div>
                </div> 
        </div>

        );
}

 
export default HomePage;

