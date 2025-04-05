import { Test, TestingModule } from '@nestjs/testing';
import { MemberController } from './member.controller';
import { CreateMemberRequest } from './dto/create-member.request';
import { MemberService } from './member.service';

describe('MemberController', () => {
  let controller: MemberController;

  beforeEach(async () => {
    const mockMemberService = {
      signUp: jest.fn().mockResolvedValue({ id: 1, email: 'hello@gmail.com' }),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberController],
      providers: [
        {
          provide: MemberService,
          useValue: mockMemberService,
        },
      ],
    }).compile();

    controller = module.get<MemberController>(MemberController);
  });

  it('회원가입을 진행한다', () => {
    expect(
      controller.create(new CreateMemberRequest('hello@gmail.com', 'adsf')),
    ).toBeDefined();
  });
});
