import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div className="mt-3">
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
          About of
          <span className="text-irisBlueColor font-bold text-2xl leading-9">
            Mohamed Morsou
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
          aspernatur incidunt obcaecati? Praesentium voluptatem incidunt
          deserunt dolores, unde dicta aliquid perspiciatis consequuntur nemo
          enim eligendi, voluptatibus dolor est veritatis modi!
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Education
        </h3>
        <ul className="pt-4 md:pt-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] p-4 ">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate("2-29-2023")} - {formateDate("09-29-2024")}
              </span>
              <p className="text-base leading-6 font-medium text-textColor">
                PHD in surgeon
              </p>
            </div>
            <p className="text-sm leading-5 font-medium text-textColor">
              Lorem ipsum dolor sit amet.
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] p-4">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate("2-29-2023")} - {formateDate("09-29-2024")}
              </span>
              <p className="text-base leading-6 font-medium text-textColor">
                PHD in surgeon
              </p>
            </div>
            <p className="text-sm leading-5 font-medium text-textColor">
              Lorem ipsum dolor sit amet.
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3
          className="text-[20px] leading-[30px] text-headingColor
            font-semibold"
        >
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 bg-[#fff9ea]">
            <div>
              <span className="text-yellowColor text-base leading-6 font-semibold">
                {formateDate("2-29-2023")} -{formateDate("09-29-2024")}
              </span>
              <p className="text-base leading-6 font-medium text-textColor">Sr Surgeon</p>
            </div>
            <p className="text-sm leading-5 font-medium text-textColor">Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="p-4 bg-[#fff9ea]">
            <div>
              <span className="text-yellowColor text-base leading-6 font-semibold">
                {formateDate("2-29-2023")} -{formateDate("09-29-2024")}
              </span>
              <p className="text-base leading-6 font-medium text-textColor">Sr Surgeon</p>
            </div>
            <p className="text-sm leading-5 font-medium text-textColor">Lorem ipsum dolor sit amet.</p>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
