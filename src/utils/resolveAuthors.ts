import { ProjectAuthor } from "@/types";
import { TEAM_AUTHORS } from "../data/team";

export function resolveAuthors(authorIds: string[]): ProjectAuthor[] {
  return authorIds
    .map(id => TEAM_AUTHORS[id])
    .filter(Boolean);
}