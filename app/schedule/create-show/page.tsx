import { PrismaClient } from "@prisma/client";
import { useForm } from "react-hook-form";

const prisma = new PrismaClient();

interface Show {
  id: number;
  club: string;
  location: string;
  when: string;
  time: string;
}

async function createShow(formData: any) {
  "use server"
  if (!formData.get("club") || !formData.get("location") || !formData.get("when") || !formData.get("time")) {
    return;
  }
  await prisma.show.create({
    data: {
      club: formData.get("club"),
      location: formData.get("location"),
      when: formData.get("when"),
      time: formData.get("time"),
    },
  });
}

export default async function CreateShowPage() {
  const show = await prisma.show.findFirst({});

  return (
    <main className="h-screen">
      <h2 id="header-route">/Schedule</h2>
      <div id="content">
        <div className="w-1/2 mx-auto pt-10">
          <h2 className="font-semibold text-2xl">Add a new Scheduled Show</h2>
          <p className="pt-5">Create a new show.</p>
          <form action={createShow} id="create-show">
            <div>
              <label htmlFor="club">Club</label>
              <input type="text" id="club" name="club" className="text-black" defaultValue={show.club} />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" className="text-black" defaultValue={show.location} />
            </div>
            <div>
              <label htmlFor="when">Date</label>
              <input type="text" id="when" name="when" className="text-black" defaultValue={show.when} />
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <input type="text" id="time" name="time" className="text-black" defaultValue={show.time} />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Create Show
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

