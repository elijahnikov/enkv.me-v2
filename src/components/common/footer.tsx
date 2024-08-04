import { useLogSnag } from "@logsnag/next";
import { Button } from "../ui/button";
import Container from "./container";

export default function Footer() {
  const { track } = useLogSnag();

  const trackScrollToTop = () => {
    track({
      channel: "external-links",
      event: "Scroll to top click",
      icon: "⬆️",
      notify: true,
    });
  };

  return (
    <Container>
      <div className="flex items-center text-neutral-500 px-2 justify-center space-x-4 w-full text-xs">
        <p>©2024</p>
        <p>LDN, UK</p>
        <Button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            trackScrollToTop();
          }}
          className="text-xs p-0 font-normal text-neutral-500 hover:text-black dark:hover:text-white hover:no-underline	"
          variant={"link"}
        >
          BACK TO TOP
        </Button>
      </div>
    </Container>
  );
}
