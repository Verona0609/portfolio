type IconProps = {
  id: string;
  className?: string;
  size?: number | string;

};

export const Icon:React.FC<IconProps> = ({ id, className, size = 24 }) => {
  return (
    <svg className={className} height={size} width={size}>
      <use href={`/svg/sprite.svg#${id}`} />
    </svg>
  );
};
