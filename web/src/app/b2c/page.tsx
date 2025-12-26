"use client"

import { Hero } from "@/components/hero"
import { MultiStepForm } from "@/components/multi-step-form"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Clock, ShieldAlert, BadgeCheck } from "lucide-react"

export default function B2CPage() {
    const steps = [
        {
            id: "profile",
            title: "Seu Perfil",
            fields: [
                { name: "gender", label: "Gênero (M/F)", placeholder: "M ou F" },
                { name: "age", label: "Idade Atual", type: "number", placeholder: "Ex: 58" },
            ],
        },
        {
            id: "history",
            title: "Histórico de Trabalho",
            fields: [
                { name: "contributionTime", label: "Tempo de Contribuição (Anos)", type: "number", placeholder: "Ex: 30" },
                { name: "specialTime", label: "Tempo Especial (Insalubre/Perigoso)", type: "number", placeholder: "Ex: 10 (Se houver)" },
            ],
        },
        {
            id: "contact",
            title: "Ver Resultado",
            fields: [
                { name: "name", label: "Seu Nome", placeholder: "Maria Souza" },
                { name: "whatsapp", label: "WhatsApp para Contato", placeholder: "(11) 99999-9999" },
            ],
        },
    ]

    const handleComplete = (data: any) => {
        console.log("Form Data:", data)
        alert("Dados recebidos! Um especialista analisará seu caso e entrará em contato pelo WhatsApp.")
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <Hero
                title="Não Deixe Dinheiro na Mesa do INSS"
                subtitle="Garanta a Melhor Aposentadoria possível. O INSS não avisa se você tem direito a receber mais."
                ctaText="Fazer Cálculo Agora"
                variant="b2c"
            />

            <section className="container max-w-5xl mx-auto px-4 -mt-10 relative z-10">
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    <Card className="bg-card/95 backdrop-blur border-t-4 border-t-destructive shadow-lg">
                        <CardHeader className="items-center text-center">
                            <ShieldAlert className="h-8 w-8 text-destructive mb-2" />
                            <CardTitle className="text-lg">Regras Novas</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            A Reforma da Previdência mudou tudo. Um pedido feito errado pode reduzir seu benefício em até 40% para sempre.
                        </CardContent>
                    </Card>
                    <Card className="bg-card/95 backdrop-blur border-t-4 border-t-primary shadow-lg">
                        <CardHeader className="items-center text-center">
                            <Clock className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="text-lg">Tempo Especial</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            Converteu seu tempo de trabalho em ambiente nocivo? Isso pode antecipar sua aposentadoria em anos.
                        </CardContent>
                    </Card>
                    <Card className="bg-card/95 backdrop-blur border-t-4 border-t-gold-500 shadow-lg">
                        <CardHeader className="items-center text-center">
                            <BadgeCheck className="h-8 w-8 text-gold-600 mb-2" />
                            <CardTitle className="text-lg">Análise de CNIS</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground text-center">
                            Identificamos "buracos" e pendências no seu extrato que o INSS costuma ignorar na hora de conceder o benefício.
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl font-bold text-primary">Planejamento é Segurança</h2>
                        <div className="space-y-4">
                            <p className="text-lg text-muted-foreground">
                                Não se aposente no escuro. Fazemos um estudo completo da sua vida laboral para projetar o melhor momento e o melhor valor de benefício.
                            </p>
                            <ul className="space-y-3">
                                {["Simulação de 3 cenários de renda futura", "Correção de vínculos no CNIS", "Averbação de tempo rural ou militar", "Planejamento tributário para autônomos"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1 w-full" id="calculadora">
                        <MultiStepForm
                            title="Calculadora de Pré-Requisitos"
                            description="Verifique agora se você já pode se aposentar ou o que falta."
                            steps={steps}
                            onComplete={handleComplete}
                            submitText="Receber Análise Gratuita"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
