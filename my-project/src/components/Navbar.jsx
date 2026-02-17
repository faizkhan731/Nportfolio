// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   const MenuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Experience", path: "/experience" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="w-full flex justify-center mt-6 px-4">
//       {/* Desktop Navbar */}
//       <ul
//         className="hidden md:flex items-center gap-10 px-6 py-2
//         border border-gray-200 rounded-full
//         text-sm font-medium shadow-md bg-white"
//       >
//         {MenuItems.map((menu) => (
//           <li key={menu.name}>
//             <Link
//               to={menu.path}
//               className={`px-4 py-1 rounded-full transition
//                 ${
//                   location.pathname === menu.path
//                     ? "bg-gray-200 text-gray-800"
//                     : "text-gray-500 hover:text-black"
//                 }`}
//             >
//               {menu.name}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navbar */}
//       <div className="md:hidden w-full flex justify-between items-center border border-gray-200 rounded-full px-4 py-2 shadow-md bg-white">
//         <span className="font-semibold">Menu</span>

//         <button onClick={() => setOpen(!open)}>
//           {open ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <div className="absolute top-20 w-[90%] bg-white border border-gray-200 rounded-xl shadow-md md:hidden">
//           <ul className="flex flex-col divide-y">
//             {MenuItems.map((menu) => (
//               <li key={menu.name}>
//                 <Link
//                   to={menu.path}
//                   onClick={() => setOpen(false)}
//                   className={`block px-4 py-3 text-sm transition
//                     ${
//                       location.pathname === menu.path
//                         ? "bg-gray-100 font-semibold"
//                         : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                 >
//                   {menu.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // 🔒 Lock scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const MenuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* 🔹 Navbar */}
      <nav className="sticky top-4 z-50 w-full flex justify-center px-4">
        {/* Desktop Navbar */}
        <ul
          className="hidden md:flex items-center gap-10 px-6 py-2
          border border-gray-200 rounded-full
          text-sm font-medium shadow-md bg-white"
        >
          {MenuItems.map((menu) => (
            <li key={menu.name}>
              <Link
                to={menu.path}
                className={`px-4 py-1 rounded-full transition
                  ${
                    location.pathname === menu.path
                      ? "bg-gray-200 text-gray-800"
                      : "text-gray-500 hover:text-black"
                  }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar */}
        <div className="md:hidden w-full flex justify-between items-center border border-gray-200 rounded-full px-4 py-2 shadow-md bg-white">
          <span className="font-semibold">Menu</span>

          <button onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* 🔹 Blur Background */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔹 Mobile Dropdown */}
      {open && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[90%] bg-white border border-gray-200 rounded-xl shadow-xl md:hidden">
          <ul className="flex flex-col divide-y">
            {MenuItems.map((menu) => (
              <li key={menu.name}>
                <Link
                  to={menu.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-sm transition
                    ${
                      location.pathname === menu.path
                        ? "bg-gray-100 font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
