import { TextContainer } from "@/components";

export default function Home() {

  // TODO - Implement middleware to check if the user is authenticated
  // If not authenticated, redirect to the login page
  // If authenticated, render the main content of the page
  // For now, just return a simple layout
  // Later, we will add the authentication logic

  return (
    <div className="flex justify-center items-start w-full h-full bg-no-repeat bg-cover">
      <div className="bg-white shadow-[0_8px_32px_0_#1f26875e] p-12 m-12 flex-[1] color-[#212529]">
        <h1 className="text-[2rem] justify-self-center">Inicio</h1>
        <div className="m-8">
          <h3 className="font-bold text-2xl mb-4 border-b-[2px] border-solid border-color-[#212529]">Actualizaciones</h3>
          <TextContainer title="Detalles de la actualización" date="2023-10-01" newUpdate={true} path="/updates/1" />
        </div>
      </div>
    </div>
  );
}
