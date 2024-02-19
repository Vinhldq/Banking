import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from "@nestjs/common";
import { Account, AccountInterop } from "../domain/account.domain";
import { InteropService } from "./base/interop/interop.service";

@Controller('/v1/account')
export class AccountController {
    constructor(@Inject('AccountInterop')private accountInterop:AccountInterop ) {
    }
    @Get(':id')
    getById(@Param('id') id: number) {
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
    delete(@Param('id') id: number) {
        return this.accountInterop.delete('token', id);
    }
    @Get()
    getAll(@Query() query: Account) {

    }
}
