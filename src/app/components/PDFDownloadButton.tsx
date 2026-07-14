import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, Loader2 } from 'lucide-react';
import { CVPDF } from './CVPDF';
import { useState, useEffect } from 'react';

export const PDFDownloadButton = () => {
  // Prevents server-side rendering issues with React 18.3.1
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading state while component is mounting
  if (!isClient) {
    return (
      <div className="fixed bottom-8 right-8 z-50 bg-[#f3ec86] text-black px-4 py-3 rounded-full shadow-lg flex items-center gap-2 font-medium no-print opacity-50 cursor-default">
        <Loader2 size={20} className="animate-spin" />
        <span className="hidden sm:inline">Loading...</span>
      </div>
    );
  }

  return (
    <PDFDownloadLink
      document={<CVPDF />}
      fileName="josiane-pizzetti-cv.pdf"
      className="fixed bottom-8 right-8 z-50 bg-[#f3ec86] text-black px-4 py-3 rounded-full shadow-lg hover:bg-[#e5de77] transition-all duration-200 hover:scale-105 flex items-center gap-2 font-medium no-print"
    >
      {({ loading, error }) => {
        // Handle PDF generation errors
        if (error) {
          console.error('PDF Error:', error);
          return (
            <>
              <Download size={20} />
              <span className="hidden sm:inline">Try again</span>
            </>
          );
        }

        // Show loading state during generation
        if (loading) {
          return (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span className="hidden sm:inline">Generating PDF...</span>
            </>
          );
        }

        // Default state - ready to download
        return (
          <>
            <Download size={20} />
            <span className="hidden sm:inline">Download PDF</span>
          </>
        );
      }}
    </PDFDownloadLink>
  );
};