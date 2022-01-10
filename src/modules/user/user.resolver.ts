import { IAuthUser } from './../../auth/auth.interface';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthUser, GqlAuthGuard } from 'src/auth';

import { UserService } from './user.service';
import { CreateUserInput } from './dto/input';
import { User } from './dto/output';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async verifyUser(@AuthUser() authUser: IAuthUser) {
    return this.userService.verifyUser(authUser);
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async users() {
    return this.userService.users();
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async me(@AuthUser() authUser: IAuthUser) {
    return await this.userService.me(authUser);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async createUser(
    @AuthUser() authUser: IAuthUser,
    @Args('input') input: CreateUserInput,
  ) {
    return await this.userService.createUser(authUser, input);
  }
}