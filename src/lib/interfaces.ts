export interface Reward {
    id: string;
    status?: string;
    first_name?: string;
    last_name?: string;
    pet_name?: string;
    issue_date?: string;
    redeemed_date?: string;
    expiry_date?: string;
    size?: string;
}

export interface Star {
    id: string;
    status?: string;
    name?: string;
    product?: string;
    issue_date?: string;
    expiry_date?: string;
    size?: string;
}

export interface PetOwnerInfoProps {
    email: string;
    phoneNumber: string;
    memberSince: string;
    lastStamp: string;
    lastRewardEarned: string;
    lastRewardRedeemed: string;
}
export interface PetOwnerSummaryProps {
    currentStars: number;
    availableRewards: number;
    totalStars: number;
    totalRewards: number;
}