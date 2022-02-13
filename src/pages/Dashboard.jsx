// import { dividerClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import axios from "axios";
import Manufacturer from "../components/Manufacturer";
import InfiniteScroll from "react-infinite-scroll-component";

const Dashboard = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [noMore, SetNoMore] = useState(true);
  const [skip, setSkip] = useState(8);

  useEffect(() => {
    const getData = async () => {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios.get("manufacturers?limit=8", config).then(
        (res) => {
          const data = res.data.result.manufacturers;
          setManufacturers(data);
        },
        (err) => {
          console.log(err);
        }
      );
    };

    getData();
  }, []);

  const fetchData = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios.get(`manufacturers?skip=${skip}`, config).then(
      (res) => {
        const newData = res.data.result.manufacturers;
        setManufacturers([...manufacturers, ...newData]);
        // SetNoMore(false);
        setSkip(skip + 8);
        if (newData.length === 0) {
          SetNoMore(false);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div style={{ backgroundColor: "#F2F2F2", height: "120vh" }}>
      <Navbar />

      <InfiniteScroll
        dataLength={manufacturers.length} //This is important field to render the next data
        next={fetchData}
        hasMore={noMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{
          position: "absolute",
          top: "130px",
          left: "5vw",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}>
        {manufacturers.map((manufacturer) => (
          <Manufacturer
            key={manufacturer.uid}
            companyName={manufacturer.meta.companyName}
            addresses={manufacturer.addresses}
            minOrderQty={manufacturer.minOrderQty}
            productGroups={manufacturer.productGroups}
            logo={manufacturer.meta.logo.url}
            banners={manufacturer.meta.banners}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Dashboard;
