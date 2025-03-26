import { RewardIcon, StarIcon, BellIcon } from "../../icons";

interface PetCardProps {
  petName: string;
  petIcon: React.ReactNode;
  weight: string;
  gender: string;
  birthDate: string;
  totalStars: number;
  totalRedeemed: number;
  treatmentPeriod: string;
  color: string;
}

export const PetCard: React.FC<PetCardProps> = ({
  petName,
  petIcon,
  weight,
  gender,
  birthDate,
  totalStars,
  totalRedeemed,
  treatmentPeriod,
  color,
}) => {
  return (
    <div className="font-open-sans bg-white w-80 rounded-xl">
      <div className="flex gap-4 items-center p-4 bg-[#EDE8F0] rounded-t-xl rounded-b-[50%_20%]">
        {petIcon}
        <div className="text-primary text-xl font-bold">{petName}</div>
      </div>
      <div className="flex-1 flex flex-col gap-3 p-4">
        <div className="">
          <p className="text-xs text-primary font-bold">Weight/size</p>
          <p className="text-sm font-normal text-gray-dark">{weight}</p>
        </div>
        <div className="">
          <p className="text-xs text-primary font-bold">Gender</p>
          <p className="text-sm font-normal text-gray-dark">{gender}</p>
        </div>
        <div className="">
          <p className="text-xs text-primary font-bold">Date of birth</p>
          <p className="text-sm font-normal text-gray-dark">{birthDate}</p>
        </div>
      </div>
      <div className="mx-4 h-0.25 bg-[#EDE8F0]"></div>
      <div className="flex p-4 mb-2">
        <div className="flex gap-2.5 flex-1">
          <div className="w-7.5 h-7.5 bg-primary rounded-md flex justify-center items-center">
            <StarIcon className="w-3 h-3" />
          </div>
          <div className="">
            <p className="text-xl text-primary font-bold leading-5">{totalStars}</p>
            <p className="text-xs text-primary font-normal leading-3">Total stars</p>
          </div>
        </div>
        <div className="flex gap-2.5 flex-1">
          <div className="w-7.5 h-7.5 bg-secondary rounded-md flex justify-center items-center">
            <RewardIcon className="w-3 h-3" />
          </div>
          <div>
            <p className="text-xl text-secondary font-bold leading-5">{totalRedeemed}</p>
            <p className="text-xs text-secondary font-normal leading-3">Total redeemed</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 p-2.5 justify-center items-center rounded-b-xl rounded-t-[50%_30%]" style={{ backgroundColor: color }}>
        <div className=""><BellIcon /></div>
        <p className="text-xs text-white">Next treatment in <span className="font-bold">{treatmentPeriod}</span></p>
      </div>
    </div>
  );
};