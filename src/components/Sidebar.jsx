import { NavLink } from "react-router-dom";
import { FaBars, FaParking, FaRoute } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faBus, faTree } from '@fortawesome/free-solid-svg-icons';
import { LiaRestroomSolid } from "react-icons/lia";
import { IoLibrary, IoBicycleSharp } from "react-icons/io5";
import { GrUserPolice, GrElevator, GrYoga } from "react-icons/gr";
import { ImSpoonKnife } from "react-icons/im";
import { GiEntryDoor } from "react-icons/gi";
import {
  MdLocalHospital,
  MdOutlineSportsGymnastics,
  MdDoorSliding,
  MdDirectionsCar,
  MdOutlineBathroom,
} from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { RiGameFill } from "react-icons/ri";
import { TbParkingCircle } from "react-icons/tb";
import { FaTrainSubway } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarMenu";

const libraryIcon = `${process.env.PUBLIC_URL}/assets/images/libraries-list_3.png`;
const publicRestroomIcon = `${process.env.PUBLIC_URL}/assets/images/public_restroom.png`;
const wellnessCenterIcon = `${process.env.PUBLIC_URL}/assets/images/cross-round_1.png`;
const eateriesIcon = `${process.env.PUBLIC_URL}/assets/images/dining-list_3.png`;
const enteranceIcon = `${process.env.PUBLIC_URL}/assets/images/acc-entrance-list_2.png`;
const parkingIcon = `${process.env.PUBLIC_URL}/assets/images/parking.png`;
const accessibleParkingIcon = `${process.env.PUBLIC_URL}/assets/images/accessible-parking-list_3.png`;
const divvyIcon = `${process.env.PUBLIC_URL}/assets/images/bike-station-list2.png`;
const manOnBenchIcon = `${process.env.PUBLIC_URL}/assets/images/manOnBench.png`;
const gymIcon = `${process.env.PUBLIC_URL}/assets/images/sports-round_4.png`;
const atheleticsIcon = `${process.env.PUBLIC_URL}/assets/images/athletics-list_3.png`;
const bogIcon = `${process.env.PUBLIC_URL}/assets/images/services-list_2.png`;
const elevatorIcon = `${process.env.PUBLIC_URL}/assets/images/Elevator.png`;
const powerOperatedDoorsIcon = `${process.env.PUBLIC_URL}/assets/images/door-round.png`;
const singleBathroomIcon = `${process.env.PUBLIC_URL}/assets/images/gender-neutral-list.png`;
const ctaIcon = `${process.env.PUBLIC_URL}/assets/images/shuttle.png`;
const publicSafetyIcon = `${process.env.PUBLIC_URL}/assets/images/car-round.png`;

