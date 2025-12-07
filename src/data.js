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
import WaterlooImg from "./images/school/waterloo_eng_img.webp"


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

  name: "Baqer Hassani",
 
  headerParagraph: "I am a robotics systems engineer passionate about bringing autonomous and biomimetic robots to life.",

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

  contactEmail: "jy5feng@uwaterloo.ca",

  education: [
    {
      title: "University of Tulsa",
      para: "Bachelor of Computer Science with a Minor in Artificial Intelligence",
      imageSrc: WaterlooLogo,
      workImg: WaterlooImg,
      url: "https://uwaterloo.ca/mechanical-mechatronics-engineering/",
      description: [
        "GPA: 3.7, specialized in robotics, artificial intelligence, control systems, and embedded systems",
        "Clubs: SAE AutoDrive Challenge (Level 4 Autonomous Vehicle), Waterloop (Hyperloop)",
        "Scholarships: President's Scholarship, Sanford Flaming Foundation Award, Term Dean's Honor List"
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
  aboutParaOne: "I am a robotics engineer with expertise in simulation development, narrowing the sim-to-real gap by creation of high-fidelity virtual environments to accelerate robotic testing and deployment. I am particularly passionate about reinforcement learning and imitation learning, exploring control strategies that enable safer, more human-like interactions.",
  
  aboutParaTwo: "I earned my Bachelor's degree in Mechatronics Engineering from the University of Waterloo. I also conducted human-robot interaction research at the Active Robotics Interaction Lab under Dr. Yue Hu, with a publication on IEEE Robotics and Automation Letters.",
  
  aboutParaThree: "When I'm not building robots, you can find me hiking, playing my clarinet and accordion, or exploring new cuisines around the city.",

  nvidiaTime: "2024 to Present",

nvidiaExperience: [
    "At NVIDIA, I worked on both Isaac Lab and Isaac Sim, focusing on distinct facets of robotic simulation. In Isaac Lab, I developed scalable humanoid and legged robot models and designed reinforcement learning-based locomotion policies. In Isaac Sim, I concentrated on high-fidelity simulation, building realistic digital twins, synthetic sensor models, and inference pipelines for deploying trained policies through ROS and Isaac Sim. I also presented several talks at NVIDIA GTC on robot composition and software-in-the-loop simulation pipelines."
],

// NVIDIA Carousel Items
nvidiaCarouselItems: [
  {
    media: "gr1ImitationVideo",
    type: 'video',
      title: "GR1 humanoid robot imitation learning policy",
      description: "GR1 humanoid robot demonstrating imitation learning capabilities for human-like movements, using a combination of trajectory optimization, motion capture data, and reinforcement learning to reproduce human demonstrations in real time. The system is trained in simulation and deployed on hardware with domain randomization and robust state estimation, allowing the robot to adapt to variations in contact, friction, and payload. This project also includes an evaluation pipeline for stability, safety margins, and energy efficiency across a large number of test motions. ",
      tags: ["ROS2", "Isaac Sim", "Reinforcement Learning"],
      highlights: {
        role: "Designed and trained GR1 imitation learning policies from trajectory data, tuning reward structure and curriculum.",
        tech: "Isaac Lab, ROS2, motion capture pipelines, GPU-accelerated RL training.",
        impact: "Enabled stable human-like whole-body motions that transfer from sim to hardware with robust performance."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "h1FlipGif", // Will be imported in component
    type: 'video',
      title: "H1 humanoid robot tries to backflip",
      description: "H1 attempted a backflip as part of a locomotion robustness study, exploring the limits of dynamic balance and recovery strategies on a torque-controlled humanoid platform. We designed a series of progressively more aggressive maneuvers, collecting high-rate joint torque and IMU data to analyze failure modes and iterate on the controller. The work highlights the challenges of contact-rich motions and motivates future work on real-time model predictive control for extreme behaviors.",
      tags: ["Humanoid", "Simulation", "Control"],
      highlights: {
        role: "Prototyped extreme-maneuver controllers and analyzed failure cases for humanoid backflip attempts.",
        tech: "Torque-controlled humanoid models, physics simulation, Python analysis of joint-torque and IMU logs.",
        impact: "Stress-tested balance and recovery strategies, informing safer controllers for aggressive motions."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "h1TrainVideo",
    type: 'video',
      title: "Teach H1 humanoids how to walk",
      description: "H1 robot during training phase, where a curriculum of walking tasks is used to gradually increase speed, step height, and terrain difficulty. The training environment leverages domain randomization on mass, friction, and contact models so that the resulting policy transfers to real hardware with minimal fine tuning. Additional tooling was built to visualize gait metrics, foot swing trajectories, and center-of-mass evolution over time to help debug and improve policies.",
      tags: ["Locomotion", "Reinforcement Learning"],
      highlights: {
        role: "Built and tuned locomotion training environments and debugging tools for H1 humanoid walking policies.",
        tech: "Reinforcement learning, domain randomization, Python tooling for gait metric visualization.",
        impact: "Produced walking policies that remain stable across speeds, terrains, and transfer better to real hardware."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "urLousdVideo",
    type: 'video',
      title: "Robotics arm pick and place example",
      description: "Demonstrating OpenUSD integration with Isaac Sim for robotics applications and digital twin workflows, where a UR arm is driven through a series of scripted and learned pick-and-place motions. The scene graph is fully described in USD, enabling incremental updates to robot kinematics, sensors, and environment assets without breaking downstream tools. This project also showcases live link capabilities between the simulator and external ROS nodes for motion planning and perception.",
      tags: ["OpenUSD", "Isaac Sim", "Digital Twin"],
      highlights: {
        role: "Built pick-and-place scenes and workflows that connect Isaac Sim with external motion planning stacks.",
        tech: "OpenUSD scene graphs, Isaac Sim, ROS-based planning and control.",
        impact: "Showcased how digital twins can be updated quickly while keeping motion planning and perception pipelines stable."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "frankaMoveitVideo",
    type: 'video',
      title: "Franka robot moveit integration",
      description: "Franka robot demonstrating MoveIt integration in both simulation and real hardware, including collision-aware motion planning, Cartesian path generation, and grasp planning for a variety of tabletop objects. The stack uses standardized ROS2 control interfaces and MoveIt task constructors, which makes it easy to swap in different planners and constraints. Logging and visualization tools were added to inspect trajectory quality, joint limits, and execution timing.",
      tags: ["MoveIt", "Manipulation", "ROS"],
      highlights: {
        role: "Integrated Franka arms with MoveIt for collision-aware motion planning and grasping tasks.",
        tech: "ROS / ROS2 control, MoveIt task constructors, trajectory logging and visualization.",
        impact: "Delivered reusable motion-planning pipelines for tabletop manipulation both in sim and on real hardware."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "frankaDrawerVideo",
    type: 'video',
      title: "Reinforcement learning based drawer manipulation",
      description: "Franka robot performing drawer manipulation task, where an end-to-end reinforcement learning policy is trained to discover robust strategies for grasping, pulling, and closing a drawer under sensor noise and varying friction. The policy uses visual and proprioceptive observations and is trained in simulation before being validated on a physical drawer rig. The work emphasizes safe exploration, recovery behaviors, and accurate contact modeling.",
      tags: ["Reinforcement Learning", "Manipulation"],
      highlights: {
        role: "Trained and evaluated RL policies for contact-rich drawer manipulation on a Franka arm.",
        tech: "End-to-end RL, vision and proprioception observations, contact-rich simulation.",
        impact: "Achieved robust open/close behaviors under noise and friction changes, with policies validated on hardware."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "claw",
    type: 'video',
      title: "High fidelity claw simulation",
      description: "High fidelity claw simulation for grasping tasks, built on top of a physically based engine with detailed contact, friction, and actuator models. The system supports scripted scenarios for benchmarking and random object generation for large-scale data collection. This setup is used to evaluate grasp quality metrics, test control policies, and generate synthetic datasets for downstream learning pipelines.",
      tags: ["Simulation", "Grasping"],
      highlights: {
        role: "Developed grasping simulation scenarios and metrics for a high-fidelity parallel jaw gripper.",
        tech: "Physically based simulation, contact and friction modeling, scripted scenario generation.",
        impact: "Created a reusable testbed for evaluating grasp policies and generating synthetic training data."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "leatherbackVideo",
    type: 'video',
      title: "Ackermann steering simulation for RC car",
      description: "Ackermann steering simulation for an RC car platform, including a full vehicle dynamics model, configurable tire friction, and different terrain types. The project implements a stack of controllers from pure pursuit to MPC, allowing us to compare tracking performance for aggressive maneuvers and tight turns. It also serves as a testbed for validating autonomous driving algorithms before deploying them on physical hardware.",
      tags: ["Ackermann Steering", "Vehicle Dynamics"],
      highlights: {
        role: "Modeled an RC car with Ackermann steering and implemented multiple path-tracking controllers.",
        tech: "Vehicle dynamics simulation, pure-pursuit and MPC controllers, terrain and friction parameter sweeps.",
        impact: "Provided a safe environment to compare controllers and tune algorithms before on-vehicle testing."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "carterOutdoorVideo",
    type: 'video',
      title: "Outdoor robot simulation",
      description: "Outdoor robot simulation that combines LiDAR, RGB-D, and GPS/IMU fusion to navigate large-scale environments with uneven terrain and clutter. The scenario is used to prototype global and local planners, evaluate obstacle avoidance behavior, and stress-test localization under sensor dropouts. This project demonstrates how high-fidelity simulation accelerates development before field testing.",
      tags: ["Outdoor Robotics", "Simulation"],
      highlights: {
        role: "Built large-scale outdoor navigation scenarios and planners for a simulated mobile robot.",
        tech: "LiDAR and RGB-D sensing, GPS/IMU fusion, global and local planning stacks.",
        impact: "Reduced field-testing risk by shaking out navigation and localization issues entirely in simulation first."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "agilityWalkVideo",
    type: 'video',
      title: "Agility humanoid robot locomotion policy",
      description: "Agility humanoid robot demonstrating walking capabilities over a range of speeds and terrain types, including stairs, ramps, and uneven ground. The locomotion policy is trained in a GPU-accelerated simulator and then transferred to the real platform, with an emphasis on smoothness, robustness to pushes, and low energy consumption. Diagnostic tools help compare simulated and real trajectories to close the sim-to-real gap.",
      tags: ["Humanoid", "Locomotion"],
      highlights: {
        role: "Helped design and evaluate locomotion policies for Agility humanoid robots across varied terrains.",
        tech: "GPU-accelerated simulation, locomotion RL, diagnostics comparing sim and real trajectories.",
        impact: "Improved robustness and energy efficiency of humanoid walking while narrowing the sim-to-real gap."
      },
      github: "https://github.com/bagherhassani"
  }
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
      img: clangIcon,
      para:
        "C++",
    },
    {
      img: codeIcon,
      para:
        "Python",
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
        "Lidar, SLAM, Path Planning, Computer Vision",
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
