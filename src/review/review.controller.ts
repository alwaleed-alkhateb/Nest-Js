import { Controller, Get } from '@nestjs/common';

@Controller()
export class ReviewController {
  /**
   * getAllReview
   */
  @Get('/api/review')
  public getAllReview() {
    return [{ id: 2, text: 'good books ' }];
  }
}
