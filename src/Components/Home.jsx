import React from "react";
import home1 from "../assets/Illustration.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/Logo2.png";
import logo3 from "../assets/Logo3.png";
import logo4 from "../assets/Logo4.png";
import logo5 from "../assets/Logo5.png";
import logo6 from "../assets/Logo6.png";
import icon11 from "../assets/Icon11.png";
import icon12 from "../assets/Icon12.png";
import icon21 from "../assets/Icon21.png";
import icon22 from "../assets/Icon22.png";
import mem from "../assets/mem.png";
import hand from "../assets/hand.png";
import build from "../assets/build.png";
import rafiki from "../assets/rafiki.png";
import rightgreen from "../assets/Rightgreen.png";
import pana from "../assets/pana.png";
import image from "../assets/image.png";

import image18 from "../assets/image 18.png";
import image19 from "../assets/image 19.png";
import image20 from "../assets/image 20.png";
import readmore from "../assets/readmore.png";
const Home = () => {
  return (
    <div className="home">
      <div className="home-1">
        <div className="home-1-left">
          <h1 className="lb">Lessons and insights</h1>
          <h1 className="g">from 8 years</h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button>Register</button>
        </div>
        <div className="home-1-right">
          <img src={home1} alt="home" />
        </div>
      </div>

      <div className="home-2">
        <div className="home-2-top">
          <h1>Our Client</h1>
          <p>We have been working with some Fortune 500+ clients</p>
          <div className="home-2-top-image">
            <div className="home-2-ti">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
            <div className="home-2-ti">
              <img src={logo4} alt="" />
              <img src={logo5} alt="" />
              <img src={logo6} alt="" />
            </div>
          </div>
        </div>
        <div className="home-2-bottom">
          <h1>Manage your entire community</h1>
          <h1>in a single system</h1>
          <p>Who is Nexcent suitable for?</p>
          <div className="community">
            <div className="membership">
              <img src={mem} alt="" />
              <h2>Membership Organisations</h2>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="national">
              <img src={build} alt="" />
              <h2>National Associations</h2>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="clubs">
              <img src={hand} alt="" />
              <h2>Clubs and Groups</h2>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-3">
        <div className="home-3-top">
          <div className="home-3-top-image">
            <img src={rafiki} alt="" />
          </div>
          <div className="home-3-top-content">
            <h1>The unseen of spending three</h1>
            <h1>years at pixelgrade</h1>
            <p>
              Addressing modes in computer architecture define the techniques to
              specify the location of the operands required by an instruction.
              These modes impact how the processor fetches and interprets data,
              allowing for more flexible and efficient coding. Here’s an
              overview of several addressing modes:
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="home-3-bottom">
          <div className="home-3-bottom-content">
            <h1>Helping a local</h1>
            <h1 className="sss">business reinvent itself</h1>
            <p>We reached here with our hardwork and dedication</p>
          </div>
          <div className="home-3-bottom-image">
            <div className="up">
              <div className="up-1">
                <img className="h3img" src={icon11} alt="" />
                <div className="c1">
                  <h1>2,245,341</h1>
                  <p>Members</p>
                </div>
              </div>
              <div className="up-1">
                <img className="h3img" src={icon12} alt="" />
                <div className="c1">
                  <h1>46,328</h1>
                  <p>Clubs</p>
                </div>
              </div>
            </div>
            <div className="down">
              <div className="down-1">
                <img className="h3img" src={icon21} alt="" />
                <div className="c1">
                  <h1>828,867</h1>
                  <p>Events booking</p>
                </div>
              </div>
              <div className="down-1">
                <img className="h3img" src={icon22} alt="" />
                <div className="c1">
                  <h1>1,926,436</h1>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-3-top" style={{ marginTop: "110px" }}>
          <div className="home-3-top-image">
            <img src={pana} alt="" />
          </div>
          <div className="home-3-top-content">
            <h1>How to design your site footer like</h1>
            <h1>we did</h1>
            <p>
              Addressing modes in computer architecture define the techniques to
              specify the location of the operands required by an instruction.
              These modes impact how the processor fetches and interprets data,
              allowing for more flexible and efficient coding. Here’s an
              overview of several addressing modes:
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className="home-4">
        <div className="home-4-image">
          <img src={image} alt="" />
        </div>

        <div className="home-4-content">
          <div className="home-4-content-top">
            <p>
              The AI Builders Lab is an exclusive bootcamp series presented by
              Google for Developers and Hack2skill, designed to empower the next
              generation of innovators and developers with cutting-edge skills
              in Artificial Intelligence. This bootcamp series aims to provide
              insights on Google AI Studio - hands-on training, expert
              mentorship, and access to industry-leading tools to help
              participants bring their AI-driven ideas to life.Whether you are
              an aspiring AI enthusiast or a student developer, the AI Builders
              Lab offers a collaborative space to enhance your expertise,
              explore new possibilities, and enhance your knowledge using
              Google's advanced AI Studio.Join us to build, innovate, and
              contribute to a future powered by AI.
            </p>
          </div>
          <div className="home-4-content-bottom">
            <h2>Tim Smith</h2>
            <p>British Dragon Boat Racing Association</p>
            <div className="home-4-img">
              <div className="home-4-ti">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
              </div>
              <div className="home-4-ti">
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
              </div>
              <div className="home-4-ti">
                <button style={{ border: "none", background: "#F5F7FA" }}>
                  <h2>Meet all customers</h2>
                </button>
              </div>
              <img className="hen" src={rightgreen} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-5">
        <div className="home-5-top">
          <h1>Caring is the new Marketing</h1>
          <p>
            The Nexcent blog is the best place to read about the latest
            membership insight,trends and more.see who is joining the community,
            read about how your community are increasing the membership income
            and lots more
          </p>
        </div>

        <div className="home-5-bottom">
          <div className="img-1">
            <img className="imageee" src={image18} alt="" />
            <div className="img-con">
              <p>Creating streamlined safegaurding processes with oneRen</p>
              <a href="">
                <img src={readmore} alt="" />
              </a>
            </div>
          </div>
          <div className="img-1">
            <img className="imageee" src={image19} alt="" />
            <div className="img-con">
              <p>
                What are your safegaurding responsibilities and how can you
                manage them?
              </p>
              <a href="">
                <img src={readmore} alt="" />
              </a>
            </div>
          </div>
          <div className="img-1">
            <img className="imageee" src={image20} alt="" />
            <div className="img-con">
              <p>Rewamping the membership model with triathlon Australia</p>
              <a href="">
                <img src={readmore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
