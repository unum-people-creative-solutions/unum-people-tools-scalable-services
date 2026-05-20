'use client';

import React, { useEffect } from 'react';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export const AdUnit: React.FC<AdUnitProps> = ({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  style = { display: 'block' },
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense initialization error:', err);
    }
  }, []);

  // Em desenvolvimento, mostramos um placeholder visual
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <div className={`ad-container my-8 w-full overflow-hidden flex justify-center ${className}`}>
      {isDev || !slot ? (
        <div 
          className="w-full max-w-[728px] h-[90px] md:h-[250px] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-xl"
          style={{ minHeight: style.minHeight || '90px' }}
        >
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Google AdSense Placeholder</p>
            {slot ? (
              <p className="text-[8px] text-gray-300 mt-1">Slot: {slot}</p>
            ) : (
              <p className="text-[8px] text-gray-300 mt-1 italic">Nenhum slot configurado</p>
            )}
          </div>
        </div>
      ) : (
        <ins
          className="adsbygoogle"
          style={style}
          data-ad-client="ca-pub-7103356380607005"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      )}
    </div>
  );
};
