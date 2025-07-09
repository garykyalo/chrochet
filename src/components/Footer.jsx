import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-section">
              <h5>🧶 CraftConnect</h5>
              <p>Your ultimate destination for crochet patterns, handmade items, and connecting with talented artisans. Join our community and bring your creative visions to life.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="footer-section">
              <h5>Explore</h5>
              <ul>
                <li><a href="/patterns">Patterns</a></li>
                <li><a href="/shop">Shop Items</a></li>
                <li><a href="/hire">Hire Talent</a></li>
                <li><a href="/tutorials">Tutorials</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/events">Events</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="footer-section">
              <h5>Support</h5>
              <ul>
                <li><a href="/help">Help Center</a></li>
                <li><a href="/seller-guide">Seller Guide</a></li>
                <li><a href="/pattern-guide">Pattern Guide</a></li>
                <li><a href="/shipping">Shipping Info</a></li>
                <li><a href="/returns">Returns</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-section">
              <h5>Get in Touch</h5>
              <div className="d-flex align-items-center mb-2">
                <Mail size={16} className="me-2" />
                <span>hello@craftconnect.com</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Phone size={16} className="me-2" />
                <span>+1 *** *****</span>
              </div>
              <div className="d-flex align-items-center">
                <MapPin size={16} className="me-2" />
                <span>123 Craft Street, Creative City, CC 12345</span>
              </div>
              
              <div className="mt-3">
                <h6>Newsletter</h6>
                <p className="small">Get the latest patterns and updates</p>
                <div className="d-flex">
                  <input 
                    type="email" 
                    className="form-control me-2" 
                    placeholder="Enter email"
                  />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} CraftConnect. All rights reserved. Made with ❤️ for the crochet community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;