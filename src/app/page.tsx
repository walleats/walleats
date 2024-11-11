import { OptionCard } from "@/components/option-card/OptionCard";
import { Top } from "@/components/top-bar/Top";
import { images } from "@/constants/images";

export default function Home() {
  return (
    <div className="flex flex-col bg-background-50 h-screen py-2">
      <Top
        topBarProps={{
          title: "Home",
        }}
        showSearchBar={true}
        searchProps={{
          placeholder: "Search for products or restaurants",
        }}
      />
      <div className="flex items-center justify-center space-x-4 mt-1">
        <OptionCard
          title="Food"
          image={images.foodLargeDark}
          />

        <OptionCard
          title="Ingredients"
          image={images.foodLargeDark}
          />
      </div>
    </div>
  );
}
