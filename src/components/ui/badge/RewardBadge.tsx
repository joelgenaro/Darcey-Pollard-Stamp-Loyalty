
import { GiftCheckIcon, GiftIcon } from "../../../icons";

type BadgeVariant = "issued" | "redeemed" | "reconciled" | "expired";

interface BadgeProps {
  variant?: BadgeVariant;
}

const RewardBadge: React.FC<BadgeProps> = ({
  variant = "issued",
}) => {
  const baseStyles =
    "inline-flex items-center p-2 justify-center gap-1 rounded-full font-medium text-sm text-white dark:text-white mr-2";

  // Define color styles for variants
  const variants = {
    color: {
      issued:
        "bg-success-500",
      redeemed:
        "bg-blue-light-500",
      reconciled:
        "bg-warning-500",
      expired:
        "bg-error-500",
    },
    icon: {
      issued:
        <GiftIcon />,
      redeemed:
        <GiftCheckIcon />,
      reconciled:
        <GiftCheckIcon />,
      expired:
        <GiftIcon />,
    }
  };

  // Get styles based on size and color variant
  const colorStyles = variants.color[variant];
  const icon = variants.icon[variant];

  return (
    <span className={`${baseStyles} ${colorStyles}`}>
      {icon}
    </span>
  );
};

export default RewardBadge;
