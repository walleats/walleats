import Image from "next/image";

export interface OptionCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export const OptionCard = ({ title, image, onClick }: OptionCardProps) => {
  return (
    <div
      onClick={onClick}
      className="w-[190px] h-[170px] bg-background-50 rounded-md overflow-hidden flex flex-col items-center gap-2 cursor-pointer shadow-lg"
    >
      <div className="w-[140px] h-[130px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={140}
          height={130}
          className="rounded-md object-cover"
        />
      </div>

      <span className="text-text-400 text-h5 font-medium">
        {title}
      </span>
    </div>
  );
};
