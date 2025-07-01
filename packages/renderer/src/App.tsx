import React, { useEffect, useState } from "react";
import { convertToPng, getPrintersList } from "@app/preload";

const PhotocafeApp: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [printerNames, setPrinterNames] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  useEffect(() => {
    const fetchPrinterList = async () => {
      const printers = await getPrintersList();
      setPrinterNames(printers.map((printer) => printer.name));
    };

    fetchPrinterList();
  }, []);

  const handleUpload = async () => {
    if (selectedFile) {
      const arrayBuffer = await selectedFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      try {
        const pngFilePath = await convertToPng(uint8Array);
        // reset form
        setSelectedFile(null);
        console.log("Converted PNG file saved at:", pngFilePath);
      } catch (error) {
        console.error("Error converting to PNG:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-libre">
      <h1>Welcome to Photocafe</h1>
      <p>Your one-stop solution for all your photo editing needs.</p>
      <div>
        <p>Upload a sample file</p>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={!selectedFile}>
          Upload
        </button>
        {selectedFile && <p>Selected: {selectedFile.name}</p>}
      </div>
      <div>
        <h2>Available Printers</h2>
        {printerNames.length > 0 ? (
          <ul>
            {printerNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        ) : (
          <p>No printers found.</p>
        )}
      </div>
    </div>
  );
};

export default PhotocafeApp;
