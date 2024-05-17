import { Service } from 'typedi'
import { KYC, PrismaClient } from '@prisma/client';
import { CreateKYCDto } from '@/dtos/kyc.dto';
import { HttpException } from '@/exceptions/HttpException';
import { kycStatus } from '@prisma/client';
@Service()
export class KYCService {
    public kyc = new PrismaClient().kYC;

    public async createKYC(data: CreateKYCDto, userId: number): Promise<any> {
        try {
            const findKYC = await this.kyc.findUnique({
                where: {
                    userId: userId
                }
            })
            if (findKYC) throw new HttpException(409, `KYC already exists for user ${userId}`)
            const createKYC = await this.kyc.create({
                data: {
                    userId: userId,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    dob: data.dob,
                    address: data.address,
                    city: data.city,
                    state: data.state,
                    country: data.country,
                    postalCode: data.postalCode,
                    idFront: data.idFront,
                    idBack: data.idBack,
                    selfie: data.selfie,
                    status: kycStatus.INPROCESS,
                }
            })
            return createKYC
        } catch (error) {
            console.error(error)
            throw new HttpException(500, 'Cannot create kyc at the moment')
        }

    }

    public async getKycStatus(userId: number): Promise<any> {
        try {
            const findKYC = await this.kyc.findUnique({
                where: {
                    userId: userId
                }
            })
            if (!findKYC) throw new HttpException(404, `KYC not found for user ${userId}`)
            return findKYC.status
        }catch(error){
            console.error(error)
            throw new HttpException(500, 'Cannot get kyc status at the moment')
        }
    }

    public async updateKycStatus(userId: number, status: kycStatus): Promise<any> {
        try {
            const findKYC = await this.kyc.findUnique({
                where: {
                    userId: userId
                }
            })
            if (!findKYC) throw new HttpException(404, `KYC not found for user ${userId}`)
            const updateKYC = await this.kyc.update({
                where: {
                    userId: userId
                },
                data: {
                    status: status
                }
            })
            return updateKYC.status
        }catch(error){
            console.error(error)
            throw new HttpException(500, 'Cannot update kyc status at the moment')
        }
    }
    public getKyc(userId: number): Promise<KYC> {
        return this.kyc.findUnique({
            where: {
                userId: userId
            }
        })
    }
}