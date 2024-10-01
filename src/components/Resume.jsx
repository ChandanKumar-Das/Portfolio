import React, { useState } from 'react';
//import { BsDownload } from "react-icons/bs";
import pdf from "../assets/Chandan-frontend-devloper.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const Resume = () => {
  const[wid, setwid]=useState(window.innerWidth);

  const handleResize=()=>{
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  return (
    <div className='class="pt-12 w-fit relative mt-24 mx-auto text-center"'>
      <Document file={pdf} className="pointer-events-none">
          <Page pageNumber= {1} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1}/>
      </Document>

      <a href={pdf} target='_blank' download="Chandan_kumar_Das">
        <button className='hover:bg-gray-300 hover:text-black cursor-pointer my-6 w-48 h-10 bg-[#431f47] text-[#E7E7E7] no-underline rounded border-none transition-all duration-500' type='button'>
          <h3 className=''> Download CV</h3>
        </button>
      </a>

    </div>
  )
}

export default Resume