/**
 * Grove Cutlery Co. — merchandising taxonomy.
 * No supplier SKUs, prices, stock, or images are invented here.
 * Products must be approved before they are marked purchasable.
 */
export const groveCollections = [
  { slug: 'cutlers-collection', name: 'The Cutler’s Collection', eyebrow: 'Signature assortment', description: 'Thoughtfully chosen essentials for kitchens that work hard.' },
  { slug: 'chefs-selection', name: 'The Chef’s Selection', eyebrow: 'Chosen by a chef', description: 'Practical, beautiful knives selected for everyday performance.' },
  { slug: 'at-the-table', name: 'At the Table', eyebrow: 'Dinner is an occasion', description: 'Steak knives, carving tools and thoughtful table essentials.' },
  { slug: 'in-the-kitchen', name: 'In the Kitchen', eyebrow: 'Everyday cooking', description: 'Reliable tools for prep, cooking and serving.' },
  { slug: 'protect-your-edge', name: 'Protect Your Edge', eyebrow: 'Care that lasts', description: 'Boards, storage and accessories that respect your knives.' }
];

export const shoppingJourneys = [
  { slug: 'find-my-knife', title: 'Find My Knife', description: 'Guidance based on what and how you cook.' },
  { slug: 'keep-my-edge', title: 'Keep My Edge', description: 'Professional sharpening and practical knife care.' },
  { slug: 'find-a-great-gift', title: 'Find a Great Gift', description: 'Thoughtful gifts for cooks at every skill level.' }
];

/** Proposed catalog schema; actual records require supplier validation. */
export const productRequirements = {
  required: ['id','merchantId','sku','name','slug','collectionSlugs','description','currency','priceCents','inventoryPolicy','status','supplier','images'],
  statuses: ['draft','review','active','archived'],
  inventoryPolicies: ['tracked','made_to_order','untracked'],
  imagePolicy: 'Approved supplier imagery or authentic owned product photographs only',
  launchPolicy: 'No product may become active until pricing, availability, tax category, shipping and returns are verified'
};
