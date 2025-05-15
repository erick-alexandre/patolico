import { GiPlasticDuck } from "react-icons/gi";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#2b889b]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold">Bem-Vindo</h1>
          <GiPlasticDuck className="w-41 h-41 text-amber-300" />
          <p>Pega o pato. Erro 404, site nao encontrado!</p>
        </div>
      </div>
    </main>
  );
}
