import React from "react";
import Slider from "../../compnents/slider/Slider";
import Services from "../../compnents/services/Services";
import HeadingTitle from "../../compnents/heading-title/HeadingTitle";
import BookSlider from "../../compnents/book-slider/BookSlider";
import { books } from "../../data/books";

const HomePage = () => {
  return (
    <section>
      <Slider />
      <Services />
      <HeadingTitle title="Most gifted" />
      <BookSlider data={books} />
      <HeadingTitle title="Best Seller " />
      <BookSlider data={books} />
      <HeadingTitle title="Most wished for" />
      <BookSlider data={books} />
    </section>
  );
};

export default HomePage;
