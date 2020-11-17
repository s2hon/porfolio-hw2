import React from "react";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <Lettering
            title="Hi, I'm Staci."
            text={[
              "Nice to meet you.",
              "Until recently I was an event coordinator, organizing several events every week.",
              "I just started my adventure as a Full Stack Web Developer couple weeks ago.",
              "I strive to be a  confident and innovative developer that will bring an outstanding ability to bring ideas to life."
            ]}
          />
        }
      />
    </Section>
  );
});

export const Third = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#BFBFBD">
      <Background/>
      <Content
        main={
          <Lettering
            title="contact me"
          />
        }
      />
    </Section>
  );
});

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: <Home />
  },
  {
    slug: "page-two",
    className: "sectioned page-two",
    children: (
      <Page>
        <Section wrapper={false} backgroundColor="#565bc4">
          <Content
            main={
              <Lettering
                title="portfolio"
              />
            }
            action={<Mouse />}
          />
        </Section>
        <Section backgroundColor="#777bcf">
          <Lettering
            title="resume"
          />
        </Section>
      </Page>
    )
  },
  {
    slug: "contact me",
    className: "slide page-three",
    children: <Third />
  }
];
