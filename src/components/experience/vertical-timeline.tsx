import { experienceConfig } from "@/config/experience-config";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const VerticalTimeline: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div
      id="experience"
      className={cn("flex items-center justify-center px-6", className)}
    >
      <div className="space-y-6 border-l-2 border-dashed">
        {[...experienceConfig.experienceItems].reverse().map((item, index) => (
          <div key={index} className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full "
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex flex-row items-start justify-start">
              <div className="ml-6 flex-grow">
                <h4 className="font-bold">{item.title}</h4>
                <p className="mt-2 text-sm font-semibold dark:text-slate-200">
                  {item.jobType}
                </p>
                <p className="mt-2 text-sm dark:text-slate-400">
                  {item.description}
                </p>
                <span className="mt-1 block text-sm font-semibold">
                  {item.period}
                </span>
              </div>
              <Avatar className="ml-4 h-14 w-14">
                <AvatarImage src={item.logoUrl} alt="Company Logo" />
              </Avatar>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;
