import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomSearch from "../../Components/customSearch/CustomSearch";
import Hero from "../../Components/hero/Hero";
import Navbar from "../../Components/navbar/Navbar";
import NewsList from "../../Components/newsList/NewsList";

function Home() {
  const [topNews, setTopNews] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(API_KEY);
  useEffect(() => {
    const getTopNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
        );
        setTopNews(res.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    getTopNews();
  }, []);
  const filteredData = async (searchKey) => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${searchKey}&apiKey=${API_KEY}`
      );
      setTopNews(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  const searchedData = async (searchKey) => {
    try {
      const res = await axios.get(
        ` https://newsapi.org/v2/everything?q=${searchKey}&apiKey=${API_KEY}`
      );
      setTopNews(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar searchedData={searchedData} />
      <Hero />
      <CustomSearch filteredData={filteredData} />
      <NewsList topNews={topNews} />
    </div>
  );
}

export default Home;
