// import React, { useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { FaCakeCandles } from "react-icons/fa"; // Ensure this is correctly imported
// import ExperienceCard from "./ExperienceCard";
// import { experiences } from "@/data/Experience";
// import { differenceInMonths } from "date-fns";
// import { Titan_One } from "next/font/google";
// import { IoDiamondOutline } from "react-icons/io5";

// const titan = Titan_One({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-rampart",
// });

// // Dummy data structure
// const timelineData = [
//   {
//     id: 1,
//     img: "https://media.licdn.com/dms/image/v2/D4E0BAQEgz81OaYYRWg/company-logo_200_200/company-logo_200_200/0/1720998581787?e=2147483647&v=beta&t=qqxjIYoOl1gzO5d8CaCEB7vG_qPjczQVNIWeJiqCo44",
//     title: "Software Engineer",
//     company: "Lasaria",
//     employment_type: "Internship",
//     duration: {
//       start_month: "Sep",
//       start_year: "2024",
//       // end_month: "Dec",
//       // end_year: "2024",
//     },
//     location: "Washington D.C.",
//     location_type: "Remote",
//     date: {
//       day: "08",
//       month: "Aug",
//       year: "2019",
//     },
//     skills: [
//       "Docker",
//       "Terraform",
//       "AWS",
//       "EC2",
//       "Portainer",
//       "Nginx",
//       "JavaScript",
//       "TypeScript",
//       "Node Js",
//       " Next Js",
//     ],
//     description: `Developed a full-stack music streaming platform using React Native, and AWS (Cognito, DynamoDB, S3), optimizing user authentication and profile management.
// • Implemented advanced UI for artist/listener profiles, featuring CRUD operations with 90% faster data retrieval and 35% improved user interaction.
// • Created comprehensive dashboard analytics tracking follower metrics, top tracks, and geographical popularity for artists.
// • Engineered social engagement features including dynamic post, live like/comment tracking, and real-time user interaction.
// • Developed a secure authentication system using OAuth and JWT tokens, improving system efficiency by 40%.
// • Designed scalable microservices architecture using Node.js and AWS Lambda, driving a 30% increase in user engagement.
// • Utilized Figma for UI/UX design and Expo for cross-platform mobile development, ensuring seamless user experience.`,
//     icon: "1",
//     color: "bg-[#9b87f5]",
//     iconBg: "bg-violet",
//   },
//   {
//     id: 2,
//     img: "https://media.licdn.com/dms/image/v2/D4E0BAQEgz81OaYYRWg/company-logo_200_200/company-logo_200_200/0/1720998581787?e=2147483647&v=beta&t=qqxjIYoOl1gzO5d8CaCEB7vG_qPjczQVNIWeJiqCo44",
//     title: "Software Engineer",
//     company: "Lasaria",
//     employment_type: "Internship",
//     duration: {
//       start_month: "Sep",
//       start_year: "2024",
//       // end_month: "Dec",
//       // end_year: "2024",
//     },
//     location: "Washington D.C.",
//     location_type: "Remote",
//     date: {
//       day: "08",
//       month: "Aug",
//       year: "2019",
//     },
//     skills: [
//       "Docker",
//       "Terraform",
//       "AWS",
//       "EC2",
//       "Portainer",
//       "Nginx",
//       "JavaScript",
//       "TypeScript",
//       "Node Js",
//       " Next Js",
//     ],
//     description: `Developed a full-stack music streaming platform using React Native, and AWS (Cognito, DynamoDB, S3), optimizing user authentication and profile management.
// • Implemented advanced UI for artist/listener profiles, featuring CRUD operations with 90% faster data retrieval and 35% improved user interaction.
// • Created comprehensive dashboard analytics tracking follower metrics, top tracks, and geographical popularity for artists.
// • Engineered social engagement features including dynamic post, live like/comment tracking, and real-time user interaction.
// • Developed a secure authentication system using OAuth and JWT tokens, improving system efficiency by 40%.
// • Designed scalable microservices architecture using Node.js and AWS Lambda, driving a 30% increase in user engagement.
// • Utilized Figma for UI/UX design and Expo for cross-platform mobile development, ensuring seamless user experience.`,
//     icon: "2",
//     color: "bg-[#9b87f5]",
//     iconBg: "bg-violet",
//   },
//   {
//     id: 3,
//     img: "https://media.licdn.com/dms/image/v2/D4E0BAQEgz81OaYYRWg/company-logo_200_200/company-logo_200_200/0/1720998581787?e=2147483647&v=beta&t=qqxjIYoOl1gzO5d8CaCEB7vG_qPjczQVNIWeJiqCo44",
//     title: "Software Engineer",
//     company: "Lasaria",
//     employment_type: "Internship",
//     duration: {
//       start_month: "Sep",
//       start_year: "2024",
//       // end_month: "Dec",
//       // end_year: "2024",
//     },
//     location: "Washington D.C.",
//     location_type: "Remote",
//     date: {
//       day: "08",
//       month: "Aug",
//       year: "2019",
//     },
//     skills: [
//       "Docker",
//       "Terraform",
//       "AWS",
//       "EC2",
//       "Portainer",
//       "Nginx",
//       "JavaScript",
//       "TypeScript",
//       "Node Js",
//       " Next Js",
//     ],
//     description: `Developed a full-stack music streaming platform using React Native, and AWS (Cognito, DynamoDB, S3), optimizing user authentication and profile management.
// • Implemented advanced UI for artist/listener profiles, featuring CRUD operations with 90% faster data retrieval and 35% improved user interaction.
// • Created comprehensive dashboard analytics tracking follower metrics, top tracks, and geographical popularity for artists.
// • Engineered social engagement features including dynamic post, live like/comment tracking, and real-time user interaction.
// • Developed a secure authentication system using OAuth and JWT tokens, improving system efficiency by 40%.
// • Designed scalable microservices architecture using Node.js and AWS Lambda, driving a 30% increase in user engagement.
// • Utilized Figma for UI/UX design and Expo for cross-platform mobile development, ensuring seamless user experience.`,
//     icon: "3",
//     color: "bg-[#9b87f5]",
//     iconBg: "bg-violet",
//   },
// ];

