// Skills Icons
import clangIcon from "./images/skillsIcon/ISO_C++_Logo.svg.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/git_gihub_logo.png"
import RPIIcon from "./images/skillsIcon/java_logo.png"
import SolidworksIcon from "./images/skillsIcon/linux.png"
import codeIcon from "./images/skillsIcon/Python-logo-notext.svg.png"
import isaacsIcon from "./images/skillsIcon/bullet-physics-logo.png"
import airplaneIcon from "./images/skillsIcon/lidar_slam2.png"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"
import googleScholarIcon from "./images/contactIcon/gscholar.png"


// Company icon
import TeslaIcon from "./images/company/Tesla.webp"
import NVIDIAIcon from "./images/company/NVIDIA.webp"
import EcobeeIcon from "./images/company/ecobee.webp"
import UwaterlooIcon from "./images/company/Uwaterloo.webp"
import KhazanahIcon from "./images/company/Khazanah.webp"
import FordIcon from "./images/company/Ford.webp"

// company image
import TeslaImg from "./images/workPhotos/TeslaWork_v2.mp4"
import IsaacSim from "./images/workPhotos/isaac_quadruped.mp4"
import Khazanah from "./images/workPhotos/khazanah.mp4"
import uwaterloo from "./images/workPhotos/uwaterlootaImg.webp"
import ford from "./images/workPhotos/Ford.webp"
import ecobee from "./images/workPhotos/ecobeeProduct.webp"

// School images
import WaterlooLogo from "./images/school/tulsa_logo_quality.png"
import WaterlooImg from "./images/amsaself.webp"


// Helper function for getting text (simplified as we now only support English)
export const getText = (textObj) => {
  // If it's already a string, return as-is
  if (typeof textObj === 'string') return textObj;
  
  // If it's an object, return English or first value
  if (textObj && typeof textObj === 'object') {
    return textObj.en || Object.values(textObj)[0] || '';
  }
  
  // Fallback
  return textObj || '';
};

