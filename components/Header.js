import styled from "styled-components";
import Link from "next/link";

const StyHeader = styled.header`
  padding: 1rem 4rem 1rem 4rem;
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 0;
  /* text-transform: uppercase; */
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  background: ${props => props.theme.main};
  color: ${props => props.theme.darkGrey};
  height: 65px;
  @media (max-width: ${props => props.theme.breakpoints.w[1]}) {
    height: 65px;
  }
`;

const Logo = styled.h1`
  display: i;
  text-transform: uppercase;
  font-weight: 300;
  font-family: ${props => props.theme.muli};
  letter-spacing: 0.8rem;
  font-size: 1.8rem;
  cursor: pointer;
  max-width: 20rem;
  margin: 0;
  @media (max-width: ${props => props.theme.breakpoints.w[0]}) {
    letter-spacing: 0.8rem;
    font-size: 1.3rem;
    display: none;
  }
`;

const MenuLink = styled.a`
  margin: auto;
  text-decoration: none;
  /* font-weight: ${props => (props.active ? 400 : 300)}; */
  font-family: ${props => props.theme.opensans};
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.theme.darkGrey};
  :hover {
    text-decoration: underline;
  }
  @media (max-width: ${props => props.theme.breakpoints.w[0]}) {
    font-size: 1.6rem;
  }
`;

export default ({ active, setActive }) => {
  return (
    <StyHeader>
      <Link href="/">
        <Logo> Weight : Evidence</Logo>
      </Link>
      <Link href="/">
        <MenuLink>Home</MenuLink>
      </Link>
      <Link href="/comingsoon">
        <MenuLink>Cases</MenuLink>
      </Link>
      <Link href="/comingsoon">
        <MenuLink>Findings</MenuLink>
      </Link>
      <Link href="/comingsoon">
        <MenuLink>Publications</MenuLink>
      </Link>

      <MenuLink href="/comingsoon">About</MenuLink>
    </StyHeader>
  );
};
