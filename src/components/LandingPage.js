import { useState, useEffect } from 'react';
import StreamMeModal from './StreamMeModal';
import { FaHome, FaUser, FaComments } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineAlignRight } from 'react-icons/ai';
import { MdHomeRepairService } from 'react-icons/md';
import { BsFillStopwatchFill, BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail, HiOutlinedevicePhone, HiOutlineDeviceMobile } from 'react-icons/hi';
import { FcPositiveDynamic } from 'react-icons/fc';
import { ImMobile, ImMusic } from 'react-icons/im';
import { GoGlobe } from 'react-icons/go';
import '../css/LandingPage.css';

const LandingPage = () => {

  const themeColors = { orangered: "orangered", deeppink: "rgba(201, 8, 127, 0.959)", white: "yellow", suppoertiveTextColor: "rgb(145, 145, 7)" };
  const [displayStreamModal, setDisplayStreamModal] = useState(false);
  const [currentThemeColor, setCurrentThemeColor] = useState({
    orangered: "",
    deeppink: "",
    white: "",

  })

  const profession = ["Web Developer", "Musician", "Mobile Developer"]
  const [currentProfession, setCurrentProfession] = useState()
  const [iterator, setIterator] = useState(0)
  const [timeDifference, setTimeDifference] = useState(new Date().getSeconds())

  //toggling role or proffession
  useEffect(() => {
    if (iterator !== profession.length) {
      setIterator((prev) => { return prev + 1 });
      setCurrentProfession(profession[iterator])
    }
    if (iterator === profession.length - 1) {
      setIterator(prev => { return prev - profession.length });
    }
    setTimeout(() => {
      setTimeDifference(new Date().getMilliseconds())
    }, 2000);
  }, [timeDifference, setTimeDifference, setIterator, profession.length]);

  return (
    <>
      {displayStreamModal && <StreamMeModal display={displayStreamModal} setDisplay={setDisplayStreamModal} />}
      <main className="landing-page">
        <section className='screen-1 home' id='home'>
          <section className='left-side'>
            <div className='brand-name'>
              <div className='top-right'
                style={currentThemeColor.orangered !== "" ?
                  { borderTop: `5PX SOLID ${themeColors.orangered}`, borderRight: `5PX SOLID ${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ?
                    { borderTop: `5PX SOLID ${themeColors.deeppink}`, borderRight: `5PX SOLID ${themeColors.deeppink}` } : currentThemeColor.white !== "" ?
                      { borderTop: `5PX SOLID ${themeColors.white}`, borderRight: `5PX SOLID ${themeColors.white}` } :
                      { borderTop: `5PX SOLID ${themeColors.orangered}`, borderRight: `5PX SOLID ${themeColors.orangered}` }}>

              </div>

              <div className='name'><b>Deeg</b></div>
              <div className='bottom-left'
                style={currentThemeColor.orangered !== "" ?
                  { borderBottom: `5PX SOLID ${themeColors.orangered}`, borderLeft: `5PX SOLID ${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ?
                    { borderBottom: `5PX SOLID ${themeColors.deeppink}`, borderLeft: `5PX SOLID ${themeColors.deeppink}` } : currentThemeColor.white !== "" ?
                      { borderBottom: `5PX SOLID ${themeColors.white}`, borderLeft: `5PX SOLID ${themeColors.white}` } :
                      { borderBottom: `5PX SOLID ${themeColors.orangered}`, borderLeft: `5PX SOLID ${themeColors.orangered}` }}>

              </div>
            </div>

            <div className='menu'>
              <div className='menu-item'>
                <span>{<FaHome />}</span>
                <span>Home</span>
              </div>
              <div className='menu-item'>
                <span>{<FaUser />}</span>
                <span>About</span>
              </div>
              <div className='menu-item'>
                <span>{<AiOutlineAlignRight />}</span>
                <span>Services</span>
              </div>
              <div className='menu-item'>
                <span>{<MdHomeRepairService />}</span>
                <span>Portfolio</span>
              </div>
              <div className='menu-item'>
                <span>{<FaComments />}</span>
                <span>Contact</span>
              </div>
            </div>
          </section>

          <section className='right-side'>
            <div className='content'>
              <section className='article-intro'>
                <div className='intro'>
                  <b><span className='white-text'>Hello, call me</span>
                    <span className='colored-text'
                      style={currentThemeColor.orangered !== "" ? { color: `${themeColors.orangered}` } :
                        currentThemeColor.deeppink !== "" ? { color: `${themeColors.deeppink}` } :
                          currentThemeColor.white !== "" ? { color: `${themeColors.white}` } :
                            { color: `${themeColors.orangered}` }}> David Ensor
                    </span>
                  </b>
                </div>
                <div className='role'>
                  <b><span className='white-text'>I am a </span>
                    <span className='colored-text'
                      style={currentThemeColor.orangered !== "" ? { color: `${themeColors.orangered}` } :
                        currentThemeColor.deeppink !== "" ? { color: `${themeColors.deeppink}` } :
                          currentThemeColor.white !== "" ? { color: `${themeColors.white}` } :
                            { color: `${themeColors.orangered}` }}>

                      {currentProfession}
                    </span>
                    <span className='colored-text'> </span>
                  </b>
                </div>

              </section>

              <section className='right-side-grid'>

                <section>
                  <article>
                    <p>I have been developing applications with React js, React Native, and Node js for over {new Date().getFullYear() - Number(2019)} years now.</p>
                    <p>For music, i have been in the game since 2018</p>
                  </article>

                  <div className='about-btn'><a href='#services'
                    style={currentThemeColor.orangered !== "" ? { backgroundColor: `${themeColors.orangered}` } :
                      currentThemeColor.deeppink !== "" ? { backgroundColor: `${themeColors.deeppink}` } :
                        currentThemeColor.white !== "" ? { backgroundColor: `${themeColors.white}`, color: "black" } :
                          { backgroundColor: `${themeColors.orangered}` }}>Services</a></div>

                  <div className='theme-colors'>
                    <div className='title'>Theme colors</div>
                    <div className='colors'>

                      <button className='orange-red' onClick={(e) => { e.preventDefault(); setCurrentThemeColor((prev) => { return { ...prev, orangered: themeColors.orangered, white: "", deeppink: "" } }) }}><div></div></button>

                      <button className='deep-pink' onClick={(e) => { e.preventDefault(); setCurrentThemeColor((prev) => { return { ...prev, deeppink: themeColors.deeppink, white: "", orangered: "" } }) }}> <div></div></button>
                      <button className='white' onClick={(e) => { e.preventDefault(); setCurrentThemeColor((prev) => { return { ...prev, white: themeColors.white, orangered: "", deeppink: "" } }) }}>  <div></div></button>


                    </div>
                  </div>
                </section>

                <section className='picture-container'>
                  <div className='top-left'
                    style={currentThemeColor.orangered !== "" ?
                      { borderTop: `5PX SOLID ${themeColors.orangered}`, borderLeft: `5PX SOLID ${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ?
                        { borderTop: `5PX SOLID ${themeColors.deeppink}`, borderLeft: `5PX SOLID ${themeColors.deeppink}` } : currentThemeColor.white !== "" ?
                          { borderTop: `5PX SOLID ${themeColors.white}`, borderLeft: `5PX SOLID ${themeColors.white}` } :
                          { borderTop: `5PX SOLID ${themeColors.orangered}`, borderLeft: `5PX SOLID ${themeColors.orangered}` }}>
                  </div>

                  <div className='bottom-right'
                    style={currentThemeColor.orangered !== "" ?
                      { borderBottom: `5PX SOLID ${themeColors.orangered}`, borderRight: `5PX SOLID ${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ?
                        { borderBottom: `5PX SOLID ${themeColors.deeppink}`, borderRight: `5PX SOLID ${themeColors.deeppink}` } : currentThemeColor.white !== "" ?
                          { borderBottom: `5PX SOLID ${themeColors.white}`, borderRight: `5PX SOLID ${themeColors.white}` } :
                          { borderBottom: `5PX SOLID ${themeColors.orangered}`, borderRight: `5PX SOLID ${themeColors.orangered}` }}></div>
                  <div className='picture'></div>

                </section>
              </section>
            </div>
          </section>

        </section>

        <section className='screen-2 about' id='about'>
          <section className='about-me'>
            <div className='image'></div>

            <div className='about-me-article'>
              <div className='heading'><b>About Me</b></div>
              <div className='sub-heading'>
                <b>
                  <span>Section :</span>
                  <span className='colored-text'
                    style={currentThemeColor.orangered !== "" ? { color: `${themeColors.orangered}` } :
                      currentThemeColor.deeppink !== "" ? { color: `${themeColors.deeppink}` } :
                        currentThemeColor.white !== "" ? { color: `${themeColors.suppoertiveTextColor}` } :
                          { color: `${themeColors.orangered}` }}> Get to know me</span>
                </b>
              </div>
              <article>
                I am a Ghanaian and i jsut love to code. Though i am a full stack developer, i admire frontend so much. I believe frontend gives one the ability to control a user's perception of any application. I am very detremined and i love facing challenges that make me learn and unlearn.
              </article>

              <div className='article-btn'>
                <a href='#contact'
                  style={currentThemeColor.orangered !== "" ? { backgroundColor: `${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ? { backgroundColor: `${themeColors.deeppink}` } :
                    currentThemeColor.white !== "" ? { backgroundColor: `${themeColors.white}`, color: "black" } :
                      { backgroundColor: `${themeColors.orangered}` }}>Contact</a></div>
            </div>
          </section>

        </section>

        <section className='screen-3 services' id='services'>
          <div className='content'>
            <div className='heading'><b>My Services</b></div>
            <section className='services'>

              <div className='web-dev'>
                <div className='icon'><GoGlobe size={"30PX"} /></div>
                <div className='title'><b>Web Apps</b></div>
                <div className='description'>I create amazing mordern-day resposive websites and web apps.</div>
                <div className='button-container'><a href='Mailto:davidensor5000@gmail.com'
                  style={currentThemeColor.orangered !== "" ? { backgroundColor: `${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ? { backgroundColor: `${themeColors.deeppink}` } :
                    currentThemeColor.white !== "" ? { backgroundColor: `${themeColors.white}`, color: "black" } :
                      { backgroundColor: `${themeColors.orangered}` }}>Hire me</a></div>
              </div>

              <div className='mobile-dev'>
                <div className='icon'><ImMobile size={"30PX"} /></div>
                <div className='title'><b>Mobile Apps</b></div>
                <div className='description'>I create mobile apps that suit various needs.</div>
                <div className='button-container'><a href='Mailto:davidensor5000@gmail.com'
                  style={currentThemeColor.orangered !== "" ? { backgroundColor: `${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ? { backgroundColor: `${themeColors.deeppink}` } :
                    currentThemeColor.white !== "" ? { backgroundColor: `${themeColors.white}`, color: "black" } :
                      { backgroundColor: `${themeColors.orangered}` }}>Hire me</a></div>
              </div>

              <div className='music'>
                <div className='icon'>{<ImMusic color='white' size={"30px"} />}</div>
                <div className='title'><b>Music</b></div>
                <div className='description'>I do Hip-Pop, Afro-Pop and Afro-Beats genres, i am a writer, a singer, a rapper. </div>
                <div className='button-container'><button onClick={(e) => { e.preventDefault(); setDisplayStreamModal(true) }}
                  style={currentThemeColor.orangered !== "" ? { backgroundColor: `${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ? { backgroundColor: `${themeColors.deeppink}` } :
                    currentThemeColor.white !== "" ? { backgroundColor: `${themeColors.white}`, color: "black" } :
                      { backgroundColor: `${themeColors.orangered}` }}>Stream me</button></div>
              </div>

            </section>

            <section className='let-me'>
              <div><b>Let Me Get You A Website Or Mobile App</b></div>
              <div className='contact-btn'>
                <a href='#contact'
                  style={currentThemeColor.orangered !== "" ? { backgroundColor: `${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ? { backgroundColor: `${themeColors.deeppink}` } :
                    currentThemeColor.white !== "" ? { backgroundColor: `${themeColors.white}`, color: "black" } :
                      { backgroundColor: `${themeColors.orangered}` }}>Contact</a>
              </div>
            </section></div>
        </section>

        <section id='portfolio' className='screen-4 portfolio'>
          <div className='content'>
            <div className='heading'><b>Portfolio</b></div>
            <div className='sub-heading'
              style={currentThemeColor.orangered !== "" ? { color: `${themeColors.orangered}` } :
                currentThemeColor.deeppink !== "" ? { color: `${themeColors.deeppink}` } :
                  currentThemeColor.white !== "" ? { color: `${themeColors.suppoertiveTextColor}` } :
                    { color: `${themeColors.orangered}` }}><b>Sample of the numerous projects i have worked on</b></div>

            <section className='systems-i-worked-on'>
              <div className='dpos'>
                <div className='icon'>{<FcPositiveDynamic size={"30px"} />}</div>
                <div className='name'>dpOs</div>
                <div className='link'><a href=''
                  style={currentThemeColor.orangered !== "" ? { backgroundColor: `${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ? { backgroundColor: `${themeColors.deeppink}` } :
                    currentThemeColor.white !== "" ? { backgroundColor: `${themeColors.white}`, color: "black" } :
                      { backgroundColor: `${themeColors.orangered}` }}>Visit</a></div>
              </div>

              <div className='durationCalculator'>
                <div className='icon'>{<BsFillStopwatchFill size={"30px"} color={"brown"} />}</div>
                <div className='name'>Durator</div>
                <div className='link'><a href=''
                  style={currentThemeColor.orangered !== "" ? { backgroundColor: `${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ? { backgroundColor: `${themeColors.deeppink}` } :
                    currentThemeColor.white !== "" ? { backgroundColor: `${themeColors.white}`, color: "black" } :
                      { backgroundColor: `${themeColors.orangered}` }}>Visit</a></div>
              </div>

              <div className='Asabea-engineering'>
                <div><ImMusic size={"30px"} /></div>
                <div className='name'>My music site</div>
                <div className='link'><a href=''
                  style={currentThemeColor.orangered !== "" ? { backgroundColor: `${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ? { backgroundColor: `${themeColors.deeppink}` } :
                    currentThemeColor.white !== "" ? { backgroundColor: `${themeColors.white}`, color: "black" } :
                      { backgroundColor: `${themeColors.orangered}` }}>Visit</a></div>
              </div>

            </section>
          </div>
        </section>

        <section id='contact' className='screen-5 contact' style={{ backgroundcolor: "red" }}>
          <div className='goUp'><a href='#home'
            style={currentThemeColor.orangered !== "" ? { backgroundColor: `${themeColors.orangered}` } : currentThemeColor.deeppink !== "" ? { backgroundColor: `${themeColors.deeppink}` } :
              currentThemeColor.white !== "" ? { backgroundColor: `${themeColors.white}`, color: "black" } :
                { backgroundColor: `${themeColors.orangered}` }}>Go up </a></div>
          <div className='heading'><b>David Ensor</b></div>
          <section className='contact'>
            <div className='phone'><span>{<BsFillTelephoneFill />}</span> <span>+233(0) 24 598 879</span></div>
            <div className='email'><span>{<HiOutlineMail size={"20px"} />}</span> <span>Email me</span></div>
            <div className='linkedIn'><span>{<AiFillLinkedin size={"20px"} />}</span> <span>David Ensor</span></div>
          </section>
        </section>

      </main>
    </>
  );
}

export default LandingPage;
