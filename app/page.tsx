import Image from 'next/image'
import JakerzIcon from '../public/jakerz-icon.png'
import { PrismaClient } from '@prisma/client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"


const prisma = new PrismaClient()

async function getUsers() {
  const users = await prisma.user.findMany()
  return users
}

async function newUser() {
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

export default async function Home() {
  newUser()
  return (
    <main className="h-screen">
      <h2 id='header-route'>/</h2>
      <Image src={JakerzIcon} width={400} height={400} id='jakerz' alt='Jakerz-icon' />
      <h1 className="text-9xl mx-auto text-white">JakerzZz</h1>
      <UserTable />
    </main>
  )
}

async function UserTable() {
  const users = await getUsers()

  return(
    <div id='user-table' className='pt-10'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">userId</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
          {/**/}{/**/}
        </TableBody>
      </Table>
    </div>
  )
}