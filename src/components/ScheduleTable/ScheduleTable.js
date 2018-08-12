import React, { Component } from "react";
import { ScheduleRow } from "../";
import PropTypes from "prop-types";
import styled from "styled-components";

const Table = styled.table`
  th {
    text-align: left;
    padding-bottom: 18px;
  }
  td {
    padding-bottom: 15px;
  }
  tr:last-child td {
    padding-bottom: 25px;
  }
  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;

const Title = styled.th`
  padding-left: 7%;
  font-family: "Roboto", sans-serif;
  font-size: 1.875em;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 1em;
  }
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
