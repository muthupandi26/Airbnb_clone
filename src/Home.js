import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="online Experiences"
          description=". Airbnb is not liable for delayed or undelivered messages."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique Stays"
          description=". Airbnb is not liable for delayed or undelivered messages."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire rooms"
          description=". Airbnb is not liable for delayed or undelivered messages."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/11bd9fc9-4ca9-4208-b449-bdc63a1969b9.jpg?im_w=720"
          title="Entire rooms"
          description=". Airbnb is not liable for delayed or undelivered messages."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/5c158027-811c-48c3-93b2-d24ec1d64f5d.jpg?im_w=720"
          title="Entire rooms"
          description=". Airbnb is not liable for delayed or undelivered messages."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-6239693/original/c84e7f69-6fc2-43c4-951e-2124837ba851.jpeg?im_w=720"
          title="Entire rooms"
          description=". Airbnb is not liable for delayed or undelivered messages."
        />
      </div>
    </div>
  );
}

export default Home;
