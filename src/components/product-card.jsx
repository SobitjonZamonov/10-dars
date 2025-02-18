import React from "react";
import { HeaderProduct1 } from "../product/header1";
import { Header2Product } from "../product/header2";
import { HeroProduct } from "../product/hero";
import { Footer1Product } from "../product/footer1";
import { Footer2Product } from "../product/footer2";


export const Product = ({selectedBook}) => {
    return (
        <>
            <HeaderProduct1 />
            <Header2Product />
            <HeroProduct selectedBook={selectedBook}/>
            <Footer1Product />
            <Footer2Product />
        </>
    )
}

