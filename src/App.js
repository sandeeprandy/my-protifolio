import "./App.css";
import { Image, Button, Anchor, Flex, Row, Col, Card } from "antd";
import logo from "./imeges/Logo.png";
import userpic from "./imeges/Group 11 1.png";
import Recycle from "./imeges/product-chain 1.png";
import UserPic2 from "./imeges/About Me.png";
import Projectpic from "./imeges/Imag23.png"
import ProjectPic1 from "./imeges/Image.png"
import ProjectPic2 from "./imeges/Image1.png"
import Skill1 from "./imeges/feather-pen 1 (1).png"
import Skill2 from "./imeges/feather-pen 1.png"


function App() {
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
            { key: "aboutMe", href: "#aboutMe", title: "aboutMe" },
          ]}
        />
        <Button type="primary">Contact me</Button>
      </Flex>
       
       

      <Flex className="homepage" id="Home">
        <Row className="user">
          <Col sm={12} md={24} lg={12} className="userDetals">
            <p>i am sandeep</p>
            <h1>
              I create <span style={{ color: "#5E3BEE" }}>product design </span>{" "}
              and brand experience
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Col>
          <Col sm={24} md={24} lg={12} className="userpic">
            <Image src={userpic} alt="userpic" width="100%" />
          </Col>
        </Row>
      </Flex>
      {/* skill page */}

      <Flex vertical className="skills" id="Skills">
        <div>
          <p>my skills</p>
          <h1>my expertise</h1>
        </div>
        <Row className="skillcntr" gutter={[24, 32]}>
          <Col className="skill" xs={24} sm={10} md={8} lg={5}>
            <Image width={50} src={Recycle} alt="recylce" />
            <p>
              <strong>Strategy & Direction</strong>{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Col>
          <Col className="skill" xs={24} sm={10} md={8} lg={5}>
            <Image width={50} src={Skill1} alt="recylce" />
            <p>
              <strong>Webflow devolopment</strong>{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Col>
          <Col className="skill" xs={24} sm={10} md={8} lg={5}>
            <Image width={50} src={Skill2} alt="recylce" />
            <p>
              <strong>UI and UX design </strong>{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Col>
          <Col className="skill" xs={24} sm={10} md={8} lg={5}>
            <Image width={50} src={Recycle} alt="recylce" />
            <p>
              <strong>branding and logo</strong>{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Col>
        </Row>
      </Flex>
{/* about me page */}
      <Flex vertical className="aboutMe" id="aboutMe">
        <Row justify="space-around" align="middle">
          <Col xs={12} sm={12} md={12} lg={10}>
            <Image src={UserPic2} width={"90%"} />
          </Col>

          <Col xs={20} sm={20} md={20} lg={10}>
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi a, euismod risus r.
            </p>
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
            <Button type="primary"> visit my dribble</Button>{" "}
          </Flex>
        </Flex>

        <Row align="space-around" style={{ padding: "10px" }}>
          <Col xs={20} lg={6}>
            <Card hoverable cover={<Image alt="example" src={Projectpic} />}>
              <Card.Meta
                title="App dashboard"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
              />
            </Card>
          </Col>
          <Col  xs={20}  lg={6}>
            <Card hoverable cover={<Image alt="example" src={ProjectPic1} />}>
              <Card.Meta
                title="Ahuse"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
              />
            </Card>
          </Col>
          <Col  xs={20}  lg={6}>
            <Card hoverable cover={<Image alt="example" src={ProjectPic2} />}>
              <Card.Meta
                title="Easy Rent"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
              />
            </Card>
          </Col>
        </Row>
      </Flex>
    </div>
  );
}

export default App;
