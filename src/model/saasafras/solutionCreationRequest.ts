export class SolutionCreationRequest {
    constructor(public name: string, public workspaceIds: Array<Number>) {}
}
export class SolutionCreationResponse {
    constructor(public appId: string, public message: string) {}
}