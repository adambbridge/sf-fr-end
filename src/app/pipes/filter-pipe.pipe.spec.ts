import { WorkspaceNameFilter } from "../filter-pipe.pipe";

describe("WorkspaceNameFilter", () => {
    it("create an instance", () => {
        const pipe = new WorkspaceNameFilter();
        expect(pipe).toBeTruthy();
    });
});
