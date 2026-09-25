'use client';

import { useEffect, useState } from 'react';

export default function Lightbox() {
  const [img, setImg] = useState(null);

  useEffect(() => {
    function onClick(e) {
      const target = e.target.closest('.nature-card__img');
      if (!target) return;
      setImg({ src: target.currentSrc || target.src, alt: target.alt });
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!img) return;
    function onKey(e) {
      if (e.key === 'Escape') setImg(null);
    }
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [img]);

  if (!img) return null;

  return (
    <div className="lightbox" onClick={() => setImg(null)}>
      <button className="lightbox__close" aria-label="닫기" onClick={() => setImg(null)}>
        x
      </button>
      <img
        className="lightbox__img"
        src={img.src}
        alt={img.alt}
        onClick={(e) => e.stopPropagation()}
      />
      {img.alt && <p className="lightbox__caption">{img.alt}</p>}
    </div>
  );
}
