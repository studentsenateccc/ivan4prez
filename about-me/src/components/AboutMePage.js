
import React from 'react';
import IvanInDC from '../images/IvanInDC.JPG';
import coverPage from '../images/cover-page.png';
import welcome from '../images/welcome.png'
import aboutme from '../images/aboutme.png';


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




