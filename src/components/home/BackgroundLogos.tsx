
import { useResponsive } from '@/hooks/useResponsive';

const BackgroundLogos = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      {/* Multiple Logo Backgrounds with ultra-subtle opacity */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/1acd9e00-26c7-4d47-ae6e-582e79e80298.png')`,
          backgroundSize: isMobile ? '1000px auto' : '1400px auto',
          backgroundPosition: 'center 60%'
        }}
      />
      <div 
        className="fixed inset-0 opacity-[0.008] pointer-events-none bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/1acd9e00-26c7-4d47-ae6e-582e79e80298.png')`,
          backgroundSize: isMobile ? '700px auto' : '1000px auto',
          backgroundPosition: 'left 15% top 25%'
        }}
      />
      <div 
        className="fixed inset-0 opacity-[0.008] pointer-events-none bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/1acd9e00-26c7-4d47-ae6e-582e79e80298.png')`,
          backgroundSize: isMobile ? '600px auto' : '800px auto',
          backgroundPosition: 'right 15% bottom 35%'
        }}
      />
    </>
  );
};

export default BackgroundLogos;
