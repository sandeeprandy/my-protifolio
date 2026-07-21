import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiExpress,
  SiNextdotjs,
  SiVercel,
  SiTypescript,
  SiShopify,
  SiSanity,
  SiAmazon,
  SiPostgresql,
  SiAngular,
} from "react-icons/si";
import "./App.css";
import { Image, Button, Anchor, Flex, Row, Col, Card } from "antd";
import logo from "./imeges/Logo.png";
import userpic from "./imeges/sandy2.png";
import UserPic2 from "./imeges/aboutMe.png";
import Projectpic from "./imeges/Imag23.png";
import ProjectPic1 from "./imeges/Image.png";
import ProjectPic2 from "./imeges/Image1.png";

function App() {
  const skills = [
    { icon: <FaHtml5 size={50} color="#E44D26" />, name: "HTML5" },
    { icon: <FaCss3Alt size={50} color="#1572B6" />, name: "CSS3" },
    { icon: <FaJs size={50} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiTypescript size={50} color="#3178C6" />, name: "TypeScript" },
    { icon: <FaReact size={50} color="#61DAFB" />, name: "React.js" },
    { icon: <SiAngular size={50} color="#DD0031" />, name: "Angular" },
    { icon: <SiNextdotjs size={50} color="black" />, name: "Next.js" },
    { icon: <SiRedux size={50} color="#764ABC" />, name: "Redux" },
    { icon: <FaNodeJs size={50} color="#83CD29" />, name: "Node.js" },
    { icon: <SiExpress size={50} color="#000000" />, name: "Express.js" },
    { icon: <SiMongodb size={50} color="#47A248" />, name: "MongoDB" },
    { icon: <SiPostgresql size={50} color="#336791" />, name: "PostgreSQL" },
    { icon: <FaDatabase size={50} color="#00618A" />, name: "SQL Databases" },
    { icon: <SiAmazon size={50} color="#FF9900" />, name: "AWS" },
    { icon: <SiShopify size={50} color="#96bf48" />, name: "Shopify" },
    { icon: <SiSanity size={50} color="#F03081" />, name: "Sanity CMS" },
    { icon: <FaGitAlt size={50} color="#F05032" />, name: "Git" },
    { icon: <SiVercel size={50} color="black" />, name: "Vercel" },
  ];

  return (
    <div className="App">
      <Flex horizontal justify={"space-around"} className="navBars">
        <Image src={logo} alt="logo" width={100} />
        <Anchor
          className="custum-anchor"
          direction="horizontal"
          items={[
            { key: "Home", href: "#Home", title: "Home" },
            { key: "Skills", href: "#Skills", title: "Skills" },
            { key: "protifolio", href: "#protifolio", title: "protifolio" },
            { key: "aboutMe", href: "#aboutMe", title: "About me" },
          ]}
        />
        <Button type="primary">
          <a
            href="https://drive.google.com/file/d/1GyFF8-BGM49sXHtn8GpHv9xEaG8RBgmO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </Button>
      </Flex>

      <Flex className="homepage" id="Home">
        <Row className="user">
          {/* Text Section */}
          <Col sm={12} md={24} lg={12} className="userDetals">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2>Hi, I'm Sandeep Kumar 👋</h2>

              {/* Wavy Text Animation */}
              <motion.h1
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                style={{ display: "inline-block" }}
              >
                Full Stack Developer{" "}
                <span style={{ color: "#5E3BEE" }}>
                  Frontend Specialist
                </span>
              </motion.h1>

              <p style={{ fontSize: "20px" }}>
                Full Stack Developer with 2+ years of experience and strong frontend expertise. 
                I specialize in building responsive, high-performance UI systems and scalable 
                web applications using React.js, Next.js, Angular, and TypeScript. With solid 
                backend fundamentals in Node.js, Express, MongoDB, and PostgreSQL, I deliver 
                complete solutions. Proficient in AWS, API integrations, and performance optimization. 
                Immediate Joiner with proven expertise in reducing development time by 30% through 
                reusable architecture.
              </p>
            </motion.div>
          </Col>

          {/* Image Section */}
          <Col sm={24} md={24} lg={12} className="userpic">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={userpic}
                alt="userpic"
                width="50%"
                height="30%"
                style={{ borderRadius: "30%" }}
              />
            </motion.div>
          </Col>
        </Row>
      </Flex>
      {/* skill page */}

      <Flex vertical className="skills" id="Skills">
        <div>
          <h1 style={{ marginTop: "50px" }}>My Skills</h1>
        </div>
        <Row className="skillcntr" gutter={[24, 32]}>
          {skills.map((skill, index) => (
            <Col key={index} className="skill" xs={12} sm={8} md={4} lg={3}>
              <motion.div
                initial={{ y: index % 2 === 0 ? -10 : 10 }} // Alternate up-down
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="icon-container"
              >
                <div className="rounded-icon">{skill.icon}</div>
              </motion.div>
              <p>
                <strong>{skill.name}</strong>
              </p>
            </Col>
          ))}
        </Row>
      </Flex>
      {/* about me page */}
      <Flex vertical className="aboutMe" id="aboutMe">
        <Row justify="space-around" align="middle">
          <Col xs={12} sm={12} md={12} lg={10}>
            <Image src={UserPic2} width={"100%"} />
          </Col>

          <Col sm={12} md={24} lg={12} className="userDetals">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1>About Me</h1>
              <h1>
                Full-Stack Developer with{" "}
                <span style={{ color: "#5E3BEE" }}>Strong Frontend Expertise</span>{" "}
                from Hyderabad, India
              </h1>
              <p>
                I'm currently an <strong>Associate Web Developer at{" "}
                <a
                  href="https://strayv.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#5E3BEE",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Strayv.ai
                </a></strong> (Oct 2025–Present), where I build responsive web applications with cutting-edge UI/UX, 
                optimize performance (improved Lighthouse scores from 72 to 94), and work with modern tech stacks.
              </p>
              <p>
                Previously, I worked as a <strong>Software Engineer Trainee & Frontend Developer</strong> at{" "}
                <a
                  href="https://hyperthinksys.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#5E3BEE",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  HyperThink Systems
                </a>{" "}
                (Oct 2024–Sep 2025), where I developed enterprise dashboards, smart parking systems, 
                and reduced code duplication by 35% using reusable components and architecture.
              </p>
              <h2>Key Accomplishments:</h2>
              <ul>
                <li>
                  <strong>Frontend Excellence:</strong> Built responsive, modern UIs with React.js, Next.js, Angular, and TypeScript with animations and smooth interactions
                </li>
                <li>
                  <strong>Performance Optimization:</strong> Improved Lighthouse SEO scores from 72–95 and reduced development time by 30% using reusable patterns
                </li>
                <li>
                  <strong>Full-Stack Capability:</strong> Developed enterprise dashboards, real-time tracking systems, and smart parking management with Node.js, Express, MongoDB, and PostgreSQL backends
                </li>
                <li>
                  <strong>Tech Stack Mastery:</strong> Proficient in React.js, Next.js, Angular, TypeScript, Node.js, MongoDB, PostgreSQL, AWS, Shopify, and Sanity CMS
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Flex>

      {/* Experience Section */}
      <Flex vertical className="experience" style={{ backgroundColor: "#f5f5f5", padding: "50px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "40px", color: "#5E3BEE" }}
          >
            Professional Experience
          </motion.h1>
          
          <Row gutter={[20, 20]} style={{ marginBottom: "30px" }}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card 
                  style={{ 
                    borderLeft: "4px solid #5E3BEE",
                    boxShadow: "0 4px 12px rgba(94, 59, 238, 0.1)",
                    transition: "all 0.3s ease"
                  }}
                  hoverable
                >
                  <Row justify="space-between" align="top">
                    <Col xs={24} sm={18} md={18}>
                      <h2 style={{ margin: "0 0 5px 0" }}>Associate Web Developer</h2>
                      <p style={{ margin: "0 0 10px 0", color: "#5E3BEE", fontWeight: "bold" }}>
                        Strayv.ai, Hyderabad, India
                      </p>
                    </Col>
                    <Col xs={24} sm={6} md={6} style={{ textAlign: "right" }}>
                      <p style={{ margin: 0, color: "#4A4A4A" }}>Oct 2025 – Present</p>
                    </Col>
                  </Row>
                  <ul style={{ marginTop: "10px", color: "#4A4A4A" }}>
                    <li>Built responsive, modern web applications using Next.js, React.js, and TypeScript with focus on pixel-perfect UI/UX</li>
                    <li>Optimized frontend performance and improved Lighthouse SEO scores from 72 to 94 through advanced techniques</li>
                    <li>Integrated Shopify and Sanity CMS for dynamic content workflows with seamless user experiences</li>
                    <li>Reduced development time by 30% using reusable component architecture and best practices</li>
                    <li>Worked with API integrations and backend systems using Node.js and databases</li>
                  </ul>
                </Card>
              </motion.div>
            </Col>
          </Row>

          <Row gutter={[20, 20]} style={{ marginBottom: "30px" }}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card 
                  style={{ 
                    borderLeft: "4px solid #5E3BEE",
                    boxShadow: "0 4px 12px rgba(94, 59, 238, 0.1)",
                    transition: "all 0.3s ease"
                  }}
                  hoverable
                >
                  <Row justify="space-between" align="top">
                    <Col xs={24} sm={18} md={18}>
                      <h2 style={{ margin: "0 0 5px 0" }}>Software Engineer Trainee & Frontend Developer</h2>
                      <p style={{ margin: "0 0 10px 0", color: "#5E3BEE", fontWeight: "bold" }}>
                        Hyper Think Systems Pvt Ltd, Bengaluru, India
                      </p>
                    </Col>
                    <Col xs={24} sm={6} md={6} style={{ textAlign: "right" }}>
                      <p style={{ margin: 0, color: "#4A4A4A" }}>Oct 2024 – Sep 2025</p>
                    </Col>
                  </Row>
                  <ul style={{ marginTop: "10px", color: "#4A4A4A" }}>
                    <li>Developed responsive enterprise dashboards and frontend systems using React.js, Redux Toolkit, Angular, and Material-UI</li>
                    <li>Built smart parking systems with real-time API integrations, live tracking, and interactive UI components</li>
                    <li>Reduced code duplication by 35% using reusable component architecture and design patterns</li>
                    <li>Implemented animations and smooth interactions using Framer Motion for enhanced user experience</li>
                    <li>Optimized application performance and maintained responsive design across all devices</li>
                  </ul>
                </Card>
              </motion.div>
            </Col>
          </Row>

          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card 
                  style={{ 
                    borderLeft: "4px solid #5E3BEE",
                    boxShadow: "0 4px 12px rgba(94, 59, 238, 0.1)",
                    transition: "all 0.3s ease"
                  }}
                  hoverable
                >
                  <Row justify="space-between" align="top">
                    <Col xs={24} sm={18} md={18}>
                      <h2 style={{ margin: "0 0 5px 0" }}>Frontend Developer Intern</h2>
                      <p style={{ margin: "0 0 10px 0", color: "#5E3BEE", fontWeight: "bold" }}>
                        Hyper Think Systems Pvt Ltd, Bengaluru, India
                      </p>
                    </Col>
                    <Col xs={24} sm={6} md={6} style={{ textAlign: "right" }}>
                      <p style={{ margin: 0, color: "#4A4A4A" }}>May 2024 – Sep 2024</p>
                    </Col>
                  </Row>
                  <ul style={{ marginTop: "10px", color: "#4A4A4A" }}>
                    <li>Developed reusable React.js components and responsive user interfaces for enterprise applications</li>
                    <li>Integrated REST APIs and optimized frontend workflows, improving performance by 25%</li>
                    <li>Enhanced UI responsiveness, accessibility, and cross-browser compatibility</li>
                    <li>Collaborated with backend teams to implement scalable solutions</li>
                  </ul>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Flex>

      {/* Portfolio & Projects Section */}
      <Flex vertical portFolio id="protifolio" className="portFolio">
        <Flex
          justify="space-between"
          align="center"
          style={{ padding: "20px" }}
          className="protFolioNav"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Flex vertical>
              <p>Professional Projects & Achievements</p>
              <h1>my portfolio</h1>
            </Flex>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Flex vertical>
              <a
                href="https://github.com/sandeeprandy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="primary">Visit My GitHub</Button>
              </a>
            </Flex>
          </motion.div>
        </Flex>

        <div style={{ padding: "20px", marginBottom: "40px" }}>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ color: "#5E3BEE", marginBottom: "20px" }}
          >
            Standout Personal Project
          </motion.h2>
          <Row gutter={[20, 20]}>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <Card 
                  hoverable 
                  cover={<Image alt="InterviewPro" src={Projectpic} />} 
                  style={{ 
                    borderTop: "3px solid #5E3BEE",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <Card.Meta
                    title={
                      <a
                        href="https://interviewpro.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#5E3BEE",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        InterviewPro – Interview Prep Platform
                      </a>
                    }
                    description={
                      <span style={{ color: "#4A4A4A" }}>
                        <strong>Tech:</strong> Next.js, React.js, TypeScript, Framer Motion, Vercel
                        <br />
                        <strong>Impact:</strong> Built a modern, engaging interview preparation platform with smooth animations and responsive design. 
                        Achieved Lighthouse SEO scores of 94+ and fast page loads with optimized performance deployed on Vercel. 
                        Implemented interactive UI components with Framer Motion for enhanced user engagement.
                      </span>
                    }
                  />
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>

        <div style={{ padding: "20px" }}>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ color: "#5E3BEE", marginBottom: "20px" }}
          >
            Professional Projects
          </motion.h2>
          <Row align="space-around" style={{ padding: "10px" }} gutter={[20, 20]}>
            <Col xs={24} lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <Card 
                  hoverable 
                  cover={<Image alt="Strayv.ai" src={Projectpic} />}
                  style={{
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    borderRadius: "8px"
                  }}
                >
                  <Card.Meta
                    title={
                      <a
                        href="https://strayv.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#5E3BEE",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Strayv.ai – Web Platform
                      </a>
                    }
                    description={
                      <span style={{ color: "#4A4A4A" }}>
                        <strong>Tech:</strong> Next.js, React.js, TypeScript, Node.js, Shopify
                        <br />
                        Built responsive web applications with modern UI/UX. 
                        Improved SEO from 74 to 95. Integrated Sanity CMS and payment systems with clean architecture.
                      </span>
                    }
                  />
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card 
                  hoverable 
                  cover={<Image alt="Lulu Powers" src={ProjectPic1} />}
                  style={{
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    borderRadius: "8px"
                  }}
                >
                  <Card.Meta
                    title={
                      <a
                        href="https://lulupower.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#5E3BEE",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Lulu Powers Shopify Store
                      </a>
                    }
                    description={
                      <span style={{ color: "#4A4A4A" }}>
                        <strong>Tech:</strong> Shopify, React.js, TypeScript, Responsive Design
                        <br />
                        Customized Shopify storefront with modern UI and smooth interactions. 
                        Lighthouse SEO score improved from 70 to 93. Optimized page speed by 40%.
                      </span>
                    }
                  />
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Card 
                  hoverable
                  cover={<Image alt="Smart Parking" src={ProjectPic2} />}
                  style={{
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    borderRadius: "8px"
                  }}
                >
                  <Card.Meta
                    title={
                      <span style={{
                        color: "#5E3BEE",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                      >
                        Smart Parking System
                      </span>
                    }
                    description={
                      <span style={{ color: "#4A4A4A" }}>
                        <strong>Tech:</strong> React.js, Redux Toolkit, Angular, REST APIs, Node.js
                        <br />
                        Enterprise dashboard with real-time live tracking and interactive UI. 
                        Reduced code duplication by 35% with reusable components and animations using Framer Motion.
                      </span>
                    }
                  />
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Flex>
    </div>
  );
}

export default App;
