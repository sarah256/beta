import React, { Component } from "react";
import AttendBox from "../AttendBox";
import SponsorBox from "../SponsorBox";
import { Flex, Box } from "grid-styled";

// Another pattern that is closer to the design but has small boxes:
// 1/4 + 13/60 + 4/60 + 13/60 + 1/4
class AttendAndSponsorBoxes extends Component {
  render() {
    return (
      <Flex className="attendSponsorFlex">
        <Box width={[0, 1 / 11, 1 / 5]} />
        <Box width={[1, 4 / 11, 5 / 20]}>
          <AttendBox />
        </Box>
        <Box width={[0, 1 / 11, 1 / 10]} />
        <Box width={[1, 4 / 11, 5 / 20]}>
          <SponsorBox />
        </Box>
        <Box width={[0, 1 / 11, 1 / 5]} />
      </Flex>
    );
  }
}

export default AttendAndSponsorBoxes;
