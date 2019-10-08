import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: 480px 480px;
  grid-auto-rows: 520px;
  grid-auto-flow: row; */
  /* grid-gap: 2rem; */
  justify-content: space-around;
  /* max-width: 1200px; */

  @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    /* max-width: 900px; */
  }
`;

const FlexBox = styled.div`
  background-image: ${props => `url(/static/images/${props.bg})`};
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 320px;
  height: 460px;
  /* padding: 40px; */
  margin: auto auto 4rem auto;
  /* @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    width: 100%;
    height: auto;
  } */
`;

const FlexText = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  h2 {
    margin: auto auto 5rem auto;
    font-family: ${props => props.theme.opensans};
    font-weight: 300;
    font-size: 2.3rem;
    width: 200px;
  }
  p {
    margin: 0 auto auto auto;
    font-family: ${props => props.theme.opensans};
    font-weight: 300;
    font-size: 1.8rem;
    width: 200px;
    text-transform: capitalize;
  }
`;

const Jumbo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
  background: ${props => props.theme.darkGrey};
  padding:120px 0;
  margin-bottom:120px;
  /* @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    max-width: 900px;
  } */
`;

const JumboBox = styled.div`
  width:800px;
  min-width:800px;
  /* width:100vw; */
  margin: auto;
  display:grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: min-content min-content;
  /* @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    width: 100%;
    height: auto;
  } */
`;

const WeightBox = styled.div`
  grid-column: 1/ 2;
  grid-row: 1/3;
  color: ${props => props.theme.offWhite};
  padding-right: 4rem;
  display: flex;
  svg {
    margin: auto;
  }
`;

const WOETitle = styled.h1`
  grid-column: 2/ 3;
  grid-row: 1/2;
  color: ${props => props.theme.grey};
  padding-left: 4rem;
  text-transform: uppercase;
  span {
    color: ${props => props.theme.offWhite};
  }
`;

const WOEDesc = styled.div`
  grid-column: 2/ 3;
  grid-row: 2/3;
  color: ${props => props.theme.offWhite};
  padding-left: 4rem;
`;

const TextContentContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  h2 {
    width: 800px;
    margin: auto;
    padding: 20px 0px 40px 0;
  }
  p {
    width: 800px;
    margin: auto auto 40px auto;
    padding: 20px 0px;
  }
`;

const PersonBox = styled.div`
  width:800px;
  min-width:800px;
  /* width:100vw; */
  margin: 40px auto;
  display:grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: min-content min-content;
  /* @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    width: 100%;
    height: auto;
  } */
`;

const HeadShotBox = styled.div`
  grid-column: 1/ 2;
  grid-row: 1/3;
  color: ${props => props.theme.black};
  padding-right: 4rem;
  display: flex;
  svg {
    margin: auto;
  }
`;

const PersonTitle = styled.h3`
  grid-column: 2/ 3;
  grid-row: 1/2;
  color: ${props => props.theme.black};
  padding-left: 4rem;
  /* text-transform: uppercase; */
  span {
    color: ${props => props.theme.grey};
  }
`;

const PersonDesc = styled.div`
  grid-column: 2/ 3;
  grid-row: 2/3;
  color: ${props => props.theme.black};
  padding-left: 4rem;
`;

