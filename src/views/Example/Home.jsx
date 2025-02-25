import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/todo');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <h1>Home</h1>
      <p>Welcome to my website</p>
    </>
  );
};

export default Home;
