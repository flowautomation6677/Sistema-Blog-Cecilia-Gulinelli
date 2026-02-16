"use client"

import { Target, Eye, Handshake } from "lucide-react"
import { motion } from "framer-motion"

const items = [
    {
        icon: Target,
        title: "Nossa Missão",
        description: "Entregar soluções previdenciárias estratégicas com acolhimento, clareza e método, gerando segurança jurídica e resultado real aos nossos clientes, por meio de atendimento humanizado, excelência técnica, processos organizados, decisões responsáveis e compromisso permanente com qualidade, previsibilidade e zero retrabalho.",
    },
    {
        icon: Eye,
        title: "Nossa Visão",
        description: "Ser reconhecida até 2035 como um escritório jurídico de referência em Previdência Social Estratégica, pela confiança, eficiência, organização e previsibilidade dos resultados entregues, com uma estrutura profissional, escalável e financeiramente sustentável, capaz de crescer de forma contínua e planejada, mantendo crescimento anual escalável a partir de 15%, com equipe autônoma, preparada e em constante evolução, e modelo de atuação sólido, ético e independente de uma única pessoa.",
    },
    {
        icon: Handshake,
        title: "Nossos Valores",
        description: (
            <ul className="text-left list-disc list-inside space-y-1">
                <li>Humanização com técnica, respeito e responsabilidade</li>
                <li>Confiança construída com compromisso, transparência e previsibilidade</li>
                <li>Resultado com ética, estratégia e responsabilidade social</li>
                <li>Excelência como padrão, não como exceção</li>
                <li>Zero retrabalho: qualidade desde a entrada até a entrega final</li>
                <li>Autonomia com responsabilidade e tomada de decisão consciente</li>
                <li>Comunicação clara, objetiva, documentada e acessível</li>
                <li>Dono do processo: cada etapa possui responsável definido</li>
                <li>Melhoria contínua baseada em método, aprendizado e padronização</li>
            </ul>
        ),
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
                            <div className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                {item.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
