import React from "react";
import { Myinfo } from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import { Logo, LogoSectionAbout } from "../logo-section/logoSection.jsx";
import { FirstPrize, PrizeHeading } from "../prize tracks/prizes.jsx";
import { Prizeinfo } from "../../Module/General";
import { Accordion } from "../FAQ/faq.jsx";
// import {theme} from "../themes_test/theme.jsx";
// import {Sponsor, SponsorsHead, SponsorUS} from "../Sponsors/sponsors.jsx";
import { Sponsor, SponsorsHead } from "../Sponsors/sponsors.jsx";
import Footer from "../Footer/footer.jsx";
import { Member } from "../team/team.jsx";
import pattern from "./pattern4.png";
import ThemeType from "../Themes/theme.jsx";
import TimeLine from "../Timeline/Timeline.jsx";
import alan from "../../Module/Assets/sponsorsLogos/alan.png";
import { JudgesInfo } from "../../Module/General";

import {
  TOP_SECTION,
  TeamInfo,
  // JudgesInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  designlogo,
  titlesponsorLogos,
  bronzeponsorLogos,
  silversponsorLogos,
  goldsponsorLogos,
  FoodLogos
} from "../../Module/General";

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row justifyContent="center" alignItems="center">
      {props.map((s, key) => (
        <Col
          key={key}
          justifyContent="center"
          alignItems="center"
          sm={12}
          lg={4}
          md={6}
        >
          {" "}
          <Sponsor link={s.link} srcx={s.src} />{" "}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map((s, key) => (
        <Col key={key} className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage(props) {

  window.onscroll = () => {
    toggleTopButton();
    console.log(document.body.scrollHeight);
    console.log(document.body.scrollTop);
    console.log("Diff", document.body.scrollHeight - document.body.scrollTop);
  }

  const scrollToTop = (event) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleTopButton() {
    if ((document.body.scrollHeight - document.body.scrollTop) < 800) {
      document.getElementById('back-to-up').style.display = 'none';
    }
    else if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      document.getElementById('back-to-up').style.display = 'block';
    } else {
      document.getElementById('back-to-up').style.display = 'none';
    }
  }



  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="top" className="Whole_div" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="color_sectiom">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img alt="img" src={TOP_SECTION.IMG_SRC} />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection" id="about">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>


        {/*Theme Section*/}
        <Row className="prizesection non-coding" id="themes">
          <PrizeHeading type="Hackathon Themes" />
          <ThemeType />
        </Row>

         {/*TimeLine Section*/}
         <Row className="timeline" id="timeline">
        <PrizeHeading type="Hackathon TimeLine" />
          <TimeLine />
        </Row>
   


        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" />
          <PrizeHeading type="Continuosly Updated!" />
        </Row>
        {/* PRIZES HERE */}
        <div class="row1-container">

          <div class="box red">
            <h2>Overall First</h2><img class="imgright" src="https://img.icons8.com/emoji/96/000000/1st-place-medal-emoji.png" alt="" />
            <h4><b>Prize</b>: Rs. 8000<br />$500 Axure RP License<br />G4G Swags, vouchers and promo codes</h4>
          </div>

          <div class="box box-down cyan">
            <h2>Overall Second</h2><img className="imgright" src="https://img.icons8.com/emoji/96/000000/2nd-place-medal-emoji.png" alt="" />
            <h4><b>Prize</b>: Rs. 5000 <br />$500 Axure RP License<br />Swags, vouchers and promo codes</h4>
          </div>

          <div class="box box-down blue">
            <h2>Overall Third</h2><img class="imgright" src="https://img.icons8.com/emoji/96/000000/sports-medal-emoji.png" alt="" />
            <h4><b>Prize</b>: Rs. 3000 <br />G4G Vouchers<br />Swags, vouchers and promo codes</h4>
          </div>
        </div>
        <div class="row1-container margfromsponsor">
          <div class="box box-down color2">
            <h2>Best Juniors Team</h2><img class="imgright" src="https://img.icons8.com/emoji/96/000000/sports-medal-emoji.png" alt="" />
            <h4><b>Prize</b>: Rs. 2000 <br />Credits<br />Vouchers and promo codes</h4>
          </div>

          <div class="box box-down color2">
            <h2>Best NSAKCET Team</h2><img class="imgright" src="https://img.icons8.com/emoji/96/000000/sports-medal-emoji.png" alt="" />
            <h4><b>Prize</b>: Rs. 1000 <br />Credits<br />Vouchers and promo codes</h4>
          </div>

          <div class="box box-down color2">
            <h2>Best Women's Team</h2><img class="imgright" src="https://img.icons8.com/emoji/96/000000/sports-medal-emoji.png" alt="" />
            <h4><b>Prize</b>: Rs. 2000 <br />Credits<br />Vouchers and promo codes</h4>
          </div>
        </div>
        <div class="row1-container margfromsponsor">
        <div class="box box-down color2">
            <h2>Best Innovative Idea</h2><img class="imgright" src="https://img.icons8.com/emoji/96/000000/sports-medal-emoji.png" alt="" />
            <h4><b>Prize</b>: Rs. 2000 <br />Credits<br />Vouchers and promo codes</h4>
          </div>
        </div>
        <div class="row1-container margfromsponsor">
          <div class="box box-down orange">
            <h2>All Participants</h2><img class="imgright" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-prizes-circus-flaticons-lineal-color-flat-icons.png" alt="" />
            <h4>Free .xyz Domain <br/> Participation Certificate<br />Vouchers and promo codes</h4>
          </div>
        </div>
        <center>

          <div class="containertrack">
          </div>
        </center>
        {/* *******Prizes here ***** */}
        {/*        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" /><br/>
          <div className="prize--cards">
          {Prizeinfo.map(PrizeGroup)}
          </div>
        </Row>*/}
        {/* ********Prizes ending here ***** */}


        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <h1 className="">Platinum Sponsors</h1>
          <br />
          {titlesponsorLogos.map(SponsorGroup)}
          <br /><br />
          <h1 className="">Gold Sponsors</h1>
          <br />
          {goldsponsorLogos.map(SponsorGroup)}
          <br /><br />
          <h1 className="">Silver Sponsors</h1>
          <br />
          {silversponsorLogos.map(SponsorGroup)}
          <br /><br />
          <h1 className="">Outreach Partners</h1>
          <br />
          {bronzeponsorLogos.map(SponsorGroup)}
          <br /><br />
          {/* <h1 className="">Design & Media Partners</h1>
          <br />
          {designlogo.map(SponsorGroup)}
          <br /><br /> */}
           {/*<h1 className="">Food Sponsors</h1>
          <br />
           {FoodLogos.map(SponsorGroup)} */}
        </Row>
        
        {/* ********Sponsors ending here ***** */}


        {/* ********Team here ***** */}
        {/* <h1 id="team">Mentor</h1> */}


        {/* {JudgesInfo.map(TeamMembers)} */}

        <h1 id="teams">Our Team</h1>  
        {/* {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={FOOTER.JOIN_TEAM}
            content="Interested in joining our team"
          />
        )} */}
        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}

        {/* ********Team ending here ***** */}
        <br />
        <h1 id="faqs">FAQs</h1>
        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>
      </Container>
      <br />
      <center>
        {/* <div
        class="apply-button"
        data-hackathon-slug="hackenvision"
        data-button-theme="light"
      style="height: 44px; width: 312px"
        ></div> */
        }
        <a href="https://bit.ly/3NTgRn2" target="_blank" style={{color: "red"}} ><button>Register Now</button></a>
      </center>

      <Footer />
      <div class="backtotop" id="back-to-up"><a onClick={scrollToTop}><p><i class="fa-solid fa-arrow-up"></i></p></a></div>
    </div >
  );



}
