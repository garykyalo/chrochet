import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    icon: '📝',
    title: 'Patterns',
    description: 'Discover thousands of crochet patterns from beginner to advanced',
    link: '/patterns'
  },
  {
    id: 2,
    icon: '🛍️',
    title: 'Shop Items',
    description: 'Browse beautiful handmade crochet items ready to purchase',
    link: '/shop'
  },
  {
    id: 3,
    icon: '👥',
    title: 'Hire Talent',
    description: 'Connect with skilled crocheters for custom projects',
    link: '/hire'
  },
  {
    id: 4,
    icon: '🎓',
    title: 'Tutorials',
    description: 'Learn new techniques with step-by-step video tutorials',
    link: '/tutorials'
  },
  {
    id: 5,
    icon: '💬',
    title: 'Community',
    description: 'Join discussions and share your creations with fellow crafters',
    link: '/community'
  },
  {
    id: 6,
    icon: '📅',
    title: 'Events',
    description: 'Attend workshops, meetups, and crochet-along events',
    link: '/events'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="my-5">
      <div className="section-header">
        <h2 className="section-title">Explore Our Platform</h2>
        <p className="section-subtitle">
          Everything you need for your crochet journey in one place
        </p>
      </div>
      
      <div className="row">
        {categories.map(category => (
          <div key={category.id} className="col-lg-4 col-md-6 mb-4">
            <div className="category-card">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <a href={category.link} className="category-link">
                Explore Now <ArrowRight size={16} className="ms-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;