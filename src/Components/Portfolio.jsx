/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "News Categorization",
    description: 
    "How good are traditional machine learning approaches to text classification compared to deep learning (LLMs)? To answer this question, I scrapped data from a local news website, labeled the data, performed expository data analysis, explored with several models, and compared results. I also built an interactive demo for this project using Gradio, and a dockerized api following mlops and software engineering best principles. From myresults, I was able to infer that while transformers present a huge performance boost in terms of evaluation metrics for sequence classification tasks, we should not neglect traditional machine learning-based approaches as it leaves less carbon footprint, uses lower memory (744% less in my case), faster and produces quite good results (3.44% decrease inperformance for my case).",
    url: "https://github.com/chimaobi-okite/NLP-Projects-Competitions/tree/main/NewsCategorization",
  },
  {
    title: "Loan Default Prediction",
    description:
      "Built a model for a superficial digital lending company to improve loan delivery services by predicting in advance how long it might take a customer to fulfill a loan agreement based on past behaviors prior to taking a new loan.",
    url: "https://github.com/chimaobi-okite/Loan_Default_Prediction",
  },

  {
    title: "Decision Trees For Supervised Machine Learning - Demystifying The Workflow",
    description:
      "An article I wrote on everything you need to know about decision trees for supervised machine learning.",
    url: "https://chima.hashnode.dev/decision-trees-for-supervised-machine-learning-demystifying-the-workflow",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
