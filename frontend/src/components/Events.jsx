import { CheckCircle2 } from "lucide-react";
import pEvents from "../assets/pEvents.png";
import uEvents from "../assets/uEvents.png";

import { events } from "../constants";

const Events = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Past{" "}
        <span className="bg-gradient-to-r bg-[#d4a373] text-transparent bg-clip-text">
          Events
        </span>
      </h2>

      <div className="p-8 pl-80">
        <img className="pl-10" src={pEvents} alt="Coding" />
      </div>

      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Upcoming{" "}
        <span className="bg-gradient-to-r bg-[#d4a373] text-transparent bg-clip-text">
          Events
        </span>
      </h2>
      <div className="p-8 pl-80">
        <img className="pl-10" src={uEvents} alt="Coding" />
      </div>
    </div>
  );
};

export default Events;
