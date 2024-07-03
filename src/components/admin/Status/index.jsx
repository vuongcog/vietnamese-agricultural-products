import React from "react";
import PropTypes from "../../../utils/prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Status = ({ status }) => {
  return (
    <div
      className={classNames(
        "flex items-center font-semibold",
        `${status === "active" ? "text-green-600" : "text-red-500"}`
      )}
    >
      <FontAwesomeIcon
        icon={status === "active" ? faCheckCircle : faTimesCircle}
        className="mr-2"
      />
      {status}
    </div>
  );
};

Status.propTypes = {
  status: PropTypes.string,
};

export default Status;
