"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Share2 } from "lucide-react"
import { useParams } from "next/navigation"

// Mock data content - In a real app this comes from Sanity
const blogContent: Record<string, { title: string, html: React.ReactNode }> = {
    "guia-aposentadoria-2026": {
        title: "Guia da Aposentadoria em 2026: O que muda para o trabalhador do Rio de Janeiro",
        html: (
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>A Reforma da Previdência continua impactando a vida dos trabalhadores em 2026. Para quem mora no Rio de Janeiro, o custo de vida elevado torna o planejamento previdenciário não apenas uma opção, mas uma necessidade de sobrevivência.</p>
                <h3 className="text-2xl font-bold text-primary mt-8">Regras de Transição: O "Pedágio" vale a pena?</h3>
                <p>Muitos clientes chegam ao escritório em Nova Iguaçu com a mesma dúvida: "Doutora, devo pagar o pedágio de 50% ou 100%?". A resposta, invariavelmente, depende de cálculo matemático.</p>
                <p>Em 2026, a regra de pontos exige:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Mulheres:</strong> 91 pontos</li>
                    <li><strong>Homens:</strong> 101 pontos</li>
                </ul>
                <h3 className="text-2xl font-bold text-primary mt-8">Aposentadoria Especial no RJ</h3>
                <p>Profissionais de saúde, metalúrgicos e vigilantes do Rio têm tido dificuldades com o PPP. A nova regra exige idade mínima, o que pegou muitos de surpresa. Se você tem 25 anos de atividade especial, mas ainda não tem 60 anos de idade, precisaremos converter tempo para "escapar" da regra nova.</p>
            </div>
        )
    },
    "empresas-baixada-fluminense-inss": {
        title: "Empresas na Baixada Fluminense: Como reduzir gastos com o INSS legalmente",
        html: (
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>Em tempos de crise, o caixa da empresa é rei. Mas você sabia que sua empresa em Duque de Caxias ou Nova Iguaçu pode estar pagando até 5% a mais de folha salarial por puro desconhecimento?</p>
                <h3 className="text-2xl font-bold text-primary mt-8">O Que é o RAT/FAP e por que ele importa?</h3>
                <p>O Fator Acidentário de Prevenção (FAP) é um multiplicador que pode reduzir seus impostos pela metade ou dobrá-los. Se sua empresa tem muitos afastamentos por "B91" (Auxílio Acidentário), seu FAP sobe.</p>
                <h3 className="text-2xl font-bold text-primary mt-8">Recuperação de Créditos: O Ouro Oculto</h3>
                <p>Verbas indenizatórias como aviso prévio indenizado, terço de férias indenizado e auxílio-doença (primeiros 15 dias) não devem sofrer incidência de INSS. O STJ já decidiu isso. Sua contabilidade está atualizada? Podemos recuperar os últimos 5 anos desses pagamentos indevidos.</p>
            </div>
        )
    }
}

export default function BlogPost() {
    const params = useParams()
    // Ensure slug is a string (handle array case if catch-all route, though here it's [slug])
    const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : ''

    const post = blogContent[slug] || {
        title: "Artigo não encontrado",
        html: <p>Desculpe, este conteúdo não está disponível.</p>
    }

    return (
        <article className="min-h-screen bg-background py-20">
            <div className="container max-w-3xl mx-auto px-4">
                <Button variant="ghost" className="mb-8" asChild>
                    <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Blog</Link>
                </Button>

                <header className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 border-b border-border pb-8">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Share2 className="h-4 w-4" /> Compartilhar
                        </Button>
                    </div>
                </header>

                <div className="prose pro-lg prose-gold max-w-none">
                    {post.html}
                </div>

                <div className="mt-20 p-8 bg-muted/50 rounded-xl border border-gold-500/20 text-center">
                    <h3 className="text-xl font-bold text-primary mb-4">Gostou deste artigo?</h3>
                    <p className="text-muted-foreground mb-6">
                        Ele foi escrito por especialistas em Direito Previdenciário. Se você tem dúvidas sobre o seu caso específico, fale conosco.
                    </p>
                    <Button variant="gold" size="lg" asChild>
                        <Link href="https://wa.me/5521979896499">Agendar Consulta sobre este Tema</Link>
                    </Button>
                </div>
            </div>
        </article>
    )
}
