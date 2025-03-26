import { RewardIcon, StarIcon, BuyBoard } from "../../icons";
import { PetOwnerSummaryProps } from "../../lib/interfaces";

export const PetOwnerSummary: React.FC<PetOwnerSummaryProps> = ({ currentStars, availableRewards, totalStars, totalRewards }) => {
  return (
    <div className="flex max-xl:flex-1 gap-4 p-5 rounded-xl bg-[#EDE8F0] font-open-sans">
      <div className="w-[125px] border-1 relative text-white text-sm">
        <div className="absolute bg-primary top-12 left-0 font-bold px-3 py-3.5 rounded-[50%_50%] rotate-330">1</div>
        <div className="absolute bg-primary top-4 left-6.5 font-bold px-3 py-3.5 rounded-[50%_50%] rotate-350">2</div>
        <div className="absolute bg-primary top-4 right-7 font-bold px-3 py-3.5 rounded-[50%_50%] rotate-10">3</div>
        <div className="absolute bg-secondary top-12 right-0 font-bold px-2 py-4 rounded-[50%_50%] rotate-20"><RewardIcon /></div>
        <div className="absolute bottom-3 left-4.5 text-xs">
          <BuyBoard className="w-23 h-auto" />
          <div className="absolute bottom-6.5 w-full text-center">
            <p>Buy {totalRewards},</p>
            <p>Get {availableRewards} FREE</p>
          </div>
        </div>
      </div>
      <div className="p-5 w-48 flex-1">
        <div className="text-sm text-primary font-bold mb-6">Current card summary</div>
        <div className="flex gap-5 mb-6">
          <div className="w-7.5 h-7.5 bg-primary rounded-md flex justify-center items-center">
            <StarIcon className="w-3 h-3" />
          </div>
          <div className="">
            <p className="text-xl text-primary font-bold leading-5">{currentStars}</p>
            <p className="text-xs text-primary font-normal leading-3">Current stars</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-7.5 h-7.5 bg-secondary rounded-md flex justify-center items-center">
            <RewardIcon className="w-3 h-3" />
          </div>
          <div>
            <p className="text-xl text-secondary font-bold leading-5">{availableRewards}</p>
            <p className="text-xs text-secondary font-normal leading-3">Available rewards</p>
          </div>
        </div>
      </div>
      <div className="p-5 w-48 flex-1 bg-[#FFFFFF80] rounded-sm">
        <div className="text-sm text-primary font-bold mb-6">Total summary</div>
        <div className="flex gap-5 mb-6">
          <div className="w-7.5 h-7.5 bg-primary rounded-md flex justify-center items-center">
            <StarIcon className="w-3 h-3" />
          </div>
          <div>
            <p className="text-xl text-primary font-bold leading-5">{totalStars}</p>
            <p className="text-xs text-primary font-normal leading-3">Total stars</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-7.5 h-7.5 bg-secondary rounded-md flex justify-center items-center">
            <RewardIcon className="w-3 h-3" />
          </div>
          <div>
            <p className="text-xl text-secondary font-bold leading-5">{totalRewards}</p>
            <p className="text-xs text-secondary font-normal leading-3">Total rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
}