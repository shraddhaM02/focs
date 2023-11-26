import React, { useState } from "react";
import { Close, Opacity } from "@mui/icons-material";
function Kaushala() {
  const data = [
         {
           id: "1",
           imgSrc:
             "https://images.unsplash.com/photo-1682686581498-5e85c7228119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
         },
    {
      id: "2",
      imgSrc:"https://plus.unsplash.com/premium_photo-1700801992428-6db75bbffa7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    },
    {
      id: "3",
      imgSrc:
        "https://images.unsplash.com/photo-1700864208310-0849428c612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      id: "4",
      imgSrc:"https://images.unsplash.com/photo-1700581429504-7e14e219014a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
    },
    {
      id: "5",
      imgSrc:
        "https://images.unsplash.com/photo-1682686581498-5e85c7228119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: "6",
      imgSrc:
        "https://images.unsplash.com/photo-1682686581498-5e85c7228119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
  ];

  const [model,setModel] = useState(false);
  const [tempImgSrc,setTempImgSrc] = useState('');

  const getImg=(imgSrc)=>{
      
       setTempImgSrc(imgSrc)
       setModel(true)
  }
  return (
      
    <>
       <div className={model?"model open":"model"}>
              <img src={tempImgSrc} alt="" />
              <Close color="disabled" onClick={()=>setModel(false)}/>
       </div>
      <div className="gallery space-y-2">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Kaushala;
