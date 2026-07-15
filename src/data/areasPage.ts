/**
 * Areas Page — Content
 *
 * Data for the "/areas/" page. Town list is copied verbatim, in the exact
 * order it appears, from the source WordPress page. The source page has
 * no unique hero photograph, so a real shutter photo already used
 * elsewhere on the site is reused for the hero background per instruction.
 */

const WP = "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/11";

export const areasHero = {
  badgeLabel: "Areas We Cover",
  heading: "Advenco",
  subheading: "Coverage Areas",
  body: "From Leeds and Yorkshire to London and the Home Counties, our expert measuring and fitting teams cover towns and cities across the UK.",
  image: `${WP}/steptodown.com560336-768x512.webp`,
  imageAlt: "Dark exterior shutters fitted to a modern apartment balcony",
};

export const areasIntro = "Advenco - We covered following Areas";

export const areasList: string[] = [
  "Armthorpe", "Ashton Under Lyne", "Aldershot", "Auckley", "Adwick le Street",
  "Barlborough", "Aylesbury", "Basingstoke", "Batley", "Bolton", "Bracknell",
  "Barnsley", "Bramley", "Bradford", "Brinsworth", "Brentford", "Brighouse",
  "Bury", "Burngreave", "Cleckheaton", "Castleford", "Crawley", "Chesterfield",
  "Conisbrough", "Crowthorne", "Crystal Peaks", "Cudworth", "Derbyshire",
  "Dewsbury", "Doncaster", "Dodworth", "Dronfield", "Earley", "Edenthorpe",
  "Farnborough", "Feltham", "Farnham", "Guildford", "Garforth", "Halifax",
  "Guiseley", "Hamilton", "Harrogate", "Hayes", "Heckmondwike", "Hemsworth",
  "Hemel Hempstead", "Holmfirth", "High Wycombe", "Horsforth", "Horley",
  "Harrow", "Horsham", "Hoyland", "Hounslow", "Huddersfield", "Hull",
  "Knaresborough", "Leeds", "Knottingley", "Kingston upon Thames", "London",
  "Luton", "Marlow", "Maidenhead", "Manchester", "Mirfield", "Normanton",
  "Morley", "Oldham", "Otley", "Paisley", "Penistone", "Parkgate", "Pudsey",
  "Pontefract", "Rawcliffe", "Reading", "Rochdale", "Richmond", "Rotherham",
  "Rothwell", "Sheffield", "Selby", "Slough", "Sonning", "South Elmsall",
  "Southhall", "Sportborough", "St Albans", "Staines upon Thames", "Stretford",
  "Stocksbridge", "Tadcaster", "Theale", "Wadsley bridge", "Twickenham",
  "Tingley", "Wakefield", "Walton upon Thames", "Warrington", "Wembley",
  "Watford", "Whetherby", "Woking", "Windsor", "Wokingham", "Woodlands",
  "Yeadon", "Woodley", "York",
];

export const areasMeta = {
  metaTitle: "Areas We Cover | Advenco Blinds and Shutters",
  metaDescription:
    "Advenco Blinds and Shutters covers towns and cities across Yorkshire, London, and the Home Counties — find out if we cover your area.",
};
