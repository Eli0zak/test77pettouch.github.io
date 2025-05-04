
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    text: "PetTouch has been a game-changer for managing my dog's health records. I love how easy it is to set reminders for vaccinations!",
    author: "Sarah M.",
    role: "Dog Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
  },
  {
    text: "When my cat went missing, the Lost & Found community helped me find her within hours. I'm so grateful for this platform!",
    author: "Michael K.",
    role: "Cat Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
  },
  {
    text: "As a veterinarian, I recommend PetTouch to all my clients. It helps them stay organized with their pets' health information.",
    author: "Dr. Lisa T.",
    role: "Veterinarian",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white to-pet-accent1/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pet-dark mb-4">
            Loved by <span className="text-pet-primary">Pet Owners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about their experience with PetTouch
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="mb-6 text-muted-foreground italic text-center">
                    "{testimonial.text}"
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
