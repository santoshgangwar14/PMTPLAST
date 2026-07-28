import FileManager from "../components/FileManager";

export default function TechnicalDatasheet() {
  return (
    <FileManager
      folder="technical-datasheet"
      title="Technical Datasheet"
      description="Upload and manage PMT Plast technical datasheets."
      accept=".pdf"
    />
  );
}