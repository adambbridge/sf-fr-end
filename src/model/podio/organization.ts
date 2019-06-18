import { Space } from './space';

export class Org {
    public contract_status: string;
    public domains: string[];
    public grants_count: number;
    public image: any;
    public logo: number;
    public name: string;
    public org_id: number;
    public premium: boolean;
    public rank: number;
    public rights: string[];
    public role: string;
    public sales_agent_id: number;
    public spaces: Space[];
    public status: string;
    public tier: string;
    public type: string;
    public url: string;
    public url_label: string;
    public user_limit: number;
}
