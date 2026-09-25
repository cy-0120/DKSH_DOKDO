'use client';

import { useState } from 'react';

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="faq-item__q-label">Q.</span>
        <span className="faq-item__q-text">{item.q}</span>
        <span className="faq-item__icon" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      <div className="faq-item__answer-wrap">
        <div className="faq-item__answer-inner">
          <div className="faq-item__answer">
            <span className="faq-item__a-label">A.</span>
            <p className="faq-item__a-text">
              {item.a}
              {item.link && (
                <>
                  {' '}
                  <a href={item.link.href} className="faq-item__link">
                    {item.link.label} →
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <FaqItem item={item} key={item.q} />
      ))}
    </div>
  );
}
