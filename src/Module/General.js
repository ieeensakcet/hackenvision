import team from "./Assets/team.gif";
import digilogo from "./Assets/sponsorsLogos/digilogo.png";
import devfolio from "./Assets/sponsorsLogos/devfolio.png";
import filecoin from "./Assets/sponsorsLogos/filecoin.png";
import polygon from "./Assets/sponsorsLogos/polygon.png";
import shutterbugs from "./Assets/sponsorsLogos/shutterbugs.png";
import alan from "./Assets/sponsorsLogos/alan.png";
import koii from "./Assets/sponsorsLogos/koii.png";
// import celo from "./Assets/sponsorsLogos/celo.png";
import echo3d from "./Assets/sponsorsLogos/echo3d.png";
import streamyard from "./Assets/sponsorsLogos/streamyard1.JPG";
import wolfram from "./Assets/sponsorsLogos/wolfram.jpg";
import gfg from "./Assets/sponsorsLogos/gfg.png";
import certopus from "./Assets/sponsorsLogos/certopus.png";
import prayosys from "./Assets/sponsorsLogos/prayosys.png";
import shivalika from "./Assets/sponsorsLogos/shivalika.JPG";
import shivam from "./Assets/sponsorsLogos/shivam.JPG";
import jay_maharaj from "./Assets/sponsorsLogos/jay_maharaj.jpeg";
import jay_bhavani from "./Assets/sponsorsLogos/jay_bhavani.jpeg";
import maruti from "./Assets/sponsorsLogos/maruti.jpeg";
import replit from "./Assets/sponsorsLogos/replit.png";
import taskade from "./Assets/sponsorsLogos/taskade.png";
import interviewbuddy from './Assets/sponsorsLogos/ib.png'
import digitalocean from './Assets/sponsorsLogos/do.png'
import cuvette from './Assets/sponsorsLogos/cuvette.png'
import postman from './Assets/sponsorsLogos/pm.svg'

import zenisha from "./Assets/teami/Zenisha_Savaliya.jpeg";
import dhruvi from "./Assets/teami/Dhruvi_Sherathiya.jpg";

import me from "./Assets/teami/Vashishth_Patel.jpg";
import dharmesh from "./Assets/teami/Dharmesh_Poriya.jpg";
import Ryah from "./Assets/teami/Ryah.jpg";
import nirali from "./Assets/teami/Nirali.jpeg";
import smit from "./Assets/teami/smit.jpeg";
import manav from "./Assets/teami/manav.jpg";
// import ruchit from "./Assets/teami/Ruchit_Parekh.jpg";
import parshwa from "./Assets/teami/Parshwa_Mehta.jpg";
import ayush from "./Assets/teami/Ayush_Rudani.jpg";
import aneri from "./Assets/teami/Aneri_Sonani.jpg";
import masqati from "./Assets/sponsorsLogos/masqati.png"
import solana from "./Assets/sponsorsLogos/Solana-Colored.png"
import xyz from "./Assets/sponsorsLogos/xyz.png"
import ecell from "./Assets/sponsorsLogos/ecell.png"
import pistaHouse from "./Assets/sponsorsLogos/pistaHouse.jpg"
import InterviewBuddy from "./Assets/sponsorsLogos/InterviewBuddy.png"
import DigitalOcean from "./Assets/sponsorsLogos/DigitalOcean.png"
import Taskade from "./Assets/sponsorsLogos/taskade.png"



const TOP_SECTION = {
  TITLE: "HackEnvision",
  Typed_effect: ["21st January 2023", "Win awesome prizes", "Events And Sessions"],
  SHORT_DESCRIPTION:
    "Join us on 21st of January 2023 for 8 hours of creation, innovation, & fun with over 150+ students.",
  IMG_SRC: team,
  // DISCORD_LINK: "https://discord.gg/cvHPEK7U3v",
  JUDGES_FORM_LINK:
    "#Jugdes Form Link",
  HACKERS_REGISTRATION_FORM_LINK:
    "#Hackers Registration devfolio link"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/ieeensakcet/",
  // discord: "https://discord.gg/cvHPEK7U3v",
  linkedin: "https://www.linkedin.com/company/ieeensakcet/",
  twitter: "https://twitter.com/ieeensakcet",
  email: "hackenvision@ieeensakcet.com",
  mail: "hackenvision@ieeensakcet.com"
};

const MIDDLE_SECTION = {
  TITLE: "What is HackEnvision?",
  LONG_DESCRIPTION:
    "HackEnvision is IEEE NSAKCET Student Branch’s largest hackathon, bringing together 150+ students from around the city to learn about new technologies, build innovative projects, and share their work with the community! The hackathon will take place over 8 hours, on 21st of January. It will be hosted at Nawab Shah Alam Khan College of Engineering and Technology (NSAKCET), Malakpet, Hyderabad.",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "#Volunteer form link"
  },
  JOIN_TEAM: {
    required: true,
    src: "#Join team link"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

const calenderStartingDate = {
  month: 1,
  year: 2023
}


const schedule = [
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Opening Ceremoney",
        "timings": "8 AM - 9 AM",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "11 AM - 12 PM",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "12 AM - 1 Pm",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "17-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "12 AM - 1 Pm",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "17-7-2022",
    "events": [
      {
        "title": "Closing Ceremoney",
        "timings": "6 PM - 7 PM",
        "link": "https://google.com"
      }
    ]
  },
]

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Overall First",
      content:
        "The first overall prize will be given to a project that outstands all other submissions."
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "Overall Second",
      content:
        "The second overall prize will be given to the second-best project in the hackathon."
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Overall Third",
      content:
        "The third overall prize will be given to the third-best project in the hackathon."
    }
  ],
  [
    //Array 2
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: " Best Women Team",
      content: "Your project will qualify for this category if your all team members are women."
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Best DDU Team",
      content: "Your project will qualify for this category if your all team members are from DDU."
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ],
  [
    //Array 3
  ]
];

