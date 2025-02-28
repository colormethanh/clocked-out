import TextInput from "./components/TextInput";

export default function Home() {
  return (
    <div className="h-[100vh] table w-full">
      <div className="h-[calc(100vh-50px)]">
        <main className="flex flex-col p-3">
          <TextInput value="Hello world" onChange={() =>console.log("changed")} />
        </main>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center h-[50px]">
        <h1> Footer </h1>
      </footer>
    </div>
  );
}
