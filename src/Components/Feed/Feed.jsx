// import './Feed.css';

// import { Link } from 'react-router-dom';
// import {API_KEY, value_converter} from "../../data";
// import { useEffect, useState } from 'react';
// import moment from "moment";

// // import { response } from 'express';

// const Feed = ({category})=>{
//     const [data, setData] = useState([]);
//     const fetchData = async()=>{
//         const videoList_url  = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
//         await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items));
//     }

//     useEffect(()=>{
//         fetchData();
//     },[category])


//     return(
//         <div className='feed'>
//             {data.map((item,index)=>{
//                 return(
//                     <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
//                     <img src={item.snippet.thumbnails.medium.url} alt="" />
//                     <h2>{item.snippet.title}</h2>
//                     <h3>{item.snippet.channelTitle}</h3>
//                     <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
//                 </Link>
               
//                 )
//             })}  

//         </div>
//     )
// }
// export default Feed;






// import "./Feed.css";

// import { Link } from "react-router-dom";
// import { API_KEY, value_converter } from "../../data";
// import { useEffect, useState } from "react";
// import moment from "moment";

// // import { response } from 'express';

// const Feed = ({ category }) => {
//   const [data, setData] = useState([]);
//   const fetchData = async () => {
//     const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
//     await fetch(videoList_url)
//       .then((response) => response.json())
//       .then((data) => setData(data.items));
//   };

//   useEffect(() => {
//     fetchData();
//   }, [category]);

//   return (
//     <div className="feed">
      
//         return (
//           <Link
//             to={`video/${item.snippet.categoryId}/${item.id}`}
//             className="card"
//           >
//             <img src={item.snippet.thumbnails.medium.url} alt="" />
//             <h2>{item.snippet.title}</h2>
//             <h3>{item.snippet.channelTitle}</h3>
//             <p>
//               {value_converter(item.statistics.viewCount)} views &bull;{" "}
//               {moment(item.snippet.publishedAt).fromNow()}
//             </p>
//           </Link>
//         );
     
//     </div>
//   );
// };
// export default Feed;


import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    try {
      const response = await fetch(videoList_url);
      const result = await response.json();
      if (result.items) {
        setData(result.items);
      } else {
        setError("No items found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="feed">
      {data.length > 0 ? data.map((item, index) => (
        <Link
          key={index}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card"
        >
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_converter(item.statistics.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      )) : <p>Loading...</p>}
    </div>
  );
};

export default Feed;
