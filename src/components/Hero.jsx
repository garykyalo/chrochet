import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="hero-content text-center">
              <h1 className="hero-title fade-in-up">
                Connect, Create, and Craft Together
              </h1>
              <p className="hero-subtitle fade-in-up">
                Join the ultimate platform for crochet enthusiasts. Find patterns, shop handmade items, 
                hire talented crafters, and learn from the best in our vibrant community.
              </p>
              <div className="hero-cta fade-in-up">
                <a href="/shop" className="hero-btn hero-btn-primary">
                  <span>Start Shopping</span>
                  <ArrowRight size={20} />
                </a>
                <a href="/tutorials" className="hero-btn hero-btn-secondary">
                  <Play size={20} />
                  <span>Watch Tutorials</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;