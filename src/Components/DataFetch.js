import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DataFetch = () => {
  const [getData, setGetData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchGetData = async () => {
      try {
        const { data } = await axios.get(
          "https://examplebd.com/api/get-csrf-token"
        );
        setGetData(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    const fetchPostData = async () => {
      try {
        const { data } = await axios.post(
          "https://examplebd.com/api/live-classes?user_id=10089"
        );
        setPostData(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchGetData();
    fetchPostData();
  }, []);
  return (
    <>
      {postData.length === 0 ? (
        "Loading..."
      ) : (
        <div>
          <h1>This is Get Data</h1>
          <h2>{getData.csrf_token}</h2>
          <h1>This is Post Data</h1>

          <div>
            {postData.map((item, index) => (
              <div key={index}>
                <div>
                  <hr />
                  <Link to={`/fetch-details/${item.id}`}>
                    <h1>ID : {item.id}</h1>
                  </Link>
                  <h1>Course Title : {item.course_title}</h1>
                  <h1>End Time : {item.ending_time}</h1>
                  <h1>Live type : {item.live_type}</h1>
                  <h1>Meeting password :{item.meeting_password}</h1>
                  <h1>Starting Time{item.starting_time}</h1>
                  <h1>Title : {item.title}</h1>
                  <h1>User ID : {item.user_id}</h1>
                  <h1>User Name : {item.user_name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DataFetch;
