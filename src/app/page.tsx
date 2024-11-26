import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";


export default async function Home() {

  const user = await prisma.user.findMany();

  console.log(user);

  return (
    <div>
      <Button size="lg">Hello</Button>
    </div>
  );
}
