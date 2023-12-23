import team from "./Assets/team.gif";
import digilogo from "./Assets/sponsorsLogos/digilogo.png";
import shutterbugs from "./Assets/sponsorsLogos/shutterbugs.png";
import streamyard from "./Assets/sponsorsLogos/streamyard1.JPG";
import me from "./Assets/teami/Vashishth_Patel.jpg";
import Ryah from "./Assets/teami/Ryah.jpg";
import masqati from "./Assets/sponsorsLogos/masqati.png"
import xyz from "./Assets/sponsorsLogos/xyz.png"
import ecell from "./Assets/sponsorsLogos/ecell.png"
import pistaHouse from "./Assets/sponsorsLogos/pistaHouse.jpg"
import InterviewBuddy from "./Assets/sponsorsLogos/InterviewBuddy.png"
import DigitalOcean from "./Assets/sponsorsLogos/DigitalOcean.png"
import Taskade from "./Assets/sponsorsLogos/taskade.png"
import Aops from "./Assets/sponsorsLogos/Aops.png"
import SnapSeva from "./Assets/sponsorsLogos/snapseva.png"
import echo3d from "./Assets/sponsorsLogos/echo3d.png"




const TOP_SECTION = {
  TITLE: "HackEnvision 2.0",
  Typed_effect: ["14th January 2024", "Win awesome prizes", "Events And Sessions"],
  SHORT_DESCRIPTION:
    "Join us on 14th of January 2024 for 8 hours of creation, innovation, & fun with over 250+ students.",
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
  TITLE: "What is HackEnvision 2.0?",
  LONG_DESCRIPTION:
    "HackEnvision 2.0 is the 2nd edition of IEEE NSAKCET Student Branch’s largest hackathon, bringing together 250+ students from around the city to learn about new technologies, build innovative projects, and share their work with the community! The hackathon will take place over 8 hours, on 14th of January. It will be hosted at Nawab Shah Alam Khan College of Engineering and Technology (NSAKCET), Malakpet, Hyderabad.",
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
      Name: "Shaikh Rayyan",
      role: "Lead Organizer",
      github: "https://github.com/mdmohsin7",
      linkedin: "https://www.linkedin.com/in/thatceokid/",
      img: "https://ik.imagekit.io/rayyan102/HackEnvision%202.0/tr:w-370,h-370//r1.2.1.jpg"
    },
    {
      Name: "Mehvish Fatima",
      role: "Co-Organizer",
      github: "#",
      linkedin: "https://www.linkedin.com/in/nida-meher-84aa5a1a8",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/WIE/tr:w-370,h-370/mehvish_cse_MhADXDewms"
    },
    {
      Name: "Musab Latifi",
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
      Name: "Saad Abdul Hakeem",
      role: "Media Head",
      github: "https://github.com/notmobilal",
      linkedin: "https://www.linkedin.com/in/notmobilal/",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/bilal.JPG"
    },
  ],
  [
    // Array 2
    {
      Name: "Hedayathullah Imamuddin",
      role: " Outreach Head",
      github: "https://github.com/mohammedshoaibchoudry78",
      linkedin: "https://www.linkedin.com/in/mohammedshoaibchoudry/",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Leadership_Team/tr:w-370,h-370/hedayath_SPiV0uUFO"
    },
    {
      Name: "Syed Habeeb Hussaini",
      role: " Sponsorship Head",
      github: "#",
      linkedin: "#",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Habeeb_Ali_PhxEqK3fR.jpg"
    },
    {
      Name: "Hussain Abid",
      role: "Content Head",
      github: "#",
      linkedin: "https://www.linkedin.com/in/mehmood-sameer-112992214",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/CS/tr:w-370,h-370/hussain_1-lcRKWRJ"
    },
  ],
  [
    // Array 2
    {
      Name: "Mohammed Ismail Ali",
      role: "Management Head",
      github: "#",
      linkedin: "#",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Faizan_mq-cWwT6l.JPG"
    },
    {
      Name: "Mohammed Mohsin",
      role: "Mentor",
      github: "https://github.com/mdmohsin7",
      linkedin: "https://www.linkedin.com/in/thatceokid/",
      img: "https://ik.imagekit.io/ieeensakcet/profiles/Leadership_Team/tr:w-370,h-370/mohsin_BkDa0R813c"
    },
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
  [{ src: InterviewBuddy, link: "https://interviewbuddy.in/" },{ src: SnapSeva, link: "https://snapseva.com/" }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const silversponsorLogos = [
  [{ src: xyz, link: "https://www.gen.xyz/" }, { src: Taskade, link: "https://www.taskade.com/" }, { src: echo3d, link: "https://www.echo3d.com/" }], //Array 1
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
        content: "HackEnvision is open to all undergraduate, high school students, and middle school students from all schools. All schools and colleges students can attend this event offline."
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
