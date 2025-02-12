import { Controller, Get, Post, Body, Ctx } from 'routing-controllers'
import { IsString, Length } from 'class-validator'
import { responseService } from '../service'
import { Context } from 'koa'

class CreateUserRequest {
  @IsString()
  @Length(1, 50)
    name: string | undefined

  @IsString()
  @Length(6, 20)
    password: string | undefined
}

@Controller('/base')
export class UserController {

  @Get('/get')
  public getUser() {
    // throw new Error('asdsad')

    return responseService.success(new Date().toString())
  }
  @Post('/post')
  public postUser(@Ctx() ctx: Context) {
    // throw new Error('asdsad')
    ctx.cookies.set('token', Math.random().toString(), {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'none',
      secure: true
    })

    return responseService.success(new Date().toString())
  }

  @Post('/save')
  public createUser(@Body() body: CreateUserRequest) {

    // @typescript-eslint/ban-ts-comment
    let aa: any = {}
    aa = null
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(aa.aa)

    return responseService.success(body)
  }

}
