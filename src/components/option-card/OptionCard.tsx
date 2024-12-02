import Image from "next/image";

export interface OptionCardProps {
  title: string;
  image: string;
  onClick?: () => void;
  darkText?: boolean;
}

export const OptionCard = ({ title, image, onClick, darkText = false }: OptionCardProps) => {
  return (
    <div onClick={onClick} className="relative w-[170px] h-[192px] rounded-md overflow-hidden">
      <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-md" />
      <div
        className={`absolute inset-0 flex flex-col justify-end p-2 ${
          darkText 
            ? "bg-gradient-to-t from-[rgba(255,255,255,0.6)] via-transparent to-transparent" 
            : "bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-transparent to-transparent"
        }`}
      >
        <span className={`${darkText ? "text-black" : "text-white"} text-h6 font-bold mb-2`}>
          {title}
        </span> 
      </div>
    </div>
  );
};