const siteData = {

  name: "Asma Mohseni",
 
  headerParagraph: "My interests lie in high‑impact software and robotics work, where I can engage with complex systems in depth and help deliver solutions that matter in practice.",

  // Navigation labels
  nav: {
    home: "Home",
    work: "Work",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume"
  },

  // Section titles  
  sections: {
    about: "About",
    nvidia: "University of Tulsa Undergraduate Researcher",
    publications: "Publications",
    education: "Education",
    internships: "Internships",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  },

  // Button text translations
  buttons: {
    explore: "Explore",
    readMore: "Read More",
    close: "Close"
  },

  contactEmail: "asm5800@utulsa.edu",

  education: [
    {
      title: "University of Tulsa",
      para: "Bachelor of Computer Science ",
      imageSrc: WaterlooLogo,
      workImg: WaterlooImg,
      url: "",
      description: [
        "Majoring in Computer Science with minors in Artificial Intelligence and Mathematics, and working as an undergraduate robotics researcher at the Institute for Robotics and Autonomy",
        "Clubs: Software Engineering Club, Artificial Intelligence Club",
        "Relevant coursework: Java Programming, Data Structures, Algorithms, Assembly Language Programming, Programming Languages, Physics II, Numerical Methods, Interaction Design, Introduction to Cybersecurity."
      ],
    }
   
  ],

  projects: [
    {
      title: "Tesla",
      position: "Body Controls Developer - Tesla",
      para: "Developed lighting apps for new Model S/X and Tesla Semi, including Tesla Light Test.",
      imageSrc: TeslaIcon,
      url: "/work/tesla/",
      date: "05/2022 - 08/2022 ",
      description: [
        'Designed "Semi LightTest" feature for controlling 19 unique light groups across 4 controllers in C, displayed at the Tesla Semi Delivery Event by Elon Musk',
        'Set up simulations for the Semi Truck lighting controllers in Python and created Software In a Loop tests using Python, drafted "Semi Light Test" specs on Polarion',
        'Brought up lighting fault detection and lighting alerts for Tesla Semi headlamps, rear lights, and trailer lights using C via CAN network',
        'Created self-tests for checking Semi\'s mirror, latch, steering wheel, and horn and fixed various firmware bugs for Model S/X lighting in C'
      ],
      workImg: TeslaImg,
    },
    {
      title: "NVIDIA",
      position: "Robotics Simulation Engineer - NVIDIA",
      para: "Built realistic sensors and simulated quadruped robots in NVIDIA Isaac Sim's robotics platform.",
      imageSrc: NVIDIAIcon,
      url: "/work/nvidia/",
      date: "01/2022 - 04/2022 ",
      description: [
        "Developed Quadruped extension for unitree A1 robots on Isaac Sim using Python, connected quadruped gait controlers to the quadruped model, and created ROS, ROS2, and Visual Inertial Odometry examples for Isaac Sim.",
        "Created Isaac Sensor extension for simulating physic based sensors such as the contact sensor and IMU sensors using C++ and Python, written USD schema for the sensors, enabling visualization and modification of sensor parameters during runtime from the GUI",
        "Drafted user manual and extension documentations using Sphinx, and created unit tests for the quadruped and Isaac sensor extension."
      ],
      workImg: IsaacSim,
    },

    {
      title: "ecobee",
      position: "Embedded Systems Developer - ecobee",
      para: "Built production test fixtures and CV/ML algorithms for smart thermostat display testing.",
      imageSrc: EcobeeIcon,
      url: "/work/ecobee/",
      date: "05/2021 - 08/2021 ",
      description: [
        "Built display testing pipeline using C++ OpenCV to detect discoloration, misalignment, dead pixels, and poor connections, capable of detecting alignment offsets of 0.5mm and dead pixels under 0.2mm",
        "Prototyped LCD tests using Convolutional Neural Network and TensorFlow with 98% accuracy, won Best Internal Impact Award",
        "Gathered requirements, designed, and developed customer firmware flash and label printer software for the smart thermostats using C++/CLI and .NET framework, logging results using MongoDB, printing labels using ZPL",
        "Drafted documentation and deployed customer firmware flash and label printer software at Wistron factory for Design Validation Test, projected to flash 80000+ units per month in full production"
      ],
      workImg: ecobee,
    },
    {
      title: "University of Waterloo, Faculty of Electrical and Computer Engineering",
      position: "Teaching Assistant - University of Waterloo",
      para: "TA for intro C++ course; led tutorials, graded, designed exams.",
      imageSrc: UwaterlooIcon,
      url: "/work/uwaterloo/",
      date: "09/2020 - 12/2020 ",
      description: [
        "Designed questions on quizzes, midterm, and final and created automated testing using C++ and python to grade 300+ submissions per assessment and provide instantaneous feedback using Python expect library and regular expression based on the SOLID design principle",
        "Lead lab and help sessions for 300+ students assisted with teaching concepts in C++, such as dynamic memory allocation, Object-Oriented Programming, pointers, and linked lists, leads to a significant increase in student grades"
      ],
      workImg: uwaterloo,
    },
    {
      title: "Khazanah National Americas",
      position: "Innovation Developer - Khazanah",
      para: "Explored drone, CV, and AR/VR tech to support investor understanding and decision-making.",
      imageSrc: KhazanahIcon,
      url: "/work/khazanah/",
      date: "01/2020 - 04/2020 ",
      description: [
        "Created a VR game based on Atari's Asteroids for Oculus Go platform, designed game logic, collision physics, and cloud leaderboard using C#, Unity, and Oculus developer toolkit, created asteroid models with blender",
        "Developed novel computer vision-based control for drones using Python OpenCV library, capable of tracking and following an Aruco marker in different lighting conditions up to 10 meters away, and autonomous take-off and land.",
        "Design open-sourced smart germicidal device with UV-C bulbs to sterilize personal devices; won Editor's Choice Award on Instructable"
      ],
      workImg: Khazanah,
    },
    {
      title: "Ford Motor Company",
      position: "Manufacturing Software Developer - Ford",
      para: "Supported F150 Lightning development and testing using Jenkins, TestStand, C#, Python.",
      imageSrc: FordIcon,
      url: "/work/ford/",
      date: "05/2019 - 08/2019 ",
      description: [
        "Developed automation pipeline to flash and systematically test devices routinely on the Jenkins platform for over 100 daily tests",
        "Prototyped utility in C# to flash multiple chips simultaneously on TestStand using C#, increasing efficiency by over 2 times",
        "Debugged audio issues for infotainment chips with TestStand and .Net Framework by recreating issues in controlled settings"
      ],
      workImg: ford,
    },
  ],

// About Section --------------
  aboutParaOne: "I am a computer science senior at the University of Tulsa, minoring in Mathematics and an undergraduate robotics researcher at the Institute for Robotics and Autonomy, where I focus on simulation, control, and autonomous systems.",
  
  aboutParaTwo: "My experience spans software and robotics projects, from building simulation and control stacks for real robots to developing reliable, well-structured code in C++, Python, and ROS/ROS2; I enjoy working on systems that combine solid engineering fundamentals with practical impact",
  
  aboutParaThree: "",

  nvidiaTime: "2024 to Present",

nvidiaExperience: [
    "At NVIDIA, I worked on both Isaac Lab and Isaac Sim, focusing on distinct facets of robotic simulation. In Isaac Lab, I developed scalable humanoid and legged robot models and designed reinforcement learning-based locomotion policies. In Isaac Sim, I concentrated on high-fidelity simulation, building realistic digital twins, synthetic sensor models, and inference pipelines for deploying trained policies through ROS and Isaac Sim. I also presented several talks at NVIDIA GTC on robot composition and software-in-the-loop simulation pipelines."
],

// NVIDIA Carousel Items
nvidiaCarouselItems: [
  // wam
  {
    media: "h1FlipGif", // Will be imported in component
    type: 'video',
      title: "Robotic replication of ancient stone tool use",
      description: "7-axis Barrett robotic arm with force sensing used to replicate prehistoric scraping and cutting motions with experimental stone tools for archaeological research. I programmed the arm in C++ using the Libbarrett library and designed a custom SolidWorks haft that securely clamps irregular stone tools with top-mounted bolts, enabling precise control of pose, contact angle, and applied force. By scraping hides to generate use-wear while logging force–torque data at high rate, the system produces consistent, repeatable wear patterns that would otherwise require long, monotonous human experiments.",
      tags: ["Robotic Manipulation", "Force Sensing", "C++", "Libbarrett", "Experimental Archaeology"],
      highlights: {
        role: "Implemented control software and designed the mechanical haft system to automate archaeological use-wear experiments.",
        tech: "7-DOF Barrett arm, C++ and Libbarrett, force–torque sensing, custom end-effector design in SolidWorks.",
        impact: "Reduced the time and variability of archaeological experiments by automating complex, repetitive scraping motions with precise, repeatable forces and trajectories."
      },
      github: "https://github.com/bagherhassani"
  },
  //pick and place bimanual 
  {
    media: "siggraphTalk",
    type: 'video',
      title: "Dual-Arm Pick-and-Place (2× UR5e — Python)",
      description: "Controlled two Universal Robots UR5e arms from a single Python program with synchronized timing and collision avoidance for shared-object handling. Documented setup steps and safety checks for repeatable lab use. Achieved 90% success (45/50 runs) for synchronized dual-arm pick-and-place and reduced average cycle time by 26.7%.",
      tags: ["Python", "UR5e", "Dual-Arm Manipulation", "Pick-and-Place", "Collision Avoidance", "Synchronized Motion"],
      highlights: {
        role: "Built a single Python controller to coordinate two UR5e arms for synchronized, collision-aware pick-and-place.",
        tech: "Python, synchronized dual-arm motion timing, collision avoidance, shared-object handling, lab deployment documentation.",
        impact: "Achieved 90% success (45/50 runs) and reduced average cycle time by 26.7% for synchronized dual-arm pick-and-place."
      },
      github: "https://github.com/bagherhassani"
  },
  // gripper control 
  {
    media: "claw",
    type: 'video',
      title: "OnRobot Gripper Control (Python + C++)",
      description: "Implemented a small control library to operate OnRobot end-effectors on Universal Robots arms—RG2 and 2FG7 (two‑finger grippers) and VG10 (vacuum gripper). From code, I could set the gripper opening width and grip force, read back the current width for feedback, and switch vacuum channels on/off. I wrote both a Python version (quick iteration) and a C++ version (for tighter integration with our core stack), which made grasping settings easier to repeat across lab experiments.",
      tags: ["Robotic Grippers", "Universal Robots", "OnRobot", "Python", "C++", "End-Effector Control", "Force/Width Control", "Automation"],
      highlights: {
        role: "Implemented Python and C++ gripper-control clients to command OnRobot grippers from code.",
        tech: "XML-RPC over HTTP (UR controller), Python (pycurl/xmlrpc), C++ HTTP client + XML parsing, width/force/vacuum parameterization.",
        impact: "Enabled more repeatable, programmatic grasping with tunable width and force, reducing manual teach-pendant steps during experiments."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "newton",
    type: 'video',
      title: "UR Singularity Detection & Path Correction",
      description: "Implemented a safety check for UR arm motion that detects near‑singular joint configurations and blocks unsafe commands before execution to prevent controller safety stops. When possible, the code auto-corrects the motion by retargeting joint commands before sending them to the robot (fixed ~99% of unsafe cases).",
      tags: ["Universal Robots", "Singularity", "Robot Motion", "Trajectory Checking", "Python", "Safety"],
      highlights: {
        role: "Implemented singularity detection + correction for UR arm joint commands.",
        tech: "Python, joint-space checks for near-singular poses, safe-command gating, joint retargeting before execution.",
        impact: "Prevented safety stops and auto-corrected ~99% of unsafe motions before execution."
      },
      github: "https://github.com/bagherhassani"
  },

  // singularity detection
  {
    media: "frankaMoveitVideo",
    type: 'video',
      title: "Anti‑Tipping Simulation (PyBullet + ZMP)",
      description: "Built and validated a PyBullet simulation of a UR5e mounted on a box for our stability / anti‑tipping study. I imported the robot model, ran motion cases, and computed a ZMP‑based tipping check to predict when the system would become unstable. I used the simulation results to help verify and iterate the project’s anti‑tipping logic before hardware testing.",
      tags: ["PyBullet", "UR5e", "Stability", "Anti‑Tipping", "ZMP", "Simulation", "Robotics"],
      highlights: {
        role: "Simulation support for the stability/anti‑tipping paper (UR5e on a box).",
        tech: "PyBullet physics simulation, imported UR model, ZMP-based tipping criterion, test-case sweeps and result comparison.",
        impact: "Helped validate stability behavior in simulation and reduced risk before running experiments on hardware."
      },
      github: "https://github.com/bagherhassani"
  },

  // smooth trajecory generation
  {
    media: "urLousdVideo",
    type: 'video',
      title: "ZED Object Following (ROS 2)",
      description: "Built an end-to-end object-following system for a wheeled robot using a ZED depth camera and OpenCV. The robot tracks a blue target, estimates its 3D position (x, y, z), and publishes ROS 2 `Twist` commands (linear.x, angular.z) so it follows while keeping the target centered and at a safe distance.",
      tags: ["ROS 2", "ZED Depth Camera", "OpenCV", "3D Localization", "Wheeled Robot", "Visual Servoing"],
      highlights: {
        role: "Designed and implemented the full perception-to-control loop for object following.",
        tech: "OpenCV color segmentation, ZED depth for 3D target localization, ROS 2 publishers, `geometry_msgs/Twist` control.",
        impact: "Enabled reliable real-time following behavior with stable distance and heading control."
      },
      github: "https://github.com/bagherhassani"
  },
  // singularity detection
  
  
  
],

// Projects Carousel Items
projectsCarouselItems: [
  {
    media: "airplaneImage",
    type: 'image',
      title: "Airplane Project (2020)",
      subtitle: "The sky is calling!",
      description: "In this project, I built a remote controlled airplane from scratch using raspberry pi and esp8266 modules, and designed software and mechanical architectures from scratch in a team of two.",
    buttons: [
      {
          text: "Read More",
        url: "https://github.com/The-Airplane-Project/Remote-Controlled-Airplane"
      }
    ]
  },
  {
    media: "watoImage",
    type: 'image',
      title: "Watonomous",
      subtitle: "Bolty!",
      description: "Watonomous is a University of Waterloo design team that turns a chevy bolt to a level 4 autonomous vehicle. At Watonomous, I worked on local planning for the vehicle, particularly with the MPC controller and gained valuable experience with ROS.",
    buttons: [
      {
          text: "Read more",
        url: "https://www.watonomous.ca/"
      }
    ]
  },
  {
    media: "capstoneVideo",
    type: 'video',
      title: "Capstone Project (2023)",
      subtitle: "Multi-robot exploration and SLAM in a simulated warehouse",
      description: "Multi-robot SLAM system for exploring and mapping a 80000 sqft virtual warehouse.",
    buttons: [
      {
          text: "Read more",
        url: "https://github.com/FireScopeRobotics"
      }
    ]
  },
  {
    media: "webappImg",
    type: 'image',
      title: "Webapp Hackathon Projects",
      subtitle: "Best Use of Google Cloud Award (Purrtector, NWHacks 2021)",
      description: "Intelibatch (left) is a webapp for displaying and predicting COVID19 cases across North America using React (front end), Flask (back end), and Tensorflow (prediction) to compute the optimal batch size for repeated testing. Purrtector (right) is a chrome extension for encouraging planet positive behaviors by rewarding users with digital pets using React and Flask.",
    buttons: [
      {
          text: "Intelibatch",
        url: "https://devpost.com/software/pool-sampler"
      },
      {
          text: "Purrtector",
        url: "https://devpost.com/software/purrtech"
      }
    ]
  },
  {
    media: "wearableImg",
    type: 'image',
      title: "Wearable Hackathon Projects",
      subtitle: "1st Place (VisionSense, MakeUofT 2019)",
      description: "VisionSense (left) is an IoT outfit to haptically guide users with visual impairments/obstructions while monitoring their environment. Nightlight (right) is a wearable that allows bike users to signal turns at night via motion-sensing technologies which will activate turn lights.",
    buttons: [
      {
          text: "VisionSense",
        url: "https://devpost.com/software/visionsense"
      },
      {
          text: "NightLight",
        url: "https://devpost.com/software/team-18-go-team"
      }
    ]
  },
  {
    media: "mte380Img",
    type: 'image',
      title: "BOFA, the Line Follower Robot",
      subtitle: "2nd highest competition mark",
      description: "Lead the mechanical design for a line following robot using SolidWorks, drafted Bill of Material, and oversee software, mechanical, and electrical developments as project manager",
    buttons: [
      {
          text: "Read More",
        url: "https://github.com/B-O-F-A"
      }
    ]
  },
  {
    media: "hisecurityImage",
    type: 'image',
      title: "HiSecurity!",
      subtitle: "Hack the north, 2019",
      description: "This camera system which utilizes machine vision (OpenCV and Sktlearn) to physically track and identify faces using the stepper motors onboard. The handy ui also enables users to track the system remotely and in real time.",
    buttons: [
      {
          text: "Read More",
        url: "https://devpost.com/software/acs-htn2019"
      }
    ]
  },
  {
    media: "vexImg",
    type: 'image',
      title: "VEX Robotics",
      subtitle: "Finalists, Alberta Provincial Championship 2017 and 2018",
      description: "Over the three years, we explored various robotics systems such as holonomic drives, reverse double four bar lifts, and even learned C programming and programed PID controllers from scratch in a team of three.",
    buttons: [
      {
          text: "Read More",
        url: "https://globalnews.ca/video/3355924/sir-winston-churchill-students-head-to-vex-robotics-world-championship/"
      }
    ]
  },
  {
    media: "pilotImg",
    type: 'image',
      title: "Pilot",
      subtitle: "\"Oh! I slipped the surly bonds of earth and danced the skies on bright yellow wings.\"",
      description: "I finally touched the sky when I earned my glider pilot license in 2016 and private pilot license in 2017. This was an breathtaking experiences that inspires me to build robotics airplanes to this date.",
    buttons: []
  }
],


  skills: [
    {
      img: codeIcon,
      para:
        "Python",
    },
    {
      img: clangIcon,
      para:
        "C++",
    },
    
    {
      img: RPIIcon,
      para:
        "Java and OOP",
    },
    {
      img: rosIcon,
      para:
        "ROS, ROS2, Gazebo, Rviz",
    },
    {
      img: openCVIcon,
      para:
        "Git and Github",
    },
    {
      img: SolidworksIcon,
      para:
        "Linux, Bash, Shell Scripting",
    },
    
    {
      img: isaacsIcon,
      para:
        "Pybullet Physics Engine",
    },
    {
      img: airplaneIcon,
      para:
        "Computer Vision (OpenCV + Depth Cameras)",
    },
    
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's chat about robots!",
  social: [

    { img: githubIcon, 
      url: "https://github.com/stevenf7"
    },
    {
      img: googleScholarIcon,
      url: "https://scholar.google.com/citations?hl=en&user=0YSkT7UAAAAJ",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/stevenfeng7/",
    },

  ],

  // End Contact Section ---------------
}

export default siteData;
