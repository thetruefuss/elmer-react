import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading';
import BoardCover from '../components/BoardCover';
import BoardInfo from '../components/BoardInfo';
import Subject from '../components/Subject';
import TrendingBoards from '../components/TrendingBoards';
import Footer from '../components/Footer';

class BoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board_details: {},
      subject_details: {}
    };
  }

  componentDidMount() {
    document.title = `${this.props.match.params.board_slug} | Elmer`
    fetch(`http://127.0.0.1:8000/api/frontboard/boards/${this.props.match.params.board_slug}/`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ board_details: json });
      });
  }

  render() {
    const { board_details, subject_details } = this.state;
    return (
      <React.Fragment>
        <BoardCover cover_url={board_details.cover} />
        <div className="container content_block">
          <div className="row">

            <div className="col-lg-8 col-md-8">
              <PageHeading text={board_details.title} />
              <Subject slug={this.props.match.params.subject_slug} />
            </div>

            <div class="col-lg-4 col-md-4">
              <Link to="/new_post" className="btn btn-primary btn-block mt-4" role="button" title="Create new post" style={{fontWeight: 'bold', letterSpacing: '0.8px'}}>CREATE NEW POST</Link>
              <BoardInfo board_details={board_details} />
              <TrendingBoards />
              <Footer />
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BoardPage;