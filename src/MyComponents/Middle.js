import React from "react";
import Img1 from './Img/Mine.jpg';
import Img2 from './Img/IMG_20200820_231854.jpg';
import ReactTypingEffect from 'react-typing-effect';
import video1 from "./Videos/walk-daily.mp4";
import video2 from "./Videos/drink-of-water.mp4";
import video3 from "./Videos/eat-fruits-daily.mp4";
import SocialMediaHandles from "../Contents/soicalMediaHandles";

export default function Middle() {

  const shoot = () => {
    alert(" 1 Gold, 2 Silver and 3 Bronze Medal");
  };

  return (
    <>
      <div class="container">
      <section style={{
            float: "right",
            marginRight: -60,
            color: "grey"
        }}>
            <p style={{fontSize: 24, marginTop: 6}}>Dsuru</p>
        </section>
        <a style={{
                float: "right",
                marginRight: 9,  
                marginTop: 12               
            }}>
          <img src={Img1} width="24" height="24"
            style={{borderRadius: "153px"}}
          />
        </a>
      </div>
      <div>
          <center style={{marginTop:60}}>
            <img src={Img2} width="153" height="153"
                style={{borderRadius: "153px"}}
            />
          </center><br />
          <center>
            <b><ReactTypingEffect
              className="typingeffect"
              text={["I am Survesh Pandit"]}
              speed={100}
              eraseDelay={1000}
              style={{
                color: "grey",
                fontFamily: "Monotype Corsiva",
                fontSize: 24,
              }}
            /></b>
            <br />
            <br />
            <div className="container">
            <p style={{ color: "black", fontSize: 30, fontFamily: "Gabriola" }}>
              I am a <b className="ex2"> Front End Web Developer </b> and I have
              <u className="ex5"> Achieved </u> many
              <u className="ex5" onClick={shoot}>
                {" "}
                Medals{" "}
              </u>{" "}
              in
              <b className="ex2"> All India National Swimming Competition </b>.
            </p>
          </div>
          </center>         
      </div>
      <div
        id="videos"
        className="row container " 
        style={{ marginLeft: "120px" }}
      >
        
          <div className="card my-3 mx-3" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ width: "20rem", color: "black" }}
              >
                walk-daily
              </h5>
              <video src={video1} width="270" height="100" controls></video>
              <p className="card-text"></p>
            </div>
          </div>
       
        <div className="card my-3 mx-3" style={{ width: "20rem" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ width: "20rem", color: "black" }}
            >
              drink-of-water
            </h5>
            <video src={video2} width="270" height="100" controls></video>
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card my-3 mx-3" style={{ width: "20rem" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ width: "20rem", color: "black" }}
            >
              eat-fruits-daily
            </h5>
            <video src={video3} width="270" height="100" controls></video>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
      <SocialMediaHandles />
    </>
  );
}
