import FileManager from "../components/FileManager";

export default function CorporateProfile() {
  return (
    <FileManager
      folder="corporate-profile"
      title="Corporate Profile"
      description="Upload and manage PMT Plast corporate profile."
      accept=".pdf"
    />
  );
}