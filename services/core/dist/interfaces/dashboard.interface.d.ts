export interface Application {
    id: number;
    name: string;
    description: string;
    creatorId: number;
    createdAt: Date;
    clientSecret: string;
    appId?: string;
}
