import './Feed.css';

import { Link } from 'react-router-dom';
import {API_KEY, value_converter} from "../../data";
import { useEffect, useState } from 'react';
import moment from "moment";

// import { response } from 'express';

const Feed = ({category})=>{
    const [data, setData] = useState([]);
    const fetchData = async()=>{
        const videoList_url  = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items));
    }

    useEffect(()=>{
        fetchData();
    },[category])


    return(
        <div className='feed'>
            {data.map((item,index)=>{
                return(
                    <Link to={`video/{item.snippet.categoryId}/{item.id}`} className="card">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
               
                )
            })}  

        </div>
    )
}
export default Feed;














// import './Feed.css';
// import thumbnail1 from "../../assets/thumbnail1.png";
// import thumbnail2 from "../../assets/thumbnail2.png";
// import thumbnail3 from '../../assets/thumbnail3.png';
// import thumbnail4 from "../../assets/thumbnail4.png";
// import thumbnail5 from "../../assets/thumbnail5.png";
// import thumbnail6 from "../../assets/thumbnail6.png";
// import thumbnail7 from "../../assets/thumbnail7.png";
// import thumbnail8 from "../../assets/thumbnail8.png";
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { API_KEY } from "../../data";

// const Feed = ({ category }) => {
//     const [videos, setVideos] = useState([]);

//     const fetchData = async () => {
//         const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
//         try {
//             const response = await fetch(videoList_url);
//             const data = await response.json();
//             setVideos(data.items || []);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, [category]);

//     return (
//         <div className='feed'>
//             {videos.length > 0 ? videos.map((video, index) => (
//                 <Link to={`video/${video.id}`} className="card" key={index}>
//                     <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
//                     <h2>{video.snippet.title}</h2>
//                     <h3>{video.snippet.channelTitle}</h3>
//                     <p>{video.statistics.viewCount} views &bull; {new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
//                 </Link>
//             )) : (
//                 <>
//                     <div className="card">
//                         <img src={thumbnail1} alt="" />
//                         <h2>Best channel to learn coding that help to be a web developer</h2>
//                         <h3>Apna College</h3>
//                         <p>30k views &bull; 2 days ago</p>
//                     </div>
//                     <div className="card">
//                         <img src={thumbnail2} alt="" />
//                         <h2>Best channel to learn coding that help to be a web developer</h2>
//                         <h3>Apna College</h3>
//                         <p>30k views &bull; 2 days ago</p>
//                     </div>
//                     <div className="card">
//                         <img src={thumbnail3} alt="" />
//                         <h2>Best channel to learn coding that help to be a web developer</h2>
//                         <h3>Apna College</h3>
//                         <p>30k views &bull; 2 days ago</p>
//                     </div>
//                     <div className="card">
//                         <img src={thumbnail4} alt="" />
//                         <h2>Best channel to learn coding that help to be a web developer</h2>
//                         <h3>Apna College</h3>
//                         <p>30k views &bull; 2 days ago</p>
//                     </div>
//                     <div className="card">
//                         <img src={thumbnail5} alt="" />
//                         <h2>Best channel to learn coding that help to be a web developer</h2>
//                         <h3>Apna College</h3>
//                         <p>30k views &bull; 2 days ago</p>
//                     </div>
//                     <div className="card">
//                         <img src={thumbnail6} alt="" />
//                         <h2>Best channel to learn coding that help to be a web developer</h2>
//                         <h3>Apna College</h3>
//                         <p>30k views &bull; 2 days ago</p>
//                     </div>
//                     <div className="card">
//                         <img src={thumbnail7} alt="" />
//                         <h2>Best channel to learn coding that help to be a web developer</h2>
//                         <h3>Apna College</h3>
//                         <p>30k views &bull; 2 days ago</p>
//                     </div>
//                     <div className="card">
//                         <img src={thumbnail8} alt="" />
//                         <h2>Best channel to learn coding that help to be a web developer</h2>
//                         <h3>Apna College</h3>
//                         <p>30k views &bull; 2 days ago</p>
//                     </div>
//                 </>
//             )}
//         </div>
//     )
// }

// export default Feed;
