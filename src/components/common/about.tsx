import BlurFade from "../magicui/blur-fade";
import Container from "./container";

export default function About() {
  return (
    <Container>
      <BlurFade>
        <h1 className="font-mono text-md dark:text-neutral-300 text-neutral-700">
          About
        </h1>
        <p className="text-sm dark:text-neutral-400 text-neutral-500">
          Software developer, product developer, design engineer with a keen eye
          for detail and fueled by a passion for crafting delightful experiences
          that are inclusive and intuitive.
        </p>
      </BlurFade>
    </Container>
  );
}
