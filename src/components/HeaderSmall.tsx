interface Props {
  text: string;
}

/**
 * Visual eyebrow — never a heading (preserves document outline).
 */
export default function HeaderSmall({ text }: Props) {
  return (
    <div className="flex items-center">
      <hr className="mr-1 w-16 border-accent/40 sm:w-24" aria-hidden />
      <p className="text-sm font-medium text-accent md:text-sm">{text}</p>
    </div>
  );
}
