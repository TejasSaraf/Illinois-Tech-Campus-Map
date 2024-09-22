import { NavLink } from "react-router-dom";
import { FaBars, FaParking, FaRoute } from "react-icons/fa";
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

const SideBar = ({ setMarkers, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Checkbox states
  const [wellnessCenterChecked, setWellnessCenterChecked] = useState(false);
  const [libraryChecked, setlibraryChecked] = useState(false);
  const [manOnBenchChecked, setManOnBenchCheckedChecked] = useState(false);
  const [publicRestroomsChecked, setPublicRestroomsChecked] = useState(false);
  const [gymChecked, setGymChecked] = useState(false);
  const [eateriesChecked, setEateriesChecked] = useState(false);
  const [atheleticsChecked, setAtheleticsChecked] = useState(false);
  const [bogChecked, setBogChecked] = useState(false);
  const [enteranceChecked, setEnteranceChecked] = useState(false);
  const [powerOperatedDoorsChecked, setPowerOperatedDoorsChecked] = useState(false);
  const [elevatorChecked, setElevatorChecked] = useState(false);
  const [parkingChecked, setParkingChecked] = useState(false);
  const [accessibleParkingChecked, setAccessibleParkingChecked] = useState(false);
  const [bathroomChecked, setBathroomChecked] = useState(false);
  const [ctaChecked, setCTAChecked] = useState(false);
  const [divvyChecked, setDivvyChecked] = useState(false);
  const [publicSafetyChecked, setPublicSafetyChecked] = useState(false);

  // Handle Wellness Center checkbox
  const handleWellnessCenterChange = () => {
    setWellnessCenterChecked(wellnessCenterChecked);
    if (!wellnessCenterChecked) {
      // Pass marker coordinates when checked
      setMarkers([{ position: { lat: 41.83131, lng: -87.62709 }, title: "Wellness Center" }]);
    } else {
      // Remove marker when unchecked
      setMarkers([]);
    }
  };

  const handlePublicRestroomsChange = () => {
    setPublicRestroomsChecked(!publicRestroomsChecked);

    if (!publicRestroomsChecked) {
      // Append new marker when checked
      setMarkers((prevMarkers) => [
        { position: { lat: 41.83130, lng: -87.62748 }, title: "Restroom" },
        { position: { lat: 41.83261, lng: -87.62707 }, title: "Restroom" },
        { position: { lat: 41.83523, lng: -87.62863 }, title: "Restroom" },
        { position: { lat: 41.83590, lng: -87.62614 }, title: "Restroom" },
        { position: { lat: 41.83564, lng: -87.62427 }, title: "Restroom" },
        { position: { lat: 41.83661, lng: -87.62800 }, title: "Restroom" },
        { position: { lat: 41.83644, lng: -87.62437 }, title: "Restroom" },
        { position: { lat: 41.83777, lng: -87.62773 }, title: "Restroom" },
        { position: { lat: 41.83927, lng: -87.62532 }, title: "Restroom" }
      ]);
    } else {
      // Remove the specific marker when unchecked
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.title !== "Restroom"));
    }
  };


  const handleLibraryChange = () => {
    setlibraryChecked(!libraryChecked);
    if (!libraryChecked) {
      // Pass marker coordinates when checked
      setMarkers([{ position: { lat: 41.83399, lng: -87.62650 }, title: "Library" }]);
    } else {
      // Remove marker when unchecked
      setMarkers([]);
    }
  };

  const handleManOnBenchChange = () => {
    setManOnBenchCheckedChecked(!manOnBenchChecked);
    if (!manOnBenchChecked) {
      // Pass marker coordinates when checked
      setMarkers([{ position: { lat: 41.83555, lng: -87.62713 }, title: "Library" }]);
    } else {
      // Remove marker when unchecked
      setMarkers([]);
    }
  };

  const handleGymChange = () => {
    setGymChecked(!gymChecked);
    if (!gymChecked) {
      // Pass marker coordinates when checked
      setMarkers([{ position: { lat: 41.83904, lng: -87.62560 }, title: "Gym" }]);
    } else {
      // Remove marker when unchecked
      setMarkers([]);
    }
  };

  const handleEateriesChange = () => {
    setEateriesChecked(!eateriesChecked);
    if (!eateriesChecked) {
      // Pass marker coordinates when checked
      setMarkers([{ position: { lat: 41.83602, lng: -87.62551 }, title: "Eateries" }]);
    } else {
      // Remove marker when unchecked
      setMarkers([]);
    }
  };

  const handleAtheleticsChange = () => {
    setAtheleticsChecked(!atheleticsChecked);
    if (!atheleticsChecked) {
      // Pass marker coordinates when checked
      setMarkers([{ position: { lat: 41.83902, lng: -87.62538 }, title: "Atheletics" }]);
    } else {
      // Remove marker when unchecked
      setMarkers([]);
    }
  };

  const handleBogChange = () => {
    setBogChecked(!bogChecked);
    if (!bogChecked) {
      // Pass marker coordinates when checked
      setMarkers([{ position: { lat: 41.83536, lng: -87.62827 }, title: "The Bog" }]);
    } else {
      // Remove marker when unchecked
      setMarkers([]);
    }
  };

  const handleAccessibleEnteranceChange = () => {
    setEnteranceChecked(!enteranceChecked);

    if (!enteranceChecked) {
      // Append new marker when checked
      setMarkers((prevMarkers) => [
        { position: { lat: 41.83901, lng: -87.62534 }, title: "Accessible Enterance" },
        { position: { lat: 41.83799, lng: -87.62475 }, title: "Accessible Enterance" },
        { position: { lat: 41.83786, lng: -87.62411 }, title: "Accessible Enterance" },
        { position: { lat: 41.83763, lng: -87.62876 }, title: "Accessible Enterance" },
        { position: { lat: 41.83689, lng: -87.62812 }, title: "Accessible Enterance" },
        { position: { lat: 41.83969, lng: -87.62870 }, title: "Accessible Enterance" },
        { position: { lat: 41.83676, lng: -87.62717 }, title: "Accessible Enterance" },
        { position: { lat: 41.83609, lng: -87.62707 }, title: "Accessible Enterance" },
        { position: { lat: 41.83709, lng: -87.62406 }, title: "Accessible Enterance" },
        { position: { lat: 41.83337, lng: -87.62727 }, title: "Accessible Enterance" },
        { position: { lat: 41.83430, lng: -87.62384 }, title: "Accessible Enterance" },
        { position: { lat: 41.83363, lng: -87.62390 }, title: "Accessible Enterance" }
      ]);
    } else {
      // Remove the specific marker when unchecked
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.title !== "Accessible Enterance"));
    }
  };

  const handlepowerOperatedDoorsChange = () => {
    setPowerOperatedDoorsChecked(!powerOperatedDoorsChecked);

    if (!powerOperatedDoorsChecked) {
      // Append new marker when checked
      setMarkers((prevMarkers) => [
        { position: { lat: 41.83857, lng: -87.62739 }, title: "Power Operated Door" },
        { position: { lat: 41.83792, lng: -87.62778 }, title: "Power Operated Door" },
        { position: { lat: 41.83775, lng: -87.62718 }, title: "Power Operated Door" },
        { position: { lat: 41.83716, lng: -87.62748 }, title: "Power Operated Door" },
        { position: { lat: 41.83721, lng: -87.62796 }, title: "Power Operated Door" },
        { position: { lat: 41.83661, lng: -87.62627 }, title: "Power Operated Door" },
        { position: { lat: 41.83600, lng: -87.62808 }, title: "Power Operated Door" },
        { position: { lat: 41.83571, lng: -87.62741 }, title: "Power Operated Door" },
        { position: { lat: 41.83496, lng: -87.62745 }, title: "Power Operated Door" },
        { position: { lat: 41.83512, lng: -87.62584 }, title: "Power Operated Door" },
        { position: { lat: 41.83518, lng: -87.62494 }, title: "Power Operated Door" },
        { position: { lat: 41.83405, lng: -87.62743 }, title: "Power Operated Door" },
        { position: { lat: 41.83372, lng: -87.62802 }, title: "Power Operated Door" },
        { position: { lat: 41.83425, lng: -87.62631 }, title: "Power Operated Door" },
        { position: { lat: 41.83371, lng: -87.62630 }, title: "Power Operated Door" },
        { position: { lat: 41.83319, lng: -87.62628 }, title: "Power Operated Door" },
        { position: { lat: 41.83264, lng: -87.62738 }, title: "Power Operated Door" },
        { position: { lat: 41.83184, lng: -87.62723 }, title: "Power Operated Door" },
        { position: { lat: 41.83156, lng: -87.62806 }, title: "Power Operated Door" },
        { position: { lat: 41.83127, lng: -87.62754 }, title: "Power Operated Door" }
      ]);
    } else {
      // Remove the specific marker when unchecked
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.title !== "Power Operated Door"));
    }
  };

  const handleElevatorChange = () => {
    setElevatorChecked(!elevatorChecked);

    if (!elevatorChecked) {
      // Append new marker when checked
      setMarkers((prevMarkers) => [
        { position: { lat: 41.83341, lng: -87.62706 }, title: "Elevator/Lift" },
        { position: { lat: 41.83146, lng: -87.62724 }, title: "Elevator/Lift" },
        { position: { lat: 41.83865, lng: -87.62537 }, title: "Elevator/Lift" }
      ]);
    } else {
      // Remove the specific marker when unchecked
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.title !== "Elevator/Lift"));
    }
  };

  const handleParkingChange = () => {
    setParkingChecked(!parkingChecked);

    if (!parkingChecked) {
      // Append new marker when checked
      setMarkers((prevMarkers) => [
        { position: { lat: 41.83903, lng: -87.62624 }, title: "Parking" },
        { position: { lat: 41.83778, lng: -87.62628 }, title: "Parking" },
        { position: { lat: 41.83768, lng: -87.62559 }, title: "Parking" },
        { position: { lat: 41.83625, lng: -87.62390 }, title: "Parking" },
        { position: { lat: 41.83579, lng: -87.62916 }, title: "Parking" },
        { position: { lat: 41.83363, lng: -87.62912 }, title: "Parking" },
        { position: { lat: 41.83412, lng: -87.62546 }, title: "Parking" },
        { position: { lat: 41.83331, lng: -87.62543 }, title: "Parking" },
        { position: { lat: 41.83215, lng: -87.62557 }, title: "Parking" },
        { position: { lat: 41.83258, lng: -87.62613 }, title: "Parking" }
      ]);
    } else {
      // Remove the specific marker when unchecked
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.title !== "Parking"));
    }
  };

  const handleaccessibleParkingChange = () => {
    setAccessibleParkingChecked(!accessibleParkingChecked);

    if (!accessibleParkingChecked) {
      // Append new marker when checked
      setMarkers((prevMarkers) => [
        { position: { lat: 41.83847, lng: -87.62640 }, title: "Accessible Parking" },
        { position: { lat: 41.83770, lng: -87.62523 }, title: "Accessible Parking" },
        { position: { lat: 41.83730, lng: -87.62527 }, title: "Accessible Parking" },
        { position: { lat: 41.83772, lng: -87.62629 }, title: "Accessible Parking" },
        { position: { lat: 41.83737, lng: -87.62629 }, title: "Accessible Parking" },
        { position: { lat: 41.83695, lng: -87.62627 }, title: "Accessible Parking" },
        { position: { lat: 41.83645, lng: -87.62908 }, title: "Accessible Parking" },
        { position: { lat: 41.83656, lng: -87.62444 }, title: "Accessible Parking" },
        { position: { lat: 41.83574, lng: -87.62902 }, title: "Accessible Parking" },
        { position: { lat: 41.83571, lng: -87.62507 }, title: "Accessible Parking" },
        { position: { lat: 41.83367, lng: -87.62558 }, title: "Accessible Parking" },
        { position: { lat: 41.83418, lng: -87.62562 }, title: "Accessible Parking" },
        { position: { lat: 41.83399, lng: -87.62916 }, title: "Accessible Parking" },
        { position: { lat: 41.83339, lng: -87.62912 }, title: "Accessible Parking" },
        { position: { lat: 41.83298, lng: -87.62880 }, title: "Accessible Parking" },
        { position: { lat: 41.83224, lng: -87.62895 }, title: "Accessible Parking" },
        { position: { lat: 41.83213, lng: -87.62624 }, title: "Accessible Parking" },
        { position: { lat: 41.83128, lng: -87.62619 }, title: "Accessible Parking" }
      ]);
    } else {
      // Remove the specific marker when unchecked
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.title !== "Accessible Parking"));
    }
  };

  const handlebathroomChange = () => {
    setBathroomChecked(!bathroomChecked);

    if (!bathroomChecked) {
      // Append new marker when checked
      setMarkers((prevMarkers) => [
        { position: { lat: 41.83931, lng: -87.62535 }, title: "Single Occupant Bathroom" },
        { position: { lat: 41.83777, lng: -87.62778 }, title: "Single Occupant Bathroom" },
        { position: { lat: 41.83653, lng: -87.62796 }, title: "Single Occupant Bathroom" },
        { position: { lat: 41.83639, lng: -87.62444 }, title: "Single Occupant Bathroom" },
        { position: { lat: 41.83589, lng: -87.62643 }, title: "Single Occupant Bathroom" },
        { position: { lat: 41.83533, lng: -87.62862 }, title: "Single Occupant Bathroom" },
        { position: { lat: 41.83546, lng: -87.62437 }, title: "Single Occupant Bathroom" },
        { position: { lat: 41.83263, lng: -87.62698 }, title: "Single Occupant Bathroom" },
        { position: { lat: 41.83128, lng: -87.62736 }, title: "Single Occupant Bathroom" }
      ]);
    } else {
      // Remove the specific marker when unchecked
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.title !== "Single Occupant Bathroom"));
    }
  };

  const handleCTAChange = () => {
    setCTAChecked(!ctaChecked);

    if (!ctaChecked) {
      // Append new marker when checked
      setMarkers((prevMarkers) => [
        { position: { lat: 41.83123, lng: -87.62953 }, title: "CTA" },
        { position: { lat: 41.83201, lng: -87.62591 }, title: "CTA" }
      ]);
    } else {
      // Remove the specific marker when unchecked
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.title !== "CTA"));
    }
  };

  const handleDivvyChange = () => {
    setDivvyChecked(!divvyChecked);

    if (!divvyChecked) {
      // Append new marker when checked
      setMarkers((prevMarkers) => [
        { position: { lat: 41.83473, lng: -87.62572 }, title: "Divvy Stands" }
      ]);
    } else {
      // Remove the specific marker when unchecked
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.title !== "Divvy Stands"));
    }
  };

  const handlePublicSafetyChange = () => {
    setPublicSafetyChecked(!publicSafetyChecked);

    if (!publicSafetyChecked) {
      // Append new marker when checked
      setMarkers((prevMarkers) => [
        { position: { lat: 41.83601, lng: -87.62804 }, title: "Public Safety" },
        { position: { lat: 41.83374, lng: -87.62800 }, title: "Public Safety" }
      ]);
    } else {
      // Remove the specific marker when unchecked
      setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.title !== "Public Safety"));
    }
  };

  const routes = [
    {
      path: "/VisitingCampus",
      name: "VisitingCampus",
      icon: (
        <>
          <LiaUniversitySolid />
        </>
      ),
      subRoutes: [
        {
          name: "Wellness Center",
          icon: (
            <>
              <input
                type="checkbox"
                checked={wellnessCenterChecked}
                onChange={handleWellnessCenterChange}
              />
              <MdLocalHospital />
            </>
          ),
        },
        {
          name: "Public Restrooms",
          icon: (
            <>
              <input
                type="checkbox"
                checked={publicRestroomsChecked}
                onChange={handlePublicRestroomsChange}
              />
              <LiaRestroomSolid />
            </>
          ),
        },
        {
          name: "Man on Bench",
          icon: (
            <>
              <input
                type="checkbox"
                checked={manOnBenchChecked}
                onChange={handleManOnBenchChange}
              />
              <GrYoga />
            </>
          ),
        },
        {
          name: "Gym",
          icon: (
            <>
              <input
                type="checkbox"
                checked={gymChecked}
                onChange={handleGymChange}
              />
              <CgGym />
            </>
          ),
        },
      ],
    },
    {
      path: "/LifeOnCampus",
      name: "LifeOnCampus",
      icon: (
        <>
          <GiHighGrass />
        </>
      ),
      subRoutes: [
        {
          name: "Eateries",
          icon: (
            <>
              <input
                type="checkbox"
                checked={eateriesChecked}
                onChange={handleEateriesChange}
              />
              <ImSpoonKnife />
            </>
          ),
        },
        {
          name: "Library",
          icon: (
            <>
              <input
                type="checkbox"
                checked={libraryChecked}
                onChange={handleLibraryChange}
              />
              <IoLibrary />
            </>
          ),
        },
        {
          name: "Athletics",
          icon: (
            <>
              <input
                type="checkbox"
                checked={atheleticsChecked}
                onChange={handleAtheleticsChange}
              />
              <MdOutlineSportsGymnastics />
            </>
          ),
        },
        {
          name: "The Bog",
          icon: (
            <>
              <input
                type="checkbox"
                checked={bogChecked}
                onChange={handleBogChange}
              />
              <RiGameFill />
            </>
          ),
        },
      ],
    },
    {
      path: "/ParkingTransportation",
      name: "ParkingTransportation",
      icon: (
        <>
          <IoIosBus />
        </>
      ),
      subRoutes: [
        {
          name: "Accessible Enterance",
          icon: (
            <>
              <input
                type="checkbox"
                checked={eateriesChecked}
                onChange={handleAccessibleEnteranceChange}
              />
              <GiEntryDoor />
            </>
          ),
        },
        {
          name: "Power Operated Door",
          icon: (
            <>
              <input
                type="checkbox"
                checked={powerOperatedDoorsChecked}
                onChange={handlepowerOperatedDoorsChange}
              />
              <MdDoorSliding />
            </>
          ),
        },
        {
          name: "Elevator/Lift",
          icon: (
            <>
              <input
                type="checkbox"
                checked={elevatorChecked}
                onChange={handleElevatorChange}
              />
              <GrElevator />
            </>
          ),
        },
        {
          name: "Parking",
          icon: (
            <>
              <input
                type="checkbox"
                checked={parkingChecked}
                onChange={handleParkingChange}
              />
              <FaParking />
            </>
          ),
        },
        {
          name: "Accessible Parking",
          icon: (
            <>
              <input
                type="checkbox"
                checked={accessibleParkingChecked}
                onChange={handleaccessibleParkingChange}
              />
              <TbParkingCircle />
            </>
          ),
        },
        {
          name: "Single Occupant Bathroom",
          icon: (
            <>
              <input
                type="checkbox"
                checked={bathroomChecked}
                onChange={handlebathroomChange}
              />
              <MdOutlineBathroom />
            </>
          ),
        },
        {
          name: "CTA",
          icon: (
            <>
              <input
                type="checkbox"
                checked={ctaChecked}
                onChange={handleCTAChange}
              />
              <FaTrainSubway />
            </>
          ),
        },
        {
          name: "Divvy Stands",
          icon: (
            <>
              <input
                type="checkbox"
                checked={divvyChecked}
                onChange={handleDivvyChange}
              />
              <IoBicycleSharp />
            </>
          ),
        },
      ],
    },
    {
      path: "/Safety",
      name: "Safety",
      icon: (
        <>
          <GrUserPolice />
        </>
      ),
      subRoutes: [
        {
          name: "Public Safety",
          icon: (
            <>
              <input
                type="checkbox"
                checked={publicSafetyChecked}
                onChange={handlePublicSafetyChange}
              />
              <MdDirectionsCar />
            </>
          ),
        },
        {
          path: "/settings/Suggested Travel Routes",
          name: "Suggested Travel Routes",
          icon: (
            <>
              <input type="checkbox" />
              <FaRoute />
            </>
          ),
        },
      ],
    },
  ];

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
            width: isOpen ? "250px" : "45px",

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