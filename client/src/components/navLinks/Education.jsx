import React from "react";

const Education_Data = [
  {
    id: "M.P",
    sv: "Pharmaceutics",
    cv: "M.Pharmacy",
    cg: "8.57",
    dv: "2022-2024",
    cl: "Vasavi Institute of Pharmaceutical Sciences, Kadapa.",
  },
  {
    id: "B.P",
    cv: "B.Pharmacy",
    cg: "7.47",
    dv: "2017-2021",
    cl: "Sri Venkateswara University College of Pharmaceutical Sciences, Tirupati.",
  },
  {
    id: "Inter",
    cv: "Intermediate",
    pg: "85.2%",
    dv: "2015-2017",
    cl: "Narayana Junior College, Kadapa.",
  },
  {
    id: "S.S.C",
    cv: "SSC",
    cg: "8.3",
    dv: "2014-2015",
    sc: "Sri Venkateswara E.M High School, Kadapa",
  },
];

function Education() {
  return (
    <div className="">
      <div>
        <h2 className="side-hdng">Education</h2>
      </div>

      <div className="content-box">
        {Education_Data.map((group) => (
          <div key={group.id}>
            {group.cl ? (
              <p>
                <span className="side-hdng2">College: </span>
                {group.cl}
              </p>
            ) : (
              <p>
                <span className="side-hdng2">School: </span>
                {group.sc}
              </p>
            )}
            <div className="content-box my-4">
              
              {group.sv && (
                <p>
                  <span className="side-hdng2">Specialization: </span>
                  {group.sv}
                </p>
              )}
              <p>
                <span className="side-hdng2">Course: </span>
                {group.cv}
              </p>
              <div>
                <p>
                  <span className="side-hdng2">Duration: </span>
                  {group.dv}
                </p>
              </div>
              {group.cg ? (
                <p>
                  <span className="side-hdng2">CGPA: </span>
                  {group.cg}
                </p>
              ) : (
                <div>
                  <p>
                    <span className="side-hdng2">Percentage: </span>
                    {group.pg}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
