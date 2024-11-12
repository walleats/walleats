import { FoodCarosuelItem } from "@/components/food-carousel/FoodCarousel";
import { images } from "./images";
import { icons } from "./icons";
import { FoodPlanCardProps } from "@/components/food-plan-card/FoodPlanCard";
import {  } from "@/components/list-item/ListItem";

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

export const nutritionalProperties = [
  { iconPath: icons.fire, propertyValue: '318 kcal' },
  { iconPath: icons.food, propertyValue: '20g fat' },
  { iconPath: icons.carbs, propertyValue: '13g carbs' },
  { iconPath: icons.meat, propertyValue: '21g protein' },
];

export const instructionList =  [
      {
          stepNumber: 1,
          stepName: 'Prepare Ingredients',
          stepDescription: 'Gather all necessary ingredients for the recipe.',
      },
      {
          stepNumber: 2,
          stepName: 'Season Salmon',
          stepDescription: 'Season salmon fillets with lemon pepper, garlic powder, and salt.',
      },
      {
          stepNumber: 3,
          stepName: 'Marinate Fish',
          stepDescription: 'Stir soy sauce, brown sugar, water, and vegetable oil together in a small bowl until sugar is dissolved. Place fish in a large resealable plastic bag; add soy sauce mixture, seal, and turn to coat. Refrigerate for at least 2 hours.',
      },
      {
          stepNumber: 4,
          stepName: 'Preheat Grill',
          stepDescription: 'Preheat an outdoor grill for medium heat and lightly oil the grate.'
      },
      {
          stepNumber: 5,
          stepName: 'Grill Salmon',
          stepDescription: 'Place salmon on the preheated grill, and discard marinade. Cook salmon until fish flakes easily with a fork, about 6 to 8 minutes per side.'
      },
      {
          stepNumber: 6,
          stepName: 'Serve',
          stepDescription: 'Serve and enjoy!'
      }
  ]
