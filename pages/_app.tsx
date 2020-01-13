import App, { Container } from "next/app";
import Page from "../components/Page";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";
import { faWeight, faUser } from "@fortawesome/free-solid-svg-icons";

faLibrary.add(faWeight, faUser);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default MyApp;
