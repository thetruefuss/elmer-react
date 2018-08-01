import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading';
import SubjectList from '../components/SubjectList';
import TrendingBoards from '../components/TrendingBoards';
import Footer from '../components/Footer';

class HomePage extends Component {
  componentDidMount() {
    document.title = "Elmer - A social network inspired by reddit"
  }

  render() {
    return (
      <React.Fragment>
        <div className="container content_block">
          <div className="row">

            <div className="col-lg-8 col-md-8">
              <PageHeading text="Homepage" />
              <SubjectList />
            </div>

            <div class="col-lg-4 col-md-4">
              <Link to="/new_post" className="btn btn-primary btn-block mt-4" role="button" title="Create new post" style={{fontWeight: 'bold', letterSpacing: '0.8px'}}>CREATE NEW POST</Link>
              <TrendingBoards />
              <Footer />
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
