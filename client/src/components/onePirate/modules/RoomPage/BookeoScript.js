
import React, { useEffect } from 'react';


const BookeoScript = () => {


  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://bookeo.com/widget.js?a=3150HYKPLT1830A9B3FAF";
    script.async = true;
    const bookeo = document.querySelector('#bookeo-anchor')
    bookeo.appendChild(script);
    script.bookeo_start();

    return () => {
      bookeo.removeChild(script);
    }
  }, []);

  return (
  <></>
  )
}




export default BookeoScript;