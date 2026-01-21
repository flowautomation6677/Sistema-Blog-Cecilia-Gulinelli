"use client"

import { Target, Eye, Handshake } from "lucide-react"
import { motion } from "framer-motion"

const items = [
    {
        icon: Target,
        title: "Nossa Missão",
        description: "Resgatar dignidade das pessoas através da advocacia sobretudo atendimento humanizado.",
    },
    {
        icon: Eye,
        title: "Nossa Visão",
        description: "Promover serviços jurídicos de qualidade, a fim de auxiliar os clientes a alcançar seus objetivos de forma eficaz e inovadora, através de advogados e colaboradores qualificados, valorizados e dedicados a preservar a credibilidade construída a mais de uma década.",
    },
    {
        icon: Handshake,
        title: "Nossos Valores",
        description: "Ética, Integridade, Excelência, Transparência e Humanização.",
    },
]

export function MissionVisionValues() {
    return (
        <section className="py-20 bg-[#F5F5F0] border-t border-gold-500/20">
            <div className="container px-4 md:px-8 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white border-2 border-gold-500/30 p-8 text-center hover:border-gold-500 transition-colors duration-300 shadow-sm"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-gold-500/10 text-gold-600">
                                    <item.icon className="w-10 h-10" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif text-green-900 mb-4 font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
