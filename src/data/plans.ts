import { PricingPlan } from "@/types/Product";

const plans: PricingPlan[] = [
  {
    id: '8abaece6-2a91-46c9-99c7-285c5d895e5d',
    name: 'Justdone_plan_unlimited_annual_24.99_usd_per_month',
    title: 'Unlimited Annual Plan',
    price: 24.99,
    regularity: 'Per month',
    originalPrice: 49.99,
    tag: 'Save 50%',
  },
  {
    id: 'c4caf15c-503d-42d8-8a78-06e71e787bfd',
    name: 'Justdone_plan_7_day_access_1.00_usd_then_29.99_per_month',
    title: '7-day Access',
    price: 1.00,
    regularity: 'Then 29.99 per month',
    originalPrice: 10.00,
    tag: 'Save 90%',
  },
  { 
    id: '9b718e67-e147-4211-bf35-f8c0f708b3d9',
    name: 'Justdone_plan_unlimited_1_month_39.99_usd_per_month',
    title: 'Unlimited 1-month Plan',
    price: 39.99,
    regularity: 'Per month',
    originalPrice: 69.99,
    tag: 'Most Popular',
  },
];

export default plans;
