import React from "react";

function MoreDetails({ clockInfo, isOpen }) {
  return (
    <div
      className={
        isOpen
          ? "moreDetails moreDetails--open"
          : "moreDetails moreDetails--closed"
      }
    >
      <div>
        Current timezone <span>{clockInfo.timezone}</span>
      </div>
      <div>
        Day of the year <span>{clockInfo.day_of_year}</span>
      </div>
      <div>
        Day of the week <span>{clockInfo.day_of_week}</span>
      </div>
      <div>
        Week number <span>{clockInfo.week_number}</span>
      </div>
    </div>
  );
}

export default MoreDetails;
