import 'reflect-metadata';
import {Controller, Param, Body, Get, Post, Put, Delete, Render} from 'routing-controllers';

@Controller()
export class UserController {
    @Get('/')
    @Render('index')
    index() {
        return {
            title: 'Express'
        };
    }
}