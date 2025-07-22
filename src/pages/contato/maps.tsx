
export function MapSection() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "3rem", padding: "2rem" }}>
      {/* Matriz - Indaiatuba/SP */}
      <iframe
        title="Unidades S44"
        src="https://www.google.com/maps?q=R.+Senai,+775+-+Indaiatuba,+SP+e+R.+Cesar+Voltan,+19+-+Extrema,+MG&output=embed"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        />
    </section>
  );
}
