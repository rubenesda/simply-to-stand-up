import List from "./components/list";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <form className="flex flex-row justify-center py-8">
        {/* Generator */}
        <label className="mr-2">Hours: </label>
        <input className="border-2 mr-10 rounded placeholder:italic placeholder:text-slate-400" placeholder="Type number of hours"></input>
        <button className="hover:bg-gray-100 border-2 border-current rounded-md px-4" type="submit">Generate</button>
      </form>
      <div className="flex flex-row justify-center min-h-screen py-8">
        <List title="To-Do"/>
        <List title="Done"/>
      </div>
    </main>
  );
}
