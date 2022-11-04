import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

let basicScrollTop = function () {

    let btnTop = document.querySelector("#goTop");
  
    let btnReveal = function () {
      if (window.scrollY >= 100) {
        btnTop.classList.add("is-visible");
      } else {
        btnTop.classList.remove("is-visible");
      }
    };
  
    let TopscrollTo = function () {
      if (window.scrollY !== 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 30);
          TopscrollTo();
        }, 5);
      }
    };
  
    window.addEventListener("scroll", btnReveal);
    btnTop.addEventListener("click", TopscrollTo);
  };
  
  basicScrollTop();
  
  const toggleButton = document.getElementById(`toggle-button`);
  
  toggleButton.addEventListener('change', () => {
  
      document.body.classList.toggle('dark')
  
    })


const Totop = () => {
  return (
    <ArrowUpwardIcon id="goTop"/>
  )
}

export default Totop