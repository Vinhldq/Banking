import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, Headers, HttpException } from "@nestjs/common";
import { Account, AccountInterop } from "../domain/account.domain";

@Controller('/v1/account')
export class AccountController {
    constructor(@Inject('AccountInterop')private accountInterop:AccountInterop ) {
    }
    @Get(':id')
    async getById(@Param('id') id: string, @Headers() headers: any) {
        if(!headers.authorization) {
            throw new HttpException('Unauthorized', 401);
        }
        return this.accountInterop.getById('token', id);
    }
    @Post()
    post(@Body() account:Account ) {
        return this.accountInterop.post('token', account);
    }
    @Put()
    put(@Body() account:Account ) {
        return this.accountInterop.put('token', account);
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.accountInterop.delete('token', id);
    }
    @Get()
    getAll() {
        return this.accountInterop.getAll('token');
    }
    @Post('transfer')
    transferBalance(@Body() transfer: { fromAccountId: number; toAccountId: number; amount: number; }) {
        return this.accountInterop.transferBalance('token', transfer);
    }
}
