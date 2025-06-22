/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useEffect } from "react";

const ContactPage = () => {
  const [postData, setPostData] = useState([]);
  const userDataURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(userDataURL);
      const userData = await res.json();
      console.log(userData);
      setPostData(userData);
      return userData;
    };
    fetchData();
  }, []);

  return (
    <div className="bg-orange-600 p-10">
       <ul className="p-5">
      {postData.map((item:any) => (
       
            <li key={item.id as number}>{item?.name}</li>
   
       
      ))}
           </ul>
    </div>
  );
};

export default ContactPage;
