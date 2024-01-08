import React from 'react'
import "./Timeline.css";

function TimeLine() {
    return (

<div>
<div class="wrap">
    <div class="center-line">
      <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="title">Registrations Start</span>
          <span>26th December 2023</span>
        </div>
        {/*<p className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        */}
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <span class="title">Registrations End</span>
          <span>10th January 2024</span>
        </div>
        {/*<p  className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
       */}
      </section>
    </div>
    {/* <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Opening Ceremony</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon opening ceremony will start 9:15 AM onwards.</p>
        
      </section>
    </div>
     */}
          <div class="row row-1">
            <section>
              <i class="icon fas fa-globe"></i>
              <div class="details">
                <span class="title">Hackathon Starts</span>
                <span>21st January 2024</span>
              </div>
              <p className="timeline_text" style={{ fontSize: "14px" }}>Hackathon ideation phase will start from 9:30 AM onwards.</p>
            </section>
          </div>
          <div class="row row-2">
            <section>
              <i class="icon fas fa-star"></i>
              <div class="details">
                <span class="title">Hacking Phase 1 (Initial MVP)</span>
                <span>21st January 2023</span>
              </div>
              <p className="timeline_text" style={{ fontSize: "14px" }}>Hackathon Phase-1 will start from 10:30 AM onwards.</p>
            </section>
          </div>
          <div class="row row-1">
            <section>
              <i class="icon fas fa-star"></i>
              <div class="details">
                <span class="title">Evaluation of Phase-1</span>
                <span>21st January 2024</span>
              </div>
              <p className="timeline_text" style={{ fontSize: "14px" }}>Evaluation of Phase-1 starts from 2:00 PM onwards. Teams will have to pitch their idea to judges alongside the initial MVP. Only top 20 teams will move to the next phase</p>
            </section>
          </div>
          <div class="row row-2">
            <section>
              <i class="icon fas fa-star"></i>
              <div class="details">
                <span class="title">Hacking Phase 2</span>
                <span>21st January 2024</span>
              </div>
              <p className="timeline_text" style={{ fontSize: "14px" }}>Hackathon Phase-2 period will start from 2:30 PM onwards.</p>
            </section>
          </div>
          <div class="row row-1">
            <section>
              <i class="icon fas fa-star"></i>
              <div class="details">
                <span class="title">Evaluation of Phase-2</span>
                <span>21st January 2024</span>
              </div>
              <p className="timeline_text" style={{ fontSize: "14px" }}>Evaluation of Phase-1 starts from 5:00 PM onwards. Teams will only have 2 minutes to demo their project in front of judges.</p>
            </section>
          </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Hackathon Ends</span>
          <span>21st January 2024</span>
        </div>
              <p className="timeline_text" style={{ fontSize: "14px" }}>Hackathon Prize Distribution and Closing ceremony will end by 7:00 PM.</p>  
      </section>
    </div>
  </div>
         </div>
    );
  }
  
  export default TimeLine;