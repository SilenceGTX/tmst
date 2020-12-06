import { 
    Controller, 
    Get, 
    Route
} from 'tsoa';
import { Project } from "../models/";
import { ProjectService } from "../services/ProjectService";

@Route("project")
export class ProjectController extends Controller {
    @Get("/all")
    public async getAllProjects(): Promise<Project[] | null> {
        var projects = await ProjectService.getAll()
        return projects
    }
}