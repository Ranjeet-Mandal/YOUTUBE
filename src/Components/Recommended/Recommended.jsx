


import "./Recommended.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const relatedVideo_Api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=46&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const res = await fetch(relatedVideo_Api);
      const data = await res.json();
      setApiData(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        apiData.map((item, index) => {
          return (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
              <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
              <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p className="views">{value_converter(item.statistics.viewCount)} Views</p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Recommended;
