export interface SprinklesToggleProps {
  layerId: number;
  hasSprinkles: boolean;
  toggleSprinkles: (layerId: number) => void;
}

export const SprinklesToggle = ({
  layerId,
  hasSprinkles,
  toggleSprinkles,
}: SprinklesToggleProps) => (
  <button onClick={() => toggleSprinkles(layerId)}>
    {hasSprinkles ? "Remove Sprinkles" : "Add Sprinkles"}
  </button>
);
