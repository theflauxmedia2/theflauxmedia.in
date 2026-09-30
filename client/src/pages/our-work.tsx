import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ExternalLink } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterStrip from "@/components/footer-strip";

interface VideoItem {
  title: string;
  thumbnail: string;
  link: string;
  description: string;
  format: "landscape" | "portrait";
  tags: string[];
}

interface CreativeItem {
  title: string;
  image: string;
  description: string;
}

interface WorksData {
  videos: VideoItem[];
  creatives: CreativeItem[];
}

export default function OurWork() {
  const [activeTab, setActiveTab] = useState<"videos" | "creatives">("videos");
  const [worksData, setWorksData] = useState<WorksData>({ videos: [], creatives: [] });
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<CreativeItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorksData = async () => {
      try {
        const response = await fetch("/works.json");
        const data = await response.json();
        setWorksData(data);
      } catch (error) {
        console.error("Error fetching works data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorksData();
  }, []);

  const getAutoThumbnail = (video: VideoItem): string | null => {
    if (video.thumbnail) return video.thumbnail;
    try {
      // YouTube Shorts e.g. https://youtube.com/shorts/VIDEO_ID
      const ytShortsMatch = video.link.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
      if (ytShortsMatch && ytShortsMatch[1]) {
        return `https://img.youtube.com/vi/${ytShortsMatch[1]}/hqdefault.jpg`;
      }
      // YouTube embed e.g. https://www.youtube.com/embed/VIDEO_ID
      const ytMatch = video.link.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
      if (ytMatch && ytMatch[1]) {
        return `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
      }
      // Vimeo embed e.g. https://player.vimeo.com/video/VIDEO_ID
      const vimeoMatch = video.link.match(/vimeo\.com\/video\/(\d+)/);
      if (vimeoMatch && vimeoMatch[1]) {
        return `https://vumbnail.com/${vimeoMatch[1]}.jpg`;
      }
    } catch {}
    return null;
  };

  const getEmbedUrl = (video: VideoItem): string => {
    try {
      // YouTube Shorts e.g. https://youtube.com/shorts/VIDEO_ID
      const ytShortsMatch = video.link.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
      if (ytShortsMatch && ytShortsMatch[1]) {
        return `https://www.youtube.com/embed/${ytShortsMatch[1]}?autoplay=1&mute=0`;
      }
      // YouTube embed e.g. https://www.youtube.com/embed/VIDEO_ID
      const ytMatch = video.link.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
      if (ytMatch && ytMatch[1]) {
        // Add autoplay to existing embed URL
        const hasParams = video.link.includes('?');
        return `${video.link}${hasParams ? '&' : '?'}autoplay=1&mute=0`;
      }
      // Vimeo embed e.g. https://player.vimeo.com/video/VIDEO_ID
      const vimeoMatch = video.link.match(/vimeo\.com\/video\/(\d+)/);
      if (vimeoMatch && vimeoMatch[1]) {
        // Add autoplay to Vimeo URL
        const hasParams = video.link.includes('?');
        return `${video.link}${hasParams ? '&' : '?'}autoplay=1`;
      }
    } catch {}
    return video.link; // Fallback to original link
  };

  const openVideoModal = (video: VideoItem) => {
    setSelectedVideo(video);
    if (typeof document !== 'undefined') {
      document.body.classList.add('modal-open');
    }
  };

  const openImageModal = (creative: CreativeItem) => {
    setSelectedImage(creative);
    if (typeof document !== 'undefined') {
      document.body.classList.add('modal-open');
    }
  };

  const closeModals = () => {
    setSelectedVideo(null);
    setSelectedImage(null);
    if (typeof document !== 'undefined') {
      document.body.classList.remove('modal-open');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-orange-500 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Footer />
      <div className="relative z-10 min-h-screen bg-black rounded-b-[80px] md:rounded-b-[150px] mb-[100vh] shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
              Our Work
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A showcase of the brands we've partnered with and the stories we've helped bring to life — 
              through striking visuals, captivating videos, and result-driven campaigns.
            </p>
          </motion.div>

          {/* Toggle Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-gray-700">
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "videos"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Reels
              </button>
              <button
                onClick={() => setActiveTab("creatives")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "creatives"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Creatives
              </button>
            </div>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {activeTab === "videos" ? (
              worksData.videos.map((video, index) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openVideoModal(video)}
                >
                  <div className={`relative overflow-hidden rounded-lg bg-gray-900 ${video.format === 'landscape' ? 'aspect-video' : 'aspect-[9/16]'}`}>
                    {/* Thumbnail */}
                    {(getAutoThumbnail(video)) && (
                      <img
                        src={getAutoThumbnail(video) as string}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors mb-2">
                        {video.title}
                      </h3>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {video.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 rounded-full text-xs font-medium bg-pink-500/80 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                        {video.tags.length > 2 && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-600/80 text-gray-200">
                            +{video.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Format indicator */}
                    <div className="absolute top-2 right-2">
                      <div className="px-2 py-1 rounded-full text-xs font-medium bg-pink-500/80 text-white uppercase">
                        {video.format === 'landscape' ? '16:9' : '9:16'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              worksData.creatives.map((creative, index) => (
                <motion.div
                  key={creative.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openImageModal(creative)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-square">
                    {/* Image */}
                    <img
                      src={creative.image}
                      alt={creative.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Removed center open icon overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">
                        {creative.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      <FooterStrip />
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm"
            onClick={closeModals}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModals}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className={`${selectedVideo?.format === 'landscape' ? 'aspect-video max-w-3xl' : 'aspect-[9/16] max-w-sm'} mx-auto w-full`}>
                <iframe
                  src={getEmbedUrl(selectedVideo)}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white">{selectedVideo.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeModals}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModals}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-auto h-auto max-w-5xl max-h-[80vh] flex items-center justify-center bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="object-contain max-w-full max-h-[80vh]"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{selectedImage.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
