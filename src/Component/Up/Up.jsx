// "use client"
// import { ArrowUpFromDot } from "lucide-react";
// import React, { useState } from "react";

// const Up = () => {
//   const [show, setShow] = useState(false);
//   window.addEventListener("scroll", () => {
//     window.scrollY > 400 ? setShow(true) : setShow(false);
//   });
//   const handleTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <>
//       {show ? (
//         <div
//           onClick={handleTop}
//           className="flex animate-bounce  fixed bottom-[100px] right-[20px] items-center justify-center w-12 h-12 font-bold text-[--main-color] z-[5555] transition-all border-2 border-[--main-color] rounded-full cursor-pointer hover:bg-[--main-color] hover:text-white"
//         >
//           <ArrowUpFromDot />
//         </div>
//       ) : (
//         ""
//       )}
//     </>
//   );
// };

// export default Up;
"use client"
import { useState, useEffect } from "react";

const Up = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400 ? setShow(true) : setShow(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {show && (
        <button onClick={handleTop} className="back-to-top">
          Up
        </button>
      )}
    </div>
  );
};

export default Up;
