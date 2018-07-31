import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="text-muted" style={{fontSize: 12, marginTop: 20, padding: 5}}>
      <a href="/">Privacy policy</a><span> &middot; </span>
      <a href="/">Terms of Use</a><span> &middot; </span>
      <Link to="/about">About</Link><span> &middot; </span>
      <a href="/">Sitemap</a><span> &middot; </span>
      <a href="/">Send Feedback</a><br />
      <span>Elmer &copy; 2018. All rights reserved.</span>
    </div>
  );
};

export default Footer;
