import FileManager from "../components/FileManager";

export default function Catalogue() {
  return (
    <FileManager
      folder="catalogue"
      title="Product Catalogue"
      description="Upload and manage PMT Plast product catalogues."
      accept=".pdf"
    />
  );
}