// const Experience = () => {
//   const [expandedItems, setExpandedItems] = useState({});

//   const handleToggle = (id) => {
//     setExpandedItems((prevState) => ({
//       ...prevState,
//       [id]: !prevState[id], // Toggle the state for the specific id
//     }));
//   };

//   const calculateDuration = (start_month, start_year, end_month, end_year) => {
//     const startDate = new Date(`${start_month} 1, ${start_year}`);
//     const endDate =
//       end_month && end_year
//         ? new Date(`${end_month} 1, ${end_year}`)
//         : new Date();
//     const totalMonths = differenceInMonths(endDate, startDate);

//     const years = Math.floor(totalMonths / 12);
//     const months = totalMonths % 12;

//     let duration = "";
//     if (years > 0) {
//       duration += years === 1 ? `${years} yr` : `${years} yrs`;
//     }
//     if (months > 0) {
//       duration += years > 0 ? " " : ""; // Add space if both years and months exist
//       duration += months === 1 ? `${months} mo` : `${months} mos`;
//     }

//     return duration;
//   };

//   return (
//     <div
//       className="min-h-screen bg-blue py-12 px-4 sm:px-6 lg:px-8"
//       id="experience"
//     >
//       <div className="max-w-5xl mx-auto flex flex-col justify-between items-center">
//         <h2
//           className={`text-7xl text-center font-semibold text-white mt-5 sm:text-2xl`}
//         >
//           Experience.
//         </h2>
//         <div className="text-sm text-center max-w-lg text-gray-400 sm:text-xs mb-8">
//           <p>My education has been a journey of self-discovery and growth.</p>
//           <p>My educational details are as follows.</p>
//         </div>
//         <div className="relative space-y-24">
//           {timelineData.map((item, index) => {
//             const ref = useRef(null);
//             const isInView = useInView(ref, { once: false });

//             return (
//               <motion.div
//                 ref={ref}
//                 key={item.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={
//                   isInView
//                     ? { opacity: 1, y: 0, x: index % 2 == 0 ? -76 : 0 }
//                     : { opacity: 0, y: 50 }
//                 }
//                 exit={{ opacity: 0, y: -50 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className={`flex items-center gap-8 ${
//                   index % 2 === 0 ? "" : "flex-row-reverse"
//                 }`}
//               >
//                 {/* Content Card */}
//                 <motion.div
//                   className="flex-1"
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <div className="w-[864px] rounded-lg shadow-xl shadow-[rgba(0,0,0,0.4)] p-8 flex flex-row gap-6 relative overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-[rgba(0,0,0,0.6)] hover:-translate-y-1 hover:cursor-pointer">
//                     <img
//                       src={item.img}
//                       alt={item.company}
//                       className="h-48 w-48 bg-black sm:h-44 sm:w-44 shadow-lg object-cover"
//                     />

