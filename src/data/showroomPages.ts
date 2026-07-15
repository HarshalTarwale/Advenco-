/**
 * Showroom Pages — Content
 *
 * Data for the "/advenco-blinds-and-shutters-showroom-in-morley/" and
 * "/maidenhead-showroom/" pages. Content is copied verbatim from the
 * source WordPress pages. Both pages share the same section shape
 * (intro, numbered "why choose" list, product-collection subsections,
 * "why visit"/closing subsections, address block) so they're rendered
 * through the shared ShowroomPage component.
 */

const WP = "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/11";

export interface ShowroomSubsection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ShowroomPageContent {
  badgeLabel: string;
  heroHeading: string;
  heroSubheading: string;
  heroBody: string;
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;

  intro: string;

  whyChooseHeading: string;
  whyChooseIntro?: string;
  whyChoosePoints: { title: string; body: string }[];

  /** e.g. "What to Expect in Our Showroom" / product-range subsections */
  collectionHeading: string;
  collectionIntro?: string;
  collectionSections: ShowroomSubsection[];

  /** e.g. "Why Visit Our Showroom" / closing subsections */
  visitHeading: string;
  visitIntro?: string;
  visitSections: ShowroomSubsection[];

  /** Optional free-standing closing paragraphs (Maidenhead has these; Morley doesn't) */
  closingParagraphs?: string[];

  /** "How to Find Us" address block */
  findUsHeading: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
}

export const morleyShowroom: ShowroomPageContent = {
  badgeLabel: "Morley Showroom",
  heroHeading: "Advenco Showroom",
  heroSubheading: "in Morley, Leeds",
  heroBody:
    "Welcome to Advenco Blinds and Shutters, where exceptional quality meets unparalleled service! Located in the heart of Morley, Leeds, our showroom is your ultimate destination for premium blinds, shutters, and window treatments that cater to every style and budget.",
  heroImage: `${WP}/steptodown.com270369-768x576.webp`,
  heroImageAlt: "Motorized blind example on display",
  metaTitle: "Morley Showroom | Advenco Blinds and Shutters",
  metaDescription:
    "Visit the Advenco Blinds and Shutters showroom in Morley, Leeds — premium blinds, shutters, and window treatments for every style and budget.",

  intro:
    "Whether you're looking to revamp your home, office, or any space, we have something perfect just for you.",

  whyChooseHeading: "Why Choose Advenco Blinds and Shutters?",
  whyChooseIntro:
    "At Advenco Blinds and Shutters, we pride ourselves on delivering top-notch products and exceptional customer service. Here's what makes us stand out:",
  whyChoosePoints: [
    {
      title: "Wide Range of Products",
      body: "From contemporary roller blinds to classic wooden shutters, our showroom boasts a diverse selection of window treatments. We cater to various tastes, ensuring you find the perfect fit for your interior.",
    },
    {
      title: "Expert Advice",
      body: "Our experienced team is here to provide personalized recommendations. We understand that choosing the right blinds or shutters can be overwhelming, and we're here to make the process seamless and enjoyable.",
    },
    {
      title: "Quality Craftsmanship",
      body: "We offer only the best in quality. Our blinds and shutters are crafted from premium materials, ensuring durability and style that lasts.",
    },
    {
      title: "Competitive Pricing",
      body: "Quality doesn't have to come at a high cost. We offer competitive prices without compromising on the excellence of our products.",
    },
    {
      title: "Local and Convenient",
      body: "Located in Morley, Leeds, our showroom is easily accessible for residents of Leeds and the surrounding areas. Come visit us and explore our vast collection in person!",
    },
  ],

  collectionHeading: "What to Expect in Our Showroom",
  collectionSections: [
    {
      heading: "A Diverse Selection of Blinds",
      body: "Our showroom features an extensive range of blinds, including:",
      bullets: [
        "Roller Blinds: Perfect for any room, these versatile blinds come in various colors, patterns, and fabrics.",
        "Vertical Blinds: Ideal for larger windows and sliding doors, providing excellent light control and privacy.",
        "Venetian Blinds: Classic and elegant, available in wood, aluminum, and faux wood options.",
        "Roman Blinds: Add a touch of luxury with soft, foldable fabric blinds that offer a timeless appeal.",
      ],
    },
    {
      heading: "Elegant Shutters for Every Space",
      body: "Explore our exquisite collection of shutters, designed to enhance the beauty and functionality of any space:",
      bullets: [
        "Plantation Shutters: These popular shutters are perfect for adding a touch of elegance to your home, offering great light control and privacy.",
        "Cafe Style Shutters: Ideal for kitchens and bathrooms, these shutters cover only the lower portion of your windows, providing privacy without sacrificing natural light.",
        "Full Height Shutters: A sophisticated choice for any room, providing complete coverage and a sleek look.",
      ],
    },
    {
      heading: "Motorized Options for Modern Living",
      body: "Experience the convenience of motorized blinds and shutters. With the touch of a button or a simple voice command, you can effortlessly adjust your window treatments. Visit our showroom to see our motorized options in action!",
    },
  ],

  visitHeading: "Why Visit Our Showroom in Morley?",
  visitSections: [
    {
      heading: "Experience Products First-Hand",
      body: "Seeing is believing. Visit our showroom to see, touch, and operate our blinds and shutters. Experience the quality and craftsmanship up close and personal, making your decision-making process easier and more informed.",
    },
    {
      heading: "Customized Solutions",
      body: "Every window is unique, and we understand that one size doesn't fit all. Our team offers tailored solutions to meet your specific needs, ensuring your new blinds or shutters fit perfectly and complement your decor beautifully.",
    },
    {
      heading: "Friendly and Professional Service",
      body: "At Advenco Blinds and Shutters, we believe in creating a warm and welcoming environment. Our friendly staff are here to assist you every step of the way, from selection to installation.",
    },
    {
      heading: "Convenient Location and Ample Parking",
      body: "Our showroom is conveniently located in Morley, with ample parking available. Whether you're in Leeds or the surrounding areas, visiting us is hassle-free.",
    },
  ],

  findUsHeading: "How to Find Us",
  address: "57 Queen Street, Morley, Leeds, England, LS27 8EB",
  hours: "Monday – Saturday: 9am-5pm",
  phone: "0113 873 0738",
  email: "info@advencoblindsandshutter.co.uk",
};

