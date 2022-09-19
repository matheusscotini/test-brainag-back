import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const matheus = await prisma.producer.upsert({
        where: { cpf: '12345678901' },
        update: {},
        create: {
            cpf: '12345678901',
            name: 'Matheus Scotini Rozario',
            farm_name: 'Matts Farm',
            city: 'Barueri',
            state: 'SP',
            total_area: 380,
            total_arable_area: 280,
            total_vegetation_area: 100,
            crops: 'Cana, Feijão, Milho',
        },
    });

    const rodrigo = await prisma.producer.upsert({
        where: { cpf: '10987654321' },
        update: {},
        create: {
            cpf: '10987654321',
            name: 'Rodrigo Monteiro',
            farm_name: 'Monteiro Farm',
            city: 'Santana de Parnaiba',
            state: 'SP',
            total_area: 250,
            total_arable_area: 150,
            total_vegetation_area: 100,
            crops: 'Arroz, Soja, Café',
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
