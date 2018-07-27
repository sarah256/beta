import React, { Component } from "react";
import { ScheduleRow } from "../";
import PropTypes from "prop-types";
import styled from "styled-components";

const Table = styled.table`
  th {
    text-align: left;
  }
  td,
  th {
    padding-bottom: 10px;
  }
  tr:last-child td {
    padding-bottom: 0px;
  }
`;

const Title = styled.th`
  padding-left: 30px;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: 400;
`;

class ScheduleTable extends Component {
  render() {
    const rows = [];
    this.props.events.forEach((event, i) => {
      rows.push(<ScheduleRow time={event.time} name={event.name} key={i} />);
    });
    return (
      <Table>
        <thead>
          <tr>
            <th />
            <Title>
              <div> {this.props.title} </div>
            </Title>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}

ScheduleTable.propTypes = {
  events: PropTypes.array,
  title: PropTypes.string
};

export default ScheduleTable;
