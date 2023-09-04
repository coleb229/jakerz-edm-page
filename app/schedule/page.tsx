import Image from 'next/image'
import JakerzIcon from '../../public/jakerz-icon.png'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Schedule() {
  return (
    <main className="h-screen">
      <h2 id='header-route'>/Schedule</h2>
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
              <TableRow>
                <TableCell className="font-medium text-white">The LOFT at Skyway Theatre</TableCell>
                <TableCell className='text-white'>Minneapolis, MN 55403</TableCell>
                <TableCell className='text-white'>July 26, 2023</TableCell>
                <TableCell className="text-right text-white">8pm - 2am</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-white">The LOFT at Skyway Theatre</TableCell>
                <TableCell className='text-white'>Minneapolis, MN 55403</TableCell>
                <TableCell className='text-white'>July 26, 2023</TableCell>
                <TableCell className="text-right text-white">8pm - 2am</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-white">The LOFT at Skyway Theatre</TableCell>
                <TableCell className='text-white'>Minneapolis, MN 55403</TableCell>
                <TableCell className='text-white'>July 26, 2023</TableCell>
                <TableCell className="text-right text-white">8pm - 2am</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-white">The LOFT at Skyway Theatre</TableCell>
                <TableCell className='text-white'>Minneapolis, MN 55403</TableCell>
                <TableCell className='text-white'>July 26, 2023</TableCell>
                <TableCell className="text-right text-white">8pm - 2am</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}