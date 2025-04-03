import { Body, Controller, Post } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberRequest } from './dto/create-member.request';
import { Member } from './entity/member.entity';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  async create(@Body() body: CreateMemberRequest): Promise<Member> {
    return this.memberService.signUp(body);
  }
}
