import React, { Component } from "react";
import AttendBox from "../AttendBox";
import SponsorBox from "../SponsorBox";
import { Flex, Box } from "grid-styled";

class AttendAndSponsorBoxes extends Component {
  render() {
    return (
      <Flex className="attendSponsorFlex">
        <Box width={[0, 1 / 4, 1 / 4]} />
        <Box width={[1, 1 / 4, 13 / 60]}>
          <AttendBox />
        </Box>
        <Box width={[0, 0, 4 / 60]} />
        <Box width={[1, 1 / 4, 13 / 60]}>
          <SponsorBox />
        </Box>
        <Box width={[0, 1 / 4, 1 / 4]} />
      </Flex>
    );
  }
}

export default AttendAndSponsorBoxes;
