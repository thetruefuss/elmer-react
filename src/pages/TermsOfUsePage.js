import React, { Component } from 'react';
import PageHeading from '../components/PageHeading';
import TrendingBoards from '../components/TrendingBoards';
import Footer from '../components/Footer';

class TermsOfUsePage extends Component {
  componentDidMount() {
    document.title = "Terms of Use"
  }

  render() {
    return (
      <React.Fragment>
        <div className="container content_block">
          <div className="row">

            <div className="col-lg-8 col-md-8">
              <PageHeading text="Terms of Use" />
              <div className="card" style={{border: 'none', borderBottom: '1px solid #dcd7d7', marginBottom: 5}}>
                <div className="card-body" style={{padding: 10}}>
                  <h5 className="card-title text-muted">Website Usage</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4">
              <a href="/" className="btn btn-primary btn-block mt-4" role="button" title="Create new post" style={{fontWeight: 'bold', letterSpacing: '0.8px'}}>CREATE NEW POST</a>
              <TrendingBoards />
              <Footer />
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default TermsOfUsePage;
