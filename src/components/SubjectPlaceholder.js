import React from 'react';
import './SubjectPlaceholder.css';
import { TextBlock, TextRow, RectShape } from 'react-placeholder/lib/placeholders';

const SubjectPlaceholder = (
  <div className="card card-styling">
    <div className="card-body card-body-styling">

      <div className="star-partition">
        <i className="fa fa-star-o fa-lg" aria-hidden="true" id="star_icon"></i>
        <br />
        <RectShape color='#E0E0E0' style={{ width: 25, height: 25, margin: '10px auto' }} />
      </div>

      <div className="body-partition">
        <p className="post-info text-muted">
          <TextRow color='#E0E0E0' style={{ marginBottom: 5 }} />
        </p>
        <TextBlock color='#E0E0E0' rows={2} style={{ height: 50 }} />
        <RectShape color='#E0E0E0' style={{ width: '100%', height: 250 }} />
      </div>
    </div>
  </div>
);

export default SubjectPlaceholder;
