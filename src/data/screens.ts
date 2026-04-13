export type Category = "hair-scalp" | "treatments" | "lifestyle" | "preferences";

export type Option = {
  label: string;
  subcopy?: string;
  group?: string;
  image?: string;
};

export type QuestionScreen = {
  type: "question";
  slug: string;
  category: Category;
  heading: string;
  instruction?: string;
  tipTitle?: string;
  selectionType: "single" | "multi";
  /** "fixed" = full width, "hug" = wrap content. Defaults to "fixed" */
  selectorSize?: "fixed" | "hug";
  options: Option[];
};

export type PlaceholderScreen = {
  type: "placeholder";
  slug: string;
  category: Category;
  title: string;
  subtitle?: string;
};

export type Screen = QuestionScreen | PlaceholderScreen;

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: "hair-scalp", label: "HAIR & SCALP" },
  { key: "treatments", label: "TREATMENTS" },
  { key: "lifestyle", label: "LIFESTYLE" },
  { key: "preferences", label: "PREFERENCES" },
];

export const screens: Screen[] = [
  // ── HAIR & SCALP ──────────────────────────────────────────────────────────

  {
    type: "question",
    slug: "length",
    category: "hair-scalp",
    heading: "How long is your hair?",
    instruction:
      "If you have curly hair, pull the curl all the way down to find your true length.",
    tipTitle: "More of a visual learner? Tap for pics",
    selectionType: "single",
    options: [
      { label: "Short", subcopy: "Buzz-cut to early-Beatles" },
      { label: "Chin-length", subcopy: "Doesn't touch shoulders" },
      {
        label: "Shoulder length",
        subcopy: "Sits on shoulders or falls slightly past",
      },
      { label: "Long", subcopy: "Below shoulder blades to mid-back" },
      { label: "Very Long", subcopy: "Mid-back and beyond" },
    ],
  },

  {
    type: "question",
    slug: "texture",
    category: "hair-scalp",
    heading: "What's your natural, untreated, air-dried hair texture?",
    instruction:
      "If your hair is texturally treated, think back to when it wasn't.",
    tipTitle: "More of a visual learner? Tap for pics",
    selectionType: "single",
    options: [
      { label: "Type 1 - Straight", image: "images/hair%20types/1.png" },
      { label: "Type 2A - Soft Waves", subcopy: "Almost straight with a slight bend", image: "images/hair%20types/2a.png" },
      { label: "Type 2B - Wavy", subcopy: "Loose, S-shaped waves", image: "images/hair%20types/2b.png" },
      { label: "Type 2C - Deep Waves or Loose Curls", subcopy: "Defined, S-shaped pattern", image: "images/hair%20types/2c.png" },
      { label: "Type 3A - Curly", subcopy: 'Like a loose "C"', image: "images/hair%20types/3a.png" },
      { label: "Type 3B - Very Curly", subcopy: "Defined & springy C's", image: "images/hair%20types/3b.png" },
      { label: "Type 3C - Tight Curls", subcopy: "Like a corkscrew", image: "images/hair%20types/3c.png" },
      { label: "Type 4A - Coily", subcopy: "Tight & springy, like a slinky", image: "images/hair%20types/4a.png" },
      { label: "Type 4B - Zig-Zag Coils", subcopy: 'Like a sharply defined "Z"', image: "images/hair%20types/4b.png" },
      { label: "Type 4C - Tight Zig-Zag", subcopy: 'A less-defined "Z"', image: "images/hair%20types/4c.png" },
    ],
  },

  {
    type: "question",
    slug: "type",
    category: "hair-scalp",
    heading: "Where would you put your hair on the oily/dry spectrum?",
    selectionType: "single",
    options: [
      {
        label: "On the oily side",
        subcopy: "Roots get greasy, while lengths are balanced",
      },
      {
        label: "Happy medium",
        subcopy: "Roots don't get oily quickly, and lengths aren't dry either",
      },
      {
        label: "Mixed",
        subcopy: "Roots get oily quickly while my lengths are dry or frizzy",
      },
      {
        label: "On the dry side",
        subcopy:
          "Roots don't get oily quickly and my lengths are always dry or frizzy",
      },
    ],
  },

  {
    type: "question",
    slug: "split-ends",
    category: "hair-scalp",
    heading: "Do you get split ends?",
    instruction:
      "Check your ends right now—do you see any fiber divisions, white specks, or tiny knots?",
    tipTitle: "Did you know there are 6 types of splits?",
    selectionType: "single",
    options: [
      { label: "Yes, plenty" },
      { label: "Only a few" },
      { label: "None in sight" },
    ],
  },

  {
    type: "question",
    slug: "porosity",
    category: "hair-scalp",
    heading: "How porous is your hair?",
    instruction:
      "High-porosity hair dries quickly and is frizz-prone; products are absorbed quickly. Low porosity hair dries slowly and products stick around.",
    tipTitle: "At home? Tap for an experiment",
    selectionType: "single",
    options: [
      { label: "High porosity - dries quickly" },
      { label: "Medium or not sure" },
      { label: "Low porosity - dries slowly" },
    ],
  },

  {
    type: "question",
    slug: "thickness",
    category: "hair-scalp",
    heading: "What does a single strand of hair feel like?",
    instruction: "Roll a single hair between your fingers. If you…",
    selectionType: "single",
    options: [
      { label: "Barely feel it = fine/thin hair" },
      { label: "Not sure or feel it slightly = medium hair" },
      { label: "Feels like sewing thread = thick/coarse hair" },
    ],
  },

  {
    type: "question",
    slug: "density",
    category: "hair-scalp",
    heading: "How dense is your hair?",
    instruction:
      "Part your hair and check the mirror—the more scalp you see, the less dense your hair is.",
    selectionType: "single",
    options: [
      { label: "Very dense", subcopy: "I see very little to no scalp" },
      { label: "Medium or not sure", subcopy: "I can see a little skin" },
      { label: "Low density", subcopy: "I have a wide part" },
    ],
  },

  {
    type: "question",
    slug: "hairloss",
    category: "hair-scalp",
    heading: "Do you feel like you're shedding more than usual lately?",
    tipTitle: "What's normal?",
    selectionType: "single",
    options: [
      { label: "No, seems normal" },
      { label: "Sometimes it feels that way, sometimes not" },
      { label: "Yes, I know for sure I am" },
    ],
  },

  {
    type: "question",
    slug: "genetic-hair-loss",
    category: "hair-scalp",
    heading: "Is hair loss a genetic issue in your family?",
    selectionType: "single",
    options: [
      { label: "Yes" },
      { label: "No" },
      { label: "I'm not sure" },
    ],
  },

  {
    type: "question",
    slug: "shampoo-frequency",
    category: "hair-scalp",
    heading: "How often do you wash your hair?",
    instruction: "This includes shampooing and co-washing.",
    selectionType: "single",
    options: [
      { label: "Every day" },
      { label: "Every 2-3 days" },
      { label: "Once a week" },
      { label: "Less than once a week" },
    ],
  },

  {
    type: "question",
    slug: "oil",
    category: "hair-scalp",
    heading: "After a wash, how long until hair gets oily again?",
    instruction:
      "If you're stuck between answers, choose the greater number of days.",
    selectionType: "single",
    options: [
      { label: "The same day" },
      { label: "The second day" },
      { label: "3+ days" },
      { label: "It never gets oily" },
      { label: "I don't know" },
    ],
  },

  {
    type: "question",
    slug: "scalp",
    category: "hair-scalp",
    heading:
      "In between washes, where is your scalp on the oily/dry spectrum?",
    instruction:
      "Just like your skin, your scalp is constantly changing, but think about how it typically feels.",
    selectionType: "single",
    options: [
      { label: "On the oily side" },
      { label: "Balanced" },
      { label: "On the dry side" },
      { label: "Not sure / I don't know" },
    ],
  },

  {
    type: "question",
    slug: "dandruff-level",
    category: "hair-scalp",
    heading:
      "Do you see white or yellow flakes on your head or shoulders?",
    instruction:
      "Answer yes if flakes regularly occur, even if you're flake-free at the moment.",
    selectionType: "single",
    options: [
      { label: "No" },
      { label: "Very rarely" },
      { label: "Sometimes" },
      { label: "Daily" },
    ],
  },

  {
    type: "question",
    slug: "sensitivity",
    category: "hair-scalp",
    heading: "Do you have a sensitive scalp?",
    instruction:
      "If you experience tightness, dryness, burning, tingling, pain, itching, or redness, all that counts as sensitivity.",
    selectionType: "single",
    options: [
      { label: "Not at all" },
      { label: "Off and on" },
      { label: "Yes, for sure" },
      { label: "It's ridiculously sensitive" },
    ],
  },

  {
    type: "question",
    slug: "gray",
    category: "hair-scalp",
    heading: "How much of your hair is gray?",
    instruction:
      "If your hair is color-treated, answer with your natural gray percentage.",
    tipTitle: "More of a visual learner? Tap for pics",
    selectionType: "single",
    options: [
      { label: "70-100%" },
      { label: "40-60%" },
      { label: "10-30%" },
      { label: "None" },
    ],
  },

  // ── TREATMENTS ─────────────────────────────────────────────────────────────

  {
    type: "placeholder",
    slug: "treatments-intro",
    category: "treatments",
    title: "treatments-intro",
  },

  {
    type: "question",
    slug: "color",
    category: "treatments",
    heading: "Is your hair color-treated?",
    instruction:
      "If any part of your hair has been lightened or darkened from your natural color, answer yes.",
    selectionType: "single",
    options: [
      { label: "Yes", subcopy: "My hair is colored or lightened" },
      {
        label: "No",
        subcopy: "Currently my hair color is 100% natural",
      },
    ],
  },

  {
    type: "question",
    slug: "other-treatments",
    category: "treatments",
    heading: "Has your hair undergone any textural treatments?",
    instruction: "Select all that apply, even if you're growing one out.",
    tipTitle: "Not sure what you got?",
    selectionType: "multi",
    options: [
      {
        label: "Relaxer",
        subcopy: "Curly hair became straight(er)",
      },
      {
        label: "Perm or Waving",
        subcopy: "Straight hair became curly",
      },
      {
        label: "Keratin",
        subcopy: "Hair was smoothed & straightened for 3-5 months",
      },
      { label: "None of the above" },
    ],
  },


  {
    type: "question",
    slug: "styles",
    category: "treatments",
    heading: "What products and styling tools do you use?",
    instruction:
      "Select all that apply, even the ones you use infrequently.",
    selectionType: "multi",
    selectorSize: "hug",
    options: [
      { label: "Shampoo", group: "CLEAN & CONDITION" },
      { label: "Conditioner", group: "CLEAN & CONDITION" },
      { label: "Leave-in conditioner", group: "CLEAN & CONDITION" },
      { label: "Straightening iron", group: "STYLING PRODUCTS AND TOOLS" },
      { label: "Curling iron / wand", group: "STYLING PRODUCTS AND TOOLS" },
      { label: "Blow dryer", group: "STYLING PRODUCTS AND TOOLS" },
      { label: "Hairspray", group: "STYLING PRODUCTS AND TOOLS" },
      { label: "Curl Cream", group: "STYLING PRODUCTS AND TOOLS" },
      { label: "Paste / Pomade", group: "STYLING PRODUCTS AND TOOLS" },
      { label: "Mousse", group: "STYLING PRODUCTS AND TOOLS" },
      { label: "Gel / Jelly", group: "STYLING PRODUCTS AND TOOLS" },
      { label: "Dry Shampoo", group: "STYLING PRODUCTS AND TOOLS" },
      { label: "Hair Oil", group: "STYLING PRODUCTS AND TOOLS" },
      { label: "Scalp Mask", group: "TREATMENTS" },
      { label: "Hair Mask", group: "TREATMENTS" },
      { label: "Scalp Serum", group: "TREATMENTS" },
      { label: "Hair Butter", group: "TREATMENTS" },
      { label: "Hair Vitamins & Supplements", group: "TREATMENTS" },
    ],
  },

  {
    type: "question",
    slug: "hairstyles",
    category: "treatments",
    heading: "Do you wear any of these styles?",
    instruction:
      "Select all that apply, including any styles you plan to wear in the near future.",
    selectionType: "multi",
    options: [
      {
        label: "Crafted Curls",
        subcopy:
          "Curls created with a styling tool like a curling iron or rollers",
      },
      {
        label: "Pulled-back styles",
        subcopy: "Buns, braids, ponytails, updos",
      },
      {
        label: "Straightened styles",
        subcopy: "Usually created with a straightening iron",
      },
      {
        label: "Beachy or tousled waves",
        subcopy: "For added volume and texture",
      },
      {
        label: "Lifted roots",
        subcopy: "Teased or raised for added volume",
      },
      {
        label: "Locs or Dreadlocks",
        subcopy:
          "Ropes or strands of entangled, braided, twisted, or palm-rolled hair",
      },
      {
        label: "Finger-combed",
        subcopy: "For added shape like swoops or spikes",
      },
      {
        label: "Extensions",
        subcopy: "Natural or synthetic extensions",
      },
      {
        label: "Wrapped styles",
        subcopy: "Including head wraps, turbans, scarves",
      },
      { label: "Wigs", subcopy: "Natural or synthetic wigs" },
      { label: "I don't wear any of these styles" },
    ],
  },

  {
    type: "question",
    slug: "hold-level",
    category: "treatments",
    heading: "What level of hold do you prefer when styling?",
    instruction:
      "Use different levels of hold? Select the one you use the most and we'll curate your routine to offer options based on the styles you wear.",
    selectionType: "single",
    options: [
      { label: "None", subcopy: "I don't need hold!" },
      { label: "Soft", subcopy: "For minimal hold" },
      { label: "Medium", subcopy: "Next-level hold" },
      { label: "Strong", subcopy: "Our maximal hold level" },
      {
        label: "Not sure",
        subcopy:
          "We'll give suggestions based on your hair needs, styling habits and your environment",
      },
    ],
  },

  {
    type: "question",
    slug: "routine",
    category: "treatments",
    heading: "What describes your ideal hair routine?",
    selectionType: "single",
    options: [
      { label: "Streamlined & minimal" },
      { label: "More than basic, but nothing fancy" },
      { label: "Long & luxurious" },
    ],
  },

  // ── LIFESTYLE ──────────────────────────────────────────────────────────────

  {
    type: "placeholder",
    slug: "lifestyle-intro",
    category: "lifestyle",
    title: "lifestyle-intro",
  },

  {
    type: "question",
    slug: "age",
    category: "lifestyle",
    heading: "How old are you?",
    instruction: "This helps us give the right support, at every stage.",
    selectionType: "single",
    options: [
      { label: "Under 30" },
      { label: "In my 30s" },
      { label: "In my 40s" },
      { label: "In my 50s" },
      { label: "In my 60s" },
      { label: "70 or over" },
    ],
  },

  {
    type: "question",
    slug: "hormones",
    category: "lifestyle",
    heading: "Are you currently...",
    instruction: "Select all that apply.",
    selectionType: "multi",
    options: [
      { label: "Pregnant" },
      { label: "Post-pregnancy (delivered in the last 12 months)" },
      { label: "Breastfeeding" },
      { label: "Experiencing menopause" },
      { label: "None of the above" },
    ],
  },

  {
    type: "question",
    slug: "diet",
    category: "lifestyle",
    heading: "What makes up the majority of your diet?",
    instruction: "Select all that apply.",
    selectionType: "multi",
    options: [
      { label: "Meat" },
      { label: "Fish / Seafood" },
      { label: "Vegetables" },
      { label: "Fruits" },
      { label: "Dairy" },
      { label: "Processed or fast food" },
      { label: "Carbs / Starches" },
      { label: "Sweets" },
    ],
  },

  {
    type: "question",
    slug: "hydration",
    category: "lifestyle",
    heading: "How much water do you drink daily?",
    instruction: "Choose what best reflects your typical intake.",
    selectionType: "single",
    options: [
      { label: "Less than 3 glasses" },
      { label: "4-6 glasses (1 liter)" },
      { label: "7-8 glasses (1.5 liters)" },
      { label: "More than that" },
    ],
  },

  {
    type: "question",
    slug: "smoke-exposure",
    category: "lifestyle",
    heading: "Does your hair retain noticeable odors from food or smoke?",
    selectionType: "single",
    options: [
      { label: "Never noticed" },
      { label: "Yes, sometimes" },
      { label: "All the time" },
    ],
  },

  {
    type: "question",
    slug: "stress",
    category: "lifestyle",
    heading: "How often are you stressed out?",
    selectionType: "single",
    options: [
      { label: "Rarely" },
      { label: "Maybe once a week" },
      { label: "Multiple times a week" },
      { label: "Every day" },
    ],
  },

  {
    type: "question",
    slug: "stress-intensity",
    category: "lifestyle",
    heading:
      "Have you experienced any of these factors in the last 3 months?",
    instruction: "Select all that apply.",
    selectionType: "multi",
    options: [
      {
        label: "Major stressful event",
        subcopy: "e.g. job loss, surgery, breakup, bereavement",
      },
      {
        label: "Stopped or started a new medication",
        subcopy: "e.g. insulin, birth control",
      },
      {
        label: "Diagnosed scalp conditions",
        subcopy: "e.g. psoriasis, eczema",
      },
      {
        label: "Medical treatment that affects hair/scalp",
        subcopy: "e.g. chemotherapy, thyroid treatment",
      },
      { label: "None of these apply to me" },
    ],
  },

  {
    type: "question",
    slug: "sports",
    category: "lifestyle",
    heading: "In an average week, where do you workout?",
    instruction:
      "Select all that apply, considering your life over the next 2 months.",
    selectionType: "multi",
    options: [
      { label: "I don't exercise often" },
      { label: "Indoors" },
      { label: "Outdoors" },
      { label: "Swimming Pool" },
      { label: "Ocean" },
      { label: "I work out, but not in these spaces" },
    ],
  },

  {
    type: "placeholder",
    slug: "zipcode",
    category: "lifestyle",
    title: "zipcode",
  },

  {
    type: "placeholder",
    slug: "geo-aggressors",
    category: "lifestyle",
    title: "geo-aggressors",
  },

  {
    type: "placeholder",
    slug: "signin",
    category: "lifestyle",
    title: "signin",
  },

  // ── PREFERENCES ────────────────────────────────────────────────────────────

  {
    type: "question",
    slug: "exceptions",
    category: "preferences",
    heading: "Any specific haircare ingredient preferences?",
    instruction:
      "All Prose products are already free of parabens, mineral oils, gluten, sulfates, dyes, GMOs, and animal cruelty. Select all that apply.",
    tipTitle: "What is silicone again?",
    selectionType: "multi",
    options: [
      { label: "Vegan" },
      { label: "Silicone-free" },
      { label: "No thanks" },
    ],
  },

  {
    type: "placeholder",
    slug: "fragrance",
    category: "preferences",
    title: "fragrance",
  },

  {
    type: "question",
    slug: "goals",
    category: "preferences",
    heading: "What are your hair goals?",
    instruction: "Select all that apply.",
    tipTitle: "Not sure? Tap for a tip",
    selectionType: "multi",
    options: [
      { label: "More volume" },
      { label: "More shine" },
      { label: "More smoothness" },
      { label: "More curl definition" },
      { label: "More moisture" },
      { label: "Less brass" },
      { label: "More hair growth" },
      { label: "Less hair shedding" },
    ],
  },

  {
    type: "placeholder",
    slug: "end",
    category: "preferences",
    title: "end",
  },
];
