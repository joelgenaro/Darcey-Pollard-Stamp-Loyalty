import { BackIcon } from "../icons";
import StarTable from "../components/tables/Star";
import { StarCard } from "../components/card/star";
import { PetCard } from "../components/card/pet";
import { TabComponent } from "../components/ui/tab";
import { Dropdown } from "../components/ui/dropdown";
import { PetOwnerInfo } from "../components/petowner/petownerinfo";
import { PetOwnerSummary } from "../components/petowner/petownersummary";
import { starCards, petCards, petTabOptions, petSelectOptions } from "../lib/constants";

export default function PetOwnerProfile() {
  return (
    <>
      <div className="flex gap-4 text-primary pb-2.5">
        <div className="w-6 h-6"><BackIcon className="h-full" /></div>
        <p className="font-semibold font-open-sans">Back</p>
      </div>
      <div className="py-7.5">
        <div className="text-primary text-4xl font-bold font-open-sans mb-5">Luis Smith</div>
        <div className="flex md:flex-row flex-wrap gap-3 max-xl:justify-center">
          <PetOwnerInfo
            email="luis@gmail.com"
            phoneNumber="123456789"
            memberSince="01/01/2025"
            lastStamp="01/01/2025"
            lastRewardEarned="30/01/2025"
            lastRewardRedeemed="15/02/2025"
          />
          <PetOwnerSummary
            currentStars={0}
            availableRewards={1}
            totalStars={12}
            totalRewards={3}
          />
        </div>
      </div>
      <div className="py-7.5">
        <div className="text-primary font-bold font-open-sans mb-5">Pets(2)</div>
        <div className="flex flex-col md:flex-row gap-8 items-center max-xl:justify-center">
          {petCards.map((pet, index) => (
            <PetCard
              key={index}
              petName={pet.petName}
              petIcon={pet.petIcon}
              weight={pet.weight}
              gender={pet.gender}
              birthDate={pet.birthDate}
              totalStars={pet.totalStars}
              totalRedeemed={pet.totalRedeemed}
              treatmentPeriod={pet.treatmentPeriod}
              color={pet.color}
            />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="font-open-sans font-bold mb-8 text-primary">Activity</div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          {starCards.map((card, index) => (
            <StarCard
              key={index}
              number={card.number}
              title={card.title}
              color={card.color}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
      <div className="flex font-open-sans justify-between items-center mb-3 flex-wrap">
        <TabComponent tabs={petTabOptions} />
        <div className="filter flex gap-2.5 max-lg:mt-5">
          <div>
            <Dropdown options={petSelectOptions} defaultOption="All pets" />
          </div>
          <div className="px-2.5 py-3">
            <label className="flex items-center text-xs text-gray-dark font-normal">
              <input type="checkbox" name="filter" className="mr-2 border-0" />
              Show stars expired only
            </label>
          </div>
        </div>
      </div>
      <StarTable />
    </>
  );
}
