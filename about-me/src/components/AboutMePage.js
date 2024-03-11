
import React from 'react';
import IvanInDC from '../images/IvanInDC.JPG';
import coverPage from '../images/cover-page.png';
import welcome from '../images/welcome.png'

// const AboutMePage = () => {
//   return (
//     <div>
//       <h1>About Me</h1>
//       <p>This is the About Me page content.</p>
//     </div>
//   );
// }

// export default AboutMePage;


// export default function AboutMePage() {
//   return (
//     <div className="bg-white">
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
//         </div>
//       </header>
//       <main>
//         <div className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
//           <div className="px-4 py-6 sm:px-0">
//             <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
//               <img
//                 alt="About Me Image"
//                 className="object-cover w-full h-full rounded-lg"
//                 height="384"
//                 src={IvanInDC}
//                 style={{
//                   aspectRatio: "640/384",
//                   objectFit: "cover",
//                 }}
//                 width="640"
//               />
//             </div>
//           </div>
//           <div className="mt-6">
//             <div className="text-lg max-w-prose mx-auto">
//               <p className="text-xl text-gray-500 leading-8">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
//                 pulvinar dapibus leo. Mauris varius commodo ante, eget facilisis enim ultrices non. Fusce malesuada nibh
//                 nec purus faucibus, at aliquet sapien tincidunt.
//               </p>
//             </div>
//             <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
//               <p>
//                 Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in,
//                 elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
//               </p>
//               <p>
//                 Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Praesent
//                 sapien massa, convallis a pellentesque nec, egestas non nisi.
//               </p>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
//                 Pellentesque in ipsum id orci porta dapibus.
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }




export default function AboutMePage() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="relative">
          <img
            alt="Banner"
            className="w-full h-auto"
            height="500"
            src={welcome}
            style={{
              aspectRatio: "1440/500",
              objectFit: "cover",
            }}
            width="1440"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-4xl font-bold mb-4">About Me</h1>
            <p className="text-white text-lg">Discover my journey and aspirations</p>
          </div>


          <div class="about-me-container">
            <div class="text-container">
              <h1>My Life</h1>
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
              <h1>Professional Experience</h1>
              <p>Being involved both in and outside of school has played a pivotal role in shaping my personal and professional growth. Through extracurricular activities, internships, and volunteer experiences, I have been able to develop essential skills, gain valuable knowledge, and cultivate meaningful relationships.</p>
              <p>Participating in extracurricular activities such as clubs, organizations, and sports teams has allowed me to hone my leadership abilities, teamwork skills, and time management techniques. These experiences have taught me how to effectively collaborate with others, solve problems creatively, and adapt to diverse situations.</p>
              <p>Additionally, internships and volunteer opportunities have provided me with real-world experience and exposure to different industries and professions. These experiences have not only helped me discover my interests and passions but have also equipped me with practical skills and knowledge that are applicable in various professional settings.</p>
              <p>Moreover, being actively involved both inside and outside of school has enabled me to expand my network, meet new people, and build connections with professionals in my field of interest. These connections have opened doors to new opportunities, mentorship, and career guidance, ultimately contributing to my overall growth and development.</p>
              <p>In summary, being involved in extracurricular activities, internships, and volunteer work has been instrumental in shaping the person I am today. These experiences have provided me with valuable skills, knowledge, and connections that have prepared me for success in my future endeavors.</p>
            </div>
          </div>

          <div class="about-me-container">
            <div class="text-container">
              <h1>Moving Forward</h1>
              <p>As an organization, we are eagerly looking forward to several key aspects that are integral to our growth and success. First and foremost, we are committed to fostering professional growth among our members. We aim to provide opportunities for skill development, learning, and career advancement to ensure that each individual within our organization can reach their fullest potential.</p>
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




