import { Section } from "@/app/ui/section";
import { Container } from "./ui/container";
import { Form } from "./ui/form";

export default function Home() {
  return (
    <Section>
      <Container>
        <div className="card w-full rounded-lg bg-slate-500/40 p-4">
          <Form />
        </div>
      </Container>
    </Section>
  );
}
