import hostel1 from "../assets/hostel1.png";
import hostel2 from "../assets/hostel2.png";
import hostel3 from "../assets/hostel3.png";
import hostel4 from "../assets/hostel4.png";
import hostel5 from "../assets/hostel5.png";
import college2 from "../assets/college2.png";
import college3 from "../assets/college3.png";
import college5 from "../assets/college5.png";
import receipe1 from "../assets/receipe 1.png";
import receipe2 from "../assets/receipe 2.png";
import receipe3 from "../assets/receipe 3.jpeg";
import password1 from "../assets/password1.svg";
import password2 from "../assets/password2.png";
import landing1 from "../assets/landing1.png";
import landing2 from "../assets/landing2.png";
import landing3 from "../assets/landing3.png";
import landing4 from "../assets/landing4.png";
import landing5 from "../assets/landing5.png";

export const projects = [
  {
    title: "Hostel Management System",
    frontEndCodeUrl: "https://github.com/ajardeen/Hostel-Management-Frontend",
    backEndCodeUrl: "https://github.com/ajardeen/Hostel_Management_Backend",
    demoUrl: "https://hosteledge-management-system-ajar.netlify.app/",
    desc: "A full-featured system for efficient hostel operations, including room allocation, maintenance requests, billing, resident management, and financial reporting. It streamlines workflows and enhances user experience for administrators, staff, and residents.",
    techStacks: [
      "React.js",
      "TailwindCSS",
      "Express.js",
      "MongoDB",
      "PayPal",
      "NodeMailer",
      "Axios",
    ],
    images: [hostel1, hostel2, hostel3, hostel4, hostel5],
    data: [
      { title: "Room Allocation", features: ["Manage room availability and assignments.", "Real-time updates for check-ins and check-outs."] },
      { title: "Maintenance Requests", features: ["Submit and track maintenance issues.", "Task management for staff."] },
      { title: "Billing", features: ["Calculate charges, manage invoices, and track payments."] },
      { title: "Resident Management", features: ["Store and update resident profiles and records."] },
      { title: "Financial Reporting", features: ["Generate and analyze revenue and expenses with charts."] },
      { title: "User Roles", features: ["Define roles and permissions for users."] },
      { title: "Notifications", features: ["Send alerts for events and updates via email."] },
    ],
  },
  {
    title: "Placement Management System",
    frontEndCodeUrl: "https://github.com/ajardeen/College-Placement-Management-FrontEnd",
    backEndCodeUrl: "https://github.com/ajardeen/College-Placement-Management-Backend",
    demoUrl: "https://college-placement-system-ajar.netlify.app/home",
    desc: "A platform to streamline college placements, handling student applications, interview scheduling, company coordination, and detailed reporting. Built with MERN stack and TailwindCSS, it integrates tools like Zoom API for seamless functionality.",
    techStacks: [
      "React.js",
      "TailwindCSS",
      "Express.js",
      "MongoDB",
      "Zoom API",
      "NodeMailer",
      "Framer Motion",
      "Axios",
    ],
    images: [ college2, college3, college5],
    data: [
      { title: "Application Management", features: ["Submit applications and track statuses."] },
      { title: "Interview Scheduling", features: ["Schedule and manage interviews with notifications."] },
      { title: "Company Coordination", features: ["Post job openings, review applications, and make hiring decisions."] },
      { title: "Placement Drives", features: ["Organize drives and track participation."] },
      { title: "Recruitment Tracking", features: ["Analyze metrics and generate detailed reports."] },
      { title: "Academic Integration", features: ["Sync academic records for accurate data."] },
      { title: "Reports", features: ["Detailed activity reports and graphical insights."] },
    ],
  },
  {
    title: "Recipe App",
    frontEndCodeUrl: "https://github.com/ajardeen/recipe-app",
    backEndCodeUrl: "",
    demoUrl: "https://recipe-app-ajar.netlify.app/",
    desc: "A feature-rich Recipe App built with ReactJS and Redux, allowing users to browse, search, and save their favorite recipes while applying filters based on dietary preferences. The app integrates with the Spoonacular API to fetch real-time recipe data and provides an intuitive user interface.",
    techStacks: [
      "React.js",
      "Redux",
      "TailwindCSS",
      "Spoonacular API",
      "Axios"
    ],
    images: [receipe1,receipe2,receipe3], // Add actual image variables or URLs
    data: [
      { title: "Recipe Collection", features: ["Display a variety of recipes with images, titles, and brief descriptions."] },
      { title: "Search Functionality", features: ["Search recipes by keywords, ingredients, or specific criteria (e.g., vegetarian, gluten-free)."] },
      { title: "Recipe Details", features: ["View ingredients, step-by-step instructions, preparation time, and serving size."] },
      { title: "Favorites", features: ["Mark recipes as favorites and save them for easy access later."] },
      { title: "Filters", features: ["Filter recipes based on meal types (breakfast, lunch, dinner) and dietary restrictions."] },
      { title: "API Integration", features: ["Fetch recipe data dynamically using the Spoonacular API."] },
      { title: "State Management", features: ["Utilize ReactJS and Redux for efficient state management."] }
    ]
  },
  {
    title: "Password Reset Flow",
    frontEndCodeUrl: "",
    backEndCodeUrl: "",
    demoUrl: "",
    desc: "A secure and efficient password reset system using Nodemailer for email verification. This project ensures users can reset their passwords only after verifying their identity through a unique reset link sent via email.",
    techStacks: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Nodemailer",
      "jwt"
    ],
    images: [password1,password2], // Add actual image variables or URLs
    data: [
      { title: "Forgot Password Flow", features: ["Users enter their email to request a password reset.", "Checks if the user exists in the database."] },
      { title: "Email Verification", features: ["Generates a unique reset token and sends a secure reset link via email.", "Uses Nodemailer for email handling."] },
      { title: "Token Storage & Validation", features: ["Stores the token in the database for verification.", "Ensures tokens expire for security purposes."] },
      { title: "Secure Password Reset", features: ["Users reset their password after clicking the link.", "Validates the token before updating the password."] },
      { title: "Security Measures", features: ["Tokens have expiration times to prevent misuse.", "Prevents unauthorized password resets."] },
      { title: "Environment Configuration", features: ["Uses environment variables for email configurations.", "Keeps credentials secure."] },
      { title: "Project Setup & Deployment", features: ["Step-by-step instructions for setup and running locally."] }
    ]
  },
  {
    title: "Trabook Landing Page",
    frontEndCodeUrl: "https://github.com/ajardeen/Trabook-LandingPage",
    backEndCodeUrl: "",
    demoUrl: "https://trabook-landingpage-ajar.netlify.app/",
    desc: "A fully responsive landing page built using HTML and Tailwind CSS. The design is implemented as per the provided Figma file, ensuring pixel-perfect accuracy and adaptability across all devices.",
    techStacks: [
      "HTML",
      "TailwindCSS"
    ],
    images: [landing1,landing2,landing3,landing4,landing5], // Replace with actual images
    data: [
      { title: "Pixel-Perfect Design", features: ["Follows the provided Figma design accurately.", "Maintains a clean and modern layout."] },
      { title: "Fully Responsive", features: ["Optimized for desktops, tablets, and mobile devices.", "Uses Tailwind's responsive utilities."] },
      { title: "Fast & Lightweight", features: ["Built with pure HTML and Tailwind CSS for performance.", "Ensures smooth and fast loading."] },
      { title: "Scalable & Maintainable", features: ["Uses Tailwind's utility-first approach.", "Easy to modify and extend."] },
      { title: "Figma Reference", features: ["The design is based on the given Figma file.", "Ensures consistency with modern UI trends."] }
    ]
  }
];
