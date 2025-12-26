"use client"

import { Hero } from "@/components/hero"
import { MultiStepForm } from "@/components/multi-step-form"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { XCircle, AlertOctagon, HelpCircle, FileX } from "lucide-react"

export default function BpcLoasPage() {
    const steps = [
        {
            id: "denial-reason",
            title: "Motivo da Negativa",
            fields: [
                { name: "reason", label: "O que o INSS alegou?", placeholder: "Ex: Renda acima do limite ou Deficiência não provada" },
                { name: "denialDate", label: "Quando foi negado? (Aproximado)", placeholder: "Mês/Ano" },
            ],
        },
        {
            id: "family-info",
            title: "Composição Familiar",
            fields: [
                { name: "totalIncome", label: "Renda Total da Casa (R$)", type: "number", placeholder: "Ex: 1412" },
                { name: "peopleCount", label: "Quantas pessoas moram na casa?", type: "number", placeholder: "Ex: 3" },
            ],
        },
        {
            id: "contact",
            title: "Análise Gratuita",
            fields: [
                { name: "name", label: "Nome do Requerente", placeholder: "Seu nome ou de quem precisa" },
                { name: "whatsapp", label: "WhatsApp para Contato", placeholder: "(21) 99999-9999" },
            ],
        },
    ]

    const handleComplete = (data: any) => {
        const incomePerCapita = data.totalIncome && data.peopleCount ? (data.totalIncome / data.peopleCount).toFixed(2) : "?"
        console.log("BPC Lead:", { ...data, incomePerCapita })
        alert(`Recebemos seus dados. Sua renda por pessoa aproximada é R$ ${incomePerCapita}. Um advogado analisará se cabe recurso judicial.`)
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <Hero
                title="BPC/LOAS Negado? Não desista do seu direito."
                subtitle="O INSS erra (e muito). É possível reverter o indeferimento na justiça, mesmo que tenham dito que sua renda é alta."
                ctaText="Avaliar meu Caso"
                variant="b2c"
            />

            <section className="container max-w-5xl mx-auto px-4 -mt-10 relative z-10">
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    <Card className="bg-card/95 backdrop-blur border-t-4 border-t-destructive shadow-lg">
                        <CardHeader className="items-center text-center">
                            <XCircle className="h-8 w-8 text-destructive mb-2" />
                            <CardTitle className="text-lg">Indeferimento Injusto</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            O INSS costuma negar benefícios alegando que a família não é "miserável", ignorando gastos com remédios e tratamentos.
                        </CardContent>
                    </Card>
                    <Card className="bg-card/95 backdrop-blur border-t-4 border-t-gold-500 shadow-lg">
                        <CardHeader className="items-center text-center">
                            <AlertOctagon className="h-8 w-8 text-gold-600 mb-2" />
                            <CardTitle className="text-lg">Critério de Renda</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            A justiça aceita critérios mais flexíveis que 1/4 do salário mínimo se provarmos a vulnerabilidade social.
                        </CardContent>
                    </Card>
                    <Card className="bg-card/95 backdrop-blur border-t-4 border-t-primary shadow-lg">
                        <CardHeader className="items-center text-center">
                            <FileX className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="text-lg">Perícia Médica</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            Muitas vezes o perito do INSS não é especialista na doença. Na justiça, exigimos um perito especialista.
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Não aceite o "Não" como resposta final</h2>
                        <p className="text-lg text-muted-foreground">
                            Se você tem deficiência ou é idoso (65+) e vive em situação de vulnerabilidade, o benefício é seu direito. Nossa equipe é especialista em reverter decisões administrativas do INSS.
                        </p>

                        <div className="bg-muted p-6 rounded-lg border border-gold-500/20">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                <HelpCircle className="h-5 w-5 text-gold-600" />
                                Dica Importante
                            </h3>
                            <p className="text-sm">
                                Nunca, jamais, faça um novo pedido sem antes analisar o motivo da negativa anterior. Isso pode atrasar ainda mais sua vida. O caminho correto geralmente é o Recurso ou Ação Judicial.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full" id="calculadora">
                        <MultiStepForm
                            title="Calculadora de Elegibilidade BPC"
                            description="Verifique se sua renda se enquadra nos critérios judiciais."
                            steps={steps}
                            onComplete={handleComplete}
                            submitText="Enviar para Análise"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
