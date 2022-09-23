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
// pls dont abuse this token it only has a public repo scope and it has a rate limit
const token = decodeURIComponent(
  atob("Z2hwX3V1YmN4UzNJZ3kwc1JqTkZFdWllZTZMQ2JFeXcwbzBlR1Njdw==")
);

const projectsBox = document.getElementById("projects");

fetch("https://api.github.com/graphql", {
  body: JSON.stringify({ query }),
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  method: "POST",
})
  .then((r) => r.json())
  .then((r) => {
    const p = r.repositoryOwner.itemShowcase.items.edges.map(
      (edge) => edge.node
    );

    p.forEach((proj) => {
      const info = document.append(
        `<h2>${proj.name}</h2>
         <p>${proj.description} -- <a href="${proj.url}">Link</a></p>`
      );
      projectsBox.appendChild(info);
    });
  });
