
import { StarIcon } from "../../../icons";

type BadgeVariant = "reward" | "current" | "expiring" | "expired";

interface BadgeProps {
  variant?: BadgeVariant;
}

const StarBadge: React.FC<BadgeProps> = ({
  variant = "reward",
}) => {
  const baseStyles =
    "inline-flex items-center p-2 justify-center gap-1 rounded-full font-medium text-sm text-white dark:text-white mr-2";

  const variants = {
    reward:
      "bg-gray-500",
    current:
      "bg-blue-light-500",
    expiring:
      "bg-warning-500",
    expired:
      "bg-error-500"
  };

  const colorStyles = variants[variant];

  return (
    <span className={`${baseStyles} ${colorStyles}`}>
      <StarIcon />
    </span>
  );
};

export default StarBadge;
