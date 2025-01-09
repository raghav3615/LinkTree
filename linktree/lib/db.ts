type User = {
  username: string;
  password: string;
  links: { title: string; url: string }[];
};

let users: User[] = [];

export function addUser(username: string, password: string) {
  users.push({ username, password, links: [] });
}

export function getUser(username: string) {
  return users.find(user => user.username === username);
}

export function updateUserLinks(username: string, links: { title: string; url: string }[]) {
  const user = getUser(username);
  if (user) {
    user.links = links;
  }
}

export function getUserLinks(username: string) {
  const user = getUser(username);
  return user ? user.links : null;
}

