import prisma from "./prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { revalidatePath } from 'next/cache'

export const newUser = async () => {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  const name = session?.user?.name

  try {
    await prisma.user.create({
      data: {
        email: email as string,
        name: name as string,
      },
    })
  } catch (error) {
    console.error(error)
  }
}