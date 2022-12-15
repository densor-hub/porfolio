import { SiApplemusic, SiAudiomack, SiDeezer, SiSpotify, SiYoutube } from 'react-icons/si';
import '../css/streamMeModal.css';

const StreamMemModal = ({ display, setDisplay }) => {
    return (<>
        {display && <main className="streamMemModal">
            <section className='content'>

                <div >
                    <button className='closeIcon' onClick={(e) => { e.preventDefault(); setDisplay(false) }}>X</button>
                </div>

                <div className="picture"></div>

                <section className="streamingPlatofrms">

                    <div className="platform">
                        <span className="icon"><a href=''>{<SiApplemusic size={"30px"} />}</a></span>
                        <a href="" className='namelink'>
                            <span className="name">Apple music</span>
                        </a>
                    </div>
                    <div className="platform">
                        <span className="icon" ><a href=''>{<SiSpotify color='green' size={"30px"} />}</a></span>
                        <a href="" className='namelink'> <span className="name">Spotify</span></a>
                    </div>
                    <div className="platform">
                        <span className="icon"><a href=''>{<SiYoutube color='red' size={"30px"} />}</a></span>
                        <a href="" className='namelink'>
                            <span className="name">YouTube</span>
                        </a>
                    </div>
                    <div className="platform">
                        <span className="icon"><a href=''>{<SiAudiomack color='orange' size={"30px"} />}</a></span>
                        <a href="" className='namelink'>
                            <span className="name">AudioMack</span>
                        </a>
                    </div>
                    <div className="platform">
                        <span className="icon"><a href=''>{<SiDeezer color='blue' size={"30px"} />}</a></span>
                        <a href="" className='namelink'>
                            <span className="name">Deezer</span>
                        </a>
                    </div>
                </section>

            </section>
        </main>}
    </>)
}

export default StreamMemModal;