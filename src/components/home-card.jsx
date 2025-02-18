import React from "react";
import { Header1 } from "../home/header1-card";
import { Header2 } from "../home/header2-card";
import { Hero1 } from "../home/hero-card";
import { Hero2 } from "../home/hero2-card";
import { Hero3 } from "../home/hero3-card";
import { Service1 } from "../home/service1-card";
import { Service2 } from "../home/service2-card";
import { Footer1 } from "../home/footer-card";
import { Footer2 } from "../home/footer2-card";
import book4 from "../assets/book4.png"
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import book7 from "../assets/book7.png";
import book8 from "../assets/book8.png";
import { useState } from "react";

const books = [book4, book5, book6, book7, book8];

export const Home = () => {
    const [setSelectedBook] = useState(book4);
    return (
        <>
            <Header1 />
            <Header2 />
            <Hero1 />
            <Hero2 />
            <Hero3 />
            <Service1 />
            <Service2 books={books} setSelectedBooks={setSelectedBook}/>
            <Footer1 />
            <Footer2 />
        </>
    )
}
