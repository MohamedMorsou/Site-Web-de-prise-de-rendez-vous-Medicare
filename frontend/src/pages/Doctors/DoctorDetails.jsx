import { useState } from "react";
import DoctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from './SidePanel';


const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section className="mt-10">
      <div className="max-w-[1170px] px-5 mx-auto ">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px] ">
                <img src={DoctorImg} alt="" className="w-full" />
              </figure>

              <div>
                <span
                  className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2
                lg:px-6 text-[12px] leading-4 lg:text-base lg:leading-7
                font-semibold rounded"
                >
                  surgeon
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 font-bold my-1">
                  Mohamed Morsou
                </h3>
                <div className="flex items-center gap-[6px] ">
                  <span className="flex items-center gap-[6px] text-sm leading-5 lg:text-base lg:leading-7 font-semibold text-headingColor ">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className="text-sm leading-5 lg:text-base lg:leading-7 font-normal text-textColor">
                    (272)
                  </span>
                </div>

                <p className="text__para text-sm leading-6 md:text-[15px] lg:max-w-[390px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  magni.
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
              <button
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 text-base leading-7 text-headingColor font-semibold `}
                onClick={() => setTab("about")}
              >
                About
              </button>
              <button
                className={`${
                  tab === "feedback" && "border-b border-solid border-primaryColor"
                } py-2 px-5 text-base leading-7 text-headingColor font-semibold `}
                onClick={() => setTab("feedback")}
              >
                Feedback
              </button>
            </div>
            <div className="">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
          </div>
          <div>
          <div>
            <SidePanel />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
