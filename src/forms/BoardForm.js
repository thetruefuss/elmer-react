import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import './BoardForm.css';

class BoardForm extends Component {
  state = {
    title: '',
    description: '',
    cover: null,
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_cover_change = e => {
    this.setState({cover: e.target.files[0]});
  };

  verify_callback = response => {
    console.log(response);
  }

  onload_callback = () => {
    console.log('Recaptcha loaded successfully.');
  }

  render() {
    return (
      <React.Fragment>
      <form onSubmit={e => this.props.handle_board_submission(e, this.state)} method="post" encType="multipart/form-data" id="board_form">
        <div className="form-group">
          <label htmlFor="id_title"><span id="required_inp">*</span>Title</label>
          <input type="text" className="form-control" id="id_title" maxLength={500} name="title" value={this.state.title} onChange={this.handle_change} required />
        </div>
        <div className="form-group">
          <label htmlFor="id_description"><span id="required_inp">*</span>Description</label>
          <textarea className="form-control" cols={40} rows={4} id="id_description" name="description" maxLength={2000} placeholder="Describe your board verbosely" value={this.state.description} onChange={this.handle_change} required />
        </div>
        <div className="form-group">
          <label htmlFor="id_cover">Background cover</label>
          <input type="file" className="form-control-file" id="id_cover" name="cover" accept="image/*" onChange={this.handle_cover_change} />
          <small id="cover_help" className="form-text text-muted">Image size should be <b>900 ✕ 300</b>.</small>
        </div>
        <Recaptcha
          sitekey="6LcxazUUAAAAAJstEHfmrSDE5QFqSrPUHqozW9XQ"
          render="explicit"
          verifyCallback={this.verify_callback}
          onloadCallback={this.onload_callback}
        />
        <br />
        <button type="submit" className="btn btn-success btn-block" id="submit_board">Submit</button>
      </form>
      </React.Fragment>
    );
  }
}

export default BoardForm;