export default () => {
  // const [hoverState, setHoverState] = useState(-1);
  return (
    // <div>test</div>
    <FlexContainer>
      <Jumbo>
        <JumboBox>
          <WeightBox>
            <FontAwesomeIcon icon="weight" />
          </WeightBox>
          <WOETitle>
            The <span>Weight</span> of Evidence Project
          </WOETitle>
          <WOEDesc>
            When someone accused of a crime is brought to trial, judges and
            jurors are tasked with deciding whether the accused should be
            convicted or acquitted. This is a difficult task. Since evidence is
            fallible, trial decisions are subject to uncertainty. How should
            judges and jurors decide in the face of uncertainty?
          </WOEDesc>
        </JumboBox>
      </Jumbo>
      <TextContentContainer>
        <h2>What is the Weight of Evidence?</h2>
        <p>
          It is not easy to decide when someone accused of a crime should be
          convicted. Since evidence is fallible, trial decisions are subject to
          uncertainty. The standard model of decision-making in economics and
          psychology recommends assessing the balance of the evidence for and
          against the accused and then taking the decision with the greatest
          expected utility. What this model overlooks is that even if the
          evidence, on balance, tips strongly against the accused, it may lack
          weight: the evidence may be incomplete or onesided. This project
          argues against the standard model by using insights from philosophy,
          law and decision theory. Different interpretive analyses – conceptual,
          textual and value-oriented – will illustrate why taking into account
          the weight of the evidence, not only its balance, is an integral part
          of rational decision-making. This will lay the groundwork for giving
          guidelines to judges and jurors on how to improve the accuracy and
          fairness of their decisions.
        </p>
        <h2>About Us</h2>
        <PersonBox>
          <HeadShotBox>
            <FontAwesomeIcon icon="user" />
          </HeadShotBox>
          <PersonTitle>
            Marcello Di Bello <span> | Project Director</span>
          </PersonTitle>
          <PersonDesc>
            Marcello Di Bello, the project director, obtained his Ph.D. in
            Philosophy in 2013 from Stanford University. He is an Assistant
            Professor in Philosophy at Herbert H. Lehman College of the City
            University of New York. During the academic year 2016-17, he was a
            fellow at the Institute for Advanced Study in Princeton. His ﬁelds
            of expertise are epistemology and the philosophy of law,
            speciﬁcally, reasoning with evidence, decision-making at trial and
            probability theory. His dissertation examined uses and abuses of
            statistics and probability in criminal trials. Di Bello has
            published on these topics and related topics in international
            peer-reviewed journals such as Mind, Philosophical Studies, Synthese
            and International Journal of Evidence and Proof.
          </PersonDesc>
        </PersonBox>
        <PersonBox>
          <HeadShotBox>
            <FontAwesomeIcon icon="user" />
          </HeadShotBox>
          <PersonTitle>
            Christian Dahlman, <span> | Project Codirector</span>
          </PersonTitle>
          <PersonDesc>
            Christian Dahlman, the project codirector, is Professor of
            Jurisprudence at Lund University in Sweden. His research focuses on
            legal evidence assessment, argumentation and decision-making. At
            Lund University, he heads the cross-disciplinary research group
            ‘Law, Evidence and Cognition,’ a collaboration between the Faculty
            of Law, the Department of Philosophy and the Department of
            Psychology. The group investigates how different kinds of evidence
            are assessed in the courts. His work has appeared in English in
            international peer-review journals such as The Review of Philosophy
            and Psychology, Ratio Juris, Argumentation and Law, Probability and
            Risk. He has also published widely in Swedish.
          </PersonDesc>
        </PersonBox>
        <PersonBox>
          <HeadShotBox>
            <FontAwesomeIcon icon="user" />
          </HeadShotBox>
          <PersonTitle>
            Branden Fitelson <span> | Collaborator</span>
          </PersonTitle>
          <PersonDesc>
            An important part of the project is to offer a conceptual map of
            existing accounts of evidential weight and develop a more adequate
            theory of the weight of evidence. This task is interdisciplinary and
            requires expertise in different subﬁelds of philosophy, law and
            economics. Branden Fitelson, Distinguished Professor of Philosophy
            at Northeastern University, will carry out the conceptual analysis
            of evidential weight bringing his expertise in formal philosophy.
            Fitelson is one of the leading scholars in formal epistemology,
            conﬁrmation theory and probability theory. He has published several
            inﬂuential articles on probabilistic analyses of evidence in
            peer-reviewed journals such as the Journal of Philosophy, Philosophy
            of Science, Philosophical Studies, Analysis, Journal of
            Philosophical Logic, Synthese and more.
          </PersonDesc>
        </PersonBox>
      </TextContentContainer>
    </FlexContainer>
  );
};
