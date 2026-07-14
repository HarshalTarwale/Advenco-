/**
 * Blinds by Room — Sub-Page Content
 *
 * Data for the 6 "Blinds by Room" category pages (Bathroom, Bedroom, Kitchen,
 * Dining Room, Living Room, Office). Content is copied verbatim from the
 * WordPress site pages; each conforms to the shared CommercialBlindPage
 * template shape — the same component used for the Commercial Blinds pages,
 * since the layout is identical and only content/images change.
 */

import type { CommercialBlindPageContent } from "./commercialBlindsPages";

export const blindsByRoomPages: Record<string, CommercialBlindPageContent> = {
  "bathroom-window-blinds": {
    slug: "bathroom-window-blinds",
    metaTitle: "Bathroom Window Blinds | Stylish & Functional Solutions | Advenco",
    metaDescription:
      "Waterproof, made-to-measure bathroom blinds from Advenco Blinds and Shutters — metal Venetian, roller, and PVC options with free fitting in select UK cities.",
    badgeLabel: "Bathroom Window Solutions",
    heroHeadingLines: ["Bathroom Window", "Blinds in the UK"],
    heroBody: [
      "Bathroom windows come in a variety of shapes, sizes, and dimensions. Advenco Window Blinds and Shutters in the UK offers top-notch bathroom blinds in the UK to suit every window need. Our custom-designed window blinds in the UK are tailored to provide perfect treatments in various sizes, shapes, and designs.",
      "Elevate the look of your bathrooms with aesthetically pleasing designs while enjoying the benefits of privacy, temperature insulation, and daylight control. We craft exquisite window blinds for any specific requirement across the UK. We offer nationwide delivery whenever you need it, and free installation is available in selected cities and regions.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Modern bathroom with a frosted glass window and walk-in shower",
    sideImage:
      "https://images.unsplash.com/photo-1641481001093-592dd889b1af?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Close-up of a wooden Venetian blind fitted to a sunlit window",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Bathrooms"],
    importanceBody: [
      "Modern bathrooms in contemporary homes require aesthetically appealing design elements. Advenco Window Blinds and Shutters provides top-quality bathroom window blinds that perform their function flawlessly. Our bathroom blinds in the UK not only offer essential window treatment features such as daylight control, privacy, and temperature insulation but are also designed to enhance the overall look.",
    ],
    benefits: [
      {
        icon: "layers",
        title: "Metal Venetian Bathroom Blinds",
        body: "Advenco offers aluminium blinds through our metal venetian collection. These metal bathroom blinds are coated to be waterproof and are built to last. Lightweight and available in a wide range of colors, custom sizes are available to suit any window requirement, plus an additional layer of temperature insulation to help regulate your bathroom's climate.",
      },
      {
        icon: "shield",
        title: "PVC Waterproof Bathroom Blinds",
        body: "Seeking durable and long-lasting bathroom blinds? Our collection of custom PVC waterproof blinds is the ideal solution. Made from high-quality waterproof PVC materials, these blinds are available in perfect fit sizes and control daylight while adding a layer of temperature insulation, in a wide range of colours, designs, and fabrics upon request.",
      },
      {
        icon: "eye",
        title: "Privacy, Insulation & Daylight Control",
        body: "Our bathroom blinds combine essential window treatment features — daylight control, privacy, and temperature insulation — while enhancing the overall look of your bathroom. Match your window treatments with your bathroom decor and create the design theme you desire.",
      },
      {
        icon: "wrench",
        title: "Affordable, Quick Shipping",
        body: "Advenco offers affordable bathroom window blinds with quick shipping available nationwide. Our dedicated shipping channels ensure fast delivery whenever and wherever you need it, with all customization options tailored to your bathroom requirements — without compromising on materials or fit and finish.",
      },
      {
        icon: "sparkles",
        title: "Custom Colours, Designs & Textures",
        body: "We offer a wide range of custom colors, designs, and textures in unique window blind styles, so you can dress your bathroom windows stylishly to achieve the look you want, with nationwide shipping available.",
      },
    ],
    differentiators: [
      {
        icon: "pound",
        title: "Affordable Pricing",
        body: "Affordable bathroom blinds in the UK for any design and size requirement, without compromise on quality or finish.",
      },
      {
        icon: "layers",
        title: "Custom-Made, Perfect Fit",
        body: "Custom-made, perfect fit blinds for bathroom windows available, ensuring a precise, professional fit every time.",
      },
      {
        icon: "sparkles",
        title: "Extensive Customization",
        body: "An extensive range of customization options, including materials, styles, and finishes, to match your bathroom's look and feel.",
      },
      {
        icon: "users",
        title: "Free Fittings in Select Cities",
        body: "Free fittings are available in select cities across the country for a fully installed, professional finish.",
      },
      {
        icon: "award",
        title: "High-Quality Materials",
        body: "High-quality materials with meticulous attention to detail in all our window blinds, backed by years of experience as a reliable window blinds supplier in the UK.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1656646523430-deb9d3fabca0?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Frosted bathroom window with a chrome towel rail beneath it",
    closingHeading: "Upgrade Your Bathroom with Blinds by Advenco",
    closingBody: [
      "Are you looking for a reliable window blinds supplier in the UK? Advenco Window Blinds and Shutters is your ideal choice. With years of experience in offering a variety of window treatments, including the best bathroom blinds, we provide perfect fit sizes and versatile design options at affordable prices.",
      "We also offer free fitting services in selected cities across the country. For further details or to place an order, please reach out to us.",
    ],
  },

  "bedroom-window-blinds": {
    slug: "bedroom-window-blinds",
    metaTitle: "Bedroom Window Blinds | Comfort and Privacy Solutions | Advenco",
    metaDescription:
      "Custom bedroom blinds from Advenco Blinds and Shutters — dimout, blackout, and privacy options in wood, metal Venetian, and Roman styles, with free measuring and fitting.",
    badgeLabel: "Bedroom Window Solutions",
    heroHeadingLines: ["Bedroom Window", "Blinds in the UK"],
    heroBody: [
      "Bedrooms are among the most frequently used areas in any contemporary home. It is crucial to choose the right window treatments for these private spaces. Advenco Window Blinds and Shutters offers premium bedroom blinds in UK, tailored for every home and interior style.",
      "Our diverse range of designs ensures that your bedroom windows are dressed to perfection. We use only the highest quality materials for our wooden blinds, metal Venetian blinds, Roman blinds, and other window treatment options. Select your preferred colors, designs, materials, and textures, and we will guarantee that you receive the finest bedroom window blinds delivered directly to your doorstep. Additionally, we offer free window measuring and blind fitting services in selected areas.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1615911577983-e2bb805354b3?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Cosy attic bedroom with a roller blind fitted to the window",
    sideImage:
      "https://images.unsplash.com/photo-1586205009278-cf9854b97d0c?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Bedroom window with sheer curtains and a radiator below",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Elevate Your Bedroom Windows", "with Custom Blinds"],
    importanceBody: [
      "Discover the beauty of tailormade bedroom blinds at prices that won't break the bank. Transform your bedroom with custom window treatments that you'll look forward to returning to every day. Our bespoke bedroom blinds come in a wide range of colors, textures, and elegant finishes, allowing you to match your windows with any interior décor. Featuring sleek designs and stunning finishes, our bedroom blinds not only enhance the appearance of your windows but also provide essential functions like dimout, blackout, and privacy.",
    ],
    benefits: [
      {
        icon: "eye",
        title: "Enhanced Privacy",
        body: "Privacy is crucial in a bedroom, and our blinds provide the perfect solution. With options such as blackout and Venetian blinds, you can control the amount of visibility from the outside, ensuring your personal space remains private.",
      },
      {
        icon: "sun",
        title: "Light Control",
        body: "Our blinds give you the ability to manage the amount of natural light entering your room. Whether you want to wake up to gentle sunlight or need complete darkness, we have the perfect solution to suit your needs.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Did you know that window blinds can also help with energy efficiency? Our range of blinds, including thermal and blackout options, can help regulate the temperature in your bedroom by reducing heat loss during winter and keeping your room cooler in summer.",
      },
      {
        icon: "sparkles",
        title: "Aesthetic Appeal",
        body: "With our extensive variety of styles and colors, you can find blinds that complement your bedroom décor. From modern and sleek to traditional and cozy, our bedroom blinds add the finishing touch to your bedroom design.",
      },
      {
        icon: "shield",
        title: "Custom Blinds, Dimout & Blackout",
        body: "Custom blinds offer ideal coverage for every bedroom window, with dimout and blackout options for complete control over daylight, and privacy blinds that always ensure your bedroom stays private — all made-to-measure with quick delivery across the UK.",
      },
    ],
    differentiators: [
      {
        icon: "layers",
        title: "Custom Fit for Your Windows",
        body: "We offer a bespoke service, ensuring that your blinds fit your windows perfectly. Our experts will take precise measurements and customize your blinds to fit your specific window dimensions, providing a polished and professional look.",
      },
      {
        icon: "users",
        title: "Expert Installation",
        body: "Our team of skilled installers ensures that your blinds are fitted perfectly, without any hassle. We pride ourselves on providing a seamless installation process, so you can enjoy your new blinds without any inconvenience.",
      },
      {
        icon: "award",
        title: "Quality and Durability",
        body: "At Advenco, we are committed to quality. Our bedroom blinds are made from durable materials and designed to last, providing you with long-term value and satisfaction. We also offer a warranty on all our products, giving you peace of mind.",
      },
      {
        icon: "pound",
        title: "Wide Selection of Styles",
        body: "Our collection includes Roller Blinds, simple yet elegant for minimalistic designs; Roman Blinds with soft, folded fabric for a touch of luxury; Vertical Blinds ideal for larger windows and patio doors; Venetian Blinds in wood, aluminum, and faux wood; and Blackout Blinds essential for a good night's sleep.",
      },
    ],
    extraSections: [
      {
        heading: "How to Choose the Right Blinds for Your Bedroom",
        paragraphs: [
          "Choosing the right blinds for your bedroom can seem overwhelming, but it doesn't have to be. Consider Your Needs — think about what you want from your blinds. Do you need complete darkness for sleeping? Are you looking for something stylish to enhance your room's décor? Consider factors like privacy, light control, and energy efficiency.",
          "Measure Your Windows — accurate measurements are crucial for a perfect fit. If you're unsure how to measure your windows, our team can help. We offer a measuring service to ensure your blinds are custom-made to fit your windows precisely.",
          "Choose the Right Style and Material — different styles and materials offer different benefits. For instance, blackout blinds are great for blocking light, while Venetian blinds offer more control over light and privacy. Consider the look and functionality you want to achieve.",
          "Match Your Décor — choose a color and style that complements your bedroom's décor. At Advenco window blinds and shutters in UK, we offer a wide range of options to match any style, from contemporary to traditional.",
        ],
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1630699376106-d550afb865bd?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Empty modern bedroom with a large window overlooking greenery",
    closingHeading: "Elevate Your Bedroom Windows with Advenco",
    closingBody: [
      "Transform your bedroom with the perfect bedroom blinds in UK from Advenco window blinds and shutters in UK. Visit our showroom or browse our website to explore our extensive collection.",
      "Whether you need advice on choosing the right bedroom blinds in UK or want to schedule a free consultation, our friendly team is here to help.",
    ],
  },

  "kitchen-window-blinds": {
    slug: "kitchen-window-blinds",
    metaTitle: "Kitchen Window Blinds | Stylish & Durable Designs | Advenco",
    metaDescription:
      "Made-to-measure kitchen blinds from Advenco Blinds and Shutters — waterproof roller, metal Venetian, wooden, and vertical options with a best price match guarantee.",
    badgeLabel: "Kitchen Window Solutions",
    heroHeadingLines: ["Kitchen Window", "Blinds in the UK"],
    heroBody: [
      "Upgrade your kitchen window coverings with our exceptional kitchen blinds in the UK. We offer a comprehensive range of custom styles, designs, colours, and finishes to complement any kitchen decor. Our made-to-measure kitchen blinds in the UK are designed to order and are available in all dimensions, sizes, and fittings.",
      "Enhance your kitchen windows with style while enjoying the benefits of natural daylight and window insulation. Our custom kitchen window blinds in the UK are crafted from high-quality materials, ensuring long-lasting coverage for your windows. Place your order today to have your kitchen window blinds in the UK delivered or fitted at your convenience. Free fitting services are available in select areas, along with a best price match guarantee across the UK.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1634672050277-16639332c727?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Bright kitchen with a large window over the sink looking out to trees",
    sideImage:
      "https://images.unsplash.com/photo-1653267407376-b3c133549fc4?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Kitchen window fitted with a roller blind above the sink",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Perfect Fit Kitchen Blinds", "for All Window Types and Sizes"],
    importanceBody: [
      "The accuracy of window treatments is crucial for their performance. Even a minor sizing or fitting error can significantly impact the operation of your window blinds. Advenco Window Blinds and Shutters in the UK now offers perfectly fitted kitchen blinds in the UK. Our high-quality window treatments are custom-made to your specifications and delivered in precise, made-to-measure sizes. We specialize in providing accurately sized window treatments with superior features.",
    ],
    benefits: [
      {
        icon: "award",
        title: "High-Quality Materials with Price Match Guarantee",
        body: "Advenco Window Blinds and Shutters is one of the most reliable window blinds service providers in the UK. Our premium kitchen blinds are crafted from the finest locally sourced materials. We ensure high-quality materials and durable, long-lasting window treatments, plus a best price match guarantee that ensures you receive the highest value for money.",
      },
      {
        icon: "wrench",
        title: "Free Fitting in Select Areas",
        body: "Are you tired of misaligned window blinds or unsightly nails and screws ruining your decor? We now offer free window measuring and blinds fitting services in select cities, ensuring your kitchen window blinds are perfectly fitted for excellent appearance and functionality.",
      },
      {
        icon: "sun",
        title: "Daylight Control & Temperature Insulation",
        body: "We offer daylight control with dimout or blackout blinds and temperature insulation with custom designs, making our window treatments ideal for any kitchen in the UK. Our quick turnaround time also makes our service perfect for kitchen renovation projects throughout the year.",
      },
      {
        icon: "sparkles",
        title: "Large Variety of Custom Textures, Styles and Materials",
        body: "Our extensive variety of custom designs, coverage styles, materials, and finest finishes ensures that your kitchen receives the window treatments it deserves. We provide customization options to suit all kitchen interior settings, with materials guaranteed for quality, fit, and finish.",
      },
      {
        icon: "shield",
        title: "Trusted UK Window Blinds Suppliers",
        body: "As trusted window blinds suppliers in the UK, we offer professional service from order through installation, with custom made-to-measure kitchen blinds available for all window sizes.",
      },
    ],
    differentiators: [
      {
        icon: "layers",
        title: "Roller Blinds for Kitchen",
        body: "Made with waterproof, flexible materials, our roller kitchen blinds come in perfect fit sizes with custom designs, colours, and finishes. Get yours now with free fitting or have them delivered to your doorstep at any time.",
      },
      {
        icon: "shield-check",
        title: "Metal Venetians for Kitchen",
        body: "Coated with waterproof finishes, our metal venetians are the ideal kitchen blinds in the UK. These are designed for longevity and ease of use, available in all colours and finishes.",
      },
      {
        icon: "award",
        title: "Wooden Kitchen Blinds",
        body: "For luxurious, high-end kitchens, our wooden blinds are the perfect choice. Crafted from authentic British woods, these window treatments are finished with water-resistant styles. All sizes and custom polished finishes are available at affordable prices.",
      },
      {
        icon: "sparkles",
        title: "Vertical Blinds for Kitchen",
        body: "Our customized vertical blinds, made with durable waterproof materials, are ideal for all kitchens. Available in all colours and finishes, our range of vertical kitchen blinds offers a unique and highly functional option.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1590880265945-6b43effeb599?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Sunlit kitchen windowsill with a small potted plant",
    closingHeading: "Enhance Your Kitchen with Blinds by Advenco",
    closingBody: [
      "Place your order today to have your kitchen window blinds in the UK delivered or fitted at your convenience. Order today and receive your perfectly fitted blinds for kitchen windows whenever you need them.",
      "Contact us now to learn more.",
    ],
  },

  "dining-room-window-blinds": {
    slug: "dining-room-window-blinds",
    metaTitle: "Dining Room Window Blinds | Elegant & Functional Designs | Advenco",
    metaDescription:
      "Elegant dining room blinds from Advenco Blinds and Shutters — faux wood, privacy wood, and roller options with free measuring and fitting across the UK.",
    badgeLabel: "Dining Room Window Solutions",
    heroHeadingLines: ["Dining Room Window", "Blinds in the UK"],
    heroBody: [
      "When decorating your home, the dining room deserves particular attention as it is where we gather for meals and create lasting memories with loved ones. An essential yet often overlooked element of dining room decor is window treatments. Elevating your dining space with thoughtfully chosen blinds can make a significant difference.",
      "Advenco Window Blinds and Shutters in the UK offers premium window blinds for dining rooms across the country, complete with free measuring and fitting services. Simply contact us, and we'll transform your dining room with beautiful, stylish blinds.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1696986296905-e631802befb0?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Bright dining room with tall windows overlooking a garden",
    sideImage:
      "https://images.unsplash.com/photo-1628985095652-cb94d4c263dc?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Elegant dining room window dressed with layered curtains",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Add Blinds to Your", "Dining Room Windows?"],
    importanceBody: [
      "Installing blinds in your dining room windows can greatly enhance the room's overall ambiance. Dining room window blinds in the UK provide numerous benefits, making them a valuable addition to any home in the UK. They offer superb control over the amount of natural light entering your dining space, allowing you to create a cozy, dimly lit atmosphere for intimate dinners or a bright, sunny room during the day.",
    ],
    benefits: [
      {
        icon: "eye",
        title: "Maintain Privacy",
        body: "Blinds ensure privacy for your family during meals and gatherings, without blocking out natural light entirely.",
      },
      {
        icon: "sparkles",
        title: "Variety",
        body: "Available in numerous designs, colours, and materials — from faux wood to roller blinds — to suit any dining room style.",
      },
      {
        icon: "wrench",
        title: "Low Maintenance",
        body: "Our dining room blinds are easier to clean compared to curtains and drapes, saving you time and effort.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Blinds help regulate room temperature effectively, keeping your dining room comfortable in every season.",
      },
    ],
    differentiators: [
      {
        icon: "users",
        title: "Free Measuring and Fitting",
        body: "Hassle-free service for precise and perfect installation, available across the UK.",
      },
      {
        icon: "layers",
        title: "Expert Advice",
        body: "Professional assistance to help you choose blinds that match your decor perfectly.",
      },
      {
        icon: "award",
        title: "UK Manufactured",
        body: "All our blinds come with a 12-month guarantee and are made in the UK.",
      },
      {
        icon: "pound",
        title: "Nationwide Delivery",
        body: "We provide affordable delivery services throughout the country.",
      },
    ],
    extraSections: [
      {
        heading: "How to Choose the Right Window Blinds for Your Dining Room",
        paragraphs: [
          "Selecting the appropriate dining room window blinds for your dining space involves considering several factors.",
          "Material — popular materials for dining room window blinds in the UK include faux wood, privacy wood, and roller blinds. Each material offers distinct advantages. At Advenco Window Blinds and Shutters, we provide high-quality faux wood blinds that mimic the elegance of real wood at a more budget-friendly price. Our roller dining room window blinds come in various colours and patterns, offering extensive customization options.",
          "Colour and Design — choose dining room window blinds that complement your dining room's decor. We offer a range of neutral tones like white, beige, and gray, which are timeless choices suitable for any decor theme. For those looking to add a splash of colour, we also provide blinds with patterns that can enhance your dining room's aesthetic.",
          "Measurements — accurate measurements are crucial for ensuring your dining room window blinds fit perfectly. If you're uncertain about how to measure or install your blinds, simply contact us. We offer free measuring and fitting services throughout the UK, saving you the hassle and ensuring a perfect fit.",
        ],
      },
      {
        heading: "Free Measuring and Fitting Services",
        paragraphs: [
          "To enhance your dining room with exquisite window blinds, the first step is to get precise measurements and professional installation. Advenco Window Blinds and Shutters offers free measuring and fitting services across the UK, making the process seamless and convenient. Schedule an appointment, and our expert team will visit your home to take measurements. You can choose a convenient time for both the measuring and fitting, ensuring your blinds fit perfectly and enhance the beauty of your dining room.",
        ],
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1618326442388-19f430961020?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Modern dining room with black dining table beneath large windows",
    closingHeading: "Transform Your Dining Room with Advenco",
    closingBody: [
      "Advenco Window Blinds and Shutters is a trusted name in the UK for high-quality blinds and exceptional customer service. With a wide selection of blinds, including faux wood, privacy wood, and roller blinds, we offer ideal solutions to elevate your dining room's decor.",
      "Contact us today to transform your dining room with stylish and functional window blinds.",
    ],
  },

  "living-room-blinds": {
    slug: "living-room-blinds",
    metaTitle: "Living Room Blinds | Stylish & Functional Window Coverings | Advenco",
    metaDescription:
      "Elevate your living space with stylish living room blinds from Advenco Blinds and Shutters — vertical, Venetian, Roman, pleated, roller, and plantation shutter options.",
    badgeLabel: "Living Room Window Solutions",
    heroHeadingLines: ["Living Room", "Blinds in the UK"],
    heroBody: [
      "The living room is the heart of the home, a space for relaxation, entertaining, and creating lasting memories. But even the most beautiful living room can feel incomplete without the perfect window treatments. Living room window blinds in the UK offer a unique combination of style and functionality, making them a popular choice for homeowners in the UK.",
      "Advenco Window Blinds and Shutters, a leading UK provider of high-quality window blinds, is here to help you find the perfect blinds for your living room. We're passionate about helping you find the perfect blinds for your living room.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1656122381069-9ec666d95cf1?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Bright living room with vaulted ceiling and plantation shutters",
    sideImage:
      "https://images.unsplash.com/photo-1631048501831-46856f9eaaf2?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Living room sectional sofa beneath large windows fitted with blinds",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Benefits of Living Room", "Window Blinds"],
    importanceBody: [
      "Living room blinds are essential window treatments that combine aesthetic appeal with practical functionality. Here's how our blinds benefit every living space:",
    ],
    benefits: [
      {
        icon: "sun",
        title: "Light Control",
        body: "Manage the amount of natural light entering your living room. Blinds allow you to create a bright and airy atmosphere during the day and a cozy ambience in the evenings.",
      },
      {
        icon: "eye",
        title: "Privacy",
        body: "Enjoy peace of mind with the ability to adjust privacy levels. Blinds offer varying degrees of opacity, allowing you to control who can see into your living room.",
      },
      {
        icon: "sparkles",
        title: "Style",
        body: "Enhance your living room's aesthetics. Blinds come in a wide range of materials, colours, and styles to complement any décor.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Certain blinds can help insulate your home, keeping it cooler in the summer and warmer in the winter, potentially reducing energy bills.",
      },
      {
        icon: "wrench",
        title: "Easy Maintenance",
        body: "Blinds are generally easy to clean and maintain, requiring minimal upkeep.",
      },
    ],
    differentiators: [
      {
        icon: "sparkles",
        title: "Wide Selection",
        body: "We offer a vast range of blinds and shutters in various styles, materials, and colours to suit any taste and budget — including Vertical, Venetian, Roman, Pleated, Roller blinds, and Plantation Shutters.",
      },
      {
        icon: "layers",
        title: "Made-to-Measure",
        body: "Our blinds are custom-made to ensure a perfect fit for your windows.",
      },
      {
        icon: "users",
        title: "Expert Advice",
        body: "Our knowledgeable team can help you choose the right blinds for your needs and preferences.",
      },
      {
        icon: "award",
        title: "High-Quality Materials",
        body: "We use only the finest materials to ensure your blinds are durable and long-lasting.",
      },
    ],
    extraSections: [
      {
        heading: "Popular Types of Living Room Window Blinds",
        paragraphs: [
          "Vertical Blinds — ideal for patio doors and large windows, offering a sleek and modern look.",
          "Venetian Blinds — a classic choice, providing excellent light control and privacy with their tilting slats.",
          "Roman Blinds — create a soft, elegant look with their fabric panels that fold upwards when opened.",
          "Pleated Blinds — similar to Roman blinds, but with a more tailored appearance due to their crisp pleats.",
          "Roller Blinds — a simple and affordable option, offering a clean and contemporary aesthetic.",
          "Plantation Shutters — add a touch of sophistication and timeless style to your living room, while providing excellent insulation and noise reduction.",
        ],
      },
      {
        heading: "Choosing the Right Living Room Window Blinds",
        paragraphs: [
          "Consider the size and shape of your windows. Think about the amount of light control and privacy you desire. Choose a material and style that complements your living room's décor. Factor in your budget.",
        ],
      },
      {
        heading: "Stunning Designs and Attractive Finishes",
        paragraphs: [
          "Living room windows should exude style, color, and elegance. Advenco Blinds in UK provides brilliantly stylish living room window blinds. Discover eye-catching designs combined with premium materials for your window treatment needs. Our living room window blinds are not only durable but also make a striking design statement.",
          "Choose from a variety of textures, materials, and finishes for versatile window treatments. Enhance your living room with features like dimout, blackout, and privacy, all tailored to fit your windows perfectly. Expertly crafted, perfectly fitting living room blinds are available anytime, with fast delivery throughout the UK whenever needed, and free window measuring and blinds fitting in selected areas.",
        ],
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1771924648531-94af2b79dc96?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Living room armchair beside a window dressed with sheer curtains",
    closingHeading: "Complete Your Living Room with Advenco",
    closingBody: [
      "Advenco Window Blinds and Shutters offers a wide selection of high-quality living room window blinds in the UK. Visit our website or showroom to browse our collection and find the perfect blinds to elevate your living space.",
      "Our made-to-measure blinds ensure a perfect fit for your windows, backed by expert advice and only the finest, most durable materials.",
    ],
  },

  "office-window-blinds": {
    slug: "office-window-blinds",
    metaTitle: "Office Window Blinds | Professional & Functional Designs | Advenco",
    metaDescription:
      "Professional-grade office blinds from Advenco Blinds and Shutters — wood, metal, fabric, integral, and motorised options with made-to-measure precision fit.",
    badgeLabel: "Office Window Solutions",
    heroHeadingLines: ["Office Window", "Blinds in the UK"],
    heroBody: [
      "Workspaces and offices require specific attention when it comes to window treatments. Advenco Window Blinds and Shutters in the UK now provides professional-grade office blinds to meet any requirement. Our custom office blinds in the UK are delivered in precise fit sizes with made-to-measure fittings.",
      "In select cities, we offer free window measuring and blinds fitting services for offices across the country. We guarantee the highest quality materials and offer a wide range of design and customization options. You can have your office blinds in the UK delivered to your doorstep whenever you need them.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1519575706483-221027bfbb31?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Bright home office corner with large sash windows",
    sideImage:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Minimalist office desk positioned beside a window",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Made-to-Measure Perfect Fit", "Office Blinds"],
    importanceBody: [
      "Need precise fit office blinds in the UK? Office windows come in various sizes, dimensions, and layouts. Even minor size variations can significantly affect the fit of close in-frame blinds. Our office blinds are now available in perfect fit sizes to enhance the beauty of your workspace windows, with dimout, blackout, privacy, and temperature insulation features.",
    ],
    benefits: [
      {
        icon: "sun",
        title: "Quality Materials and Fast Shipping",
        body: "Our office blinds are available in perfect fit sizes and are crafted from the finest materials. Whether you choose wooden, metallic, or fabric blinds, you can trust in their superior quality. We also offer fast shipping across the UK, so you can order your office window treatments anytime and have them delivered in time for your next office renovation.",
      },
      {
        icon: "eye",
        title: "Privacy for Meetings",
        body: "Control daylight with our light management features and enjoy privacy for meetings whenever needed, with our office blinds available in various shapes, sizes, custom finishes, and styles.",
      },
      {
        icon: "leaf",
        title: "Temperature Insulation",
        body: "Our perfect fit office blinds come with features such as dimout, blackout, privacy, and temperature insulation, keeping your workspace comfortable throughout the year.",
      },
      {
        icon: "wrench",
        title: "Free Fitting Service",
        body: "Frustrated with office blinds that don't fully close or have uneven edges? We offer free office blinds fitting services in select cities. Our expert professionals will bring your office blinds to your location and provide free fitting with meticulous attention to detail, subject to location and availability.",
      },
      {
        icon: "sparkles",
        title: "Unique Styles, Materials, and Customization",
        body: "We offer stylish office blinds at affordable prices in all sizes. Our customization options include various materials, styles, finishes, and designs, plus a range of vibrant colours to perfectly match your office interior.",
      },
    ],
    differentiators: [
      {
        icon: "pound",
        title: "Affordable Pricing",
        body: "Affordable window blinds for offices in the UK available anytime.",
      },
      {
        icon: "users",
        title: "Free Fitting Appointments",
        body: "Free fitting appointments, subject to availability.",
      },
      {
        icon: "shield-check",
        title: "100% Accurate Fit",
        body: "100% accurate perfect fit office blinds, every time.",
      },
      {
        icon: "award",
        title: "Fast Shipping & Quality Finishes",
        body: "Fast shipping with quality finishes on every order.",
      },
      {
        icon: "layers",
        title: "Detailed Customization",
        body: "Customize your office window blinds with great attention to detail.",
      },
    ],
    extraSections: [
      {
        heading: "Our Office Window Treatments Include",
        paragraphs: [
          "Wood Blinds for Office — crafted from natural British woods for beautiful wooden blinds.",
          "Roller Office Blinds — made-to-measure roller blinds available in various designs and textures.",
          "Metal Venetians — enhance your windows with metal office blinds available in different colours and sizes.",
          "Roman Blinds for Office — ideal for fabric lovers, our Roman blinds fit perfectly in office settings.",
          "Integral Blinds — magnetic operation with temperature-insulating integral blinds.",
          "Motorized Blinds — increase energy efficiency with our motorized office blinds.",
        ],
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Office desk with computer monitor positioned beside a large window",
    closingHeading: "Fit Out Your Workspace with Advenco",
    closingBody: [
      "Advenco Window Blinds and Shutters is a trusted supplier of window blinds in the UK, with decades of experience in the local market. We use locally sourced quality materials designed to last, ensuring your windows look great and function perfectly. Our office window blinds are custom-made to fit precisely.",
      "Contact us today at Advenco Window Blinds and Shutters — whether you need advice on choosing the right office blinds in the UK or want to schedule a free consultation, our friendly team is here to help.",
    ],
  },
};

export type BlindsByRoomSlug = keyof typeof blindsByRoomPages;
