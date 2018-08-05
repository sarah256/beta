import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ZigzagOrngHoriz = styled.div`
  background: url("assets/ZigZags/Line_Orng_Horiz.svg") no-repeat;
`;

const ZigzagOrngVert = styled.div`
  background: url("assets/ZigZags/Line_Orng_Vert.svg") no-repeat;
`;

const ZigzagGreenHoriz = styled.div`
  background: url("assets/ZigZags/Line_Green_Horiz.svg") no-repeat;
`;

const ZigzagGreenVert = styled.div`
  background: url("assets/ZigZags/Line_Green_Vert.svg") no-repeat;
`;

const TriOrng = styled.div`
  background: url("assets/Triangles/Tri-Orng.svg") no-repeat;
`;

const TriPink1 = styled.div`
  background: url("assets/Triangles/Tri-Pink1.svg") no-repeat;
`;

const TriPink2 = styled.div`
  background: url("assets/Triangles/Tri-Pink2.svg") no-repeat;
`;

class Flair extends Component {
  render() {
    if (this.props.type === "squiggle") {
      return <ZigzagGreenHoriz />;
    } else {
      return <p>other</p>;
    }
  }
}

Flair.propTypes = {
  type: PropTypes.string
};

export default Flair;
