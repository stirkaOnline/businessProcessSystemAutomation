import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";
import { Card, CardTitle } from "../shared/ui/card";

export default async function Home() {
  const user = await prisma.user.findMany();

  console.log(user);

  return (
    <div>
      <Button size="lg">Hello</Button>

      {user.map((user) => {
        return (
          <Card key={user.id}>
            <CardTitle>{user.username}</CardTitle>
          </Card>
        );
      })}
    </div>
  );
}
