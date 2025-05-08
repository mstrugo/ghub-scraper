/**
 * Represents a GitHub user.
 */
export type GHUser = {
  /** The username of the user. */
  login: string;
  /** The unique ID of the user. */
  id: number;
  /** The URL of the user's avatar image. */
  avatar_url: string;
  /** The node ID of the user. */
  node_id: string;
  /** The gravatar ID of the user (if available). */
  gravatar_id: string;
  /** The API URL for the user. */
  url: string;
  /** The HTML URL for the user's profile. */
  html_url: string;
  /** The API URL for the user's followers. */
  followers_url: string;
  /** The API URL for the user's following list. */
  following_url: string;
  /** The API URL for the user's gists. */
  gists_url: string;
  /** The API URL for the user's starred repositories. */
  starred_url: string;
  /** The API URL for the user's subscriptions. */
  subscriptions_url: string;
  /** The API URL for the user's organizations. */
  organizations_url: string;
  /** The API URL for the user's repositories. */
  repos_url: string;
  /** The API URL for the user's events. */
  events_url: string;
  /** The API URL for the user's received events. */
  received_events_url: string;
  /** The type of the user (e.g., "User" or "Organization"). */
  type: string;
  /** The type of user view (custom property). */
  user_view_type: string;
  /** Whether the user is a site administrator. */
  site_admin: boolean;
  /** The user's score (optional). */
  score?: number;
};

/**
 * Represents a list of GitHub users.
 */
export type GHUserList = GHUser[];

/**
 * Represents the response of a GitHub users Search.
 */
export type GHUserSearchResultsList = {
  /** Amount of results. */
  total_count: number;
  /** The results are narrowed */
  incomplete_results: boolean;
  /** List of results. */
  items: GHUserList;
};

/**
 * Represents detailed information about a GitHub user.
 */
export type GHUserDetails = GHUser & {
  /** The full name of the user. */
  name: string | null;
  /** The company the user is associated with. */
  company: string | null;
  /** The user's blog URL. */
  blog: string | null;
  /** The user's location. */
  location: string | null;
  /** The user's email address. */
  email: string | null;
  /** Whether the user is hireable. */
  hireable: boolean | null;
  /** The user's biography. */
  bio: string | null;
  /** The user's Twitter username. */
  twitter_username: string | null;
  /** The number of public repositories the user has. */
  public_repos: number;
  /** The number of public gists the user has. */
  public_gists: number;
  /** The number of followers the user has. */
  followers: number;
  /** The number of users the user is following. */
  following: number;
  /** The date the user created their account. */
  created_at: string;
};

/**
 * Represents a GitHub repository.
 */
