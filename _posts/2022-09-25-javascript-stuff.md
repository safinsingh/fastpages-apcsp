---
toc: true
layout: post
categories: [markdown, csp, ap]
comments: true
title: JavaScript and CSS customization
permalink: /js-explanation
---

Here's the source for my "Top 4 Projects" section:

```javascript
// github graphql query
const query = `query {
        repositoryOwner(login: "safinsingh") {
            ... on ProfileOwner {
                itemShowcase {
                    items(first: 4) {
                        edges {
                            node {
                                ... on Repository {
                                    name
                                    description
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }`;

// github token stored as base64 so they dont email me and cancel my token
const token = decodeURIComponent(atob("..."));

// select projects div by id
const projectsBox = document.getElementById("projects");

// send post req to github graphql api
fetch("https://api.github.com/graphql", {
  // send query as request body
  body: JSON.stringify({ query }),
  headers: {
    Accept: "application/json",
    // use token for authorization
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  method: "POST",
})
  .then((r) => r.json())
  .then((r) => {
    const p = r.data.repositoryOwner.itemShowcase.items.edges.map((edge) => edge.node);

    // add projects to table
    p.forEach((proj) => {
      const info = document.createElement("div");
      info.innerHTML = `
        <h3><a href="${proj.url}">${proj.name}</a></h3>
                <p>${proj.description}</p>
            `;
      projectsBox.appendChild(info);
    });
  });
```

Here's the styling I added:

```scss
// 2x2 responsive grid for projects div
#projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;

  h3 {
    display: inline-block;
  }

  h3,
  p {
    margin: 0.5rem 1rem !important;
    padding: 0px !important;
  }

  div {
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    padding: 1rem;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // hover shadow
    &:hover {
      border: 1px solid #dfdfdf;
      box-shadow: 0px 2.4px 2.5px rgba(0, 0, 0, 0.009), 0px 6px 6.3px rgba(0, 0, 0, 0.013),
        0px 12.2px 12.8px rgba(0, 0, 0, 0.017), 0px 25.2px 26.3px rgba(0, 0, 0, 0.021),
        0px 69px 72px rgba(0, 0, 0, 0.03);
    }
  }
}
]
```
