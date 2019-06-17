
export class SolutionVM {
    constructor(
        public appId: string,
        public name: string,
        public version: string,
        public workspaces: Object[],
        public history?: Object[]
    ){ }
    
}