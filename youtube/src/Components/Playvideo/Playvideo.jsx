import "./Playvideo.css";
// import video1 from "../../assets/video.mp4";
import like from '../../assets/like.png';
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useEffect } from "react";

const Playvideo = ({videoId})=>{
    // useEffect(() => {
    //     console.log("videoId:", videoId); // Debugging line to ensure videoId is passed correctly
    // }, [videoId]);

    return(
        
        <div className="play-video">
            
            <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>Best youtube channel to learn Webdevelopment</h3>
            <div className="play-video-info">
            <p>8k Views &bull; 2 days ago</p>
            <div>
            <span><img src={like} alt="" />5k</span>
            <span><img src={dislike} alt="" />4</span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
            </div>
            </div>
            <hr />
            <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
            </div>
            <div className="video-description">
                <p>Channel that make learning easy</p>
                <p>Subscribe GeatStack to Watch More Tutorials on Webdevelopment</p>
                <hr />
                <h4>130 Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Rohan <span>1 day ago</span></h3>
                        <p>You are perfect just the way you are.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>100</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Rohan <span>1 day ago</span></h3>
                        <p>You are perfect just the way you are.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>100</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Rohan <span>1 day ago</span></h3>
                        <p>You are perfect just the way you are.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>100</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Rohan <span>1 day ago</span></h3>
                        <p>You are perfect just the way you are.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>100</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Playvideo;