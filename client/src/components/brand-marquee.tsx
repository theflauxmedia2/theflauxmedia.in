export default function BrandMarquee() {
  // Brand logos for marquee - using actual brand images
  const brandLogos = [
    { name: "Global Computers", logo: "/brand-logos/gc.png", invert: false, circle: false },
    { name: "Macaw", logo: "/brand-logos/macaw.png", invert: true, circle: false },
    { name: "Moai", logo: "/brand-logos/moai.png", invert: false, circle: false },
    { name: "Stories 2.0", logo: "/brand-logos/st2.png", invert: true, circle: false },
    { name: "Stories Brewery & Kitchen", logo: "/brand-logos/stbc.png", invert: true, circle: false },
    { name: "Stories Brewery", logo: "/brand-logos/stbk.png", invert: true, circle: false },
    { name: "Madhuram Cafe", logo: "/brand-logos/madhuram.png", invert: false, circle: true },
    { name: "CNU", logo: "/brand-logos/cnu.png", invert: false, circle: false },
    { name: "101", logo: "/brand-logos/101.png", invert: false, circle: true },
  ];

  // Fallback for debugging
  console.log("Brand logos:", brandLogos);

  return (
    <section className="py-8 sm:py-12 bg-[var(--flaux-black)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--flaux-white)] text-center mb-6 leading-tight">
          Brands we've worked with
        </h3>
        <div className="relative overflow-hidden py-4">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-r from-[var(--flaux-black)] to-transparent z-10 pointer-events-none"></div>
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-l from-[var(--flaux-black)] to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {brandLogos.map((brand, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-6 my-1">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center hover:scale-110 transition-transform duration-300 ${brand.circle ? 'rounded-full bg-white/10 backdrop-blur-sm border border-black/30' : ''}`}>
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-contain ${brand.circle ? 'rounded-full' : ''} ${brand.invert ? 'invert' : ''}`}
                    onError={(e) => {
                      console.error(`Failed to load image: ${brand.logo} for ${brand.name}`);
                      e.currentTarget.src = '/logo/logo.png'; // Fallback to main logo
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded: ${brand.name} - ${brand.logo}`);
                    }}
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brandLogos.map((brand, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-6 my-1">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center hover:scale-110 transition-transform duration-300 ${brand.circle ? 'rounded-full bg-white/10 backdrop-blur-sm border border-black/30' : ''}`}>
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-contain ${brand.circle ? 'rounded-full' : ''} ${brand.invert ? 'invert' : ''}`}
                    onError={(e) => {
                      console.error(`Failed to load image: ${brand.logo} for ${brand.name}`);
                      e.currentTarget.src = '/logo/logo.png'; // Fallback to main logo
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded: ${brand.name} - ${brand.logo}`);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
