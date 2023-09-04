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
import { Button } from '@/components/ui/button'

async function getUsers() {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany()
  return users
}

async function createUser() {
  const prisma = new PrismaClient()
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@gmail.com',
    },
  })
  return user
}

export default async function Home() {
  return (
    <main className="h-screen">
      <h2 id='header-route'>/Home</h2>
      <Image src={JakerzIcon} width={400} height={400} id='jakerz' alt='Jakerz-icon' />
      <h1 className="text-9xl mx-auto text-white">Jakerz</h1>
      <UserTable />
    </main>
  )
}

async function UserTable() {
  const users = await getUsers()

  return(
    <div id='user-table' className='pt-10'>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">userId</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}