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
} from "react-icons/si";
import "./App.css";
import { Image, Button, Anchor, Flex, Row, Col, Card } from "antd";
import logo from "./imeges/Logo.png";
import userpic from "./imeges/sandy2.png";
import UserPic2 from "./imeges/About Me.png";
import Projectpic from "./imeges/Imag23.png";
import ProjectPic1 from "./imeges/Image.png";
import ProjectPic2 from "./imeges/Image1.png";

function App() {
  const skills = [
    { icon: <FaHtml5 size={50} color="#E44D26" />, name: "HTML5" },
    { icon: <FaCss3Alt size={50} color="#1572B6" />, name: "CSS3" },
    { icon: <FaJs size={50} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiNextdotjs size={50} color="black" />, name: "Next.js" },

    { icon: <FaReact size={50} color="#61DAFB" />, name: "React.js" },
    { icon: <SiRedux size={50} color="#764ABC" />, name: "Redux" },
    { icon: <FaNodeJs size={50} color="#83CD29" />, name: "Node.js" },
    { icon: <SiExpress size={50} color="#000000" />, name: "Express.js" },
    { icon: <SiMongodb size={50} color="#47A248" />, name: "MongoDB" },
    { icon: <FaDatabase size={50} color="#00618A" />, name: "SQL Databases" },
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
        <Button type="primary">Contact me</Button>
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
              <h2>Hi, I'm Sandeep Kumar</h2>

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
                I build{" "}
                <span style={{ color: "#5E3BEE" }}>
                  scalable web applications
                </span>{" "}
                with modern technologies.
              </motion.h1>

              <p style={{ fontSize: "20px" }}>
                A passionate full-stack developer specializing in building
                high-performance, user-friendly applications. I turn complex
                problems into elegant solutions using React, Next.js, Node.js,
                and more.
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
            <Image src={UserPic2} width={"90%"} />
          </Col>

          <Col sm={12} md={24} lg={12} className="userDetals">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1>About Me</h1>
              <h1>
                Passionate{" "}
                <span style={{ color: "#5E3BEE" }}>Full-Stack Developer</span>{" "}
                from Hyderabad
              </h1>
              <p>
                I have one year of experience at{" "}
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
                </a>
                , a tech company based in Bengaluru, where I worked on multiple
                impactful projects. My expertise includes developing scalable
                and efficient web applications using modern technologies.
              </p>
              <h2>Projects I Worked On:</h2>
              <ul>
                <li>
                  <strong>License Manager:</strong> A system for managing
                  software licenses, ensuring secure distribution and
                  activation.
                </li>
                <li>
                  <strong>Smart Parking System:</strong> A real-time parking
                  management solution using IoT and web technologies to optimize
                  parking space utilization.
                </li>
                <li>
                  <strong>Awan Gas:</strong> A gas distribution platform
                  designed to streamline the supply chain and delivery process
                  in the energy sector.
                </li>
                <li>
                  <strong>Arisio:</strong> The Middle East’s leading startup
                  collaboration and data platform, connecting entrepreneurs with
                  investors and industry experts.
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Flex>

      <Flex vertical portFolio id="protifolio" className="portFolio">
        <Flex
          justify="space-between"
          align="center"
          style={{ padding: "20px" }}
          className="protFolioNav"
        >
          <Flex vertical>
            {" "}
            <p>Recent projects</p> <h1>my portfolio</h1>{" "}
          </Flex>
          <Flex vertical>
            {" "}
            <a href="https://github.com/sandeeprandy" target="_blank" rel="noopener noreferrer">
  <Button type="primary">Visit My Git Hub</Button>
</a>
          </Flex>
        </Flex>

        <Row align="space-around" style={{ padding: "10px" }}>
          <Col xs={20} lg={6}>
            <Card hoverable cover={<Image alt="example" src={Projectpic} />}>
              <Card.Meta
                title={
                  <a
                    href="https://recipfront.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#5E3BEE",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Omnia (All In One)
                  </a>
                }
                description={
                  <span style={{ color: "#4A4A4A" }}>
                    Omnia is an all-in-one app that enables users to sell their
                    businesses, access news and events, manage transport
                    services, handle health emergencies, hire manpower, connect
                    with delivery personnel, and engage in social posts. The
                    platform is designed to function efficiently based on
                    pincode and village names, ensuring localized and seamless
                    service access.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={20} lg={6}>
            <Card hoverable cover={<Image alt="example" src={ProjectPic1} />}>
              <Card.Meta
                title={
                  <a
                    href="https://symphonious-eclair-2c8f40.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#5E3BEE",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Simple shopping website
                  </a>
                }
                description={
                  <span style={{ color: "#4A4A4A" }}>
                    This shopping website is an initial prototype developed to
                    showcase the fundamental structure and functionality of an
                    e-commerce platform. Developed a dynamic simple shopping
                    site using React.js and Node.js. Implemented RESTful API
                    calls with Axios, ensuring responsiveness and accessibility.
                    Deployed backend on Render and frontend on Netlify.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={20} lg={6}>
            <Card hoverable cover={<Image alt="example" src={ProjectPic2} />}>
              <Card.Meta
                title={
                  <a
                    href="https://sandeepimoje.ccbp.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#5E3BEE",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Imoji Game
                  </a>
                }
                description={
                  <span style={{ color: "#4A4A4A" }}>
                    I developed an engaging and fun Emoji Game, where players
                    earn points by clicking on random emojis. Each unique emoji
                    click increases the score, but if a player clicks the same
                    emoji twice, the game is over! The game tests memory and
                    concentration, making it both entertaining and challenging.
                    With a simple yet addictive design, it encourages players to
                    beat their high scores while having fun with a variety of
                    emojis.
                  </span>
                }
              />
            </Card>
          </Col>
        </Row>
      </Flex>
    </div>
  );
}

export default App;
