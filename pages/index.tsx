import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const FlexContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   /* grid-template-columns: 480px 480px;
//   grid-auto-rows: 520px;
//   grid-auto-flow: row; */
//   /* grid-gap: 2rem; */
//   justify-content: space-around;
//   /* max-width: 1200px; */

//   @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
//     /* max-width: 900px; */
//   }
// `;

// const Jumbo = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   width: 100vw;
//   background: ${props => props.theme.darkGrey};
//   padding:120px 0;
//   margin-bottom:120px;
//   /* @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
//     max-width: 900px;
//   } */
// `;

// const JumboBox = styled.div`
//   width: 800px;
//   min-width: 800px;
//   /* width:100vw; */
//   margin: auto;
//   display: grid;
//   grid-template-columns: 1fr 2fr;
//   grid-template-rows: min-content min-content;
//   @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
//     width: 100wh;
//     height: auto;
//     min-width: 400px;
//   }
// `;

// const WeightBox = styled.div`
//   grid-column: 1/ 2;
//   grid-row: 1/3;
//   color: ${props => props.theme.offWhite};
//   padding-right: 4rem;
//   display: flex;
//   svg {
//     margin: auto;
//   }
// `;

// const WOETitle = styled.h1`
//   grid-column: 2/ 3;
//   grid-row: 1/2;
//   color: ${props => props.theme.grey};
//   padding-left: 4rem;
//   text-transform: uppercase;
//   span {
//     color: ${props => props.theme.offWhite};
//   }
// `;

// const WOEDesc = styled.div`
//   grid-column: 2/ 3;
//   grid-row: 2/3;
//   color: ${props => props.theme.offWhite};
//   padding-left: 4rem;
// `;

// const TextContentContainer = styled.div`
//   display: flex;
//   width: 100vw;
//   flex-direction: column;
//   h2 {
//     width: 800px;
//     margin: auto;
//     padding: 20px 0px 40px 0;
//   }
//   p {
//     width: 800px;
//     margin: auto auto 40px auto;
//     padding: 20px 0px;
//   }

//   @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
//     padding: 0 10px;
//     p {
//       width: 100vw;
//     }
//     h2 {
//       width: 100vw;
//     }
//   }
// `;

// const PersonBox = styled.div`
//   width: 800px;
//   min-width: 800px;
//   /* width:100vw; */
//   margin: 40px auto;
//   display: grid;
//   grid-template-columns: 1fr 3fr;
//   grid-template-rows: min-content min-content;
//   @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
//     width: 100wh;
//     min-width: 400px;
//     height: auto;
//     margin: 10px auto;
//   }
// `;

// const HeadShotBox = styled.div`
//   grid-column: 1/ 2;
//   grid-row: 1/3;
//   color: ${props => props.theme.black};
//   padding-right: 4rem;
//   display: flex;
//   svg {
//     margin: auto;
//   }
// `;

// const PersonTitle = styled.h3`
//   grid-column: 2/ 3;
//   grid-row: 1/2;
//   color: ${props => props.theme.black};
//   padding-left: 4rem;
//   /* text-transform: uppercase; */
//   span {
//     color: ${props => props.theme.grey};
//   }
// `;

// const PersonDesc = styled.div`
//   grid-column: 2/ 3;
//   grid-row: 2/3;
//   color: ${props => props.theme.black};
//   padding-left: 4rem;
//   @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
//     padding-left: 1rem;
//   }
// `;

