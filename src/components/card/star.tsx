import * as React from "react";

interface StarCardProps {
    number: number;
    title: string;
    color: string;
    icon: React.JSX.Element;
}

export const StarCard: React.FC<StarCardProps> = ({ number, title, color = "primary", icon }) => {
    const baseStyles =
        "flex gap-5 font-open-sans p-5 rounded-lg w-55";

    const variants = {
        background: {
            primary:
                "bg-primary-100",
            success:
                "bg-success-100",
            error:
                "bg-warning-100",
            warning:
                "bg-error-100",
            info:
                "bg-blue-light-100"
        },
        iconback: {
            primary:
                "bg-primary",
            success:
                "bg-success-500",
            error:
                "bg-warning-500",
            warning:
                "bg-error-500",
            info:
                "bg-blue-light-500"
        },
        text: {
            primary:
                "text-primary",
            success:
                "text-success-500",
            error:
                "text-warning-500",
            warning:
                "text-error-500",
            info:
                "text-blue-light-500"
        }
    };

    const backColor = variants.background[color as keyof typeof variants.background];
    const iconColor = variants.iconback[color as keyof typeof variants.background];
    const textColor = variants.text[color as keyof typeof variants.text];

    return (
        <div className={`${baseStyles} ${backColor} max-xl:flex-1`} >
            <div className={`w-7.5 h-7.5 ${iconColor} rounded-lg flex justify-center items-center`}>
                {icon}
            </div>
            <div className="flex gap-1 flex-col">
                <p className={`text-xl ${textColor} font-bold leading-5`}>{number}</p>
                <p className={`text-xs ${textColor} font-normal leading-3`}>{title}</p>
            </div>
        </div >
    );
};
