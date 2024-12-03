import { FoodCarousel } from "@/components/food-carousel/FoodCarousel";
import { FoodPlanCard } from "@/components/food-plan-card/FoodPlanCard";
import { NavBar } from "@/components/navbar/NavBar";
import { OptionCard } from "@/components/option-card/OptionCard";
import { Top } from "@/components/top-bar/Top";
import { images } from "@/constants/images";
import { foodPlans, navItems, offerItems } from "@/constants/mocks";

export default function Home() {
  return (
    <div className="flex flex-col bg-background-50 min-h-screen w-full items-center py-2 px-[18px] gap-2 overflow-y-auto overflow-x-hidden">
      <Top
        topBarProps={{
          title: "Home",
        }}
        showSearchBar={true}
        searchProps={{
          placeholder: "Search for products or restaurants",
        }}
      />

      <div className="flex w-full items-center justify-between mt-1">
        <OptionCard title="Food" image={images.burger} />
        <OptionCard title="Ingredients" image={images.vegetables} />
      </div>

      <div className="flex flex-col justify-center px-6">
        <div className="text-h3 text-text-950 font-medium">Today&apos;s Offers</div>
        <FoodCarousel items={offerItems} />
      </div>

      <div className="flex flex-col justify-center px-6 mt-4 ml-[260px]">
        <div className="text-h3 text-text-950 font-medium">Discover food plans</div>
        <div className="flex overflow-x-auto gap-4 mt-2 pb-4">
          {foodPlans.map((foodPlan, index) => (
              <FoodPlanCard
                key={index}
                title={foodPlan.title}
                tag={foodPlan.tag}
                image={foodPlan.image}
              />
          ))}
        </div>
      </div>

      <NavBar navItems={navItems} />
    </div>
  );
}
