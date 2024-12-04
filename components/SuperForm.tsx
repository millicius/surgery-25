import { create } from "@/lib/actions"

const SuperForm = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <form action={create}>
        <div className="mb-4 border border-gray-900">
            <textarea className="w-full outline-none p-1" name="description" placeholder="operacijos pavadinimas"></textarea>
        </div>
        <button className="bg-gray-950 py-1 px-3 text-white w-full rounded-md">Submit</button>
      </form>
    </div>
  )
}

export default SuperForm
