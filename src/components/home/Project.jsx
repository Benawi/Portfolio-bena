import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/benawi/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <><Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project} />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project} />
            ))}
        </Row>


      </Container>
      <div className=" text-center">

<a
  href={`https://github.com/Benawi?tab=repositories`}
  className="btn btn-outline-secondary mx-3 btn-lg"
>
  <i className="fab fa-github" /> More Latest Projects
</a>

</div>
    </Jumbotron>
   <div className="text-center my-3">
  <img
    src="https://camo.githubusercontent.com/18c3ef628d51b2d57ab61d9dbde32e6bdd6ee755186dbdbce0399038565f47bc/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d62656e617769267468656d653d726561637426686964655f626f726465723d66616c7365"
    alt="GitHub Streak Stats"
    style={{ maxWidth: "100%", height: "200px"  }}
  />
   <img
    src="https://camo.githubusercontent.com/13023374d77f1a0df13334077214bf5e05b16310d25cbd7b2c0ff564d573430b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d62656e617769267468656d653d726561637426686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374"
    alt="GitHub Streak Stats"
    style={{ maxWidth: "100%", height: "200px" }}
  />
</div>

   </>
    
  );
  
  
};

export default Project;
