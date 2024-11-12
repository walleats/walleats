'use client'
import { Button } from "@/components/button/Button";
import { Icon } from "@/components/icon/Icon";
import { ListItemProps } from "@/components/list-item/ListItem";
import { IngredientsList } from "@/components/recipe/ingredients-list/IngredientsList";
import { InstructionList } from "@/components/recipe/instruction-list/InstructionList";
import { NutritionalInfo } from "@/components/recipe/nutritional-info/NutritionalInfo";
import { RecipeDescription } from "@/components/recipe/recipe-description/RecipeDescription";
import { Top } from "@/components/top-bar/Top";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { instructionList, nutritionalProperties } from "@/constants/mocks";
import Image from "next/image";

const label= "Add to cart"
const submitIcon = <Button label={label} size="xsmall" />

const ingredients: ListItemProps[] = [
  {
    imageShape: 'rounded',
    icon: <Image
      src={images.salmon}
      alt="food"
      width={50}
      height={50}
    />,
    title: 'Salmon fillets',
    subtitle: '1 ½ pounds',
    submitIcon: submitIcon,
  },
  {
    imageShape: 'rounded',
    icon: <Image
      src={images.pepper}
      alt="food"
      width={50}
      height={50}
    />,
    title: 'Lemon pepper',
    submitIcon: submitIcon,

  },
  {
    imageShape: 'rounded',
    icon: <Image
      src={images.garlic}
      alt="food"
      width={50}
      height={50}
    />,
    title: 'Garlic powder',
    submitIcon: submitIcon,

  },
  {
    imageShape: 'rounded',
    icon: <Image
      src={images.soy}
      alt="food"
      width={50}
      height={50}
    />,
    title: 'Soy sauce',
    subtitle: '⅓ cup',
    submitIcon: submitIcon,
  },
]

export default function Recipe() {

  return (
    <div className="flex flex-col bg-background-50 min-h-screen w-full items-center py-2 gap-2 overflow-y-auto overflow-x-hidden">
      <Top
        topBarProps={{
          title: "Recipe",
          showBackButton: true,
        }}
        showSearchBar={false}
      />
      <div className="w-full px-6">

        <div className="flex w-full items-center justify-between mt-1">
          <div className="text-text-950 text-h4 font-bold">Grilled Salmon</div>
          <div className="flex gap-2">
            <Icon icon={icons.heart}/>
            <Icon icon={icons.share}/>
          </div>
        </div>

        <div className="relative w-full max-w-full h-[180px] aspect-[16/9] rounded-2xl overflow-hidden mt-2">
          <Image 
            src={images.grilledSalmon}
            alt="Grilled Salmon"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>

        <IngredientsList itemProps={ingredients} onClick={() => {console.log("All items added to cart")}} />
        <RecipeDescription
          recipeDescription={{
            description: "This is a simple recipe for grilled salmon. It is a healthy and delicious meal that can be prepared in under 30 minutes.",
            review: 4,
            reviews: 5,
            time: 25,
          }}
          onClickReview={() => {console.log("Review submitted")}}
        />
        <NutritionalInfo
          nutritionalProperties={nutritionalProperties}
        />
        <InstructionList
          instructions={instructionList}
          />
      </div>

    </div>
  );
}
