import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div
    className="text-muted"
    style={{ fontSize: 12, marginTop: 20, padding: 5 }}>
    <Link to="/privacy">Privacy policy</Link>
    <span> &middot; </span>
    <Link to="/terms">Terms of Use</Link>
    <span> &middot; </span>
    <Link to="/about">About</Link>
    <span> &middot; </span>
    <a href="/">Sitemap</a>
    <span> &middot; </span>
    <a href="/">Send Feedback</a>
    <br />
    <span>Elmer &copy; 2018. All rights reserved.</span>
  </div>
);

export default Footer;
