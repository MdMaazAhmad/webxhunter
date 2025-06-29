import { memo } from 'react';

// Content configuration for better maintainability
const HERO_CONTENT = {
  title: "About Us",
  subtitle: "At Web x Hunter, we're more than just a web service agency; we're a team of passionate individuals dedicated to crafting exceptional digital experiences. Our journey began with a simple vision: to empower businesses with innovative and effective web solutions that drive growth and success.",
  sections: [
    {
      id: 'our-story',
      title: 'Our Story',
      content: "Founded in 2015 by Sarah Hunter, Web x Hunter started as a small team of web enthusiasts with a shared passion for technology and design. Over the years, we've grown into a full-service agency, expanding our expertise to cover a wide range of web services, from custom website development to digital marketing strategies. Our commitment to excellence and client satisfaction has been the cornerstone of our success."
    },
    {
      id: 'our-mission',
      title: 'Our Mission',
      content: "Our mission is to help businesses thrive in the digital landscape by providing tailored web solutions that align with their unique goals and objectives. We believe in a collaborative approach, working closely with our clients to understand their needs and deliver results that exceed expectations. We strive to be more than just a service provider; we aim to be a trusted partner in our clients' digital journey."
    }
  ]
};

// Extracted Section component for better reusability
const ContentSection = memo(({ title, content, id }) => (
  <section className="mb-8" aria-labelledby={`${id}-heading`}>
    <h2 
      id={`${id}-heading`}
      className="text-white text-xl md:text-2xl font-bold mb-2"
    >
      {title}
    </h2>
    <p className="text-white/80 text-base leading-relaxed ">
      {content}
    </p>
  </section>
));

ContentSection.displayName = 'ContentSection';

// Main Hero Component
const Hero = memo(() => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
          {HERO_CONTENT.title}
        </h2>
        
        <div className="mb-10">
        
          <p className="text-white/60 text-base leading-relaxed ">
            {HERO_CONTENT.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {HERO_CONTENT.sections.map((section) => (
            <ContentSection
              key={section.id}
              id={section.id}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;