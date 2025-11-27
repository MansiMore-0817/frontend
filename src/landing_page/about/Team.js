import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5  border-top">
        <h1 className=" text-center mt-5">People</h1>
      </div>
      <div
        className="row mb-5  pt-4 text-muted"
        style={{ lineHeight: "1.5", fontSize: "18px" }}
      >
        <div className="col-6  p-3 text-center">
          <img
            src="/images/mansi_img.jpg"
            alt="ppl"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>CEO, Founder</h6>
        </div>
        <div className="col-6  p-3" style={{fontSize: "18px"}}>
          Mansi bootstrapped and founded Equitrade in 2025 to overcome the
          hurdles she faced during her decade long stint as a trader. Today,
          Equitrade has changed the landscape of the Indian broking industry.
          <br />
          <br />
          She is a member of the SEBI Secondary Market Advisory Committee (SMAC)
          and the Market Data Advisory Committee (MDAC).
          <br />
          <br />
          Playing badminton is her zen.
          <br />
          <br />
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