const SideBar = ({ children, setMarkers }) => {
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
  const [powerOperatedDoorsChecked, setPowerOperatedDoorsChecked] =
    useState(false);
  const [elevatorChecked, setElevatorChecked] = useState(false);
  const [parkingChecked, setParkingChecked] = useState(false);
  const [accessibleParkingChecked, setAccessibleParkingChecked] =
    useState(false);
  const [bathroomChecked, setBathroomChecked] = useState(false);
  const [ctaChecked, setCTAChecked] = useState(false);
  const [divvyChecked, setDivvyChecked] = useState(false);
  const [publicSafetyChecked, setPublicSafetyChecked] = useState(false);

  useEffect(() => {
    const updatedMarkers = [];

    if (wellnessCenterChecked) {
      updatedMarkers.push({
        position: { lat: 41.83131, lng: -87.62709 },
        title: "Wellness Center",
        icon: {
          url: wellnessCenterIcon,
          scaledSize: new window.google.maps.Size(30, 30),
        },
      });
    }

    if (libraryChecked) {
      updatedMarkers.push({
        position: { lat: 41.83399, lng: -87.6265 },
        title: "Library",
        icon: {
          url: libraryIcon,
          scaledSize: new window.google.maps.Size(30, 30),
        },
      });
    }

    if (manOnBenchChecked) {
      updatedMarkers.push({
        position: { lat: 41.83555, lng: -87.62713 },
        title: "Man On Bench",
        icon: {
          url: manOnBenchIcon,
          scaledSize: new window.google.maps.Size(30, 30),
        },
      });
    }

    if (publicRestroomsChecked) {
      updatedMarkers.push(
        {
          position: { lat: 41.8313, lng: -87.62748 },
          title: "Restroom",
          icon: {
            url: publicRestroomIcon,
            scaledSize: new window.google.maps.Size(15, 15),
          },
        },
        {
          position: { lat: 41.83261, lng: -87.62707 },
          title: "Restroom",
          icon: {
            url: publicRestroomIcon,
            scaledSize: new window.google.maps.Size(15, 15),
          },
        },
        {
          position: { lat: 41.83523, lng: -87.62863 },
          title: "Restroom",
          icon: {
            url: publicRestroomIcon,
            scaledSize: new window.google.maps.Size(15, 15),
          },
        },
        {
          position: { lat: 41.8359, lng: -87.62614 },
          title: "Restroom",
          icon: {
            url: publicRestroomIcon,
            scaledSize: new window.google.maps.Size(15, 15),
          },
        },
        {
          position: { lat: 41.83564, lng: -87.62427 },
          title: "Restroom",
          icon: {
            url: publicRestroomIcon,
            scaledSize: new window.google.maps.Size(15, 15),
          },
        },
        {
          position: { lat: 41.83661, lng: -87.628 },
          title: "Restroom",
          icon: {
            url: publicRestroomIcon,
            scaledSize: new window.google.maps.Size(15, 15),
          },
        },
        {
          position: { lat: 41.83644, lng: -87.62437 },
          title: "Restroom",
          icon: {
            url: publicRestroomIcon,
            scaledSize: new window.google.maps.Size(15, 15),
          },
        },
        {
          position: { lat: 41.83777, lng: -87.62773 },
          title: "Restroom",
          icon: {
            url: publicRestroomIcon,
            scaledSize: new window.google.maps.Size(15, 15),
          },
        },
        {
          position: { lat: 41.83927, lng: -87.62532 },
          title: "Restroom",
          icon: {
            url: publicRestroomIcon,
            scaledSize: new window.google.maps.Size(15, 15),
          },
        }
      );
    }

    if (gymChecked) {
      updatedMarkers.push({
        position: { lat: 41.83904, lng: -87.6256 },
        title: "Gym",
        icon: {
          url: gymIcon,
          scaledSize: new window.google.maps.Size(30, 30),
        },
      });
    }

    if (eateriesChecked) {
      updatedMarkers.push({
        position: { lat: 41.83602, lng: -87.62551 },
        title: "Eateries",
        icon: {
          url: eateriesIcon,
          scaledSize: new window.google.maps.Size(30, 30),
        },
      });
    }

    if (atheleticsChecked) {
      updatedMarkers.push({
        position: { lat: 41.83902, lng: -87.62538 },
        title: "Athletics",
        icon: {
          url: atheleticsIcon,
          scaledSize: new window.google.maps.Size(30, 30),
        },
      });
    }

    if (bogChecked) {
      updatedMarkers.push({
        position: { lat: 41.83536, lng: -87.62827 },
        title: "The Bog",
        icon: {
          url: bogIcon,
          scaledSize: new window.google.maps.Size(30, 30),
        },
      });
    }

    if (enteranceChecked) {
      updatedMarkers.push(
        {
          position: { lat: 41.83901, lng: -87.62534 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83799, lng: -87.62475 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83786, lng: -87.62411 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83763, lng: -87.62876 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83689, lng: -87.62812 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83969, lng: -87.6287 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83676, lng: -87.62717 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83609, lng: -87.62707 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83709, lng: -87.62406 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83337, lng: -87.62727 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.8343, lng: -87.62384 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83363, lng: -87.6239 },
          title: "Accessible Entrance",
          icon: {
            url: enteranceIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        }
      );
    }

    if (powerOperatedDoorsChecked) {
      updatedMarkers.push(
        {
          position: { lat: 41.83792, lng: -87.62778 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83775, lng: -87.62718 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83716, lng: -87.62748 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83721, lng: -87.62796 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83661, lng: -87.62627 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.836, lng: -87.62808 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83571, lng: -87.62741 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83496, lng: -87.62745 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83512, lng: -87.62584 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83518, lng: -87.62494 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83405, lng: -87.62743 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83372, lng: -87.62802 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83425, lng: -87.62631 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83371, lng: -87.6263 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83319, lng: -87.62628 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83264, lng: -87.62738 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83184, lng: -87.62723 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83156, lng: -87.62806 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83127, lng: -87.62754 },
          title: "Power Operated Door",
          icon: {
            url: powerOperatedDoorsIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        }
      );
    }

    if (elevatorChecked) {
      updatedMarkers.push(
        {
          position: { lat: 41.83341, lng: -87.62706 },
          title: "Elevator/Lift",
          icon: {
            url: elevatorIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83146, lng: -87.62724 },
          title: "Elevator/Lift",
          icon: {
            url: elevatorIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83865, lng: -87.62537 },
          title: "Elevator/Lift",
          icon: {
            url: elevatorIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        }
      );
    }

    if (parkingChecked) {
      updatedMarkers.push(
        {
          position: { lat: 41.83903, lng: -87.62624 },
          title: "Parking",
          icon: {
            url: parkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83778, lng: -87.62628 },
          title: "Parking",
          icon: {
            url: parkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83768, lng: -87.62559 },
          title: "Parking",
          icon: {
            url: parkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83625, lng: -87.6239 },
          title: "Parking",
          icon: {
            url: parkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83579, lng: -87.62916 },
          title: "Parking",
          icon: {
            url: parkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83363, lng: -87.62912 },
          title: "Parking",
          icon: {
            url: parkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83412, lng: -87.62546 },
          title: "Parking",
          icon: {
            url: parkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83331, lng: -87.62543 },
          title: "Parking",
          icon: {
            url: parkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83215, lng: -87.62557 },
          title: "Parking",
          icon: {
            url: parkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83258, lng: -87.62613 },
          title: "Parking",
          icon: {
            url: parkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        }
      );
    }

    if (accessibleParkingChecked) {
      updatedMarkers.push(
        {
          position: { lat: 41.83847, lng: -87.6264 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.8377, lng: -87.62523 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.8373, lng: -87.62527 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83772, lng: -87.62629 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83737, lng: -87.62629 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83695, lng: -87.62627 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83645, lng: -87.62908 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83656, lng: -87.62444 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83574, lng: -87.62902 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83571, lng: -87.62507 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83367, lng: -87.62558 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83418, lng: -87.62562 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83399, lng: -87.62916 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83339, lng: -87.62912 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83298, lng: -87.6288 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83224, lng: -87.62895 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83213, lng: -87.62624 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83128, lng: -87.62619 },
          title: "Accessible Parking",
          icon: {
            url: accessibleParkingIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        }
      );
    }

    if (bathroomChecked) {
      updatedMarkers.push(
        {
          position: { lat: 41.83931, lng: -87.62535 },
          title: "Single Occupant Bathroom",
          icon: {
            url: singleBathroomIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83777, lng: -87.62778 },
          title: "Single Occupant Bathroom",
          icon: {
            url: singleBathroomIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83653, lng: -87.62796 },
          title: "Single Occupant Bathroom",
          icon: {
            url: singleBathroomIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83639, lng: -87.62444 },
          title: "Single Occupant Bathroom",
          icon: {
            url: singleBathroomIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83589, lng: -87.62643 },
          title: "Single Occupant Bathroom",
          icon: {
            url: singleBathroomIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83533, lng: -87.62862 },
          title: "Single Occupant Bathroom",
          icon: {
            url: singleBathroomIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83546, lng: -87.62437 },
          title: "Single Occupant Bathroom",
          icon: {
            url: singleBathroomIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83263, lng: -87.62698 },
          title: "Single Occupant Bathroom",
          icon: {
            url: singleBathroomIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83128, lng: -87.62736 },
          title: "Single Occupant Bathroom",
          icon: {
            url: singleBathroomIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        }
      );
    }

    if (ctaChecked) {
      updatedMarkers.push(
        {
          position: { lat: 41.83123, lng: -87.62953 },
          title: "CTA",
          icon: {
            url: ctaIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83201, lng: -87.62591 },
          title: "CTA",
          icon: {
            url: ctaIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        }
      );
    }

    if (divvyChecked) {
      updatedMarkers.push({
        position: { lat: 41.83473, lng: -87.62572 },
        title: "Divvy Stands",
        icon: {
          url: divvyIcon,
          scaledSize: new window.google.maps.Size(30, 30),
        },
      });
    }

    if (publicSafetyChecked) {
      updatedMarkers.push(
        {
          position: { lat: 41.83601, lng: -87.62804 },
          title: "Public Safety",
          icon: {
            url: publicSafetyIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        },
        {
          position: { lat: 41.83374, lng: -87.628 },
          title: "Public Safety",
          icon: {
            url: publicSafetyIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          },
        }
      );
    }

    setMarkers(updatedMarkers);
  }, [
    wellnessCenterChecked,
    libraryChecked,
    bogChecked,
    atheleticsChecked,
    manOnBenchChecked,
    publicRestroomsChecked,
    gymChecked,
    eateriesChecked,
    enteranceChecked,
    powerOperatedDoorsChecked,
    elevatorChecked,
    parkingChecked,
    accessibleParkingChecked,
    bathroomChecked,
    ctaChecked,
    divvyChecked,
    publicSafetyChecked,
    setMarkers,
  ]);

  const handleWellnessCenterChange = (e) => {
    setWellnessCenterChecked(!wellnessCenterChecked);
  };

  const handlePublicRestroomsChange = (e) => {
    setPublicRestroomsChecked(e.target.checked);
  };

  const handleLibraryChange = (e) => {
    setlibraryChecked(e.target.checked);
  };

  const handleManOnBenchChange = (e) => {
    setManOnBenchCheckedChecked(e.target.checked);
  };

  const handleGymChange = (e) => {
    setGymChecked(e.target.checked);
  };

  const handleEateriesChange = (e) => {
    setEateriesChecked(e.target.checked);
  };

  const handleAtheleticsChange = (e) => {
    setAtheleticsChecked(e.target.checked);
  };

  const handleBogChange = (e) => {
    setBogChecked(e.target.checked);
  };

  const handleAccessibleEnteranceChange = (e) => {
    setEnteranceChecked(e.target.checked);
  };

  const handlepowerOperatedDoorsChange = (e) => {
    setPowerOperatedDoorsChecked(e.target.checked);
  };

  const handleElevatorChange = (e) => {
    setElevatorChecked(e.target.checked);
  };

  const handleParkingChange = (e) => {
    setParkingChecked(e.target.checked);
  };

  const handleaccessibleParkingChange = (e) => {
    setAccessibleParkingChecked(e.target.checked);
  };

  const handlebathroomChange = (e) => {
    setBathroomChecked(e.target.checked);
  };

  const handleCTAChange = (e) => {
    setCTAChecked(e.target.checked);
  };

  const handleDivvyChange = (e) => {
    setDivvyChecked(e.target.checked);
  };

  const handlePublicSafetyChange = (e) => {
    setPublicSafetyChecked(e.target.checked);
  };

  const routes = [
    {
      path: "/VisitingCampus",
      name: "VisitingCampus",
      icon: (
        <>
          <FontAwesomeIcon icon={faBuildingColumns} />
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
                autoComplete="off"
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
          <FontAwesomeIcon icon={faTree} />
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
          <FontAwesomeIcon icon={faBus} />
        </>
      ),
      subRoutes: [
        {
          name: "Accessible Enterance",
          icon: (
            <>
              <input
                type="checkbox"
                checked={enteranceChecked}
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
          name: "Single-Bathroom",
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
          name: "Suggested Routes",
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
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "250px" : "45px",
          transition: { duration: 0.5, type: "spring", damping: 10 },
        }}
        className="sidebar"
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

          <div className="bars" onClick={toggle}>
            <FaBars />
          </div>
        </div>

        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  key={index}
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
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
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
  );
};

export default SideBar;
