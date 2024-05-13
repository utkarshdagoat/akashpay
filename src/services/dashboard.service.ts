import { Service } from "typedi";
import { PrismaClient } from "@prisma/client";
import { application } from "@/interfaces/dashboard.interface";
import { CreateAndUpdateApplicationDto } from "@/dtos/dashboard.dto";
import { randomBytes } from "crypto";
import { HttpException } from "@/exceptions/HttpException";

@Service()
export class DashboardService {
    public app = new PrismaClient().application;

    public async getApplications(userId: number): Promise<application[]> {
        const application: application[] = await this.app.findMany({
            where: {
                creatorId: userId
            }
        })
        return application;
    }

    public async createApplication(data: CreateAndUpdateApplicationDto, userId: number) {
        const findApplication: application = await this.app.findFirst({
            where:{
                name: data.name,
                creatorId: userId
            }
        });
        if (findApplication) throw new HttpException(409, `This application ${data.name} already exists`);
        const clientSecret = randomBytes(32).toString("hex");
        const createApplication: application = await this.app.create({
            data: {
                ...data,
                creatorId: userId,
                clientSecret
            }
        })
        return createApplication
    }

    public async updateApplication(data:CreateAndUpdateApplicationDto , id:number){
        const application: application = await this.app.findUnique({
            where:{
                id
            }
        })
        if (!application) throw new HttpException(400, "Application doesn't exist");
        const updateApplication: application = await this.app.update({
            where:{
                id
            },
            data:{
                ...data
            }
        })
        return updateApplication
    }

    public async deleteApplication(id:number) {
        const application: application = await this.app.findUnique({
            where:{
                id
            }
        })
        if (!application) throw new HttpException(400, "Application doesn't exist");
        const deletedApplicationData: application = await this.app.delete({
            where:{
                id
            }
        })
        return deletedApplicationData
    }
}