export type GHUserRepositories = {
  /** The unique ID of the repository. */
  id: number;
  /** The node ID of the repository. */
  node_id: string;
  /** The name of the repository. */
  name: string;
  /** The full name of the repository (e.g., "owner/repo"). */
  full_name: string;
  /** Whether the repository is private. */
  private: boolean;
  /** The owner of the repository. */
  owner: GHUser;
  /** The HTML URL for the repository. */
  html_url: string;
  /** The description of the repository. */
  description: string | null;
  /** Whether the repository is a fork. */
  fork: boolean;
  /** The API URL for the repository. */
  url: string;
  /** The API URL for the repository's forks. */
  forks_url: string;
  /** The API URL for the repository's keys. */
  keys_url: string;
  /** The API URL for the repository's collaborators. */
  collaborators_url: string;
  /** The API URL for the repository's teams. */
  teams_url: string;
  /** The API URL for the repository's hooks. */
  hooks_url: string;
  /** The API URL for the repository's issue events. */
  issue_events_url: string;
  /** The API URL for the repository's events. */
  events_url: string;
  /** The API URL for the repository's assignees. */
  assignees_url: string;
  /** The API URL for the repository's branches. */
  branches_url: string;
  /** The API URL for the repository's tags. */
  tags_url: string;
  /** The API URL for the repository's blobs. */
  blobs_url: string;
  /** The API URL for the repository's git tags. */
  git_tags_url: string;
  /** The API URL for the repository's git references. */
  git_refs_url: string;
  /** The API URL for the repository's trees. */
  trees_url: string;
  /** The API URL for the repository's statuses. */
  statuses_url: string;
  /** The API URL for the repository's languages. */
  languages_url: string;
  /** The API URL for the repository's stargazers. */
  stargazers_url: string;
  /** The API URL for the repository's contributors. */
  contributors_url: string;
  /** The API URL for the repository's subscribers. */
  subscribers_url: string;
  /** The API URL for the repository's subscription. */
  subscription_url: string;
  /** The API URL for the repository's commits. */
  commits_url: string;
  /** The API URL for the repository's git commits. */
  git_commits_url: string;
  /** The API URL for the repository's comments. */
  comments_url: string;
  /** The API URL for the repository's issue comments. */
  issue_comment_url: string;
  /** The API URL for the repository's contents. */
  contents_url: string;
  /** The API URL for the repository's compare view. */
  compare_url: string;
  /** The API URL for the repository's merges. */
  merges_url: string;
  /** The API URL for the repository's archive. */
  archive_url: string;
  /** The API URL for the repository's downloads. */
  downloads_url: string;
  /** The API URL for the repository's issues. */
  issues_url: string;
  /** The API URL for the repository's pull requests. */
  pulls_url: string;
  /** The API URL for the repository's milestones. */
  milestones_url: string;
  /** The API URL for the repository's notifications. */
  notifications_url: string;
  /** The API URL for the repository's labels. */
  labels_url: string;
  /** The API URL for the repository's releases. */
  releases_url: string;
  /** The API URL for the repository's deployments. */
  deployments_url: string;
  /** The date the repository was created. */
  created_at: string;
  /** The date the repository was last updated. */
  updated_at: string;
  /** The date the repository was last pushed to. */
  pushed_at: string;
  /** The git URL for the repository. */
  git_url: string;
  /** The SSH URL for the repository. */
  ssh_url: string;
  /** The clone URL for the repository. */
  clone_url: string;
  /** The SVN URL for the repository. */
  svn_url: string;
  /** The homepage URL for the repository. */
  homepage: string | null;
  /** The size of the repository in kilobytes. */
  size: number;
  /** The number of stargazers for the repository. */
  stargazers_count: number;
  /** The number of watchers for the repository. */
  watchers_count: number;
  /** The primary language of the repository. */
  language: string | null;
  /** Whether the repository has issues enabled. */
  has_issues: boolean;
  /** Whether the repository has projects enabled. */
  has_projects: boolean;
  /** Whether the repository has downloads enabled. */
  has_downloads: boolean;
  /** Whether the repository has a wiki. */
  has_wiki: boolean;
  /** Whether the repository has GitHub Pages enabled. */
  has_pages: boolean;
  /** Whether the repository has discussions enabled. */
  has_discussions: boolean;
  /** The number of forks for the repository. */
  forks_count: number;
  /** The mirror URL for the repository (if applicable). */
  mirror_url: string | null;
  /** Whether the repository is archived. */
  archived: boolean;
  /** Whether the repository is disabled. */
  disabled: boolean;
  /** The number of open issues for the repository. */
  open_issues_count: number;
  /** The license for the repository (if applicable). */
  license: null;
  /** Whether the repository allows forking. */
  allow_forking: boolean;
  /** Whether the repository is a template. */
  is_template: boolean;
  /** Whether web commit signoff is required. */
  web_commit_signoff_required: boolean;
  /** The topics associated with the repository. */
  topics: string[];
  /** The visibility of the repository (e.g., "public" or "private"). */
  visibility: string;
  /** The number of forks for the repository. */
  forks: number;
  /** The number of open issues for the repository. */
  open_issues: number;
  /** The number of watchers for the repository. */
  watchers: number;
  /** The default branch of the repository. */
  default_branch: string;
};
