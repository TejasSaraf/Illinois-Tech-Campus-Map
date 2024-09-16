import { NavLink } from "react-router-dom";
import { FaBars, FaParking, FaRoute } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { LiaUniversitySolid, LiaRestroomSolid } from "react-icons/lia";
import { IoLibrary, IoBicycleSharp } from "react-icons/io5";
import { GrUserPolice, GrElevator, GrYoga } from "react-icons/gr";
import { ImSpoonKnife } from "react-icons/im";
import { GiHighGrass, GiEntryDoor } from "react-icons/gi";
import { MdLocalHospital, MdOutlineSportsGymnastics, MdDoorSliding, MdDirectionsCar, MdOutlineBathroom } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { RiGameFill } from "react-icons/ri";
import { TbParkingCircle } from "react-icons/tb";
import { FaTrainSubway } from "react-icons/fa6";
import { IoIosBus } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarMenu";
const routes = [
  {
    path: "/VisitingCampus",
    name: "VisitingCampus",
    icon: <LiaUniversitySolid />,
    subRoutes: [
      {
        path: "/settings/Wellness Center",
        name: "Wellness Center ",
        icon: <MdLocalHospital />,
      },
      {
        path: "/settings/Public Restrooms",
        name: "Public Restrooms",
        icon: <LiaRestroomSolid />,
      },
      {
        path: "/settings/Man on Bench",
        name: "Man on Bench",
        icon: <GrYoga />,
      },
      {
        path: "/settings/Gym",
        name: "Gym",
        icon: <CgGym />,
      },
    ],
  },
  {
    path: "/LifeOnCampus",
    name: "LifeOnCampus",
    icon: <GiHighGrass />,
    subRoutes: [
      {
        path: "/settings/eateries",
        name: "Eateries ",
        icon: <ImSpoonKnife />,
      },
      {
        path: "/settings/library",
        name: "Library",
        icon: <IoLibrary />,
      },
      {
        path: "/settings/athletics",
        name: "Athletics",
        icon: <MdOutlineSportsGymnastics />,
      },
      {
        path: "/settings/thebog",
        name: "The Bog",
        icon: <RiGameFill />,
      },
    ],
  },
  {
    path: "/ParkingTransportation",
    name: "ParkingTransportation",
    icon: <IoIosBus />,
    subRoutes: [
      {
        path: "/settings/Accessible Enterance",
        name: "Accessible Enterance ",
        icon: <GiEntryDoor />,
      },
      {
        path: "/settings/Accessible Enterance w/ Power Operated Door",
        name: "Accessible Enterance w/ Power Operated Door",
        icon: <MdDoorSliding />,
      },
      {
        path: "/settings/Elevator/Lift",
        name: "Elevator/Lift",
        icon: <GrElevator />,
      },
      {
        path: "/settings/Parking",
        name: "Parking",
        icon: <FaParking />,
      },
      {
        path: "/settings/Accessible Parking",
        name: "Accessible Parking",
        icon: <TbParkingCircle />,
      },
      {
        path: "/settings/Single Occupant Bathroom",
        name: "Single Occupant Bathroom",
        icon: <MdOutlineBathroom />,
      },
      {
        path: "/settings/CTA",
        name: "CTA",
        icon: <FaTrainSubway />,
      },
      {
        path: "/settings/Divvy Stands",
        name: "Divvy Stands",
        icon: <IoBicycleSharp />,
      },
    ],
  },
  {
    path: "/Safety",
    name: "Safety",
    icon: <GrUserPolice />,
    subRoutes: [
      {
        path: "/settings/Public Safety",
        name: "Public Safety ",
        icon: <MdDirectionsCar />,
      },
      {
        path: "/settings/Suggested Travel Routes",
        name: "Suggested Travel Routes",
        icon: <FaRoute />,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h2
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  ILLINOIS TECH
                </motion.h2>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;