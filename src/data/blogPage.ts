/**
 * Blog Listing Page — Content
 *
 * Data for the "/blog/" page. Post titles, excerpts, categories, and
 * featured images are copied verbatim from the WordPress site's blog
 * listing (advencoblindsandshutters.co.uk/blog/) — real images hosted on
 * the source site, not stock substitutes.
 */

const WP = "https://advencoblindsandshutters.co.uk/wp-content/uploads";

export interface BlogPost {
  title: string;
  /** URL slug — matches the real WordPress post slug, used for "/blog/<slug>/" detail pages. */
  slug: string;
  excerpt: string;
  category?: string;
  image: string;
  imageAlt: string;
}

export const blogHero = {
  badgeLabel: "Advenco Blog",
  heading: "The Advenco",
  subheading: "Journal",
  body: "Ideas, guides, and inspiration for dressing your windows — from choosing the right blinds and shutters to seasonal care and the latest trends across the UK.",
  image: `${WP}/2025/09/advenco-sep-blog.jpg`,
  imageAlt: "Cozy living room with white plantation shutters open to a snowy garden",
};

export const blogPosts: BlogPost[] = [
  {
    title: "Elegant Bay Window Shutters to Brighten Your Home",
    slug: "elegant-bay-window-shutters-to-brighten-your-home",
    excerpt:
      "There's something about bay windows that instantly adds charm to a home. They invite more natural light, create extra space, and give a room that timeless, elegant look. But here's...",
    category: "Blinds",
    image: `${WP}/2025/09/unnamed-2.png`,
    imageAlt: "Elegant bay window fitted with shutters",
  },
  {
    title: "Window Shutters for All Seasons: Summer & Winter Benefits",
    slug: "window-shutters-for-all-seasons-summer-winter-benefits",
    excerpt:
      "If there's one home feature that truly works year-round, it's window shutters. In the UK, we're no strangers to unpredictable weather. Some days the sun is blazing, other days it...",
    category: "Shutters",
    image: `${WP}/2025/09/advenco-sep-blog.jpg`,
    imageAlt: "Living room with plantation shutters open to a snowy garden",
  },
  {
    title: "Add Blind Screens to Your Bay Windows for Extra Privacy",
    slug: "add-blind-screens-to-your-bay-windows-for-extra-privacy",
    excerpt:
      "Bay windows are a beautiful feature in any UK home. They let in more natural light, open up your space, and create a cosy nook perfect for reading, relaxing, or...",
    image: `${WP}/2025/09/unnamed-3.jpg`,
    imageAlt: "Bay window fitted with a blind screen",
  },
  {
    title: "The Little Upgrade That Transforms Your Living Room",
    slug: "the-little-upgrade-that-transforms-your-living-room",
    excerpt:
      "When it comes to styling your living room, sometimes it's not about big, expensive makeovers. It's often the little upgrades that make the biggest difference. One of those surprisingly powerful...",
    category: "Blinds & Shutters",
    image: `${WP}/2025/08/unnamed-1.jpg`,
    imageAlt: "Living room styled with new window blinds",
  },
  {
    title: "Top Living Room Blind Styles for UK Homes",
    slug: "top-living-room-blind-styles-for-uk-homes",
    excerpt:
      "Hey interior-lovers! If you're on a mission to bring stylish comfort into your living room, you've landed in the right place. We're Advenco Blinds & Shutters, proudly UK-based, specialising in...",
    category: "Blinds",
    image: `${WP}/2025/08/advenco-blog-aug-1.webp`,
    imageAlt: "Living room window fitted with a sheer Roman blind",
  },
  {
    title: "Best Bedroom Window Blinds for a Cozy and Stylish Look",
    slug: "best-bedroom-window-blinds-for-a-cozy-and-stylish-look",
    excerpt:
      "Hey there, interior enthusiasts! If you've been hunting for the perfect bedroom window blinds, welcome home. Whether you're chasing that snug, stylish vibe or simply trying to block out the...",
    image: `${WP}/2025/08/advenco-blog-aug-2.webp`,
    imageAlt: "Bedroom window fitted with cosy blinds",
  },
  {
    title: "Top 5 Benefits of Installing Perfect Fit Blinds in Your Home",
    slug: "top-5-benefits-of-installing-perfect-fit-blinds-in-your-home",
    excerpt:
      "When it comes to updating your windows, it's easy to get lost in a sea of choices but if you're looking for a sleek, smart, and hassle-free solution, perfect fit...",
    category: "Blinds & Shutters",
    image: `${WP}/2025/07/july-blog-image-4.webp`,
    imageAlt: "Perfect Fit blinds installed in a modern home",
  },
  {
    title: "The Ultimate Guide to Buying Window Shutters in the UK",
    slug: "the-ultimate-guide-to-buying-window-shutters-in-the-uk",
    excerpt:
      "Thinking of upgrading your home with window shutters but not sure where to begin? You're in the right place. Whether you're leaning towards a classic wood window shutter, considering modern...",
    category: "Blinds & Shutters",
    image: `${WP}/2025/07/july-blog-image-3.jpg`,
    imageAlt: "Classic wood window shutters in a bright room",
  },
  {
    title: "Perfect Fit Roller Blinds for Every Space",
    slug: "perfect-fit-roller-blinds-for-every-space",
    excerpt:
      "Looking for roller blinds that slide in like they were born for your window? Say hello to perfect fit blinds. These sleek, frame-mounted roller blinds snap into place inside your...",
    image: `${WP}/2025/05/Benefits-of-Shutters.webp`,
    imageAlt: "Perfect Fit roller blinds installed in a window frame",
  },
  {
    title: "Top 5 Window Blinds Trends in the UK for 2025: A Look Ahead with Advenco Blinds",
    slug: "top-5-window-blinds-trends-in-the-uk-for-2025-a-look-ahead-with-advenco-blinds",
    excerpt:
      "Although window blinds are sometimes overlooked in terms of home décor, they can drastically change the atmosphere of a room. For window blinds trends, 2025 looks to be an interesting...",
    category: "Blinds",
    image: `${WP}/2025/05/Window-Blinds-Trends-UK.webp`,
    imageAlt: "Stylish window blinds representing 2025 trends",
  },
  {
    title: "Blinds vs Shutters: Which is Best for Your Windows?",
    slug: "blinds-vs-shutters-which-is-best-for-your-windows",
    excerpt:
      "When it comes to choosing the perfect window covering for your home, two of the most popular options are blinds and shutters. Both have their own unique features, and making...",
    category: "Blinds & Shutters",
    image: `${WP}/2025/05/Blinds-vs-Shutters.webp`,
    imageAlt: "Side-by-side comparison of blinds and shutters",
  },
  {
    title: "The Benefits of Installing Shutters in Your UK Home",
    slug: "the-benefits-of-installing-shutters-in-your-uk-home",
    excerpt:
      "When it comes to enhancing your home's style, comfort, and functionality, few things achieve this better than shutters. Whether you're considering plantation shutters to modernize your living room or classic...",
    category: "Shutters",
    image: `${WP}/2025/05/Benefits-of-Shutters.webp`,
    imageAlt: "Plantation shutters installed in a modern living room",
  },
  {
    title: "Best Blinds for Privacy Without Blocking Natural Light",
    slug: "best-blinds-for-privacy-without-blocking-natural-light",
    excerpt:
      "One of the toughest problems in interior design is striking the ideal mix between natural light and privacy. Although heavy drapes or blackout blinds guarantee privacy, they often leave rooms...",
    category: "Blinds",
    image: `${WP}/2025/05/Blinds-for-Privacy.webp`,
    imageAlt: "Sheer blinds providing privacy without blocking light",
  },
  {
    title: "Choosing the Right Window Shutters for Every Room in Your House",
    slug: "choosing-the-right-window-shutters-for-every-room-in-your-house",
    excerpt:
      "Few things can compare to the impact of window shutters when it comes to giving your interiors a dash of classic elegance and functionality. They...",
    category: "Shutters",
    image: `${WP}/2025/04/Window-Shutters.webp`,
    imageAlt: "Window shutters fitted across different rooms of a house",
  },
  {
    title: "A Complete Guide to Shutters: Styles, Materials, and Benefits",
    slug: "a-complete-guide-to-shutters-styles-materials-and-benefits",
    excerpt:
      "Few solutions are as classic and practical as window shutters when it comes to improving the appearance, seclusion, and energy efficiency of your house. These...",
    category: "Shutters",
    image: `${WP}/2025/04/ChatGPT-Image-Apr-21-2025-05_07_17-PM.png`,
    imageAlt: "Guide illustration of shutter styles and materials",
  },
  {
    title: "How to Choose the Right Blinds & Shutters – A Complete Guide by Advenco Blinds",
    slug: "how-to-choose-the-right-blinds-shutters-a-complete-guide-by-advenco-blinds",
    excerpt:
      "Selecting the correct blinds and shutters is rather important when trying to improve the appearance and utility of your house. They not only bring privacy and style but also management...",
    category: "Blinds & Shutters",
    image: `${WP}/2025/03/Right-Blinds-Shutters-%E2%80%93-A-Complete-Guide-by-Advenco-Blinds.jpg`,
    imageAlt: "Guide to choosing the right blinds and shutters",
  },
  {
    title: "Best Shutters for Windows in the UK – Top Picks by Advenco Blinds",
    slug: "best-shutters-for-windows-in-the-uk-top-picks-by-advenco-blinds",
    excerpt:
      "Regarding improving the insulation, security, and appearance of your house, shutters for windows UK are a great option. There are lots of choices to fit every requirement and budget whether...",
    category: "Shutters",
    image: `${WP}/2025/03/Best-Shutters-for-Windows-in-the-UK-%E2%80%93-Top-Picks-by-Advenco-Blinds.jpg`,
    imageAlt: "Top shutter picks for UK windows",
  },
];
