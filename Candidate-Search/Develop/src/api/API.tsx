// import axios from 'axios';

// Define types for GitHub user
interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  location?: string;
  email?: string;
  company?: string;
}

// Utility function to handle fetch with error checking
const fetchGithub = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Invalid API response, check the network tab');
  }

  return await response.json();
};

const searchGithub = async (): Promise<GithubUser[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const data = await fetchGithub(`https://api.github.com/users?since=${start}`);
    return data;
  } catch (err) {
    console.error('Error fetching candidates:', err);
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<GithubUser | {}> => {
  try {
    const data = await fetchGithub(`https://api.github.com/users/${username}`);
    return data;
  } catch (err) {
    console.error('Error fetching user:', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };

