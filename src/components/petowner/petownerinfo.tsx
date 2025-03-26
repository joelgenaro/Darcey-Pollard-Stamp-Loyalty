import { PetOwnerInfoProps } from "../../lib/interfaces"

export const PetOwnerInfo: React.FC<PetOwnerInfoProps> = ({ email, phoneNumber, memberSince, lastStamp, lastRewardEarned, lastRewardRedeemed }) => {
  return (
    <div className="flex py-8 min-w-75 max-xl:w-100 font-open-sans">
      <div className="flex-1 flex flex-col gap-5">
        <div className="">
          <p className="text-xs text-primary font-bold">Email</p>
          <p className="text-sm font-normal">{email}</p>
        </div>
        <div className="">
          <p className="text-xs text-primary font-bold">Phone number</p>
          <p className="text-sm font-normal">{phoneNumber}</p>
        </div>
        <div className="">
          <p className="text-xs text-primary font-bold">Member since</p>
          <p className="text-sm font-normal">{memberSince}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div className="">
          <p className="text-xs text-primary font-bold">Last stamp</p>
          <p className="text-sm font-normal">{lastStamp}</p>
        </div>
        <div className="">
          <p className="text-xs text-primary font-bold">Last reward earned</p>
          <p className="text-sm font-normal">{lastRewardEarned}</p>
        </div>
        <div className="">
          <p className="text-xs text-primary font-bold">Last reward redeemed</p>
          <p className="text-sm font-normal">{lastRewardRedeemed}</p>
        </div>
      </div>
    </div>
  )
}