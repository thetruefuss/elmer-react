import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import './SubjectForm.css';

class SubjectForm extends Component {
  state = {
    title: '',
    body: '',
    photo: null,
    board: null,
    board_options: []
  };

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/frontboard/boards/user_subscribed/', {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ board_options: json });
      });
  }

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_photo_change = e => {
    this.setState({photo: e.target.files[0]});
  };

  handle_board_change = e => {
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState['board'] = value;
      return newState;
    });
  };

  verify_callback = response => {
    console.log(response);
  }

  onload_callback = () => {
    console.log('Recaptcha loaded successfully.');
  }

  render() {
    const boardOptions = this.state.board_options.map((board) =>
                <option key={board.id} value={board.id}>{board.title}</option>
            );
    return (
      <React.Fragment>
      <form onSubmit={e => this.props.handle_subject_submission(e, this.state)} method="post" encType="multipart/form-data" id="subject_form">
        <div className="form-group">
          <label htmlFor="id_title"><span id="required_inp">*</span>Title</label>
          <input type="text" className="form-control" id="id_title" maxLength={150} name="title" value={this.state.title} onChange={this.handle_change} required />
          <small className="form-text text-muted">
            You can <b>u/mention</b> other members in your post anywhere.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="id_description">Description</label>
          <textarea className="form-control" cols={40} rows={4} id="id_description" name="body" maxLength={2000} placeholder="Describe your subject verbosely" value={this.state.body} onChange={this.handle_change} />
        </div>
        <div className="form-group">
          <label htmlFor="id_photo">Add image</label>
          <input type="file" className="form-control-file" id="id_photo" name="photo" accept="image/*" onChange={this.handle_photo_change} />
        </div>
        <div className="form-group">
          <label htmlFor="id_cover"><span id="required_inp">*</span>Choose a board</label>
          <select className="form-control" id="id_cover" value={this.state.board} onChange={this.handle_board_change} required>
          <option selected></option>
          {boardOptions}
          </select>
          <p className="text-muted">You need to <b>subscribe</b> a board, before posting in it.</p>
        </div>
        <Recaptcha
          sitekey="6LcxazUUAAAAAJstEHfmrSDE5QFqSrPUHqozW9XQ"
          render="explicit"
          verifyCallback={this.verify_callback}
          onloadCallback={this.onload_callback}
        />
        <br />
        <button type="submit" className="btn btn-primary btn-block" id="submit_subject">Submit</button>
      </form>
      </React.Fragment>
    );
  }
}

export default SubjectForm;
