import React from "react";
import "../Css/progressbar.css";

const ProgressBar = ({ percentage }) => {
  // Calculate rotation angle based on percentage (180° is full)
  const rotationAngle = (percentage / 100) * 360;
  let rotation1 = 0;
  let rotation2 = 0;

  if (rotationAngle > 180) {
    rotation1 = 180;
    rotation2 = rotationAngle - 180;
  } else {
    rotation1 = rotationAngle;
  }

  // Dynamic inline styles for animation
  const progressStyle = `
    @keyframes loading-1{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(odeg);
    }
    100%{
        -webkit-transform: rotate(${rotation1}deg);
        transform: rotate(${rotation1}deg);
    }
}
@keyframes loading-2{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(${rotation2}deg);
        transform: rotate(${rotation2}deg);
    }
}
  `;

  return (
    <div className="container" style={{ width: "100%" }}>
      {/* Inject dynamic CSS */}
      <style>{progressStyle}</style>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="progress blue">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">{percentage.toFixed(2)}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgressBar; // Fixed export
