import BlurFade from "../magicui/blur-fade";
import Container from "./container";

export default function About() {
  return (
    <Container>
      <BlurFade>
        <p className="text-sm dark:text-neutral-400 leading-6 text-neutral-500">
          Software developer, product developer, design engineer with a keen eye
          for detail and fueled by a passion for crafting delightful experiences
          that are not only technically and functionally excellent but also
          inclusive and intuitive.
        </p>
      </BlurFade>
    </Container>
  );
}
