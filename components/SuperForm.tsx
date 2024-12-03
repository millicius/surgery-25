import { create } from "@/lib/actions"

const SuperForm = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <form action={create}>
        <div className="bg-purple-300 border-b border-blue-500 mb-4">
            <h1>Operacija</h1>
            <div className="flex gap-2">
                <p>planas</p>
                <input type='radio' name='urgent' value='planas' defaultChecked/>
                <p>extra</p>
                <input type='radio' name='urgent' value='extra'/>
            </div>
        </div>
        <div className="mb-4 border border-gray-900">
            <textarea className="w-full outline-none p-1" name="description" placeholder="operacijos pavadinimas"></textarea>
        </div>
        <div className="flex gap-2 mb-4">
          <label>EP</label>
          <input type="checkbox" name="prosthesis" />
        </div>
        <button className="bg-gray-950 py-1 px-3 text-white w-full rounded-md">Submit</button>
      </form>
    </div>
  )
}

export default SuperForm
