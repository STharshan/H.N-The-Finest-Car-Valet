const serviceCoverageHref =
  "https://www.google.com/maps/search/?api=1&query=H.N+The+Finest+Car+Valet+%26+Detailing";

const commonContactLinks = [
  { icon: "Phone", title: "07515 634636", href: "tel:07515634636" },
  {
    icon: "Mail",
    title: "h.nfinestcarvalet@gmail.com",
    href: "mailto:h.nfinestcarvalet@gmail.com",
  },
  {
    icon: "MapPin",
    title: "Covering Nottingham, Leicester, Mansfield, Derby & Surrounding Areas",
    href: serviceCoverageHref,
  },
];

export const servicePages = [
  {
    slug: "professional-add-on-services",
    seoTitle: "Professional Add-On Services",
    banner: {
      title: "Professional Add-On Services",
      description:
        "Enhance your valet or detailing package with our range of specialist add-on services.",
      desc1:
        "From engine bay detailing and pet hair removal to headlight restoration and soft top treatments, our additional services are designed to tackle specific issues and provide the finishing touches that help your vehicle look its absolute best.",
      desc2:
        "Available through our fully mobile service across Nottingham, Leicester, Mansfield, Derby, and surrounding areas.",
      thumbnailImage: "/image.png",
      thumbnailAlt: "Professional add-on vehicle care services",
    },
    detail: {
      mainTitle: "Specialist Vehicle Care & Enhancement Services",
      mainDescription:
        "Every vehicle has unique requirements that go beyond standard valeting and detailing. Our professional add-on services allow you to customise your booking and target specific areas that need additional attention.",
      subDesc:
        "Whether you're dealing with stubborn pet hair, sand contamination, cloudy headlights, mould growth, or a weathered convertible roof, our specialist treatments help restore, improve, and protect your vehicle using professional-grade products and proven techniques.",
      additionalDescriptions: [
        "These services can be booked alongside our valet and detailing packages or discussed as standalone solutions depending on your requirements.",
      ],
      benefits: {
        title: "When You Need Specialist Vehicle Care",
        items: [
          {
            heading: "Stubborn Contamination",
            text: "Pet hair, sand, mould, and embedded debris often require specialist tools and techniques for effective removal.",
          },
          {
            heading: "Improving Vehicle Appearance",
            text: "Headlight restoration, soft top treatments, and engine bay detailing can dramatically improve overall presentation.",
          },
          {
            heading: "Preparing For Sale",
            text: "Additional detailing services help maximise your vehicle's appearance and create a stronger first impression.",
          },
          {
            heading: "Ongoing Vehicle Maintenance",
            text: "Regular specialist treatments help preserve the condition of key vehicle components and surfaces.",
          },
        ],
      },
      process: {
        title: "How It Works",
        steps: [
          {
            heading: "Discuss Your Requirements",
            text: "Contact us to explain your vehicle's condition and the additional services you require.",
          },
          {
            heading: "Vehicle Assessment",
            text: "We assess the affected areas and recommend the most suitable treatment options.",
          },
          {
            heading: "Specialist Treatment",
            text: "Using professional equipment and products, we carry out the required restoration, cleaning, or enhancement work.",
          },
          {
            heading: "Final Inspection & Finish",
            text: "All treated areas are inspected to ensure the highest possible finish before completion.",
          },
        ],
      },
      extraSections: [
        {
          title: "Why Choose Our Add-On Services?",
          items: [
            {
              heading: "Professional Products & Equipment",
              text: "We use specialist tools and professional-grade products to achieve the best possible results.",
            },
            {
              heading: "Tailored To Your Vehicle",
              text: "Each service is adapted to the specific condition and requirements of your vehicle.",
            },
            {
              heading: "Fully Mobile Convenience",
              text: "Our services are delivered directly at your home or workplace.",
            },
            {
              heading: "Perfect Complement To Any Valet Package",
              text: "Add specialist treatments to any Mini Valet, Premium Valet, Deep Clean, Paint Correction, or Protection Package.",
            },
          ],
        },
      ],
      cta: {
        title: "Customise Your Vehicle Care Package Today",
      },
    },
    packageSection: {
      detail: {
        title: "Add-On Service Packages",
        desc: "Specialist Vehicle Enhancement & Restoration",
      },
      contactLinks: commonContactLinks,
      packages: [
        {
          type: "Engine Bay Clean & Dress",
          price: "£40",
          btnText: "Book Engine Bay Detail",
          features: [
            {
              description:
                "A professional engine bay cleaning and dressing service designed to remove dirt, grime, and build-up while restoring a clean and well-maintained appearance.",
            },
            {
              description:
                "Ideal for vehicle enthusiasts, resale preparation, and ongoing maintenance.",
            },
            { description: "Safe engine bay cleaning" },
            { description: "Degreasing treatment" },
            { description: "Surface dressing" },
            { description: "Plastic trim enhancement" },
            { description: "Professional finishing" },
          ],
        },
        {
          type: "Pet Hair Removal",
          price: "From £15",
          btnText: "Book Pet Hair Removal",
          features: [
            {
              description:
                "Professional removal of embedded pet hair from carpets, upholstery, seats, and hard-to-reach areas.",
            },
            { description: "Minor Contamination - £15" },
            { description: "Medium Contamination - £25" },
            { description: "Major Contamination - £40" },
            { description: "Removes embedded pet hair" },
            { description: "Improves interior appearance" },
            { description: "Helps reduce allergens" },
            { description: "Creates a cleaner cabin environment" },
          ],
        },
        {
          type: "Sand Removal",
          price: "From £15",
          btnText: "Book Sand Removal",
          features: [
            {
              description:
                "Specialist sand removal service targeting carpets, mats, seats, and interior crevices where sand commonly accumulates.",
            },
            {
              description:
                "Particularly popular for beach-goers, outdoor enthusiasts, and family vehicles.",
            },
            { description: "Minor Contamination - £15" },
            { description: "Medium Contamination - £25" },
            { description: "Major Contamination - £40" },
            { description: "Removes stubborn sand deposits" },
            { description: "Protects carpets and upholstery" },
            { description: "Improves cabin cleanliness" },
            { description: "Prevents abrasive wear" },
          ],
        },
        {
          type: "Soft Top Restoration",
          price: "£60",
          btnText: "Book Soft Top Restoration",
          features: [
            {
              description:
                "Restore the appearance of your convertible roof with our professional soft top cleaning and restoration service.",
            },
            {
              description:
                "Designed to remove dirt, algae, contamination, and weather-related staining while improving overall appearance.",
            },
            { description: "Deep soft top cleaning" },
            { description: "Contamination removal" },
            { description: "Surface restoration" },
            { description: "Appearance enhancement" },
          ],
        },
        {
          type: "Soft Top Re-Dye",
          price: "£100",
          btnText: "Book Soft Top Re-Dye",
          features: [
            {
              description:
                "Revitalise faded convertible roofs with our professional soft top re-dye treatment.",
            },
            {
              description:
                "Restores colour depth and improves the appearance of ageing or weathered fabric roofs.",
            },
            { description: "Surface preparation" },
            { description: "Professional dye application" },
            { description: "Colour restoration" },
            { description: "Enhanced finish" },
          ],
        },
        {
          type: "Headlight Restoration & Protection",
          price: "£30 Per Headlight",
          btnText: "Book Headlight Restoration",
          features: [
            {
              description:
                "Restore cloudy, oxidised, or yellowed headlights to improve both appearance and visibility.",
            },
            {
              description:
                "Our restoration process helps improve light output while enhancing the overall look of the vehicle.",
            },
            { description: "Headlight restoration" },
            { description: "Oxidation removal" },
            { description: "Surface refinement" },
            { description: "Protective coating application" },
          ],
        },
        {
          type: "Mould Removal",
          price: "Call For Quote",
          btnText: "Request A Quote",
          features: [
            {
              description:
                "Professional mould treatment and sanitisation designed to remove mould contamination safely and effectively.",
            },
            {
              description:
                "Each case varies depending on severity, therefore pricing is provided following assessment.",
            },
            { description: "Mould treatment" },
            { description: "Interior sanitisation" },
            { description: "Odour reduction" },
            { description: "Improved cabin hygiene" },
          ],
        },
        {
          type: "Vinyl Removal",
          price: "Call For Quote",
          btnText: "Request A Quote",
          features: [
            {
              description:
                "Professional removal of vinyl wraps, graphics, decals, and adhesive residue.",
            },
            {
              description:
                "Ideal for rebranding, vehicle sales, or restoring original paintwork.",
            },
            { description: "Vinyl removal" },
            { description: "Adhesive residue removal" },
            { description: "Surface preparation" },
            { description: "Paintwork assessment" },
          ],
        },
      ],
    },
  },
  {
    slug: "full-interior-deep-clean",
    seoTitle: "Full Interior Deep Clean Service",
    banner: {
      title: "Full Interior Deep Clean Service",
      description:
        "Restore freshness, cleanliness, and comfort to your vehicle's interior with our professional Full Interior Deep Clean service.",
      desc1:
        "Designed to eliminate embedded dirt, stains, bacteria, odours, and everyday contamination, this service focuses exclusively on transforming your vehicle's cabin back to its best possible condition.",
      desc2:
        "Available through our fully mobile service across Nottingham, Leicester, Mansfield, Derby, and surrounding areas.",
      thumbnailImage: "/image.png",
      thumbnailAlt: "Full interior deep clean service",
    },
    detail: {
      mainTitle: "Complete Interior Restoration & Sanitisation",
      mainDescription:
        "Your vehicle's interior experiences daily wear from passengers, pets, food, drinks, dust, mud, and general use. Over time, dirt and bacteria become embedded deep within carpets, upholstery, mats, and hard-to-reach areas that routine cleaning cannot effectively remove.",
      subDesc:
        "Our Full Interior Deep Clean service is designed to restore every interior surface using professional-grade products, extraction machines, steam cleaning equipment, and specialist detailing techniques.",
      additionalDescriptions: [
        "From heavily soiled carpets and stained seats to dusty vents and unpleasant odours, we thoroughly clean, sanitise, and refresh your vehicle's interior to create a cleaner, healthier, and more comfortable driving environment.",
      ],
      benefits: {
        title: "When You Need A Full Interior Deep Clean",
        items: [
          {
            heading: "Stains & Spillages",
            text: "Food, drink, mud, and everyday accidents can leave stubborn stains that require professional extraction and cleaning.",
          },
          {
            heading: "Unpleasant Odours",
            text: "Lingering smells from pets, smoke, food, or moisture often require deep cleaning and sanitisation to remove effectively.",
          },
          {
            heading: "Family Vehicle Restoration",
            text: "Vehicles used daily by families can quickly accumulate dirt, crumbs, stains, and bacteria throughout the cabin.",
          },
          {
            heading: "Preparing For Sale",
            text: "A professionally cleaned interior creates a strong first impression and helps maximise resale value.",
          },
        ],
      },
      process: {
        title: "How It Works",
        steps: [
          {
            heading: "Book Your Interior Deep Clean",
            text: "Contact us to discuss your vehicle's condition and schedule a convenient appointment.",
          },
          {
            heading: "Interior Assessment",
            text: "We inspect the vehicle's interior and identify any heavily soiled areas, stains, or odour concerns.",
          },
          {
            heading: "Deep Cleaning & Extraction",
            text: "Using professional cleaning products, extraction equipment, and steam cleaning techniques, we thoroughly clean every interior surface.",
          },
          {
            heading: "Final Inspection & Refresh",
            text: "We perform a final quality check and ensure the interior is left clean, fresh, sanitised, and ready to enjoy.",
          },
        ],
      },
      extraSections: [
        {
          title: "Benefits Of A Professional Interior Deep Clean",
          items: [
            {
              heading: "Improved Cabin Hygiene",
              text: "Removes dirt, bacteria, allergens, and contaminants that accumulate through daily vehicle use.",
            },
            {
              heading: "Stain Removal",
              text: "Professional extraction equipment helps remove stubborn stains from seats, carpets, and mats.",
            },
            {
              heading: "Odour Elimination",
              text: "Deep cleaning targets the source of unpleasant smells rather than simply masking them.",
            },
            {
              heading: "Increased Comfort",
              text: "A clean and refreshed interior creates a more enjoyable driving experience for both drivers and passengers.",
            },
            {
              heading: "Vehicle Presentation",
              text: "Restores a clean, well-maintained appearance that enhances pride of ownership and resale appeal.",
            },
            {
              heading: "Healthier Environment",
              text: "Reduces dust, allergens, and bacteria within the cabin for a cleaner interior environment.",
            },
          ],
        },
        {
          title: "Ideal For",
          items: [
            { text: "Family Vehicles" },
            { text: "Pet Owners" },
            { text: "Smokers' Vehicles" },
            { text: "Taxi & Private Hire Vehicles" },
            { text: "Company Cars" },
            { text: "Newly Purchased Vehicles" },
            { text: "Vehicles Being Sold" },
          ],
        },
      ],
      cta: {
        title: "Restore Your Vehicle's Interior Today",
        buttonText: "Book A Full Interior Deep Clean",
      },
    },
    packageSection: {
      detail: {
        title: "Full Interior Deep Clean Packages",
        desc: "Professional Interior Restoration & Sanitisation",
      },
      contactLinks: commonContactLinks,
      packages: [
        {
          type: "Hatchback, Saloon & Estate Cars",
          price: "From £100",
          btnText: "Book Interior Deep Clean",
          features: [
            {
              description:
                "A comprehensive interior restoration service designed to remove dirt, stains, odours, and contamination from every area of your vehicle's cabin.",
            },
            {
              description:
                "Perfect for family vehicles, pet owners, smokers, and heavily used interiors requiring a complete refresh.",
            },
            { description: "Full interior vacuum" },
            { description: "Carpets shampooed & extracted" },
            { description: "Floor mats shampooed & extracted" },
            { description: "Boot area cleaned" },
            { description: "Fabric seats shampooed & extracted" },
            { description: "Leather seats cleaned & conditioned" },
            { description: "Interior steam cleaning" },
            { description: "Dashboard cleaned" },
            { description: "Door panels cleaned" },
            { description: "Centre console cleaned" },
            { description: "Interior plastics dressed" },
            { description: "Air vents cleaned" },
            { description: "Interior windows cleaned" },
            { description: "Odour reduction treatment" },
            { description: "Complimentary air freshener" },
          ],
        },
        {
          type: "4x4, People Carrier & MPV",
          price: "From £120",
          btnText: "Book Interior Deep Clean",
          features: [
            {
              description:
                "A complete interior restoration package tailored for larger vehicles requiring additional cleaning time and attention.",
            },
            {
              description:
                "Designed to eliminate embedded contamination while restoring cleanliness, comfort, and freshness throughout the cabin.",
            },
            { description: "Full interior vacuum" },
            { description: "Carpets shampooed & extracted" },
            { description: "Floor mats shampooed & extracted" },
            { description: "Boot area cleaned" },
            { description: "Fabric seats shampooed & extracted" },
            { description: "Leather seats cleaned & conditioned" },
            { description: "Interior steam cleaning" },
            { description: "Dashboard cleaned" },
            { description: "Door panels cleaned" },
            { description: "Centre console cleaned" },
            { description: "Interior plastics dressed" },
            { description: "Air vents cleaned" },
            { description: "Interior windows cleaned" },
            { description: "Odour reduction treatment" },
            { description: "Complimentary air freshener" },
          ],
        },
      ],
    },
  },
  {
    slug: "maintenance-valet-packages",
    seoTitle: "Professional Maintenance Valet Packages",
    banner: {
      title: "Professional Maintenance Valet Packages",
      description:
        "Keep your vehicle looking fresh, clean, and protected all year round with our regular Maintenance Valet service.",
      desc1:
        "Designed for vehicles that have already received a Deep Clean, Premium Valet, or Protection Package, our Maintenance Valets help preserve your vehicle's appearance through routine professional care.",
      desc2:
        "Available through our fully mobile service across Nottingham, Leicester, Mansfield, Derby, and surrounding areas.",
      thumbnailImage: "/image.png",
      thumbnailAlt: "Maintenance valet package",
    },
    detail: {
      mainTitle: "Ongoing Vehicle Care & Protection",
      mainDescription:
        "Our Maintenance Valet Packages are designed to keep your vehicle in excellent condition between major detailing appointments. Regular maintenance not only keeps your vehicle looking its best but also helps preserve paint protection, interior cleanliness, and overall presentation.",
      subDesc:
        "By following a scheduled maintenance programme, dirt, road grime, contamination, and interior build-up are prevented from reaching the level where extensive restoration is required. This allows your vehicle to remain cleaner for longer while maintaining the results achieved through previous detailing services.",
      additionalDescriptions: [
        "Whether you choose weekly, fortnightly, monthly, or six-week visits, our Maintenance Valet Packages provide a convenient and cost-effective way to protect your investment.",
      ],
      benefits: {
        title: "When You Need A Maintenance Valet",
        items: [
          {
            heading: "After A Deep Clean",
            text: "Regular maintenance helps preserve the results of your Deep Clean and prevents contamination from returning.",
          },
          {
            heading: "Protecting Ceramic Coatings",
            text: "Routine professional washing helps maintain ceramic-coated vehicles and maximise coating performance.",
          },
          {
            heading: "Busy Lifestyle",
            text: "Enjoy a consistently clean vehicle without spending your own time washing and maintaining it.",
          },
          {
            heading: "Keeping Your Vehicle Presentable",
            text: "Perfect for daily drivers, company vehicles, family cars, and enthusiasts who take pride in their vehicle's appearance.",
          },
        ],
      },
      process: {
        title: "How It Works",
        steps: [
          {
            heading: "Join A Maintenance Plan",
            text: "Following a Deep Clean, Premium Valet, or Protection Package, we'll recommend the most suitable maintenance schedule.",
          },
          {
            heading: "Choose Your Visit Frequency",
            text: "Select from weekly, fortnightly, monthly, or six-week maintenance appointments based on your vehicle usage.",
          },
          {
            heading: "Regular Professional Valets",
            text: "We carry out scheduled maintenance cleans using safe washing methods and professional products.",
          },
          {
            heading: "Consistent Long-Term Results",
            text: "Your vehicle remains clean, protected, and maintained throughout the year with minimal effort from you.",
          },
        ],
      },
      extraSections: [
        {
          title: "Benefits Of Regular Maintenance Valeting",
          items: [
            {
              heading: "Preserves Previous Detailing Work",
              text: "Protects the results achieved through Deep Cleans, Paint Correction, and Ceramic Coating services.",
            },
            {
              heading: "Maintains Vehicle Value",
              text: "A consistently clean and well-maintained vehicle helps retain its appearance and resale value.",
            },
            {
              heading: "Saves Time & Effort",
              text: "Avoid spending your weekends cleaning your vehicle while still enjoying professional results.",
            },
            {
              heading: "Protects Paintwork",
              text: "Regular safe washing reduces contamination build-up and helps prevent long-term paint damage.",
            },
            {
              heading: "Keeps Interiors Fresh",
              text: "Routine vacuuming and interior care help maintain a clean and comfortable cabin environment.",
            },
            {
              heading: "Convenient Mobile Service",
              text: "We come directly to your home or workplace, making vehicle maintenance simple and hassle-free.",
            },
          ],
        },
        {
          title: "Recommended For",
          items: [
            { text: "Ceramic Coated Vehicles" },
            { text: "Deep Clean Customers" },
            { text: "New Car Protection Package Customers" },
            { text: "Family Cars" },
            { text: "Daily Drivers" },
            { text: "Company Vehicles" },
            { text: "Personal Vehicle Fleets" },
          ],
        },
      ],
      cta: {
        title: "Keep Your Vehicle Looking Its Best All Year Round",
        buttonText: "Join A Maintenance Valet Package Today",
      },
    },
    packageSection: {
      detail: {
        title: "Maintenance Valet Packages",
        desc: "Routine Vehicle Care & Protection",
      },
      contactLinks: commonContactLinks,
      packages: [
        {
          type: "Hatchback, Saloon & Estate Cars",
          price: "£70",
          btnText: "Join Maintenance Plan",
          features: [
            {
              description:
                "A scheduled maintenance valet designed to preserve your vehicle's cleanliness, appearance, and protection between major detailing services.",
            },
            {
              description:
                "Perfect for customers who want their vehicle consistently maintained to a high standard.",
            },
            { description: "Exterior pre-wash" },
            { description: "Safe two-bucket wash method" },
            { description: "PH-neutral shampoo" },
            { description: "Wheels cleaned" },
            { description: "Windows cleaned" },
            { description: "Interior vacuum" },
            { description: "Dashboard wipe down" },
            { description: "General interior refresh" },
            { description: "Final inspection" },
            { description: "Weekly Maintenance" },
            { description: "Fortnightly Maintenance" },
            { description: "Monthly Maintenance" },
            { description: "Every 6 Weeks" },
          ],
        },
        {
          type: "4x4, People Carrier & MPV",
          price: "£80",
          btnText: "Join Maintenance Plan",
          features: [
            {
              description:
                "A professional maintenance valet tailored specifically for larger vehicles requiring additional cleaning time and attention.",
            },
            {
              description:
                "Ideal for family vehicles, SUVs, and larger daily-use vehicles that benefit from regular professional care.",
            },
            { description: "Exterior pre-wash" },
            { description: "Safe two-bucket wash method" },
            { description: "PH-neutral shampoo" },
            { description: "Wheels cleaned" },
            { description: "Windows cleaned" },
            { description: "Interior vacuum" },
            { description: "Dashboard wipe down" },
            { description: "General interior refresh" },
            { description: "Final inspection" },
            { description: "Weekly Maintenance" },
            { description: "Fortnightly Maintenance" },
            { description: "Monthly Maintenance" },
            { description: "Every 6 Weeks" },
          ],
        },
      ],
    },
  },
  {
    slug: "new-car-protection-package",
    seoTitle: "New Car Protection Package",
    banner: {
      title: "New Car Protection Package",
      description:
        "Protect your vehicle from day one with our comprehensive New Car Protection Package.",
      desc1:
        "Designed to preserve the appearance, value, and condition of your vehicle, this package combines paint enhancement, ceramic protection, glass coating, and wheel protection to keep your car looking newer for longer.",
      desc2:
        "Available through our fully mobile service across Nottingham, Leicester, Mansfield, Derby, and surrounding areas.",
      thumbnailImage: "/image.png",
      thumbnailAlt: "New car protection package",
    },
    detail: {
      mainTitle: "Long-Term Protection For Your Investment",
      mainDescription:
        "A new vehicle deserves the highest level of protection. Even brand-new cars can arrive with light transport marks, minor paint imperfections, and unprotected surfaces that are vulnerable to environmental contamination.",
      subDesc:
        "Our New Car Protection Package is designed to enhance and protect every key exterior surface. Combining paint correction, ceramic coating technology, glass protection, wheel protection, and engine bay detailing, this package provides long-lasting defence against road grime, UV rays, water spotting, bird droppings, and other everyday contaminants.",
      additionalDescriptions: [
        "The result is a vehicle that stays cleaner for longer, is easier to maintain, and retains its showroom appearance well into the future.",
      ],
      benefits: {
        title: "When You Need New Car Protection",
        items: [
          {
            heading: "Protecting A Brand-New Vehicle",
            text: "Prevent contamination and environmental damage before it has the opportunity to affect your vehicle's finish.",
          },
          {
            heading: "Preserving Resale Value",
            text: "Maintaining the condition of your paintwork and exterior surfaces helps protect long-term vehicle value.",
          },
          {
            heading: "Easier Future Maintenance",
            text: "Ceramic coatings reduce dirt adhesion and make washing significantly easier.",
          },
          {
            heading: "Long-Term Ownership Plans",
            text: "Ideal for owners who want their vehicle to maintain its appearance for years to come.",
          },
        ],
      },
      process: {
        title: "How It Works",
        steps: [
          {
            heading: "Book Your Protection Package",
            text: "Contact us to discuss your vehicle and select the most suitable protection package.",
          },
          {
            heading: "Vehicle Inspection & Preparation",
            text: "We assess the paintwork and determine whether machine polishing is required before protection is applied.",
          },
          {
            heading: "Paint Enhancement & Coating Application",
            text: "Where required, paint correction is carried out before applying ceramic coatings to paintwork, glass, and wheel faces.",
          },
          {
            heading: "Final Inspection & Protection Handover",
            text: "We inspect all protected surfaces and provide aftercare advice to help maximise the lifespan of your protection package.",
          },
        ],
      },
      extraSections: [
        {
          title: "Benefits Of Our New Car Protection Package",
          items: [
            {
              heading: "Ceramic Paint Protection",
              text: "Creates a durable protective barrier against contaminants, UV rays, and environmental fallout.",
            },
            {
              heading: "Glass Protection",
              text: "Improves visibility by repelling water and reducing contamination build-up on glass surfaces.",
            },
            {
              heading: "Wheel Protection",
              text: "Helps protect wheel faces from brake dust, road grime, and everyday contamination.",
            },
            {
              heading: "Easier Cleaning",
              text: "Protected surfaces remain cleaner for longer and require less effort to maintain.",
            },
            {
              heading: "Enhanced Gloss",
              text: "Produces a richer, deeper finish that enhances the overall appearance of the vehicle.",
            },
            {
              heading: "Long-Term Preservation",
              text: "Helps maintain the vehicle's condition and appearance for years to come.",
            },
          ],
        },
        {
          title: "Suitable For",
          items: [
            { text: "Brand-New Vehicles" },
            { text: "Nearly New Vehicles" },
            { text: "Lease Vehicles" },
            { text: "Performance Cars" },
            { text: "Family Vehicles" },
            { text: "Company Cars" },
            { text: "Long-Term Vehicle Ownership" },
          ],
        },
      ],
      cta: {
        title: "Protect Your New Vehicle Today",
      },
    },
    packageSection: {
      detail: {
        title: "New Car Protection Packages",
        desc: "Professional Vehicle Protection & Ceramic Coating",
      },
      contactLinks: commonContactLinks,
      packages: [
        {
          type: "New Car Protection Package - Hatchback, Saloon & Estate Cars",
          price: "£620",
          btnText: "Enquire About This Package",
          features: [
            {
              description:
                "Our complete protection package designed for vehicles requiring paint enhancement before ceramic coating application.",
            },
            {
              description:
                "This package combines paint correction with comprehensive ceramic protection to maximise gloss, durability, and long-term performance.",
            },
            { description: "One-step paint correction" },
            { description: "2-year ceramic coating" },
            { description: "Glass ceramic coating" },
            { description: "Wheel face ceramic coating" },
            { description: "Engine bay clean" },
            { description: "Paintwork enhancement" },
            { description: "Hydrophobic protection" },
            { description: "Enhanced gloss & depth" },
          ],
        },
        {
          type: "New Car Protection Package - 4x4, People Carrier & MPV",
          price: "£770",
          btnText: "Enquire About This Package",
          features: [
            {
              description:
                "A premium protection package designed specifically for larger vehicles requiring additional preparation and coating time.",
            },
            {
              description:
                "Provides complete protection against environmental contaminants while enhancing gloss and finish.",
            },
            { description: "One-step paint correction" },
            { description: "2-year ceramic coating" },
            { description: "Glass ceramic coating" },
            { description: "Wheel face ceramic coating" },
            { description: "Engine bay clean" },
            { description: "Paintwork enhancement" },
            { description: "Hydrophobic protection" },
            { description: "Enhanced gloss & depth" },
          ],
        },
        {
          type: "New Vehicle Protection Package - Hatchback, Saloon & Estate Cars",
          price: "£370",
          btnText: "Enquire About This Package",
          features: [
            {
              description:
                "Designed for brand-new vehicles that are free from swirl marks and paint defects where machine polishing may not be required.",
            },
            {
              description:
                "An excellent option for protecting your vehicle from the start without the need for paint correction.",
            },
            { description: "2-year ceramic coating" },
            { description: "Glass ceramic coating" },
            { description: "Wheel face ceramic coating" },
            { description: "Engine bay clean" },
            { description: "Hydrophobic protection" },
            { description: "Enhanced gloss finish" },
            { description: "Easier future maintenance" },
          ],
        },
        {
          type: "New Vehicle Protection Package - 4x4, People Carrier & MPV",
          price: "£470",
          btnText: "Enquire About This Package",
          features: [
            {
              description:
                "A complete ceramic protection package for larger vehicles that do not require paint correction prior to coating application.",
            },
            {
              description:
                "Provides durable protection while maintaining the factory-fresh appearance of your vehicle.",
            },
            { description: "2-year ceramic coating" },
            { description: "Glass ceramic coating" },
            { description: "Wheel face ceramic coating" },
            { description: "Engine bay clean" },
            { description: "Hydrophobic protection" },
            { description: "Enhanced gloss finish" },
            { description: "Easier future maintenance" },
          ],
        },
      ],
    },
  },
];

export const servicePagesBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
);
