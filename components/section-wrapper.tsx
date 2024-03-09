import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn("container flex flex-col items-center", className)}>
      {title && (
        <h2 className="md:text-5xl text-center font-semibold text-3xl max-w-3xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-5 md:text-xl text-center text-lg max-w-3xl">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};
