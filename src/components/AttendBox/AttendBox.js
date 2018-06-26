import React, { Fragment } from "react";
import Header from "../Header";

const AttendBox = () => (
  <Fragment>
    <Header contentProp="Attend" colorProp="#9974AD" backgroundProp="#FFFFFF" />
    <p>
      Thanks for the interest! Leave your email address below or follow us on
      social media to get notified when there is more information and
      registration opens!
    </p>
    <div>
      <input placeholder="Join our mailing list!" />
      <button>Do it</button>
    </div>
  </Fragment>
);
export default AttendBox;
