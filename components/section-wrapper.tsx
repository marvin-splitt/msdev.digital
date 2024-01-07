type SectionWrapperProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="container flex flex-col items-center">
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
