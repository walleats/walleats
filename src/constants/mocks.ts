import { FoodCarosuelItem } from "@/components/food-carousel/FoodCarousel";
import { images } from "./images";
import { icons } from "./icons";
import { FoodPlanCardProps } from "@/components/food-plan-card/FoodPlanCard";

export const offerItems: FoodCarosuelItem[] = [
  {
    title: "Chicken Burger",
    label: "50% off",
    image: images.foodLarge,
  },
  {
    title: "Pizza Margherita",
    label: "10% off",
    image: images.foodLargeDark,
  },
  {
    title: "Penni Pasta",
    label: "20% off",
    image: images.foodLargeDark,
  },
];

export const navItems = [
  { iconActive: icons.homeActive, iconInactive: icons.homeInactive },
  { iconActive: icons.recipeActive, iconInactive: icons.recipeInactive },
  { iconActive: icons.orderActive, iconInactive: icons.orderInactive },
];

export const foodPlans: FoodPlanCardProps[] = [
  {
    title: "Meet & Veggie",
    tag: "Popular",
    image: images.foodLargeSqaured,
  },
  {
    title: "Veggie Delight",
    tag: "Popular",
    image: images.foodLargeSqaured,
  },
  {
    title: "Chicken & Rice",
    image: images.foodLargeSqaured,
  },
  {
    title: "Quick & Easy",
    image: images.foodLargeSqaured,
  },
];
