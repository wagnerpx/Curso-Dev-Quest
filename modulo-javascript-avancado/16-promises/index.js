// const loadUsers = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, name: "John" },
//         { id: 2, name: "Jane" },
//       ]);
//     }, 2000);
//   });
// };

// const loadRepositories = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Erro ao carregar os repositorios!");
//     }, 3000);
//   });
// };

// const loadEvents = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Erro ao carregar os eventos!");
//     }, 2000);
//   });
// };

// const loadAll = async () => {
//   try {
//     const result = await Promise.allSettled([
//         loadUsers(),
//         loadRepositories(),
//         loadEvents()]);

//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// loadAll();

const loadUsers = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error(`Github API returne status code ${response.status}`);
  }

  const user = await response.json();

  return user;
};

const loadRepositories = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );

  if (!response.ok) {
    throw new Error(`Github API returne status code ${response.status}`);
  }

  const repositories = await response.json();
  return repositories.map((repo) => ({id: repo.id, name: repo.name,}));
};

const loadEvents = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/events`
  );

  if (!response.ok) {
    throw new Error(`Github API returne status code ${response.status}`);
  }

  const events = await response.json();
  return events.map((event) => ({ id: event.id, type: event.type }));
};

const loadAll = async () => {
  try {
    const results = await Promise.all([
      loadUsers("lucaoskaique"),
      loadRepositories("lucaoskaique"),
      loadEvents("lucaoskaique"),
    ]);

    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

loadAll();
