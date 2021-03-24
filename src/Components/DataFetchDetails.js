import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const DataFetchDetails = () => {
  let { id } = useParams();
  const [postData, setPostData] = useState([]);

  const dynamicData = postData.find((item) => item?.id === id);

  useEffect(() => {
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
    fetchPostData();
  }, [id]);

  return (
    <>
      {dynamicData === undefined ? (
        "Loading..."
      ) : (
        <div>
          <h1>ID : {dynamicData?.id}</h1>
          <h1>Course Title : {dynamicData?.course_title}</h1>
          <h1>End Time : {dynamicData?.ending_time}</h1>
          <h1>Live type : {dynamicData?.live_type}</h1>
          <h1>Meeting password :{dynamicData?.meeting_password}</h1>
          <h1>Starting Time{dynamicData?.starting_time}</h1>
          <h1>Title : {dynamicData?.title}</h1>
          <h1>User ID : {dynamicData?.user_id}</h1>
          <h1>User Name : {dynamicData?.user_name}</h1>
          <Link to="/">Go Back</Link>
        </div>
      )}
    </>
  );
};

export default DataFetchDetails;
