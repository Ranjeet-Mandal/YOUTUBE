// import "./Playvideo.css";
// // import video1 from "../../assets/video.mp4";
// import like from '../../assets/like.png';
// import dislike from "../../assets/dislike.png";
// import share from "../../assets/share.png";
// import save from "../../assets/save.png";
// import jack from "../../assets/jack.png";
// import user_profile from "../../assets/user_profile.jpg";
// import { useEffect } from "react";

// const Playvideo = ({videoId})=>{
//     // useEffect(() => {
//     //     console.log("videoId:", videoId); // Debugging line to ensure videoId is passed correctly
//     // }, [videoId]);

//     const src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
//     return(
        
//         <div className="play-video">
            
//             {console.log(src)}
//             <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//             <h3>Best youtube channel to learn Webdevelopment</h3>
//             <div className="play-video-info">
//             <p>8k Views &bull; 2 days ago</p>
//             <div>
//             <span><img src={like} alt="" />5k</span>
//             <span><img src={dislike} alt="" />4</span>
//             <span><img src={share} alt="" />Share</span>
//             <span><img src={save} alt="" />Save</span>
//             </div>
//             </div>
//             <hr />
//             <div className="publisher">
//             <img src={jack} alt="" />
//             <div>
//                 <p>GreatStack</p>
//                 <span>1M Subscribers</span>
//             </div>
//             <button>Subscribe</button>
//             </div>
//             <div className="video-description">
//                 <p>Channel that make learning easy</p>
//                 <p>Subscribe GeatStack to Watch More Tutorials on Webdevelopment</p>
//                 <hr />
//                 <h4>130 Comments</h4>
//                 <div className="comment">
//                     <img src={user_profile} alt="" />
//                     <div>
//                         <h3>Rohan <span>1 day ago</span></h3>
//                         <p>You are perfect just the way you are.</p>
//                         <div className="comment-action">
//                             <img src={like} alt="" />
//                             <span>100</span>
//                             <img src={dislike} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="comment">
//                     <img src={user_profile} alt="" />
//                     <div>
//                         <h3>Rohan <span>1 day ago</span></h3>
//                         <p>You are perfect just the way you are.</p>
//                         <div className="comment-action">
//                             <img src={like} alt="" />
//                             <span>100</span>
//                             <img src={dislike} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="comment">
//                     <img src={user_profile} alt="" />
//                     <div>
//                         <h3>Rohan <span>1 day ago</span></h3>
//                         <p>You are perfect just the way you are.</p>
//                         <div className="comment-action">
//                             <img src={like} alt="" />
//                             <span>100</span>
//                             <img src={dislike} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="comment">
//                     <img src={user_profile} alt="" />
//                     <div>
//                         <h3>Rohan <span>1 day ago</span></h3>
//                         <p>You are perfect just the way you are.</p>
//                         <div className="comment-action">
//                             <img src={like} alt="" />
//                             <span>100</span>
//                             <img src={dislike} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Playvideo;
import "./Playvideo.css";
import like from '../../assets/like.png';
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useEffect } from "react";

const Playvideo = ({ videoId }) => {
  // Ensure videoId is defined and log it for debugging
  useEffect(() => {
    if (!videoId) {
      console.error('videoId is not defined');
    }
    console.log("videoId:", videoId); // Debugging line to ensure videoId is passed correctly
  }, [videoId]);

  return (
    <div className="play-video">
      <iframe 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="YouTube video"
      ></iframe>
      <h3>Best YouTube channel to learn Web Development</h3>
      <div className="play-video-info">
        <p>8k Views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="like" />5k</span>
          <span><img src={dislike} alt="dislike" />4</span>
          <span><img src={share} alt="share" />Share</span>
          <span><img src={save} alt="save" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="jack" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe to GreatStack to watch more tutorials on Web Development</p>
        <hr />
        <h4>130 Comments</h4>
        {/* Comments Section */}
        {["Rohan", "Rohan", "Rohan", "Rohan"].map((name, index) => (
          <div className="comment" key={index}>
            <img src={user_profile} alt="user profile" />
            <div>
              <h3>{name} <span>1 day ago</span></h3>
              <p>You are perfect just the way you are.</p>
              <div className="comment-action">
                <img src={like} alt="like" />
                <span>100</span>
                <img src={dislike} alt="dislike" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playvideo;
