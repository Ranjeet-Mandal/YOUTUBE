// import Playvideo from "../../Components/Playvideo/Playvideo";
import { useParams } from "react-router-dom";
import Playvideo from "../../Components/Playvideo/Playvideo";
import Recommended from "../../Components/Recommended/Recommended";
import "./Video.css";
const Video = ()=>{
    const {videoId, categoryId} = useParams();

    return (
        <div className="play-container">
            <Playvideo videoId={videoId}></Playvideo>
            <Recommended></Recommended>
        </div>
    )
}
export default Video;


