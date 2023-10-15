import { PrismaClient } from "@prisma/client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

async function getShows() {
  const prisma = new PrismaClient()
  const shows = await prisma.show.findMany()
  return shows
}

export default async function Schedule() {
  const shows = await getShows()

  return (
    <main className="h-screen">
      <h2 id='header-route'>/schedule</h2>
      <div id='content'>
        <div className='w-1/2 mx-auto pt-10'>
          <h2 className='font-semibold text-2xl'>Scheduled Shows</h2>
          <p className='pt-5'>Here is a list of my upcoming scheduled shows.  Come see me perform live sometime!</p>
          <Table className='mt-10'>
            <TableCaption>A list of Jake's current scheduled shows.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Club</TableHead>
                <TableHead>Where</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shows.map((show) => (
                <TableRow key={show.id}>
                  <TableCell className="font-medium">{show.club}</TableCell>
                  <TableCell>{show.location}</TableCell>
                  <TableCell>{show.when}</TableCell>
                  <TableCell className="text-right">{show.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}