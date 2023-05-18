import { SiApplemusic, SiAudiomack, SiDeezer, SiSpotify, SiYoutube } from 'react-icons/si';
import '../css/streamMeModal.css';

const StreamMeModal = ({ display, setDisplay }) => {
    return (<>
        {display && <main className="streamMemModal">
            <section className='content'>

                <div >
                    <button className='closeIcon' onClick={(e) => { e.preventDefault(); setDisplay(false) }}>X</button>
                </div>

                <div className="picture"></div>

                <section className="streamingPlatofrms">

                    <div className="platform">
                        <span className="icon"><a href='https://music.apple.com/gh/artist/nana-essel/1460696942' target='_blank' rel='noreferrer'>{<SiApplemusic size={"30px"} />}</a></span>
                        <a href='https://music.apple.com/gh/artist/nana-essel/1460696942' target='_blank' rel='noreferrer' className='namelink'>
                            <span className="name">Apple music</span>
                        </a>
                    </div>
                    <div className="platform">
                        <span className="icon" ><a href='https://open.spotify.com/artist/5tuz3ZJBc4SQafkxEomSmi?autoplay=true' target='_blank' rel='noreferrer'>{<SiSpotify color='green' size={"30px"} />}</a></span>
                        <a href='https://open.spotify.com/artist/5tuz3ZJBc4SQafkxEomSmi?autoplay=true' target='_blank' rel='noreferrer' className='namelink'> <span className="name">Spotify</span></a>
                    </div>
                    <div className="platform">
                        <span className="icon"><a href='https://www.youtube.com/channel/UC1cREEDebVE1jTBIdRPZzww?feature=gws_kp_artist&feature=gws_kp_artist' target='_blank' rel='noreferrer'>{<SiYoutube color='red' size={"30px"} />}</a></span>
                        <a href='https://www.youtube.com/channel/UC1cREEDebVE1jTBIdRPZzww?feature=gws_kp_artist&feature=gws_kp_artist' target='_blank' rel='noreferrer' className='namelink'>
                            <span className="name">YouTube</span>
                        </a>
                    </div>
                    <div className="platform">
                        <span className="icon"><a href='https://audiomack.com/nanaessel_deeg' target='_blank' rel='noreferrer'>{<SiAudiomack color='orange' size={"30px"} />}</a></span>
                        <a href='https://audiomack.com/nanaessel_deeg' target='_blank' rel='noreferrer' className='namelink'>
                            <span className="name">AudioMack</span>
                        </a>
                    </div>
                    <div className="platform">
                        <span className="icon"><a href='https://www.deezer.com/artist/64176062' target='_blank' rel='noreferrer'>{<SiDeezer color='blue' size={"30px"} />}</a></span>
                        <a href='https://www.deezer.com/artist/64176062' target='_blank' rel='noreferrer' className='namelink'>
                            <span className="name">Deezer</span>
                        </a>
                    </div>
                </section>

            </section>
        </main>}
    </>)
}

export default StreamMeModal;