import React from "react";
import Navigation from "./Navigation";
import { ProductProps } from "./types";

function Detail({ data }: ProductProps) {
  return (
    <div>
      <Navigation />
    </div>
  );
}

export default Detail;
