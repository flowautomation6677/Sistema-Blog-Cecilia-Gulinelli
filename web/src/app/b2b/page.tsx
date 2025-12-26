"use client"

import { Hero } from "@/components/hero"
import { MultiStepForm } from "@/components/multi-step-form"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle2, AlertTriangle, TrendingDown } from "lucide-react"

export default function B2BPage() {
    const steps = [
        {
            id: "company-info",
            title: "Dados da Empresa",
            fields: [
                { name: "companyName", label: "Nome da Empresa", placeholder: "Sua Empresa Ltda" },
                { name: "employeeCount", label: "Nº de Funcionários", type: "number", placeholder: "Ex: 50" },
                { name: "revenue", label: "Faturamento Anual (Aprox)", placeholder: "Ex: 10M" },
            ],
        },
        {
            id: "pain-points",
            title: "Diagnóstico Inicial",
            fields: [
                { name: "hasLawsuits", label: "Possui Processos Trabalhistas?", placeholder: "Sim/Não" },
                { name: "fapRate", label: "Sabe sua alíquota FAP atual?", placeholder: "Se não souber, deixe em branco" },
            ],
        },
        {
            id: "contact",
            title: "Receber Análise",
            fields: [
                { name: "contactName", label: "Seu Nome", placeholder: "João Silva" },
                { name: "whatsapp", label: "WhatsApp Corporativo", placeholder: "(11) 99999-9999" },
            ],
        },
    ]

    const handleComplete = (data: any) => {
        console.log("Form Data:", data)
        alert("Obrigado! Em breve entraremos em contato com o diagnóstico preliminar.")
        // Here we would post to API
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <Hero
                title="Transforme a Folha de Pagamento em Fonte de Receita"
                subtitle="Recupere Créditos Previdenciários, gerencie o FAP/RAT e blinde sua empresa contra passivos trabalhistas ocultos."
                ctaText="Fazer Diagnóstico Gratuito"
                variant="b2b"
            />

            <section className="container max-w-5xl mx-auto px-4 -mt-10 relative z-10">
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    <Card className="bg-card/90 backdrop-blur border-l-4 border-l-destructive shadow-lg">
                        <CardHeader>
                            <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
                            <CardTitle className="text-lg">Risco Oculto</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            O Limbo Previdenciário e a má gestão de afastados podem estar custando até 5% do seu faturamento líquido anual.
                        </CardContent>
                    </Card>
                    <Card className="bg-card/90 backdrop-blur border-l-4 border-l-gold-500 shadow-lg">
                        <CardHeader>
                            <TrendingDown className="h-8 w-8 text-gold-600 mb-2" />
                            <CardTitle className="text-lg">Carga Tributária</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            Reduza drasticamente o FAP (Fator Acidentário de Prevenção) com gestão técnica e administrativa assertiva.
                        </CardContent>
                    </Card>
                    <Card className="bg-card/90 backdrop-blur border-l-4 border-l-primary shadow-lg">
                        <CardHeader>
                            <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="text-lg">Recuperação</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            Recupere verbas indenizatórias pagas indevidamente nos últimos 5 anos pela via administrativa.
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl font-bold text-primary">Por que fazer um diagnóstico?</h2>
                        <div className="space-y-4">
                            <p className="text-lg text-muted-foreground">
                                Muitas empresas pagam impostos sobre verbas que não deveriam ser tributadas. Nosso trabalho é identificar essas oportunidades e trazer dinheiro novo para o caixa da empresa.
                            </p>
                            <ul className="space-y-3">
                                {["Análise completa da Folha de Pagamento", "Identificação de verbas indenizatórias", "Redução do FAP através de contestação de nexos", "Compliance Trabalhista e Previdenciário"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-gold-600 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1 w-full" id="simulador">
                        <MultiStepForm
                            title="Simulador de Economia Tributária"
                            description="Descubra o potencial de recuperação da sua empresa em 2 minutos."
                            steps={steps}
                            onComplete={handleComplete}
                            submitText="Solicitar Análise Completa"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
