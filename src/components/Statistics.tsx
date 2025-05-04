
import React from 'react';

const Statistics = () => {
  return (
    <section className="py-16 px-6 bg-pet-accent4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pet-primary mb-2">10k+</div>
            <p className="text-muted-foreground">Pet Owners</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pet-primary mb-2">15k+</div>
            <p className="text-muted-foreground">Pets Registered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pet-primary mb-2">50k+</div>
            <p className="text-muted-foreground">QR Scans</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pet-primary mb-2">1k+</div>
            <p className="text-muted-foreground">Pets Found</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
