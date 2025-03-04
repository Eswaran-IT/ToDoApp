import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Certify = () => {
  const [folders, setFolders] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");

  useEffect(() => {
    // List of organizations (folders)
    const folderNames = [
      "AICTE", "AWS", "Cisco", "Coursera", "EC-Council", "Geekstar",
      "GUVI", "INFOSYS", "INTERNSHALA", "Internship", "ISTE",
      "Linkedin", "MICROSOFT", "NPTEL", "OTHERS", "SCALER",
      "TCS", "TRYHACKME", "UDEMY", "ZSCALER"
    ];
    setFolders(folderNames);
    setSelectedFolder(folderNames[0]); // Default tab
  }, []);

  useEffect(() => {
    if (selectedFolder) {
      // Dynamically fetch all jpg & jpeg images
      const maxCertificates = 20; // Adjust based on max certs per folder
      const certificateImages = [];

      for (let i = 1; i <= maxCertificates; i++) {
        certificateImages.push(`/certificates/${selectedFolder}/cert${i}.jpg`);
        certificateImages.push(`/certificates/${selectedFolder}/cert${i}.jpeg`);
      }

      setCertificates(certificateImages);
    }
  }, [selectedFolder]);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 text-white">
      {/* Tabs Section */}
      <Tabs defaultValue={folders[0]} onValueChange={setSelectedFolder} className="w-full">
        <TabsList className="flex overflow-x-auto space-x-2 bg-gray-800 p-2 rounded-t-lg scrollbar-hide">
          {folders.map((folder) => (
            <TabsTrigger
              key={folder}
              value={folder}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                selectedFolder === folder ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {folder}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Certificate Carousel */}
        <TabsContent className="flex-grow flex items-center justify-center w-full">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            className="w-full max-w-3xl"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img 
                  src={cert} 
                  alt={`Certificate ${index + 1}`} 
                  className="w-full max-h-[80vh] object-contain"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Certify;
