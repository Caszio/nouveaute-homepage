import React from 'react';

const products = [
  {
    id: 1,
    name: 'Élégance Nocturne – Satin Drape Midi Dress',
    price: '$59',
    img: 'https://ae01.alicdn.com/kf/Sb5a9aabbaf7f4e9fa775f450b8ef3035V.jpg',
  },
  {
    id: 2,
    name: 'Luxe Velvet Blazer',
    price: '$79',
    img: 'https://ae01.alicdn.com/kf/Sc32c9d9736d94e5dbd10339e2f0a9b15H.jpg',
  },
  {
    id: 3,
    name: 'Silk Scarf with Gold Detailing',
    price: '$29',
    img: 'https://ae01.alicdn.com/kf/S58bc24a6c2694dc19369e693c59152f2W.jpg',
  },
];

export default function App() {
  return (
    <div style={{
      fontFamily: "'Playfair Display', serif",
      background: '#f9f5f0',
      color: '#5a4631',
      minHeight: '100vh',
      padding: '2rem 1rem',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Nouveauté</h1>
        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginTop: '-1rem' }}>
          Unveil the Art of Fashion
        </p>
        <button
          style={{
            marginTop: '1.5rem',
            backgroundColor: '#b28a5d',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '25px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(178,138,93,0.4)',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a17942')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#b28a5d')}
          onClick={() => window.location.href = '/collections/all'}
        >
          Shop Now
        </button>
      </header>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Trending Now
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                width: '220px',
                padding: '1rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onClick={() => alert(`You clicked on ${p.name}`)}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '0.75rem' }}
              />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{p.name}</h3>
              <p style={{ fontWeight: '700', color: '#b28a5d' }}>{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          textAlign: 'center',
          marginTop: '4rem',
          fontSize: '0.9rem',
          color: '#8a7c68',
          fontStyle: 'italic',
        }}
      >
        <p>Follow us on TikTok for exclusive drops and style tips! @nouveaute</p>
      </footer>
    </div>
  );
}
