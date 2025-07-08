import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const ProductSection = ({ title, products, showViewAll = false }) => {
  return (
    <section className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="section-title-left">{title}</h2>
          <p className="section-subtitle-left">
            {title.includes('Patterns') 
              ? 'Create beautiful items with our curated pattern collection'
              : 'Handmade treasures ready for your home'
            }
          </p>
        </div>
        {showViewAll && (
          <a href={title.includes('Patterns') ? '/patterns' : '/shop'} className="view-all-btn">
            View All <ArrowRight size={16} />
          </a>
        )}
      </div>
      
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-content">
                <span className={`product-type-badge ${product.type === 'pattern' ? 'pattern' : ''}`}>
                  {product.type === 'pattern' ? 'Pattern' : 'Finished Item'}
                </span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">${product.price}</div>
                <div className="product-meta">
                  <span className="product-seller">by {product.seller}</span>
                  <div className="product-rating">
                    <Star size={14} fill="currentColor" />
                    <span>{product.rating} ({product.reviews})</span>
                  </div>
                </div>
                <button className="btn btn-primary w-100">
                  {product.type === 'pattern' ? 'Download Pattern' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;