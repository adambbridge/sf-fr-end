import { $Space } from './saas.space';

export class Solution {
    constructor(
        public appId: string,
        public name: string,
        public version: string,
        public workspaces: $Space[]) { }
}

export class Solutions {
    constructor(public solutions: Solution[]) { }
}
