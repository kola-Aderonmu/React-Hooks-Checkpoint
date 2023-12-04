import React from "react";
import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const MovieCard = ({ id, title, description, image, rating }) => (
  <Link to={`${id}`} className="no-underline">
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src={image}
          width={200}
          height={400}
          className="object-cover space-y-3"
        />
      }
    >
      <Meta title={title} style={{ fontFamily: "cursive" }} />
      <Meta
        style={{ marginTop: "1rem" }}
        description={description.slice(0, 100)}
      />
      <Rate disabled defaultValue={rating} style={{ marginTop: "1rem" }} />
    </Card>
  </Link>
);
export default MovieCard;
