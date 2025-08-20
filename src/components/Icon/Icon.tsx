export const Icon = ({ id, className, size = 24 }) => {
  return (
    <svg className={className} height={size} width={size}>
      <use href={`/svg/sprite.svg#${id}`} />
    </svg>
  );
};
