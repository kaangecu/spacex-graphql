import React from "react";
import falcon1 from "../../assets/falcon1.jpeg";
import falconHeavy from "../../assets/falconHeavy.webp";
import qq from "../../assets/qq.png";

const ImageCard = () => {
  return (
    <div class="card mb-3" style={{    display: "flex",
      flexDirection: "row"}}>
      <div>
        <img
          src={qq}
          alt="Girl in a jacket"
          width="300px"
          height="auto"
        />
      </div>
      <div>
        <h3 class="card-header">Card header</h3>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <h6 class="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        class="d-block user-select-none"
        width="100%"
        height="200"
        aria-label="Placeholder: Image cap"
        focusable="false"
        role="img"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 318 180"
        style={{fontSize:"1.125rem",textAnchor:"middle"}}
      >
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
          Image cap
        </text>
      </svg> */}
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
};

export default ImageCard;
