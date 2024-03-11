import React from 'react';
import IvanInDC from '../images/IvanInDC.JPG';
import coverPage from '../images/cover-page.png';
import Issues from '../images/Issues.png';


export default function AboutMePage() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="relative">
          <img
            alt="Banner"
            className="w-full h-auto"
            height="500"
            src={Issues}
            style={{
              aspectRatio: "1440/500",
              objectFit: "cover",
            }}
            width="1440"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-4xl font-bold mb-4">Ivan's Platform</h1>
            <p className="text-white text-lg">Discover my journey and aspirations</p>
          </div>


          <div class="about-me-container">
            <div class="text-container">
              <h1>SUPPORTING STUDENTS</h1>
              <p>Community colleges serve some of our most vulnerable students. Even before the pandemic, over 50% of Contra Costa’s community college students reported being housing insecure. </p>
              <p>Students cannot be successful in the classroom if they are worried about where their next meal is coming from or if they have safe place to sleep that night. </p>
              <p>Ivan has fought for more direct student supports: housing grants, expanding campus food pantries, and free online textbooks. We must continue to increase support for students who are housing and/or food insecure, foster youth, student parents, veterans, Dreamers, and undocumented students. </p>
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
              <h1>EXPANDING CAREER PATHWAYS</h1>
              <p>Our community colleges provide incredible learning opportunities for those pursuing careers in fields that continue to grow rapidly like nursing, dental hygiene, early childhood education, emergency medical services, computer sciences, automotive repair, construction and culinary arts. </p>
              <p>We need to strengthen these programs and expand access to all interested students, many of which have been on waiting lists for many years. Unfortunately, many students are losing the early, crucial years of their careers simply waiting to get into programs that would otherwise transform their lives.</p>
            </div>
          </div>

          <div class="about-me-container">
            <div class="text-container">
              <h1>INCREASING ENROLLMENT</h1>
              <p>The greatest challenge the Contra Costa Community College District is facing is declining enrollment. Our funding is largely tied to our enrollment, which has declined throughout the pandemic. To avoid this fiscal cliff and to better support as many students in our community, we need to expand our dual enrollment partnerships with our K-12 partners, continue building a robust recruitment program, and hire more councilors to work with students to keep them enrolled and earning their degree. </p>
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
              <h1>EXPANDING CAREER PATHWAYS</h1>
              <p>Education can change lives and put someone on the path to a good career. However, for many working families the doors to higher education remain completely out of reach.</p>
              <p>Ivan has championed Contra Costa Community College District’s First Time + Full Time = Free Tuition (FT3) program. He has also advocated for years in Sacramento and Washington D.C. for funding to expand the program.</p>
              <p>Many of our students do not qualify for First Time, Full Time — greater State and Federal support will allow us to expand the program.</p>
            </div>
          </div>


          <div class="about-me-container">
            <div class="text-container">
              <h1>CHAMPIONING WORKFORCE & STUDENT HOUSING</h1>
              <p>Our students, faculty and staff are struggling because of the Bay Area housing crisis. Over 50% of students report being housing insecure and our district has struggled to hire and retain great staff because of the cost of housing. </p>
              <p>All government agencies have a role to play in solving our local housing crisis. Our colleges can build housing for our students and work with our city partners to build workforce housing.  </p>
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
              <h1>SCHOOL SAFETY</h1>
              <p>There's no room for error when it comes to the safety of our students, faculty, staff and community. With active shooter and other threats becoming an all-to-regular occurrence, we must stay vigilant and continue to prepare for every possibility. I will prioritize school security and partner with faculty and our college district law enforcement to develop preventive measures and effective responses.</p>
              <p>And, in this #MeToo era, students should also be made aware of the district's sexual harassment policies, safety procedures, and reporting options, on day one. Faculty and staff should be trained on their reporting obligations and be provided clear guidelines on acceptable behavior. Implementing these policies will be a top priority.</p>
            </div>
          </div>

          <div class="about-me-container">
            <div class="text-container">
              <h1>K-12 PARTNERSHIPS</h1>
              <p>The Community College District and our K-12 schools are natural partners in education. These days, high school students start taking courses at our community colleges as early as their freshman year. This option gives students a competitive edge when applying for colleges or an opportunity to expand their education beyond what's offered in the standard curriculum. </p>
              <p>In recent years, enrollment in our community colleges has declined. I will work hard to build stronger ties with our K-12 partners so that we can collaborate to put more students on the right track and help even more high school students take advantage of all that our system has to offer. </p>
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
              <h1>SMARTER BUILDING</h1>
              <p>Maintaining classrooms with desks and whiteboards, or libraries full of books, is no longer enough. Today, we need classrooms with sufficient power outlets, accessible WiFi, low-cost online reading materials, hands-on workshops and collaborative workspaces. This new model will provide our students with the resources they need to keep up with a changing economy.</p>
              <p>We need to continue our progress updating, renovating, and building state-of-the-art facilities, all while ensuring that our tax dollars are spent wisely. Projects should never get bogged-down in red tape when students are in need.</p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}