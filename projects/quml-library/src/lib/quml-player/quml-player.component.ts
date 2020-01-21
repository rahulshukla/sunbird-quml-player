import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { Direction } from 'ngx-bootstrap/carousel/carousel.component';


@Component({
  selector: 'lib-quml-player',
  templateUrl: './quml-player.component.html',
  styleUrls: ['./quml-player.component.css']
})
export class QumlPlayerComponent implements OnInit {
  @Input() questions: any;
  @ViewChild('car') car: CarouselComponent;
  slides: any;
  slideInterval: number;
  showIndicator: Boolean;
  noWrapSlides: Boolean;

  constructor() {
  }

  ngOnInit() {
    this.slideInterval = 0;
    this.showIndicator = false;
    this.noWrapSlides = false;

  }

  nextSlide() {
    this.car.move(Direction.NEXT);
  }

  prevSlide() {
    this.car.move(Direction.PREV);
  }

  addSlide() {
    this.slides.push(this.questions.length);
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
