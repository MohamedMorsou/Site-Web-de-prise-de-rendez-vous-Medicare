import { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import FeedbackForm from './FeedbackForm'
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mt-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">All reviews (300) </h4>
        <div className="flex justify-between gap-10 mb-[30px] ml-2">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="" />
            </figure>
            <div>
              <h5 className="text-base leading-6 text-primaryColor font-bold">Achraf el ouerd</h5>
              <p className="text-sm leading-6 text-textColor">{formateDate("04-16-2024")}</p>
              <p className="text__para mt-3 font-medium text-[15px]">Good services highly recomended 👍</p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067ff" />
            ))}
          </div>
        </div>
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
            <button className="btn"
            onClick={()=>setShowFeedbackForm(true)}>
            Give FeedBac
            </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
