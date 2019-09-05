import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "workspaceNameFilter"
})
export class WorkspaceNameFilter implements PipeTransform {
    transform(spaces: any, searchString?: string): any {
        if (!searchString) {
            return spaces;
        } else {
            var filtered = spaces.filter((space) => {
                let name = space.workspaceName.toLowerCase();
                let string = searchString.toLowerCase();
                return name.includes(string);
            });
            return filtered;
        }
    }
}
