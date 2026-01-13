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
      url: "https://github.com/Asma199-alt"
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