export const maidenheadShowroom: ShowroomPageContent = {
  badgeLabel: "Maidenhead Showroom",
  heroHeading: "Advenco Showroom",
  heroSubheading: "in Maidenhead",
  heroBody:
    "When it comes to transforming your home or office with elegant and functional window treatments, Advenco window blinds and shutters in Maidenhead offer the perfect solution — combining beauty, durability, and practicality.",
  heroImage: `${WP}/steptodown.com270369-768x576.webp`,
  heroImageAlt: "Maidenhead showroom window treatment example",
  metaTitle: "Maidenhead Showroom | Advenco Blinds and Shutters",
  metaDescription:
    "Visit the Advenco showroom in Maidenhead — premium window blinds and shutters combining beauty, durability, and practicality for homes and offices.",

  intro:
    "Whether you are looking to enhance your interiors with sleek, modern designs or traditional, timeless styles, Advenco has something to suit every taste and need. Located in the heart of Maidenhead, London, Advenco's showroom is the go-to destination for top-quality window blinds and shutters that combine beauty, durability, and practicality. In this blog, we will explore what makes Advenco window blinds and shutters in Maidenhead stand out from the competition, and why they should be your first choice for all your window treatment needs.",

  whyChooseHeading: "A Trusted Name in Window Blinds and Shutters in Maidenhead",
  whyChooseIntro:
    "Advenco has been a trusted name in the window blinds and shutters industry for many years. With an impressive reputation for providing high-quality, custom-made products, the company has earned the trust of homeowners, businesses, and interior designers alike. Whether you are renovating your home, designing a new space, or upgrading your office décor, Advenco window blinds and shutters in Maidenhead offer the perfect combination of style, function, and affordability.\n\nAt the Advenco showroom in Maidenhead, you can see firsthand the wide range of window treatments available, including:",
  whyChoosePoints: [
    {
      title: "Window Blinds",
      body: "From Venetian and roller blinds to vertical and Roman blinds, Advenco offers a variety of styles that allow you to control light, privacy, and temperature in your space.",
    },
    {
      title: "Window Shutters",
      body: "The elegant and classic look of shutters can complement any home or office décor. Advenco provides both interior and exterior shutters, available in a range of finishes to suit every taste.",
    },
    {
      title: "Custom Solutions",
      body: "Advenco offers bespoke window treatments tailored to fit your specific needs. Whether you have uniquely shaped windows or a particular colour scheme in mind, their expert team can help create the ideal solution for you.",
    },
  ],

  collectionHeading: "Why Choose Advenco Window Blinds and Shutters in Maidenhead?",
  collectionIntro:
    "When it comes to selecting window treatments, there are numerous options to choose from. However, Advenco stands out for several reasons:",
  collectionSections: [
    {
      heading: "1. Quality Craftsmanship",
      body: "One of the key benefits of choosing Advenco window blinds and shutters in Maidenhead is their dedication to quality craftsmanship. The company uses only the finest materials to ensure durability, aesthetic appeal, and functionality. Whether you opt for sleek roller blinds or classic wooden shutters, you can rest assured that your window treatments will stand the test of time.",
    },
    {
      heading: "2. Expert Installation Services",
      body: "Advenco does not just sell high-quality window blinds and shutters; they also offer expert installation services. Their team of professionals ensures that each product is installed perfectly, with attention to detail and precision. With Advenco, you can enjoy hassle-free installation, leaving you free to enjoy your new window treatments without worry.",
    },
    {
      heading: "3. Personalized Consultation",
      body: "At the Advenco showroom in Maidenhead, you will find a team of knowledgeable and friendly experts ready to guide you through the selection process. They offer personalized consultations to help you choose the right style, material, and colour to suit your space. Whether you're looking for Advenco window blinds for your living room or Advenco shutters for your office, they will assist you in finding the ideal product to complement your décor and meet your functional needs.",
    },
    {
      heading: "4. Wide Range of Styles and Designs",
      body: "Advenco prides itself on offering a broad selection of window blinds and shutters. Their collection includes:",
      bullets: [
        "Venetian Blinds: These classic blinds are perfect for controlling light and privacy. With adjustable slats, they provide excellent light filtering, allowing you to create the ideal atmosphere in any room.",
        "Roller Blinds: For a sleek, minimalist look, roller blinds are an excellent choice. They are available in a range of fabrics, including blackout and thermal options, ideal for both residential and commercial properties.",
        "Roman Blinds: These elegant window treatments provide a soft, sophisticated look. Roman blinds are available in various fabrics, allowing you to add a touch of luxury to your windows.",
        "Shutters: Advenco offers a wide variety of shutters, including plantation shutters and solid panel shutters. These timeless pieces not only add beauty to your windows but also provide excellent insulation, helping to reduce energy costs.",
      ],
    },
    {
      heading: "5. Energy Efficiency",
      body: "Advenco window blinds and shutters in Maidenhead are designed to offer more than just style. They also contribute to the energy efficiency of your home or office. Whether you choose blinds that help regulate temperature or shutters that block out drafts, Advenco products can help maintain a comfortable temperature indoors year-round. This can ultimately lead to savings on your heating and cooling bills.",
    },
    {
      heading: "6. Competitive Pricing",
      body: "Advenco offers competitive pricing without compromising on quality. Their range of window blinds and shutters in Maidenhead caters to various budgets, ensuring that you can find the perfect solution that fits both your style and financial preferences. Whether you're looking for budget-friendly options or high-end bespoke designs, Advenco has you covered.",
    },
  ],

  visitHeading: "Visit the Advenco Showroom in Maidenhead",
  visitSections: [
    {
      heading: "Visit the Advenco Showroom in Maidenhead",
      body: "If you're ready to elevate your home or office with stylish and functional window treatments, a visit to the Advenco showroom in Maidenhead is a must. The showroom provides an excellent opportunity to explore their full range of products in person, allowing you to touch, feel, and compare different materials and designs. You can also take advantage of the expert advice from the Advenco team, who will help you find the perfect solution for your space. Whether you have a specific idea in mind or need guidance on selecting the best window treatments for your home, Advenco is there to assist. Their showroom is conveniently located in Maidenhead, London, making it easy for residents of Maidenhead, Windsor, Slough, and surrounding areas to visit.",
    },
    {
      heading: "Why Maidenhead Residents Trust Advenco",
      body: "Advenco has become a trusted name in Maidenhead and beyond due to their commitment to excellence. With years of experience in the industry, the company has built a loyal customer base that returns time and time again for top-quality window treatments. Their dedication to providing personalized service, expert advice, and the finest craftsmanship has earned them a reputation as the best choice for window blinds and shutters in Maidenhead.",
    },
  ],

  closingParagraphs: [
    "Advenco window blinds and shutters in Maidenhead offer a wide range of products that combine style, function, and quality. From their custom-made window blinds and shutters to their professional installation services, Advenco ensures that your window treatment needs are met with the highest standards. Visit the Advenco showroom in Maidenhead today and experience for yourself the exceptional quality and service that sets them apart. Whether you're upgrading your home, office, or commercial space, Advenco is the trusted name for all your window treatment solutions.",
  ],

  findUsHeading: "Visit Our Maidenhead Showroom",
  address: "28 Kings Street, Maidenhead SL6 1EF",
  hours: "Monday – Saturday: 9am-5pm",
  phone: "0800 054 1880",
  email: "info@advencoblindsandshutters.co.uk",
};
