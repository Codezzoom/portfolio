const projects = [
  {
    id: 0,
    title: "Docomo",
    date: "Aug 2023 - Dec 2023",
    new: true,
    description:
      `Docomo File Manager is a full-stack web application designed to revolutionize file management 
      by offering advanced features that prioritize security, efficiency, and user convenience. Built
      using React, Next.js, Firebase, NextAuth, and Tailwind CSS, the app provides a seamless platform
      to organize, store, and access files while addressing key user needs. One of its standout 
      features is an advanced file lock/unlock system that uses Tesseract.js to detect sensitive 
      documents, prompting users to password-protect them for added security. The application also 
      integrates an intelligent document monitoring system that continuously reads expiration dates and
      notifies users 30 days in advance, ensuring they never miss critical deadlines. Overcoming 
      challenges such as implementing real-time file security, handling large data processing, and 
      ensuring responsive UI, the project utilized scalable Firebase solutions, dynamic front-end design, 
      and efficient background job scheduling. By simplifying file organization and enhancing security, 
      Docomo empowers users to manage their digital assets with confidence and ease, resolving daily 
      frustrations and improving productivity.`,
    image:
      "/Projects/Docomo/image_08.png",
    images: [
      "/Projects/Docomo/image_01.png",
      "/Projects/Docomo/image_02.png",
      "/Projects/Docomo/image_03.png",
      "/Projects/Docomo/image_04.png",
      "/Projects/Docomo/image_05.png",
      "/Projects/Docomo/image_06.png",
      "/Projects/Docomo/image_07.png",
      "/Projects/Docomo/image_08.png",
      "/Projects/Docomo/image_09.png",
      "/Projects/Docomo/image_10.png",
      "/Projects/Docomo/image_11.png",
      "/Projects/Docomo/image_12.png",
      "/Projects/Docomo/image_13.png",
      "/Projects/Docomo/image_14.png",
      "/Projects/Docomo/image_15.png",
    ],
    tags: [
      {
        name: "Next JS",
        logo: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      },
      {
        name: "React JS",
        logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      },
      {
        name: "Firebase",
        logo: "https://img.icons8.com/?size=512&id=62452&format=png",
      },
      {
        name: "Next Auth",
        logo: "https://next-auth.js.org/img/logo/logo-sm.png",
      },
      {
        name: "Tesseract JS",
        logo: "https://ubuntuhandbook.org/wp-content/uploads/2021/12/tesseract-icon.webp",
      },
      {
        name: "Nodemailer",
        logo: "https://repository-images.githubusercontent.com/1272424/d1995000-0ab7-11ea-8ed3-04a082c36b0d",
      },
      {
        name: "Framer Motion",
        logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
      },
      {
        name: "Daisyui",
        logo: "https://daisyui.com/favicon.ico",
      },
      {
        name: "Jest",
        logo: "https://static-00.iconduck.com/assets.00/jest-icon-1855x2048-ifiupldr.png",
      },
    ],
    category: "web app",
    github: "https://github.com/clevereverdev/Documo",
    hosted: "docomo-399203.web.app",
    member: [
      {
        name: "Amritvir Randhawa",
        img: "https://avatars.githubusercontent.com/u/179989165?v=4",
        linkedin: "https://www.linkedin.com/in/asrandhawa2/",
        github: "https://github.com/codezzoom/",
      },
    ],
    zipFileUrl: "https://drive.google.com/file/d/11OXzjK4e-o-LG86mtmYT0nZY6r6UeLGS/view?usp=sharing",
    // videoUrl: "https://www.youtube.com/embed/0PfErHA3zzQ?si=Uzp8tpp4UDV4Umoz",
    similarProjects: [1, 2], // IDs of related projects
  },

  {
    id: 1,
    title: "Fridge - Food Expiry Tracker",
    date: "Aug 2022 - Dec 2022",
    description:
      `Fridge is an innovative food tracking web application was designed to address common 
       challenges faced by households and students alike, the app offers a seamless way to monitor 
       food inventory, reduce food waste, and manage budgets effectively. Fridge allows users to track 
       food items remotely, providing real-time updates on what’s still good, nearing expiration, or
       already expired. By leveraging this information, users can make informed decisions, such as 
       utilizing expiring items before they go bad or avoiding unnecessary grocery purchases. This 
       not only minimizes food waste but also helps users understand the financial impact of waste by
       displaying how much money could have been saved.
       Developing Fridge came with its own set of challenges, such as implementing dynamic 
       notifications for expiring items and creating an intuitive interface that encourages 
       regular use. The team overcame these hurdles by integrating robust database solutions and 
       designing user-friendly features like smart sorting and personalized alerts. Through these 
       efforts, Fridge aims to tackle the daily struggles of food tracking and budgeting, offering 
       a practical solution to promote sustainability and financial mindfulness.`,
    image:
      "/Projects/Fridge/image_01.png",
    images: [
      "/Projects/Fridge/image_01.png",
      "/Projects/Fridge/image_02.png",
      "/Projects/Fridge/image_03.png",
      "/Projects/Fridge/image_04.png",
      "/Projects/Fridge/image_05.png",
      "/Projects/Fridge/image_06.png",
      "/Projects/Fridge/image_07.png",
      "/Projects/Fridge/image_08.png",
      "/Projects/Fridge/image_09.png",
      "/Projects/Fridge/image_10.png",
      "/Projects/Fridge/image_11.png",
      "/Projects/Fridge/image_12.png",
      "/Projects/Fridge/image_13.png",
      "/Projects/Fridge/image_14.png",
      "/Projects/Fridge/image_15.png",
    ],
    tags: [
      {
        name: "Python",
        logo: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
      },
      {
        name: "Django",
        logo: "https://img.icons8.com/color/512/django.png",
      },
      {
        name: "SQLite",
        logo: "https://static-00.iconduck.com/assets.00/sqlite-icon-2048x909-7nkrc3bm.png",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
      },
      {
        name: "HTML",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp",
      },
      {
        name: "CSS",
        logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      },
      {
        name: "Shell",
        logo: "https://img.icons8.com/color/512/bash.png",
      },
    ],
    category: "web app",
    github: "https://github.com/ChicoState/fridge",
    // hosted: "docomo-399203.web.app",
    member: [
      {
        name: "Amritvir Randhawa",
        img: "https://avatars.githubusercontent.com/u/179989165?v=4",
        linkedin: "https://www.linkedin.com/in/asrandhawa2/",
        github: "https://github.com/codezzoom/",
      },
      {
        name: "Karandeep Dhillon",
        img: "https://avatars.githubusercontent.com/u/89750122?v=4",
        linkedin: "https://www.linkedin.com/in/karandeep-dhillon-2866321ba/",
        github: "https://github.com/ksdhillon1",
      },
      {
        name: "Andrew Moskowitz",
        img: "https://avatars.githubusercontent.com/u/107711050?v=4",
        linkedin: "https://www.linkedin.com/in/andrew-m-moskowitz/",
        github: "https://github.com/ThatOneGuy-96",
      },
    ],
    zipFileUrl: "https://drive.google.com/file/d/1l739M4yhBaj863ChR1inCF1s8hzsDQ3y/view?usp=sharing",
    videoUrl: "/Projects/Fridge/video.mp4",
    similarProjects: [0, 2], // IDs of related projects
  },
];

export default projects;