// export default () => {
//   // const [hoverState, setHoverState] = useState(-1);
//   return (
//     // <div>test</div>
//     <FlexContainer>
//       <Jumbo>
//         <JumboBox>
//           <WeightBox>
//             <FontAwesomeIcon icon="weight" />
//           </WeightBox>
//           <WOETitle>
//             The <span>Weight</span> of Evidence Project
//           </WOETitle>
//           <WOEDesc>
//             When someone accused of a crime is brought to trial, judges and
//             jurors are tasked with deciding whether the accused should be
//             convicted or acquitted. This is a difficult task. Since evidence is
//             fallible, trial decisions are subject to uncertainty. How should
//             judges and jurors decide in the face of uncertainty?
//           </WOEDesc>
//         </JumboBox>
//       </Jumbo>
//       <TextContentContainer>
//         <h2>What is the Weight of Evidence?</h2>
//         <p>
//           It is not easy to decide when someone accused of a crime should be
//           convicted. Since evidence is fallible, trial decisions are subject to
//           uncertainty. The standard model of decision-making in economics and
//           psychology recommends assessing the balance of the evidence for and
//           against the accused and then taking the decision with the greatest
//           expected utility. What this model overlooks is that even if the
//           evidence, on balance, tips strongly against the accused, it may lack
//           weight: the evidence may be incomplete or onesided. This project
//           argues against the standard model by using insights from philosophy,
//           law and decision theory. Different interpretive analyses – conceptual,
//           textual and value-oriented – will illustrate why taking into account
//           the weight of the evidence, not only its balance, is an integral part
//           of rational decision-making. This will lay the groundwork for giving
//           guidelines to judges and jurors on how to improve the accuracy and
//           fairness of their decisions.
//         </p>
//         <h2>About Us</h2>
//         <PersonBox>
//           <HeadShotBox>
//             <FontAwesomeIcon icon="user" />
//           </HeadShotBox>
//           <PersonTitle>
//             Marcello Di Bello <span> | Project Director</span>
//           </PersonTitle>
//           <PersonDesc>
//             Marcello Di Bello, the project director, obtained his Ph.D. in
//             Philosophy in 2013 from Stanford University. He is an Assistant
//             Professor in Philosophy at Herbert H. Lehman College of the City
//             University of New York. During the academic year 2016-17, he was a
//             fellow at the Institute for Advanced Study in Princeton. His ﬁelds
//             of expertise are epistemology and the philosophy of law,
//             speciﬁcally, reasoning with evidence, decision-making at trial and
//             probability theory. His dissertation examined uses and abuses of
//             statistics and probability in criminal trials. Di Bello has
//             published on these topics and related topics in international
//             peer-reviewed journals such as Mind, Philosophical Studies, Synthese
//             and International Journal of Evidence and Proof.
//           </PersonDesc>
//         </PersonBox>
//         <PersonBox>
//           <HeadShotBox>
//             <FontAwesomeIcon icon="user" />
//           </HeadShotBox>
//           <PersonTitle>
//             Christian Dahlman <span> | Project Codirector</span>
//           </PersonTitle>
//           <PersonDesc>
//             Christian Dahlman, the project codirector, is Professor of
//             Jurisprudence at Lund University in Sweden. His research focuses on
//             legal evidence assessment, argumentation and decision-making. At
//             Lund University, he heads the cross-disciplinary research group
//             ‘Law, Evidence and Cognition,’ a collaboration between the Faculty
//             of Law, the Department of Philosophy and the Department of
//             Psychology. The group investigates how different kinds of evidence
//             are assessed in the courts. His work has appeared in English in
//             international peer-review journals such as The Review of Philosophy
//             and Psychology, Ratio Juris, Argumentation and Law, Probability and
//             Risk. He has also published widely in Swedish.
//           </PersonDesc>
//         </PersonBox>
//         <PersonBox>
//           <HeadShotBox>
//             <FontAwesomeIcon icon="user" />
//           </HeadShotBox>
//           <PersonTitle>
//             Branden Fitelson <span> | Collaborator</span>
//           </PersonTitle>
//           <PersonDesc>
//             An important part of the project is to offer a conceptual map of
//             existing accounts of evidential weight and develop a more adequate
//             theory of the weight of evidence. This task is interdisciplinary and
//             requires expertise in different subﬁelds of philosophy, law and
//             economics. Branden Fitelson, Distinguished Professor of Philosophy
//             at Northeastern University, will carry out the conceptual analysis
//             of evidential weight bringing his expertise in formal philosophy.
//             Fitelson is one of the leading scholars in formal epistemology,
//             conﬁrmation theory and probability theory. He has published several
//             inﬂuential articles on probabilistic analyses of evidence in
//             peer-reviewed journals such as the Journal of Philosophy, Philosophy
//             of Science, Philosophical Studies, Analysis, Journal of
//             Philosophical Logic, Synthese and more.
//           </PersonDesc>
//         </PersonBox>
//       </TextContentContainer>
//     </FlexContainer>
//   );
// };

const FrontPageGrid = styled.div`
  display: flex;
  flex-direction: column;
  .jumbo {
    width: 100%;
    background: ${props => props.theme.darkGrey};
    display: flex;
    padding: 0;
    margin: 0;
    min-height: 50vh;
    .jumbo-container {
      margin: auto;
      display: flex;
      max-width: 1200px;
      .icons {
        /* width: 50%;
        max-width: 500px; */
        display: grid;
        width: 15%;
        /* height: 400px; */
        grid-template-rows: repeat(4, 80px);
        grid-template-columns: 1fr;
        margin: auto 1rem auto 0;
        svg {
          margin: 1rem;
        }
      }
      .intro {
        width: 85%;
        display: flex;
        flex-direction: column;
        font-weight: 300;
        /* max-width: 500px; */
        margin: auto auto auto 1rem;
        p {
          margin: 1rem auto auto 2rem;
          color: white;
        }
        h1 {
          margin: 1rem auto auto 2rem;
          text-transform: uppercase;
          color: white;
          font-weight: 300;
          font-size: 4.5rem;
          .emph {
            color: rgb(217, 117, 117);
            font-weight: 700;
          }
        }
        h2 {
          margin: auto auto 1rem 2rem;
          font-weight: 300;
        }
      }
      @media (max-width: ${props => props.theme.breakpoints.w[1]}) {
        padding: 5rem 1rem;
        max-width: none;
        width: 100%;
        .icons {
          width: 15%;
          height: 400px;
          grid-template-rows: repeat(4, 1fr);
          grid-template-columns: 1fr;
          svg {
            /* font-size: 4rem; */
            margin: auto;
          }
        }
        .intro {
          max-width: 605px;
          width: 85%;
          margin: auto;
        }
        p {
          margin: 2rem 2rem;
        }
      }
    }
  }

  .texts-container {
    margin: 10rem auto 5rem auto;
    display: flex;
    max-width: 1200px;
    @media (max-width: ${props => props.theme.breakpoints.w[1]}) {
      flex-direction: column;
    }
    .intro-text {
      /* padding: 5rem 3rem; */
      display: flex;
      flex-direction: column;
      /* align-content: flex-start; */

      h3 {
        font-weight: 300;
        font-size: 2.4rem;
        margin: auto 1rem 1rem 1rem;
        padding-bottom: 1rem;
        border-bottom: ${props => `${props.theme.darkGrey} 2px solid`};
      }
      p {
        margin: 1rem 1rem 5rem 1rem;
        font-size: 1.5rem;
        font-weight: 300;
      }
      @media (max-width: ${props => props.theme.breakpoints.w[1]}) {
        padding: 2rem 1rem;
        h3 {
          margin: 2rem 1rem;
        }
      }
    }
  }
`;

const WhoWeAreContainer = styled.div`
  margin: auto;
  display: flex;
  max-width: 1200px;
  flex-wrap:wrap;
  /* @media (max-width: ${props => props.theme.breakpoints.w[1]}) {
    flex-direction: column;
  } */
  .person-container {
    margin: 2rem auto 3rem auto;
    width: 350px;
    img {
      width: 350px;
      /* max-width: 100%; */
    }
    h2 {
      margin:2rem auto .5rem auto;
    }
    p {
      margin:.5rem auto auto auto;
    }
  }
`;

const IconContainer = styled.img`
  width: 90%;
  height: 90%;
`;
export default () => (
  <FrontPageGrid>
    <div className="jumbo">
      <div className="jumbo-container">
        <div className="icons">
          <IconContainer src="/static/weight1.svg" />
          <IconContainer src="/static/weight2.svg" />
          <IconContainer src="/static/weight3.svg" />
          <IconContainer src="/static/weight4.svg" />
        </div>
        <div className="intro">
          <h1>
            The <span className="emph">Weight</span> of Evidence Project
          </h1>
          <p>
            "...new evidence increases the weight of an argument. New evidence
            will sometimes decrease the probability of an argument, but it will
            always increase its ‘weight’."
          </p>
          <p>
            John Maynard Keynes, <i>A Treatise on Probability</i> (1921)
          </p>
        </div>
      </div>
    </div>
    <div className="texts-container">
      <div className="intro-text">
        <h3>What is the weight of evidence?</h3>
        <p>
          When someone accused of a crime is brought to trial, judges and jurors
          are tasked with deciding whether or not the accused should be
          convicted. This is a difficult task. No matter how much evidence we
          collect, we will never achieve certainty. Trial decisions -- as with
          virtually all decisions-- are subject to a margin of error. The
          standard model of decision-making in economics and psychology
          recommends assessing the available evidence for and against the
          accused to estimate the likelihood of guilt and then taking the
          decision with the greatest expected utility. This model overlooks
          something important. Even if the available evidence tips strongly
          against the accused, it might be incomplete and one-sided because of
          the uneven allocation of resources between the two parties at trial.
          Imbalances of power, individual interests and other exogenous factors
          contribute to shaping the evidence. It might be that while the
          prosecutor was able to amass a large body of incriminating evidence,
          the defense lacked the resources to discover counterevidence. Before
          making a decision, then, we should be wary of the missing evidence
          that, if it had been acquired, could have shifted the balance in
          significant ways. How to develop an account of trial decision-making
          that is sensitive to potential gaps in the available evidence?
        </p>
        <h3>About us</h3>
      </div>
    </div>

    <WhoWeAreContainer>
      <div className="person-container">
        <img src="/static/marcello.png" />
        <h2>Marcello Di Bello</h2>
        <p> Assistant Professor of Philosophy, Lehman College CUNY</p>
      </div>
      <div className="person-container">
        <img src="/static/christian.png" />
        <h2>Christian Dahlman</h2>
        <p>Profesor of Law, Lund University</p>
      </div>
      <div className="person-container">
        <img src="/static/lok.png" />
        <h2>Lok Chan</h2>
        <p>Postdoctoral Fellow, Duke University</p>
      </div>
      <div className="person-container">
        <img src="/static/branden.png" />
        <h2>Branden Fitelon</h2>
        <p>Distinguish Professor of Philosophy, Northeastern University </p>
      </div>
      <div className="person-container">
        <img src="/static/georgi.png" />
        <h2>Georgi Gardiner</h2>
        <p>Assistant Professor of Philosophy, University of Tennesse</p>
      </div>
    </WhoWeAreContainer>
  </FrontPageGrid>
);
