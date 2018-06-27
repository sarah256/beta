import React, { Component } from "react";
import { ScheduleRow } from "../";
import PropTypes from "prop-types";
import styled from "styled-components";

const Table = styled.table`
  tr div {
    margin-bottom: 10px;
  }
  tr:last-child div {
    margin-bottom: 0px;
  }
  border-collapse: collapse;
  tr + tr {
    td + td {
      border-left: 2px solid grey;
    }
  }
`;

const Title = styled.td`
  padding-left: 10px;
  font-weight: bold;
  font-size: 125%;
`;

class ScheduleTable extends Component {
  render() {
    const rows = [];
    this.props.events.forEach((event, i) => {
      rows.push(<ScheduleRow time={event.time} name={event.name} key={i} />);
    });
    return (
      <Table>
        <tbody>
          <tr>
            <td />
            <Title>
              <div> {this.props.title} </div>
            </Title>
          </tr>
          {rows}
        </tbody>
      </Table>
    );
  }
}

ScheduleTable.propTypes = {
  events: PropTypes.array,
  title: PropTypes.string
};

export default ScheduleTable;
