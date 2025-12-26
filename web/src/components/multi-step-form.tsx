"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label" // Need to install or use primitive label
// I'll use a simple label for now since I didn't install the primitive.

function SimpleLabel({ className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
    return <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>{children}</label>
}

interface Step {
    id: string
    title: string
    fields: { name: string; label: string; placeholder?: string; type?: string }[]
}

interface MultiStepFormProps {
    title: string
    description?: string
    steps: Step[]
    onComplete: (data: any) => void
    submitText?: string
}

export function MultiStepForm({ title, description, steps, onComplete, submitText = "Ver Resultado" }: MultiStepFormProps) {
    const [currentStep, setCurrentStep] = React.useState(0)
    const [formData, setFormData] = React.useState<any>({})
    const [direction, setDirection] = React.useState(0)

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setDirection(1)
            setCurrentStep((prev) => prev + 1)
        } else {
            onComplete(formData)
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            setDirection(-1)
            setCurrentStep((prev) => prev - 1)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const currentStepData = steps[currentStep]

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    }

    const progress = Math.round(((currentStep + 1) / steps.length) * 100)

    return (
        <Card className="w-full max-w-lg mx-auto shadow-lg border-t-4 border-t-gold-500">
            <CardHeader>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gold-600 tracking-wider uppercase">Passo {currentStep + 1} de {steps.length}</span>
                    <span className="text-xs font-bold text-muted-foreground">{progress}% Concluído</span>
                </div>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
                <div className="h-2 w-full bg-muted rounded-full mt-4 overflow-hidden">
                    <motion.div
                        className="h-full bg-gold-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </CardHeader>
            <CardContent className="overflow-hidden p-6">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentStep}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-primary">{currentStepData.title}</h3>
                        <div className="grid gap-4">
                            {currentStepData.fields.map((field) => (
                                <div key={field.name} className="space-y-2">
                                    <SimpleLabel htmlFor={field.name}>{field.label}</SimpleLabel>
                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        type={field.type || "text"}
                                        value={formData[field.name] || ""}
                                        onChange={handleChange}
                                        autoFocus={true}
                                        className="border-input focus:border-gold-500 transition-colors"
                                    />
                                    {/* Micro-copy for Trust */}
                                    {(field.name === 'whatsapp' || field.name === 'revenue') &&
                                        <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                                            🔒 Seus dados estão protegidos e não serão compartilhados.
                                        </p>
                                    }
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </CardContent>
            <CardFooter className="flex justify-between bg-muted/20 p-6">
                <Button variant="ghost" onClick={handleBack} disabled={currentStep === 0}>
                    Voltar
                </Button>
                <Button onClick={handleNext} variant="gold" className="px-8">
                    {currentStep === steps.length - 1 ? submitText : "Próximo"}
                </Button>
            </CardFooter>
        </Card>
    )
}
