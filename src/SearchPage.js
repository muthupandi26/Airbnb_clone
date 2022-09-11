import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 august . 2 august</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/981afb1a-07d1-42c8-9c65-1ca842f6de6a.jpg?im_w=720"
        location="private room in india"
        title="stay at this spacious edwarden house"
        description="1 guest 1 bedroom 1 bed 1.5 shared bathrom wifi kitchen free parking washing machine"
        star={4.51}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/d2b6be35-0b3f-47d6-b6a8-e9d9a44f62e9.jpg?im_w=720"
        location="private room in india"
        title="stay at this spacious edwarden house"
        description="1 guest 1 bedroom 1 bed 1.5 shared bathrom wifi kitchen free parking washing machine"
        star={4.51}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-49162787/original/c74fec6a-0541-4f78-ad14-37f56da3e6c1.jpeg?im_w=720"
        location="private room in india"
        title="stay at this spacious edwarden house"
        description="1 guest 1 bedroom 1 bed 1.5 shared bathrom wifi kitchen free parking washing machine"
        star={4.51}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-636655622605504132/original/e141ab1d-a8de-4eb0-8a46-cd26b3bd3955.jpeg?im_w=720"
        location="private room in india"
        title="stay at this spacious edwarden house"
        description="1 guest 1 bedroom 1 bed 1.5 shared bathrom wifi kitchen free parking washing machine"
        star={4.51}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/7085ff07-edfd-4a64-a1e3-bfecb8374c0a.jpg?im_w=720"
        location="private room in india"
        title="stay at this spacious edwarden house"
        description="1 guest 1 bedroom 1 bed 1.5 shared bathrom wifi kitchen free parking washing machine"
        star={4.51}
        price="$30 / night"
        total="$117 total"
      />
    </div>
  );
}

export default SearchPage;
