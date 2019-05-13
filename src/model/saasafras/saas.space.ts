import { Space } from '../podio/space';
import { $Application } from './saas.application';
export class $Space {
    constructor(
        public workspaceName: string,
        public workspaceId: Number,
        public podioSpace: Space,
        public apps: $Application[]) { }
}
