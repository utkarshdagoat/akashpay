import { Application } from "@/interfaces/dashboard.interface";
import { CreateAndUpdateApplicationDto } from "@/dtos/dashboard.dto";
export declare class DashboardService {
    app: import(".prisma/client").Prisma.applicationDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation, import("@prisma/client/runtime").DefaultArgs>;
    getApplications(userId: number): Promise<Application[]>;
    createApplication(data: CreateAndUpdateApplicationDto, userId: number): Promise<Application>;
    updateApplication(data: CreateAndUpdateApplicationDto, id: number): Promise<Application>;
    deleteApplication(id: number): Promise<Application>;
    deleteAll(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
