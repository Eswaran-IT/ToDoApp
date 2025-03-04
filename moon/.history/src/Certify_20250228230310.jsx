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
    // List of organization folders (you can extend or modify as per your need)
    const folderNames = [
      "AICTE", "AWS", "Cisco", "Coursera", "EC-Council", "Geekstar",
      "GUVI", "INFOSYS", "INTERNSHALA", "Internship", "ISTE",
      "Linkedin", "MICROSOFT", "NPTEL", "OTHERS", "SCALER",
      "TCS", "TRYHACKME", "UDEMY", "ZSCALER"
    ];
    setFolders(folderNames);
    setSelectedFolder(folderNames[0]); // Set default folder to the first one
  }, []);

  useEffect(() => {
    if (selectedFolder) {
      // Dynamically fetch all jpg & jpeg images from the selected folder
      const certificateImages = [];
      
      // List images dynamically, assuming all certificates are in "public/certificates/{folder}"
      const getCertificateImages = async () => {
        try {
          // Here, simulate fetching certificates from the selected folder dynamically
          const response = await fetch(`/certificates/${selectedFolder}/`);
          if (!response.ok) {
            throw new Error("Failed to fetch certificates");
          }
          const files = await response.json(); // Assume the server returns a list of image filenames (jpg/jpeg)

          // Filter for jpg/jpeg images and construct full paths
          files.forEach(file => {
            if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
              certificateImages.push(`/certificates/${selectedFolder}/${file}`);
            }
          });

          setCertificates(certificateImages);
        } catch (error) {
          console.error("Error loading certificates:", error);
        }
      };

      getCertificateImages();
    }
  }, [selectedFolder]);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 text-white overflow-hidden">
      {/* Tabs Section */}
      <Tabs defaultValue={folders[0]} onValueChange={setSelectedFolder} className="w-full">
        <TabsList className="flex overflow-x-auto space-x-2 bg-white p-2 rounded-t-lg scrollbar-hide">
          {folders.map((folder) => (
            <TabsTrigger
              key={folder}
              value={folder}
              className={`px-6 py-2 text-sm rounded-lg transition-colors font-semibold ${
                selectedFolder === folder ? "bg-purple-600 text-white" : "bg-purple-200 text-purple-700 hover:bg-purple-300"
              }`}
            >
              {folder}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Certificate Carousel */}
        <TabsContent className="flex-grow flex items-center justify-center w-full overflow-hidden">
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
                  onError={(e) => (e.target.style.display = "none")}  // Handle missing images gracefully
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
