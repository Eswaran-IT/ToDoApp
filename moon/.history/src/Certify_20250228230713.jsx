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
  const [loading, setLoading] = useState(false);

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
      // Start loading state
      setLoading(true);
      
      // Dynamically fetch all jpg & jpeg images from the selected folder
      const certificateImages = [];
      
      // Simulate fetching certificates from the selected folder dynamically
      const getCertificateImages = async () => {
        try {
          // Simulate a fetch from a server (you would replace this with your server-side logic)
          const files = [
            "cert1.jpg", "cert2.jpeg", "cert3.jpg", // Example files (these would be fetched dynamically)
          ];
          
          files.forEach((file) => {
            if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
              certificateImages.push(`/certificates/${selectedFolder}/${file}`);
            }
          });

          // Set certificates after loading
          setCertificates(certificateImages);
          setLoading(false); // Stop loading once images are set
        } catch (error) {
          console.error("Error loading certificates:", error);
          setLoading(false);
        }
      };

      getCertificateImages();
    }
  }, [selectedFolder]);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 text-white overflow-hidden">
      {/* Tabs Section */}
      <Tabs defaultValue={folders[0]} onValueChange={setSelectedFolder} className="w-full">
        <TabsList className="flex justify-center space-x-4 bg-white py-3 rounded-t-lg">
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
        <TabsContent className="flex-grow w-full overflow-hidden p-4">
          <div className="space-y-8">
            {/* Displaying the selected folder name */}
            <h2 className="text-2xl font-semibold text-center mb-4">{selectedFolder} Certificates</h2>

            {/* Show loading state if certificates are being fetched */}
            {loading ? (
              <div className="text-center text-xl text-gray-300">Loading certificates...</div>
            ) : (
              // If certificates are fetched, display them in the slider
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                className="w-full max-w-3xl mx-auto"
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
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Certify;
