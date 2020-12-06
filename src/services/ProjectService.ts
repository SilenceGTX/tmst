import { Project } from "../models";

export class ProjectService {
    public static async getAll(): Promise<Project[] | null> {
        var projects = null;
        projects = await Project.findAll({});
        return projects;
    }
}