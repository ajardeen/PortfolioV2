import hostel1 from "../assets/hostel1.png";
import hostel2 from "../assets/hostel2.png";
import hostel3 from "../assets/hostel3.png";
import hostel4 from "../assets/hostel4.png";
import hostel5 from "../assets/hostel5.png";
import college1 from "../assets/college1.png";
import college2 from "../assets/college2.png";
import college3 from "../assets/college3.png";
import college4 from "../assets/college4.png";
import college5 from "../assets/college5.png";

export const projects = [
  {
    title: "Hostel Management System",
    codeUrl: "https://github.com/ajardeen/Hostel-Management-Frontend",
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
    title: "College Placement Management System",
    codeUrl: "https://github.com/ajardeen/College-Placement-Management-FrontEnd",
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
      "HeroIcons",
    ],
    images: [college1, college2, college3, college4, college5],
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
];
