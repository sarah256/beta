import React, { Component } from "react";
import AttendBox from "../AttendBox";
import SponsorBox from "../SponsorBox";
import { Flex, Box } from "grid-styled";

// Another pattern that is closer to the design but has small boxes:
// 1/4 + 13/60 + 4/60 + 13/60 + 1/4
class AttendAndSponsorBoxes extends Component {
  render() {
    return (
      <Flex className="attendSponsorFlex" flexDirection={"row"} wrap>
        <Box
          width={[1, 1 / 2, 1 / 2, 1 / 2]}
          pl={[52, 52, 100, 280]}
          pr={[52, 24, 48, 76]}
        >
          <AttendBox />
        </Box>
        <Box
          width={[1, 1 / 2, 1 / 2, 1 / 2]}
          pl={[52, 24, 48, 76]}
          pr={[52, 52, 100, 280]}
        >
          <SponsorBox />
        </Box>
      </Flex>
    );
  }
}

export default AttendAndSponsorBoxes;
