import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const CertificateGallery = () => {
  const [folders, setFolders] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");

  useEffect(() => {
    // Simulated folder names (replace this with an API call if needed)
    const folderNames = [
      "AICTE", "AWS", "Cisco", "Coursera", "EC-Council", "Geekstar",
      "GUVI", "INFOSYS", "INTERNSHALA", "Internship", "ISTE",
      "Linkedin", "MICROSOFT", "NPTEL", "OTHERS", "SCALER",
      "TCS", "TRYHACKME", "UDEMY", "ZSCALER"
    ];
    setFolders(folderNames);
    setSelectedFolder(folderNames[0]);
  }, []);

  useEffect(() => {
    if (selectedFolder) {
      // Simulate fetching certificate images
      const certificateImages = Array.from({ length: 5 }, (_, i) => (
        `/certificates/${selectedFolder}/cert${i + 1}.jpg`
      ));
      setCertificates(certificateImages);
    }
  }, [selectedFolder]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <Tabs defaultValue={folders[0]} onValueChange={setSelectedFolder}>
        {/* Tabs Navigation */}
        <TabsList className="flex space-x-2 bg-gray-800 p-2 rounded-lg">
          {folders.map((folder) => (
            <TabsTrigger
              key={folder}
              value={folder}
              className={`px-4 py-2 rounded-lg ${selectedFolder === folder ? "bg-blue-500" : "bg-gray-700"}`}
            >
              {folder}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Carousel */}
        <TabsContent className="mt-6 w-full max-w-3xl">
          <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>
            {certificates.map((cert, index) => (
              <SwiperSlide key={index}>
                <img src={cert} alt={`Certificate ${index + 1}`} className="w-full h-96 object-contain" />
              </SwiperSlide>
            ))}
          </Swiper>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CertificateGallery;
