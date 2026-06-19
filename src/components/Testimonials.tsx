import { Star } from "lucide-react";
import { motion } from "motion/react";

export function Testimonials() {
  const reviews = [
    {
      name: "Carlos Mendoza",
      role: "CEO, TechRetail S.L.",
      comment:
        "Nexora transformó nuestra plataforma e-commerce en una máquina de ventas inteligente. El sistema de recomendaciones por IA duplicó nuestro ticket medio.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAbnwi7RnrthtFqPHxGgTl2D3NBpE-uudnKeQk7QbK1ZF8VOErMMCAeJA025BO5_aISXCHlvr2sKPAVPpINCNb8XPNl2XtqVF4TYIm5Ahs2VTr0Ru41IYxcB-qFaIQEIgwzzyuG2Thft29TWrsf2lI1nQqVo_hL8zD5LGBa6SRSwHZQDzD1ppvbRc1nZAsXefbcDP9_GyDu8WVpX8TYKi1lucWrxt5KODxH9gRKpyf-95yxJxJCA5y7ooBIFpTLno6N2TE_qi7Iaas",
    },
    {
      name: "Elena Rivas",
      role: "Fundadora, NovaScale",
      comment:
        "La integración de IA generativa para el servicio al cliente ha sido impecable. Redujimos el tiempo de respuesta de horas a milisegundos y aumentamos el NPS.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAnIrxMgd2SbxT8YqhnBJ3NTTW-L6LKH7kEmWPr12QaANh-MPXZ2Uy9kPE9ftGQU4-189CUXA_OUxrsfsVGQJst3AxI7dgJYS9V6MXK582PUk19hIGPTj5rpGELhZ9kl33FN0eihTWah7YrI5XuhrL4YM8H00bWcHCV36kVZfLQqlHWCUl5ASLNbUVJ1cFR964OvxtfihZ9zO6nPT9xe6pJXfYEAEatH_UJxoW0SJD8WndKjUMzdH-vK8nC-OD7n4XuatDeatFPENY",
      featured: true,
    },
    {
      name: "Julian Weber",
      role: "CTO, DataForge Labs",
      comment:
        "Excelencia técnica y visión estratégica. Entienden los problemas reales del negocio y proponen soluciones de software avanzadas que realmente funcionan en producción.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDqaRYKYoclYL55gCxUDh2iEOOLclqREVDog3SBKHHauAEGBjR_bY_ovCBE7z5r0QJi7aYulddUnPOUwUr7CVSFDc6GN7Wdjgx6dsaGNpyng8NBCVVxvIqw74D08Jgq9az5wXB6CR1mR3UqVhmB2qR7y1ZfLQ60PBpHmYh0sGZg-KtggfZa66M4T--i4h_NZUDCAq83PVXq7Q0YTYZtjFPZ1NsFynViN8WagDLIBuU_SzKiTFpxBgpBqxlpgDNOLy3-M4WLQCl_oTA",
    },
  ];

  return (
    <section id="reseñas" className="py-24 relative overflow-hidden bg-surface-container-lowest/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#4cd7f6] uppercase block mb-3">
            CASOS DE ÉXITO
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-on-surface tracking-tight">
            Lo que dicen nuestros partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-panel p-8 rounded-3xl relative flex flex-col justify-between hover:border-secondary/35 transition-all duration-300 ${
                rev.featured
                  ? "border-primary/20 bg-primary-container/5 shadow-[0_0_25px_rgba(124,58,237,0.15)]"
                  : ""
              }`}
            >
              <div>
                {/* 5 Stars using Lucide */}
                <div className="flex gap-1 text-secondary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="font-sans text-base text-on-surface italic leading-relaxed mb-8">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30 flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={rev.avatar}
                    referrerPolicy="no-referrer"
                    alt={`Avatar de ${rev.name}`}
                  />
                </div>
                <div>
                  <p className="font-sans font-bold text-on-surface text-sm">{rev.name}</p>
                  <p className="font-mono text-[11px] text-on-surface-variant uppercase mt-0.5">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
