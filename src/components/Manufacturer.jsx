import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Manufacturer = ({
  companyName,
  addresses,
  minOrderQty,
  productGroups,
  logo,
  banners,
}) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        width: "302px",
        height: "310px",
        margin: "10px",
        borderRadius: "8px",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.08)",
        backgroundColor: "#fff ",
      }}>
      {banners.map((banner) => (
        <img
          key={banner._id}
          src={banner.url}
          alt=''
          style={{
            width: "140px",
            height: "90px",
            margin: "10px 5px",
            zIndex: "1",
            // objectFit: "contain",
          }}
        />
      ))}

      <img
        src={logo}
        alt=''
        style={{
          zIndex: "2",
          position: "relative",
          bottom: "60px",
        }}
      />

      <CardContent style={{ padding: "0px 22px" }}>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            textAlign: "left",
            color: "#2a2a2e",
            position: "relative",
            bottom: "60px",
          }}>
          {companyName}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            textAlign: "left",
            position: "relative",
            bottom: "60px",
          }}>
          {addresses.map((address) => address.city)},{" "}
          {addresses.map((address) => address.country)}
          &nbsp;&nbsp;&nbsp;
          <a href='#' style={{ color: "green", textDecoration: "none" }}>
            Min Qty: {minOrderQty}
          </a>
          <p>{productGroups.map((productGroup) => productGroup.name)}</p>
        </Typography>
      </CardContent>
      <button
        style={{
          borderStyle: "none",
          width: "120px",
          height: "32px",
          margin: "25px 5px 0 14px",
          padding: "8px 20px 8px 22px",
          borderRadius: "16px",
          backgroundColor: "#d1ffd0",
          color: "#04896A",
          position: "relative",
          bottom: "90px",
        }}>
        View Details
      </button>
    </Card>
  );
};
export default Manufacturer;
