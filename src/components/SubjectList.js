import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import SubjectPlaceholder from "./SubjectPlaceholder";
import SubjectDetail from "./SubjectDetail";
import { fetchSubjects } from "../actions/subjects";

class SubjectList extends Component {
  componentDidMount() {
    const { url } = this.props;
    this.props.fetchSubjects(url);
  }

  render() {
    const { subjects } = this.props;

    return (
      <React.Fragment>
        {subjects.length > 0 ? (
          subjects.map((subject, index) => {
            return (
              <ReactPlaceholder
                showLoadingAnimation
                delay={2000}
                ready={this.props.ready}
                customPlaceholder={SubjectPlaceholder}>
                <SubjectDetail subject={subject} key={index} />
              </ReactPlaceholder>
            );
          })
        ) : (
          <p>No Posts Found</p>
        )}
      </React.Fragment>
    );
  }
}

SubjectList.propTypes = {
  fetchSubjects: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  subjects: state.subjects.subjects,
  ready: state.subjects.ready
});

export default connect(
  mapStateToProps,
  { fetchSubjects }
)(SubjectList);
