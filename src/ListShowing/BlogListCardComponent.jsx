
import './blogListCard.css'
import {useEffect} from "react";
import $clamp from 'clamp-js';
import '../css/bootstrap.min.css'
import TestBlogCardComponent from "../components/TestBlogCardComponent";
export default function BlogListCardComponent() {
    useEffect(() => {
        // Apply clamping to elements with the class 'projcard-description'
        document.querySelectorAll('.projcard-description').forEach((box) => {
            $clamp(box, { clamp: 6 });
        });
    }, []);


    return(
        <>
            <TestBlogCardComponent/>
        </>

    )
}