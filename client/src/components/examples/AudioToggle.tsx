import AudioToggle from "../AudioToggle";

export default function AudioToggleExample() {
  return (
    <div className="p-8 bg-background flex gap-4">
      <AudioToggle label="Ambient Sounds" regionName="Shekhawati" />
      <AudioToggle label="Traditional Music" regionName="Jodhpur" />
    </div>
  );
}
