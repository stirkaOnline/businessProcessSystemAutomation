import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    prisma.user.create({
        data: {
          username: 'john@email.ru'
        }
    })
    prisma.user.create({
        data: {
            email: 'john@email.ru'
        }
    })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })