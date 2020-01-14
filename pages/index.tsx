import styled from "styled-components";
// import TeamData from '../public/static/data/team.json'

// interface Member {
//   name:    string;
//   position:     string;
//   url: string;
// }

// interface Team {
//   member: object;
// }

// const data = Object.keys(TeamData).sort().map(d=>{
//    const output: Member = TeamData[d];
//    return output;
// })

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
    cursor: pointer;
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
          <IconContainer src="/static/logos/weight1.svg" />
          <IconContainer src="/static/logos/weight2.svg" />
          <IconContainer src="/static/logos/weight3.svg" />
          <IconContainer src="/static/logos/weight4.svg" />
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
        <h3>Who we are</h3>
      </div>
    </div>

    <WhoWeAreContainer>
      <div
        className="person-container"
        onClick={() => window.open("https://lokchan.com")}
      >
        <img src="/static/headshots/chan.png" />
        <h2>Lok Chan</h2>
        <p>Postdoctoral Fellow, Duke University</p>
      </div>
      <div
        className="person-container"
        onClick={() =>
          window.open(
            "https://portal.research.lu.se/portal/en/persons/christian-dahlman(4478d81c-432c-49e9-94ce-91d7daf77120).html"
          )
        }
      >
        <img src="/static/headshots/dahlman.png" />
        <h2>Christian Dahlman</h2>
        <p>Professor of Law, Lund University</p>
      </div>
      <div
        className="person-container"
        onClick={() => window.open("https://www.marcellodibello.com/")}
      >
        <img src="/static/headshots/dibello.png" />
        <h2>Marcello Di Bello</h2>
        <p> Assistant Professor of Philosophy, Lehman College CUNY</p>
      </div>
      <div
        className="person-container"
        onClick={() => window.open("https://fitelson.org")}
      >
        <img src="/static/headshots/fitelson.png" />
        <h2>Branden Fitelon</h2>
        <p>Distinguish Professor of Philosophy, Northeastern University </p>
      </div>
      <div
        className="person-container"
        onClick={() =>
          window.open("https://sites.google.com/site/georgigardiner/")
        }
      >
        <img src="/static/headshots/gardiner.png" />
        <h2>Georgi Gardiner</h2>
        <p>Assistant Professor of Philosophy, University of Tennesse</p>
      </div>
      <div
        className="person-container"
        onClick={() =>
          window.open("https://philpeople.org/profiles/marion-clara-vorms")
        }
      >
        <img src="/static/headshots/vorms.png" />
        <h2>Marion Vorms</h2>
        <p>Senior Lecturer in Philosophy, University Paris 1</p>
      </div>
    </WhoWeAreContainer>
  </FrontPageGrid>
);
