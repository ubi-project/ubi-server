import { Injectable } from '@nestjs/common';
import { CreateMemberRequest } from './dto/create-member.request';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entity/member.entity';
import { Repository } from 'typeorm';
import { v7 } from 'uuid';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async signUp(body: CreateMemberRequest): Promise<Member> {
    const member = this.memberRepository.create(
      Member.from(v7(), body.email, body.password),
    );

    return this.memberRepository.save(member);
  }

  async findAll(): Promise<Member[]> {
    return this.memberRepository.find();
  }
}
