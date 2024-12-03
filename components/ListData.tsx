import { getData } from "@/lib/actions"

const ListData = async () => {
    const data = await getData()
    //console.log(data)
  return (
    <div>
      <div className="flex gap-3">
        <h1 className="text-2xl font-bold mb-4">All Data</h1>
        <p className="text-xl text-purple-600 font-bold">{data.length}</p>
      </div>
      <div>
        {
            data.map((s) => (
                <div key={s.id} className="mb-1">{s.urgent} - {s.description} {`${s.prosthesis}` === "true" && (<span className="text-purple-600 font-bold text-sm">endoprotezas</span>)}</div>
            ))
        }
      </div>
    </div>
  )
}

export default ListData
