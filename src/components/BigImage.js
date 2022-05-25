import React from "react";
import { Backdrop } from "@mui/material";

const BigImage = ({ src, onClick, open }) => {
    return (
        <Backdrop onClick={onClick} open={open} sx={{ cursor: "pointer" }}>
            <img src={src} alt="" />
        </Backdrop>
    );
};

export default BigImage;
