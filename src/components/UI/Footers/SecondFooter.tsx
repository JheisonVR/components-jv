
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function SecondFooter() {
  return (
    <Footer container>
      <FooterCopyright href="#" by="Zodev™" year={2025} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
