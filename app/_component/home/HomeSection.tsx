import React from 'react';

interface HomeSectionProps {
  children?: React.ReactNode;
}

const HomeSection: React.FC<HomeSectionProps> = ({ children }) => {
  return (
    <section className="home-section">
      <div className="container">
        <h1>Welcome to Home</h1>
        {children}
      </div>
    </section>
  );
};

export default HomeSection;