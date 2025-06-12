"use client"

import Button from "@/components/Button";

export default function Page() {
  return (
    <>
      <div className="w-custom-300 flex flex-col gap-5">
        <Button type="button" variant="primary" onClick={() => console.log("Clicou em acessar conta")}>
          Acessar conta
        </Button>
        <Button type="button" variant="secondary" onClick={() => console.log("Clicou criar conta")}>
          Criar conta
        </Button>
      </div>
    </>
  );
}