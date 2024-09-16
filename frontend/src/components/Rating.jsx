import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { MdStar, MdOutlineStarHalf } from "react-icons/md";

export default function Rating({rating}){
    return(
        <div className="flex justify-center">
            {[...Array(5)].map((_, index) =>{
                const ratingValue = index+1 
                return(
                    <span key={index} className="text-[#ffa801] text-xl">
                        {rating >= ratingValue ? (
                            <MdStar />
                        ) : rating >= ratingValue - 0.5 ? (
                            <MdOutlineStarHalf />
                        ) : (
                            <IoMdStarOutline/>
                        )}

                    </span>
                )
            })}
        </div>
    )
}