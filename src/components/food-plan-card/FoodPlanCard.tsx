import Image from "next/image";

export interface FoodPlanCardProps {
  title: string;
  tag?: string;
  image: string;
  onClick?: () => void;
  darkText?: boolean;
}

export const FoodPlanCard = ({ title, tag, image, onClick, darkText = false }: FoodPlanCardProps) => {
  return (
    <div onClick={onClick} className="relative w-[150px] h-[192px] rounded-md overflow-hidden">
      <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-md" />
      <div
        className={`absolute inset-0 flex flex-col justify-end p-2 ${
          darkText 
            ? "bg-gradient-to-t from-[rgba(255,255,255,0.6)] via-transparent to-transparent" 
            : "bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-transparent to-transparent"
        }`}
      >
        {tag && (
          <span className={`${darkText ? "text-black" : "text-white"} text-body font-bold`}>
            {tag}
          </span>
        )}
        <span className={`${darkText ? "text-black" : "text-white"} text-h6 font-bold`}>
          {title}
        </span>
        <div className={`${darkText ? "text-black" : "text-white"}  cursor-pointer text-body font-regular flex items-center justify-end`}>
            MORE
        </div>
      </div>
    </div>
  );
};