const TeamInfo = [
  [
    // Array 1
    {
      Name: "Mohammed Mohsin",
      role: "Lead Organizer",
      github: "https://github.com/mdmohsin7",
      linkedin: "https://www.linkedin.com/in/thatceokid/",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Leadership_Team/tr:w-370,h-370/mohsin_BkDa0R813c"
    },
    {
      Name: "Nida Meher",
      role: "Co-Organizer",
      github: "#",
      linkedin: "https://www.linkedin.com/in/nida-meher-84aa5a1a8",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Leadership_Team/tr:w-370,h-370/nida_TgGbAvj-w"
    },
    {
      Name: "Mohd Mustafa Akram",
      role: "Logistics Head",
      github: "https://github.com/mustafaakram1",
      linkedin: "https://www.linkedin.com/in/mustafamohd/",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Leadership_Team/tr:w-370,h-370/akram_LQ8W_MAU7"
    }
  ],
  [
    // Array 2
    {
      Name: "Syed Affan",
      role: "Tech Head",
      github: "https://github.com/affan880",
      linkedin: "https://www.linkedin.com/in/syed-affan/",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/tr:w-370,h-370/affan.JPG"
    },
    {
      Name: "Mohammed Jaffer Sulaiman",
      role: "Design Head",
      github: "#",
      linkedin: "#",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Jaffer_4FPIjSt0nT.jpg"
    },
    {
      Name: "Mohammed Bilal",
      role: "Media Head",
      github: "https://github.com/notmobilal",
      linkedin: "https://www.linkedin.com/in/notmobilal/",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/bilal.JPG"
    },
  ],
  [
    // Array 2
    {
      Name: "Mohammed Shoaib",
      role: " Outreach Head",
      github: "https://github.com/mohammedshoaibchoudry78",
      linkedin: "https://www.linkedin.com/in/mohammedshoaibchoudry/",
      img: "https://ik.imagekit.io/h79kni0wxmd/20230116_152352_Fa5vpd1uT.jpg"
    },
    {
      Name: "Syed Habeeb Hussaini",
      role: " Sponsorship Head",
      github: "#",
      linkedin: "#",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Habeeb_Ali_PhxEqK3fR.jpg"
    },
    {
      Name: "Mehmood Sameer",
      role: "Content Head",
      github: "#",
      linkedin: "https://www.linkedin.com/in/mehmood-sameer-112992214",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Leadership_Team/tr:w-370,h-370/sameer_UEFRGkQAu"
    },
  ],
  [
    // Array 2
    {
      Name: "Mohammed Faizan",
      role: "Management Head",
      github: "#",
      linkedin: "#",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Faizan_mq-cWwT6l.JPG"
    }
  ]
];

const JudgesInfo = [
  [
    // Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Moon",
      role: "Manager",
      github: "",
      linkedin: "",
      img: Ryah
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    // Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ]
];

const sponsorLogos = [
  // [{ src: cfc }, { src: sublime }, { src: echoAR }], //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const titlesponsorLogos = [
  [{ src: masqati, link: "https://www.masqati.com/" }, { src: pistaHouse, link: "https://www.pistahouse.in/" }, { src: DigitalOcean, link:"https://www.digitalocean.com/"}], //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const goldsponsorLogos = [
  // [  ], //Array 1
  [{ src: InterviewBuddy, link: "https://interviewbuddy.in/" }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const silversponsorLogos = [
  [{ src: xyz, link: "https://www.gen.xyz/" }, { src: Taskade, link:"https://www.taskade.com/"}], //Array 1
  // [{ src: alan, link: "https://alan.app/" }, { src: shivam, link: "#" }],
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const bronzeponsorLogos = [
  [{ src: ecell, link: "https://ecellmjcet.com/" }], //Array 1
  // [{ src: koii, link: "https://www.koii.network/" }, { src: postman, link: "https://postman.com/" }, {src: prayosys, link: "https://prayosys.com/"}],
  // [{src: shivalika, link: "#"}, {src: cuvette, link: "https://www.cuvette.tech/"}],
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const FoodLogos = [
  [{ src: pistaHouse, link: "https://www.pistahouse.in/"}],
];

const designlogo = [
  [{ src: digilogo, link: "https://www.instagram.com/digicosmic_studio/" }, { src: streamyard, link: "https://streamyard.com/" }, { src: shutterbugs, link: "https://www.instagram.com/shutterbugs_ddu/?hl=en" }]
];


const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
          'A hackathon is an 8 hour event where "hackers" will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: "Who can attend?",
        content: "HackEnvision is open to all undergraduate, high school students, and middle school students from all schools. Unfortunately, only NSAKCET and surrounding college students can attend this event offline. For the rest of the other students, the event would be online."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content: "No worries, we love to welcome first-time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathons and hacking in general."
      },
      {
        label: "How team formation works?",
        content: "You can form a team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team."
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content: "All you need is to register yourself on devfolio and join discord, we will guide you through everything there."
      },
      {
        label: "I have more questions?",
        content: "Reach us directly at (hackenvision@ieeensakcet.com) we would be happy to help you."
      }
      ,
      {
        label: "Can I participate as a individual?",
        content: "Yes your are allowed to participate as an individual but since our goal is collaborative learning, we encourage everyone to participate as a team of at least two people."
      }
      ,
      {
        label: "Will there be swag?",
        content: "Yes, Participants and winners will receive swags, certificates, promo codes, and much more!"
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  titlesponsorLogos,
  goldsponsorLogos,
  silversponsorLogos,
  bronzeponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate,
  designlogo,
  FoodLogos
};
