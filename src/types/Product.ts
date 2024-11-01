export interface PricingPlan {
  id: string;
  name: string;
  title: string;
  price: number;
  regularity: string;
  originalPrice?: number;
  tag?: string;
  discountPrice?: number;
}