//                     {/* Content Details */}
//                     <div className="flex flex-col flex-grow gap-3">
//                       <div className="flex gap-3">
//                         <div className="flex flex-col w-full leading-normal">
//                           <div className="text-[18px] font-bold text-white sm:text-[16px]">
//                             {item.title}
//                           </div>
//                           <div className="text-[16px] font-medium text-[#E5E6E6] sm:text-[14px]">
//                             {item.company} • {item.employment_type}
//                           </div>
//                           <div className="text-[16px] font-medium text-[#A4A5A7] sm:text-[14px]">
//                             {item?.duration?.start_month}{" "}
//                             {item?.duration?.start_year} -{" "}
//                             {item?.duration?.end_month &&
//                             item?.duration?.end_year
//                               ? `${item?.duration?.end_month} ${item?.duration?.end_year}`
//                               : "Present"}{" "}
//                             •
//                             {calculateDuration(
//                               item?.duration?.start_month,
//                               item?.duration?.start_year,
//                               item?.duration?.end_month,
//                               item?.duration?.end_year
//                             )}{" "}
//                           </div>
//                           <div className="text-[16px] font-medium text-[#A4A5A7] sm:text-[14px]">
//                             {item.location} • {item.location_type}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="w-full text-[14px] font-normal text-white mb-2 sm:text-[12px] relative">
//                         <motion.div
//                           className="w-full text-[14px] font-medium text-[#E5E6E6]"
//                           initial="collapsed"
//                           animate={
//                             expandedItems[item.id] ? "expanded" : "collapsed"
//                           }
//                           variants={{
//                             collapsed: { maxHeight: "2.5rem" },
//                             expanded: { maxHeight: "100%" },
//                           }}
//                           transition={{
//                             duration: 0.5,
//                             ease: "circInOut",
//                           }}
//                           style={{ overflow: "hidden" }}
//                         >
//                           {item?.description && (
//                             <span className="block overflow-hidden text-ellipsis">
//                               {expandedItems[item.id]
//                                 ? item?.description
//                                 : `${item?.description.slice(0, 150)}${
//                                     item?.description.length > 150 ? "..." : ""
//                                   }`}
//                             </span>
//                           )}
//                         </motion.div>
//                         <button
//                           onClick={() => handleToggle(item.id)}
//                           className="absolute -bottom-1 right-0 text-[#A4A5A7] text-[14px] font-medium"
//                         >
//                           {expandedItems[item.id] ? "show less" : "...see more"}
//                         </button>
//                       </div>

//                       {item?.skills && (
//                         <div className="flex flex-wrap gap-2 mt-2">
//                           <IoDiamondOutline color="white" />
//                           <div className="flex flex-wrap gap-2">
//                             {item?.skills.slice(0, 5).map((skill, index) => (
//                               <span
//                                 key={index}
//                                 className="text-[16px] font-bold text-white sm:text-[14px] flex items-center gap-1"
//                               >
//                                 {skill}
//                                 {index < item?.skills.slice(0, 6).length - 2
//                                   ? ","
//                                   : ""}
//                               </span>
//                             ))}
//                             {item?.skills.length > 5 && (
//                               <span className="text-[16px] font-bold text-white sm:text-[14px]">
//                                 and +{item.skills.length - 5} more
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Icon Circle with Lines */}
//                 <div className="relative">
//                   <motion.div
//                     whileHover={{ scale: 1.2, rotate: 360 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className={`w-20 h-20 rounded-full ${
//                       item.iconBg
//                     } flex items-center justify-center relative z-20 ${
//                       index % 2 !== 0 ? "right-10" : "left-12"
//                     }`}
//                   >
//                     <span className={`text-3xl text-blue font-bold`}>
//                       {item.icon}
//                     </span>
//                   </motion.div>

//                   {/* Horizontal connecting line */}
//                   <div
//                     className={`absolute top-1/2 w-12 h-2 bg-violet z-10 ${
//                       index % 2 === 0
//                         ? "timeline-right -translate-x-16 left-12"
//                         : "timeline-right translate-x-1 left-12"
//                     }`}
//                   ></div>
//                   {/* Vertical connecting line */}
//                   {index !== timelineData.length - 1 && (
//                     <div
//                       className={`absolute left-1/2 top-full w-2 my-4 h-36 bg-violet ${
//                         index % 2 === 0 ? "translate-x-12" : "-translate-x-12"
//                       }`}
//                     ></div>
//                   )}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import * as React from "react";
import { motion } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import ExperienceCard from "./ExperienceCard";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { Titan_One } from "next/font/google";
import { experiences } from "@/data/Experience";

const titan = Titan_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rampart",
});

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Starts off-screen
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }, // Animates into view
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.5, ease: "easeInOut" },
  }, // Animates out of view
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col justify-center relative z-[1] items-center px-0 pb-16 sm:pb-0 bg-gradient-to-r from-primary to-[#1c2d4a]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)",
      }}
    >
      <div className="relative flex flex-col justify-between items-center w-full max-w-[1350px] py-10 gap-3 sm:flex-col">
        <h2
          className={`text-7xl text-center font-semibold text-secondary mt-5 sm:text-2xl ${titan.className} first-letter:text-[80px] first-letter:font-bold first-letter:text-secondary`}
        >
          Experience.
        </h2>
        <div className="text-sm text-center max-w-lg text-gray-300 sm:text-xs mb-8">
          <p>I have hands-on experience in web and mobile app development. </p>
          <p>
            I strive to create impactful solutions with a focus on innovation
            and results.
          </p>
        </div>
        <Timeline className="w-full max-w-[1000px] mt-2 flex flex-col items-center justify-center gap-3">
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: false, amount: 0.2 }}
                  className="w-full"
                >
                  <ExperienceCard experience={experience} index={index} />
                </motion.div>
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="inherit" />
                {index !== experiences.length && (
                  <TimelineConnector style={{ background: "#B8C1EC" }} />
                )}
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
