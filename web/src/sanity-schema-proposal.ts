// This schema would be used in a Sanity Studio to manage the content of the Landing Pages.

export const landingPageSchema = {
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título Interno',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: { source: 'headline', maxLength: 96 }
        },
        {
            name: 'targetAudience',
            title: 'Público Alvo',
            type: 'string',
            options: {
                list: [
                    { title: 'B2B (Empresas)', value: 'b2b' },
                    { title: 'B2C (Pessoas Físicas)', value: 'b2c' }
                ]
            }
        },
        {
            name: 'heroSection',
            title: 'Seção Hero',
            type: 'object',
            fields: [
                { name: 'headline', title: 'Headline Principal', type: 'string' },
                { name: 'subheadline', title: 'Sub-headline', type: 'text' },
                { name: 'ctaText', title: 'Texto do Botão CTA', type: 'string' }
            ]
        },
        {
            name: 'painPoints',
            title: 'Seção de Dores (Cards)',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string' },
                    { name: 'description', type: 'text' },
                    { name: 'icon', type: 'string', options: { list: ['alert', 'clock', 'check', 'chart'] } }
                ]
            }]
        },
        {
            name: 'calculatorConfig',
            title: 'Configuração da Calculadora',
            type: 'object',
            fields: [
                { name: 'title', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'steps', type: 'array', of: [{ type: 'string', title: 'Nome da Etapa' }] },
                { name: 'submitText', type: 'string' }
            ]
        },
        {
            name: 'benefits',
            title: 'Lista de Benefícios',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'ctaWhatsApp',
            title: 'Número WhatsApp (Destino)',
            type: 'string',
            description: 'Formato internacional: 5511999999999'
        }
    ]
}
