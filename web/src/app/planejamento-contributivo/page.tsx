"use client"

import { Hero } from "@/components/hero"
import { MultiStepForm } from "@/components/multi-step-form"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle2, AlertTriangle, TrendingDown, MapPin } from "lucide-react"

export default function ContributivePlanningPage() {
    const steps = [
        {
            id: "profile",
            title: "Perfil do Empresário",
            fields: [
                { name: "name", label: "Seu Nome", placeholder: "Nome Completo" },
                { name: "age", label: "Idade", type: "number", placeholder: "Ex: 45" },
                { name: "location", label: "Cidade de Atuação", placeholder: "Ex: Nova Iguaçu, RJ" },
            ],
        },
        {
            id: "contribution",
            title: "Situação Atual",
            fields: [
                { name: "prolabore", label: "Valor do Pró-labore (R$)", placeholder: "Ex: 7.500,00" },
                { name: "yearsContributing", label: "Tempo de Contribuição (Anos)", type: "number", placeholder: "Ex: 15" },
            ],
        },
        {
            id: "contact",
            title: "Contato para Análise",
            fields: [
                { name: "whatsapp", label: "WhatsApp Preferencial", placeholder: "(21) 99999-9999" },
                { name: "email", label: "E-mail Corporativo", placeholder: "seu@email.com" },
            ],
        },
    ]

    const handleComplete = (data: any) => {
        console.log("Planejamento Data:", data)
        const message = `Olá, gostaria de uma análise de Planejamento Contributivo. Me chamo ${data.name}, tenho ${data.age} anos, sou de ${data.location}. Recebo pró-labore de ${data.prolabore}.`
        window.open(`https://wa.me/5521979896499?text=${encodeURIComponent(message)}`, "_blank")
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <Hero
                title="Empresário do Rio de Janeiro: Pare de Perder Dinheiro com o INSS"
                subtitle="Pagar o teto máximo não garante aposentadoria integral. Descubra como blindar seu patrimônio e otimizar sua contribuição."
                ctaText="Calcular Meu Desperdício"
                ctaAction={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}
                variant="b2b"
                imageSrc="/cecilia-home.jpg" // Using existing image for consistency
            />

            <section className="container max-w-5xl mx-auto px-4 -mt-10 relative z-10">
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    <Card className="bg-white/95 backdrop-blur border-l-4 border-l-destructive shadow-lg">
                        <CardHeader className="items-center text-center">
                            <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
                            <CardTitle className="text-lg">O Mito do Teto</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            Contribuir sobre o teto hoje não significa receber o teto amanhã. A reforma da previdência mudou as regras do jogo.
                        </CardContent>
                    </Card>
                    <Card className="bg-white/95 backdrop-blur border-l-4 border-l-gold-500 shadow-lg">
                        <CardHeader className="items-center text-center">
                            <TrendingDown className="h-8 w-8 text-gold-600 mb-2" />
                            <CardTitle className="text-lg">Dinheiro no Ralo</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            Milhares de empresários no RJ pagam até 30% a mais do que o necessário para obter o mesmo benefício.
                        </CardContent>
                    </Card>
                    <Card className="bg-white/95 backdrop-blur border-l-4 border-l-primary shadow-lg">
                        <CardHeader className="items-center text-center">
                            <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="text-lg">Estratégia Legal</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            Ajuste seu Pró-labore e dividendos para pagar menos impostos agora e garantir a melhor aposentadoria possível.
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-2 text-gold-600 font-semibold uppercase tracking-wider text-sm">
                            <MapPin className="h-4 w-4" />
                            <span>Atendimento Especializado RJ</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Planejamento Contributivo: A Inteligência por trás da sua Aposentadoria
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                O maior erro do empresário fluminense é achar que basta assinar a guia do INSS pelo teto para estar seguro.
                            </p>
                            <p>
                                <strong>A realidade é matemática:</strong> O INSS faz uma média de todas as suas contribuições. Anos pagando o mínimo no início da carreira puxam seu benefício para baixo, mesmo que você pague o teto agora.
                            </p>
                            <p>
                                Com o <strong>Planejamento Contributivo</strong>, nós analisamos seu histórico completo e desenhamos o cenário exato: quanto pagar, por quanto tempo, e qual será o retorno real (ROI) do seu investimento previdenciário.
                            </p>
                        </div>

                        <div className="pt-4">
                            <h3 className="font-bold text-gray-900 mb-4">O que entregamos:</h3>
                            <ul className="space-y-3">
                                {[
                                    "Cálculo exato do ROI (Retorno sobre Investimento) do INSS",
                                    "Definição do valor ideal de Pró-labore x Dividendos",
                                    "Análise de tempo faltante para aposentadoria programada",
                                    "Regularização de pendências no CNIS (INSS)"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-gold-600 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1 w-full" id="calculadora">
                        <MultiStepForm
                            title="Diagnóstico de Viabilidade"
                            description="Verifique agora se você está contribuindo de forma eficiente."
                            steps={steps}
                            onComplete={handleComplete}
                            submitText="Solicitar Estudo Personalizado"
                        />
                        <p className="text-xs text-center text-muted-foreground mt-4">
                            Seus dados estão protegidos. Análise sigilosa feita por advogados especialistas.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
