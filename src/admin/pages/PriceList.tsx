import FileManager from "../components/FileManager";

export default function PriceList() {
  return (
    <FileManager
      folder="price-list"
      title="Price List"
      description="Upload and manage PMT Plast price lists."
      accept=".pdf,.xlsx,.xls"
    />
  );
}