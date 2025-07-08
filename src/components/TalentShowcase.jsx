import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const TalentShowcase = ({ talents }) => {
  return (
    <section className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="section-title-left">Featured Talent</h2>
          <p className="section-subtitle-left">
            Hire skilled crocheters for your custom projects
          </p>
        </div>
        <a href="/hire" className="view-all-btn">
          View All Talent <ArrowRight size={16} />
        </a>
      </div>
      
      <div className="row">
        {talents.map(talent => (
          <div key={talent.id} className="col-lg-4 col-md-6 mb-4">
            <div className="talent-card">
              <img
                src={talent.image}
                alt={talent.name}
                className="talent-image"
              />
              <div className="talent-content">
                <h3 className="talent-name">{talent.name}</h3>
                <p className="talent-specialty">{talent.specialty}</p>
                <p className="talent-description">{talent.description}</p>
                
                <div className="talent-stats">
                  <div className="talent-stat">
                    <span className="talent-stat-value">
                      <Star size={14} fill="currentColor" className="text-warning" />
                      {talent.rating}
                    </span>
                    <span className="talent-stat-label">Rating</span>
                  </div>
                  <div className="talent-stat">
                    <span className="talent-stat-value">{talent.completedProjects}</span>
                    <span className="talent-stat-label">Projects</span>
                  </div>
                </div>
                
                <div className="talent-price">{talent.priceRange}</div>
                <button className="hire-btn">
                  Hire {talent.name.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TalentShowcase;