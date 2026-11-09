# Grove Cutlery Co. — Commerce implementation brief

Status: Planning branch; no production deployment or database changes.
Target public route: https://chefknifeworks.com/store
Retail brand: Grove Cutlery Co. — by Chef KnifeWorks
Positioning: Everyday knives. Properly cared for.
Origin line: Born in Maple Grove. Built for everyday kitchens.
Campaign: Less clutter. Better cutlery.

## Preserved merchandising
Signature: The Cutler's Collection
Collections: The Chef's Selection; At the Table; In the Kitchen; Protect Your Edge.
Customer pathways: Find My Knife; Keep My Edge; Find a Great Gift.
Content: Ask the Chef; The Chef's Journal.
Prototype assortment concepts: Recurve Steak Knives, Carving Collection, Dragon Knives, Care & Maintenance, Cutting Boards, The Chef's Edit.
No placeholder prototype prices or inventory may be treated as real.

## Source of truth and safety
Inspect live chefknifeworks.com deployment and linked GitHub repository before implementation.
Existing EdgeSuitePro/edge-suite-pro repository is a candidate shared-code source, not confirmed as live CKW application.
Preserve /reserve and existing customer workflow untouched.
Recover and review Grove_Cutlery_Co_Website_Master_Build_Brief.md and grove_cutlery_v4_retail_lab.html before UI coding.
Implement storefront separately with shared commerce packages only where supported by audited code.

## MVP acceptance criteria
1. Curated catalog of 10–20 approved real SKUs with authentic product photos, confirmed suppliers, costs, margins and inventory.
2. Mobile accessible catalog, product details, search/filter, cart and secure hosted payment flow.
3. Server-verified payment webhooks, idempotent order creation, inventory reservation/reconciliation, confirmation messages.
4. Local pickup and shipping, calculated tax obligations, refund and cancellation workflow.
5. Authenticated admin orders/products/inventory; customer and merchant isolation using Supabase RLS.
6. Test successful, failed, duplicate-webhook, refund, out-of-stock and mobile purchases before launch.
7. Keep storefront disabled for public checkout until all checks pass.

## EdgeSuite Pro reusable commerce
Define merchant/tenant, catalog, inventory, orders, fulfillment and payment-provider boundaries. Never mix merchant credentials or customer data. Do not assume Runner AI resale/white-label rights. Start with CKW/Grove merchant; later validate merchant onboarding and subscription tiers.

## Next actions
- Verify live Vercel project and GitHub source for chefknifeworks.com.
- Recover prototype and master brief; compare to current UI.
- Confirm supplier SKU details and merchant payment account.
- Create isolated implementation branch in confirmed source repository.
- Build preview, test, then seek approval before production activation.
