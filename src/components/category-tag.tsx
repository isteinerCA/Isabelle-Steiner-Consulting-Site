import { getTagColorKey } from "@/lib/tag-colors";

type CategoryTagProps = {
  label: string;
};

export function CategoryTag({ label }: CategoryTagProps) {
  const colorKey = getTagColorKey(label);

  return (
    <span className={`category-tag tag-${colorKey}`}>{label}</span>
  );
}
